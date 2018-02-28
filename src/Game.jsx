import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Cell from './components/Cell.jsx'

let startBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            board: this.props.startBoard
        }
    }

    render() {
        return (
            <main>
                <header>
                    <h1>Fifteen Puzzle</h1>
                </header>

                <div className="puzzle-cells">
                    {this.state.board.map((cell, id) => 
                        <Cell key={id} number={cell} />
                    )}
                </div>
            </main> 
            
        )
    }
}

Game.propTypes = {
    startBoard: PropTypes.array.isRequired
}

ReactDOM.render(<Game startBoard={startBoard}/>, document.getElementById('root'))