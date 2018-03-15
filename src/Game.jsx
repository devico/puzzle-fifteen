import React from 'react'
import PT from 'prop-types'

import * as R from 'ramda'
import {solvedBoard} from "./constants"
import { shuffleBoard, areSwappable, swap, isGameEnded, formatTime } from './helpers'
import Cell from './components/Cell'
import Stats from './components/Stats'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: solvedBoard,
      gameStarted: false,
      gameEnded: false,
      counter: 0,
      counterSteps: 0
    }

    this.handleStartGame = this.handleStartGame.bind(this)
    this.handleEndGame = this.handleEndGame.bind(this)
    this.handleSwapCells = this.handleSwapCells.bind(this)
    this.handleFastStartGame = this.handleFastStartGame.bind(this)
    this.tick = this.tick.bind(this)
  }

  handleEndGame() {
    this.setState({
      board: solvedBoard,
      gameStarted: false,
      gameEnded: false,
      counter: 0,
      counterSteps: 0
    })
  }

  handleStartGame() {
    this.setState({
      board: shuffleBoard(this.state.board), 
      gameStarted: true,
      gameEnded: false
    })
  }

  handleFastStartGame() {
    this.setState({
      board: swap(solvedBoard, 14, 15),
      gameStarted: true,
      gameEnded: false
    })
  }

  handleSwapCells(i){
    let {board, gameStarted, gameEnded} = this.state

    if (!gameStarted || gameEnded) {
      return
    }
    let i2 = R.indexOf(null, board)
    if (areSwappable(i, i2)) {
      let newBoard = swap(board, i, i2)
      if (isGameEnded(newBoard)) {
        this.setState({
          board: newBoard,
          gameEnded: true
        }, () => {
          setTimeout(() => {
            alert('You win!')
            this.handleEndGame()
          }, 2000)
        })
      } else {
        let counterSteps = this.state.counterSteps + 1
        this.setState({
          board: newBoard,
          counterSteps
        })
      }
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  tick() {
    if(this.state.gameStarted) {
      let counter = this.state.counter + 1
      this.setState({ counter })
    }
  }

  render() {
    return  <main>
      <header>
        <h1>Пятнашки</h1>
      </header>

      <Stats time={formatTime(this.state.counter)} steps={this.state.counterSteps}/>

      <div className="puzzle-cells">
        {this.state.board.map( (n, i) => <Cell 
                                           key={i} 
                                           number={n} 
                                           onClick={() => this.handleSwapCells(i)} 
                                           status={this.state.gameStarted}
                                         />
        )}
      </div>

      <div className="manage-box">
        <div>
          {this.state.gameStarted
            ? <button onClick={this.handleEndGame}>Выйти</button>
            : <button onClick={this.handleStartGame}>Начать</button>
          }
        </div>
        <div>
          <button onClick={this.handleFastStartGame}>За 1 шаг</button>
        </div>
        
      </div>  
    </main>
  }
}
