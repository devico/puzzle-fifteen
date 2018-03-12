import * as R from 'ramda'
import React from 'react'
import PT from 'prop-types'
import {solvedBoard} from "./constants"
import {shuffleBoard, areSwappable, swap, isGameEnded} from './helpers'
import Cell from './components/Cell'

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: solvedBoard,
      gameStarted: false,
      gameEnded: false,
    }

    this.handleStartGame = this.handleStartGame.bind(this)
    this.handleEndGame = this.handleEndGame.bind(this)
    this.handleSwapCells = this.handleSwapCells.bind(this)
    this.handleFastStartGame = this.handleFastStartGame.bind(this)
  }

  handleEndGame() {
    this.setState({
      board: solvedBoard,
      gameStarted: false,
      gameEnded: false,
    })
  }

  handleStartGame() {
    this.setState({
      board: shuffleBoard(this.state.board),
      gameStarted: true,
      gameEnded: false,
    })
  }

  handleFastStartGame() {
    this.setState({
      board: swap(solvedBoard, 14, 15),
      gameStarted: true,
      gameEnded: false,
    })
  }

  handleSwapCells(i) {
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
          gameEnded: true,
        }, () => {
          setTimeout(() => {
            alert('You win!')
            this.handleEndGame()
          }, 2000)
        })
      } else {
        this.setState({
          board: newBoard
        })
      }
    }
  }

  render() {
    return  <main>
      <header>
        <h1>Пятнашки</h1>
      </header>

      <div className="puzzle-cells">
        {this.state.board.map((n, i) =>
          <Cell key={i} number={n} onClick={() => this.handleSwapCells(i)}/>
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
