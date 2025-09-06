import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}


const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = props.good - props.bad / total
  const positive = props.good / total * 100

  if (total === 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>  
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}


const StatisticLine = (props) => {
  if (props.text == "positive") {
    return (
      <tr><td>{props.text}</td><td>{props.value.toFixed(1)}%</td></tr>
    )
  }

  if (props.text == "average") {
    return (
      <tr><td>{props.text} </td><td>{props.value.toFixed(1)}</td></tr>
    )
  }
  
  return (
    <tr><td>{props.text} </td><td>{props.value}</td></tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    console.log('neutral value is now', neutral+1)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    console.log('bad value is now', bad+1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
