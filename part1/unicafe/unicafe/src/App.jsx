import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage((updatedGood - bad)/updatedTotal)
    setPositive((updatedGood/updatedTotal)*100 + " %")
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage((good - bad)/updatedTotal)
    setPositive((good/updatedTotal)*100 + " %")
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setAverage((good - updatedBad)/updatedTotal)
    setPositive((good/updatedTotal)*100 + " %")
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text="statistics"/>
      <Statistics text="No feedback given" good={good} bad={bad} neutral={neutral} positive={positive} total={total} average={average}/>
    </div>
  )
}

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  console.log(props) 
  if (props.total != 0) return (
    <div>
      <table>
        <tbody>
            <StatisticsLine text="good" tally={props.good}/>
            <StatisticsLine text="neutral" tally={props.neutral}/>
            <StatisticsLine text="bad" tally={props.bad}/>
            <StatisticsLine text="all" tally={props.total}/>
            <StatisticsLine text="average" tally={props.average}/>
            <StatisticsLine text="postive" tally={props.positive}/>
        </tbody>
      </table> 
    </div>
  )
  return (
    <div>{props.text}</div>
  )
}

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.tally}</td>
    </tr>
  ) 
}


export default App
