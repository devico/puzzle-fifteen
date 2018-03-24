import React from 'react'
import PT from 'prop-types' // eslint-disable-line no-unused-vars

import * as R from 'ramda'
import {solvedBoard} from './constants'
import {shuffleBoard, areSwappable, swap, isGameEnded, formatTime} from './helpers'
import Cell from './components/Cell' // eslint-disable-line no-unused-vars
import Stats from './components/Stats' // eslint-disable-line no-unused-vars

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: solvedBoard,
      gameStarted: false,
      gameEnded: false,
      gamePaused: false,
      counter: 0,
      counterSteps: 0
    }

    this.handleStartGame = this.handleStartGame.bind(this)
    this.handleEndGame = this.handleEndGame.bind(this)
    this.handleSwapCells = this.handleSwapCells.bind(this)
    this.handlePauseGame = this.handlePauseGame.bind(this)
    this.tick = this.tick.bind(this);
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

  handlePauseGame() {
    this.setState({
      gamePaused: !this.state.gamePaused

    })
  }

  handleSwapCells(i) {
    const {board, gameStarted, gameEnded} = this.state

    if (!gameStarted || gameEnded) {
      return
    }
    const i2 = R.indexOf(null, board)
    if (areSwappable(i, i2)) {
      const newBoard = swap(board, i, i2)
      const counterSteps = this.state.counterSteps + 1
      if (isGameEnded(newBoard)) {
        this.setState({
          board: newBoard,
          gameEnded: true,
          counterSteps
        }, () => {
          setTimeout(() => {
            this.handleEndGame()
          }, 2000)
        })
      } else {
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
    if (this.state.gameStarted) {
      const counter = this.state.gamePaused ? this.state.counter : this.state.counter + 1
      this.setState({counter})
    }
  }

  render() {
    return <main>
      <header>
        <h1>Пятнашки</h1>
      </header>

      <Stats
        time={formatTime(this.state.counter)}
        steps={this.state.counterSteps}
        gameEnded={this.state.gameEnded}
      />

      <div className="puzzle-cells">
        {this.state.board.map((n, i) => <Cell
          key={i}
          number={n}
          onClick={() => this.handleSwapCells(i)}
          gameStarted={this.state.gameStarted}
          gameEnded={this.state.gameEnded}
          gamePaused={this.state.gamePaused}
        />
        )}
      </div>

      <div className="manage-box">
        <div>
          {this.state.gameStarted
            ? <div className="manage-box-game">
              <button onClick={this.handleEndGame}>Выйти</button>
              <button onClick={this.handlePauseGame}>
                {`${this.state.gamePaused ? 'На паузе' : 'Пауза'}`}
              </button>
            </div>
            : <button onClick={this.handleStartGame}>Начать</button>
          }
        </div>
      </div>
    </main>
  }
}
