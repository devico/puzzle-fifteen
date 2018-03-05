import React from 'react'
import ReactDOM from 'react-dom'
import PT from 'prop-types'

import Cell from './components/Cell'

let helper = require('./helper')
let startBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]
let cellsSwap = {
  "0": [1, 4],
  "1": [0, 2, 5],
  "2": [1, 3, 6],
  "3": [2, 7],
  "4": [0, 5, 8],
  "5": [1, 4, 6, 9],
  "6": [2, 5, 7, 10],
  "7": [3, 6, 11],
  "8": [4, 9, 12],
  "9": [5, 8, 10, 13],
  "10": [6, 9, 11, 14],
  "11": [7, 10, 15],
  "12": [8, 13],
  "13": [9, 12, 14],
  "14": [10, 13, 15],
  "15": [11, 14]
}

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
      board: helper.shuffleBoard(this.state.board), 
      gameStarted: true
    })
  }

  handleSwapCells(id) {
    let emptyCellId = this.state.board.indexOf(null)
    let arraySwapCells = cellsSwap[emptyCellId]

    let clickedCell = this.state.board[id]
    let board = this.state.board.map(cell => {
      if(arraySwapCells.indexOf(id) != -1) {
        
        this.state.board[emptyCellId] = clickedCell
        this.state.board[id] = null
      }
      return cell
    })
    this.setState({ board })
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