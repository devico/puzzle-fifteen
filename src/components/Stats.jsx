import React from 'react' // eslint-disable-line no-unused-vars
import PT from 'prop-types'

import Timer from './Timer' // eslint-disable-line no-unused-vars

export default function Stats(props) {
  const {steps, time} = props
  return <div className="stats-box">
    <div className="stats-message">{props.gameEnded ? 'Вы победили!!!' : ''}</div>
    <div className="stats-data">
      <div className="stats-steps">{`Ходов: ${steps}`}</div>
      <Timer time={time} />
    </div>
  </div>
}

Stats.propTypes = {
  time: PT.string.isRequired,
  steps: PT.number.isRequired,
  gameEnded: PT.bool.isRequired
}
