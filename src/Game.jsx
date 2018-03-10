import React from 'react'
import ReactDOM from 'react-dom'
import PT from 'prop-types'

import Cell from './components/Cell'
import {shuffleBoard, areSwappable, swap} from './helper'

const R = require('ramda')
let startBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: this.props.startBoard,
      gameStarted: false
    }

    this.handleStartGame = this.handleStartGame.bind(this)
    this.handleEndGame = this.handleEndGame.bind(this)
    this.handleSwapCells = this.handleSwapCells.bind(this)
  }

  handleEndGame() {
    this.setState({
      board: this.props.startBoard,
      gameStarted: false
    })
  }

  handleStartGame() {
    this.setState({
      board: shuffleBoard(this.state.board), 
      gameStarted: true
    })
  }

  handleSwapCells(i){
    let {board} = this.state
    let i2 = R.indexOf(null, board)
    if (areSwappable(i, i2)) {
      this.setState({
        board: swap(board, i, i2)
      })
    }
  }

  render() {
    return  <main>
      <header>
        <h1>Пятнашки</h1>
      </header>

      <div className="puzzle-cells">
        {this.state.board.map( (n, i) => 
          <Cell key={i} id={i} number={n} onClick={this.handleSwapCells}/>
        )}
      </div>

      <div className="manage-box">
        {this.state.gameStarted
          ? <button onClick={this.handleEndGame}>Выйти</button>
          : <button onClick={this.handleStartGame}>Начать</button>
        }
      </div>  
    </main>
  }
}

Game.propTypes = {
  startBoard: PT.array.isRequired
}

ReactDOM.render(<Game startBoard={startBoard} />, document.getElementById('root'))