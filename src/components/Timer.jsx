import React from 'react'
import PT from 'prop-types'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      elapsed: 0,
      lastTick: 0
    }

    this.tick = this.tick.bind(this)
  }

    componentDidMount() {
      this.interval = setInterval(this.tick, 1000)
    }

    componentWillReceiveProps(nextprops) {
      this.setState({
        lastTick: Date.now()
      })
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    tick() {
      if(this.props.statusStartGame) {
        let now = Date.now()
        let diff = now - this.state.lastTick

        this.setState({
          elapsed: this.state.elapsed + diff,
          lastTick: now
        })
      }
    }

    format(ms) {
      let totalSeconds = Math.floor(ms / 1000)
      let minutes = Math.floor(totalSeconds / 60)
      let seconds = totalSeconds % 60

      return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
    }

  render() {
    let time = this.format(this.state.elapsed)
    return <section className="timer">
              <div className="timer-time">{time}</div>
            </section>
  }
}

Timer.propTypes = {
    statusStartGame: PT.bool.isRequired
}
