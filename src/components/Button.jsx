import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return  <button onClick={props.onShuffle}>
                {props.title}
            </button>
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onShuffle: PropTypes.func.isRequired
}

export default Button