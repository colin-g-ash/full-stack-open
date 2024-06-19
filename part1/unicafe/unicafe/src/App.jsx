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
      <Tallies text="good" tally={good}/>
      <Tallies text="neutral" tally={neutral}/>
      <Tallies text="bad" tally={bad}/>
      <Tallies text="total" tally={total}/>
      <Tallies text="average" tally={average}/>
      <Tallies text="postive" tally={positive}/>
    </div>
  )
}

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Tallies = (props) => <p>{props.text} {props.tally}</p>

export default App
