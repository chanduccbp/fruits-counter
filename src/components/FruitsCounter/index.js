// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onEatingMango = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
  }

  onEatingBanana = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <h1>
          Bob ate <span className="counter">{count1}</span> mangoes{' '}
          <span className="counter">{count2}</span> bananas
        </h1>
        <div className="fcontainer">
          <div className="fruit">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <button className="butt" onClick={this.onEatingMango} type="button">
              Eat Mango
            </button>
          </div>
          <div className="fruit">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
            <button
              className="butt"
              onClick={this.onEatingBanana}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
