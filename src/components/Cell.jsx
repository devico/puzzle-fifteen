import React from 'react'
import PT from 'prop-types'

export default function Cell(props) {
  let {number, onClick, status} = props
  return  <button 
            type="button" 
            className={`${status 
                           ? number ? 'cell' : 'empty-cell'
                           : number ? 'cell-inactive' : 'empty-cell'
                         }`} 
            onClick={onClick}
          >
            <span className="cell-number">{number}</span>
          </button>
}

Cell.propTypes = {
  number: PT.number,
  onClick: PT.func.isRequired,
  status: PT.bool.isRequired
}
