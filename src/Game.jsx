import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Cell from './components/Cell'
import Button from './components/Button'

let startBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            board: this.props.startBoard
        }

        this.handleShuffle = this.handleShuffle.bind(this)
    }

    handleShuffle(event) {
        event.preventDefault()
        let random = [...this.state.board]
        for (let i = random.length - 1; i > 0; i--) {
            let index = Math.floor(Math.random() * (i + 1));
            let x = random[index];
            random[index] = random[i];
            random[i] = x;
        }

        this.setState({ board: random })
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
                    
                    <form className="game-form">
                        <Button title="Начать" type="submit" onShuffle={this.handleShuffle}></Button>
                    </form>
                </main>
    }
}

Game.propTypes = {
    startBoard: PropTypes.array.isRequired
}

ReactDOM.render(<Game startBoard={startBoard}/>, document.getElementById('root'))