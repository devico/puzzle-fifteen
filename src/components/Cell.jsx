import React from 'react'
import PropTypes from 'prop-types'

function Cell(props) {
  return  <div className={`${props.number ? 'cell' : 'empty-cell'}`}>
            <span className="cell-number">{props.number}</span>
          </div>
}

Cell.propTypes = {
    number: PropTypes.number
}

export default Cell