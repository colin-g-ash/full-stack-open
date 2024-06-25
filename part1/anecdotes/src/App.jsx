import { useState } from 'react'

const App = () => {

  const nextAnecdote = () => {
    let random = Math.floor(Math.random() * 8)
    setSelected(random)
  }

  const voteFor = () => {
    const copy = {...votes}
    copy[selected] += 1
    setVotes(copy)
    for (let i = 0; i < 8; i++) {
      if (copy[i] > votes[max]) {
        setMax(i)
        console.log("max is" + max) 
      }
    }
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const points = new Array(8).fill(0)
  const [votes, setVotes] = useState(points)
  const [selected, setSelected] = useState(0)
  const [max, setMax] = useState(0)

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      <Body body={anecdotes[selected]}/>
      <Votes votesTally={votes[selected]}/>
      <Button onClick={voteFor} text={"vote"}/>
      <Button onClick={nextAnecdote} text={"next anecdote"}/>
      <Heading text="Anecdote with the most votes"/>
      <Body body={anecdotes[max]}/>
      <Body/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Votes = (props) => {
  return (
    <div>has {props.votesTally} votes</div>
  )
}

const Heading = (props) => <h1>{props.text}</h1>

const Body = (props) => <p>{props.body}</p> 

export default App