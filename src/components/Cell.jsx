import React from 'react'
import PT from 'prop-types'

export default function Cell(props) {
  let {number, onClick, gameStarted, gameEnded} = props
  return  <div  
            className={`${gameStarted 
                           ? gameEnded 
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
