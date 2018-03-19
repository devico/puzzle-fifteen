import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

export default function Cell(props) {
  const {number, onClick, gameStarted, gameEnded} = props
  return <div
    className={`${gameStarted // eslint-disable-line no-nested-ternary
      ? gameEnded // eslint-disable-line no-nested-ternary
        ? number ? 'cell-win' : 'empty-cell'
        : number ? 'cell' : 'empty-cell'
      : number ? 'cell-inactive' : 'empty-cell'
    }`}
    onClick={onClick}
  >
    <div className="cell-number">{number}</div>
  </div>
}

Cell.propTypes = {
  number: PT.number,
  onClick: PT.func.isRequired,
  gameStarted: PT.bool.isRequired,
  gameEnded: PT.bool.isRequired
}
