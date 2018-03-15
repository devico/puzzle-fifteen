import React from 'react'
import PT from 'prop-types'

export default function Cell(props) {
  let {number, onClick} = props
  return  <button 
            type="button" 
            className={`${number ? 'cell' : 'empty-cell'}`} 
            onClick={onClick}
          >
            <span className="cell-number">{number}</span>
          </button>
}

Cell.propTypes = {
  number: PT.number,
  onClick: PT.func.isRequired
}
