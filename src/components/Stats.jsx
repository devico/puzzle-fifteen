import React from 'react'
import PT from 'prop-types'

import Timer from './Timer'

export default function Stats(props) {
  let {steps, time} = props  
  return <section className="stats-box">
            <section>
                <div>{`Ходов: ${steps}`}</div>
            </section>
            <Timer time={time} />
         </section>
}

Stats.propTypes = {
  time: PT.string.isRequired,
  steps: PT.number.isRequired
}
