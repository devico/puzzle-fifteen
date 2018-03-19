import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

export default function Timer(props) {
  return <section className="stats-time">
    <div>{`Время: ${props.time}`}</div>
  </section>
}

Timer.propTypes = {
  time: PT.string.isRequired
}
