import React from 'react'
import PropTypes from 'prop-types'

function Cell(props) {
  return  <button 
            type="button" 
            className={`${props.number ? 'cell' : 'empty-cell'}`} 
            onClick={() => props.onClick(props.id)}
        
          >
            <span className="cell-number">{props.number}</span>
          </button>
}

Cell.propTypes = {
  id: PropTypes.number,
  number: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

export default Cell