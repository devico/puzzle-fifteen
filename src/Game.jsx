import React from 'react'
import ReactDOM from 'react-dom'
import PT from 'prop-types'

import Cell from './components/Cell'
import Button from './components/Button'

let startBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            board: this.props.startBoard,
            startGame: false
        }

        this.handleShuffleBoard = this.handleShuffleBoard.bind(this)
        this.handleStartBoard = this.handleStartBoard.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({ startGame: !this.state.startGame })
        this.state.startGame ? this.handleStartBoard() : this.handleShuffleBoard()
    }

    handleStartBoard() {
        this.setState({
            board: this.props.startBoard,
            startGame: false
        })

    }

    handleShuffleBoard() {
        this.setState({
            board: this.shuffleBoard(this.state.board), 
            startGame: true
        })
        console.log(this.state.startGame)
    }

    shuffleBoard(board) {
        let random = [...board]
        for (let i = random.length - 1; i > 0; i--) {
            let index = Math.floor(Math.random() * (i + 1));
            let x = random[index];
            random[index] = random[i];
            random[i] = x;
        }

        return random
    }

    render() {
        return  <main>
                    <header>
                        <h1>Пятнашки</h1>
                    </header>

                    <div className="puzzle-cells">
                        {this.state.board.map( n => 
                            <Cell key={n} number={n} />
                        )}
                    </div>
                    
                    <form className="game-form" onSubmit={this.handleSubmit}>
                        <Button 
                            status={this.state.startGame}
                            type="submit"
                        ></Button>
                    </form>
                </main>
    }
}

Game.propTypes = {
    startBoard: PT.arrayOf(PT.shape(Cell.propTypes)).isRequired
}

ReactDOM.render(<Game startBoard={startBoard} />, document.getElementById('root'))