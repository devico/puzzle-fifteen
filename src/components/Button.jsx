import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return  <button>
                {props.status ? 'Выйти' : 'Начать'}
            </button>
}

Button.propTypes = {
    status: PropTypes.bool.isRequired
}

export default Button