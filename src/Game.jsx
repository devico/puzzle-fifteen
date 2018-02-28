import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

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
            <div>
                <h1>Fifteen Puzzle</h1>
            </div>
        )
    }
}

Game.propTypes = {
    startBoard: PropTypes.array.isRequired
}

ReactDOM.render(<Game startBoard={startBoard}/>, document.getElementById('root'))