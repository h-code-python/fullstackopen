import { useState } from 'react'


 const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}


const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}





const App = () => {
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
   
  const [selected, setSelected] = useState(0)
  const [topvote, setTopVote] = useState(anecdotes.length+1)

  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

 
   
  const voteforQuote = () => {  
    const copy = [ ...votes ]
    
    copy[selected] += 1
    setVotes(copy)
    let checkhighest = 0
    let highestref = 0
    
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > checkhighest) {
        checkhighest = copy[i]
        highestref = i
      }
    }
    setTopVote(highestref)
  }


  const Returnanecdote = (props) => {
    if (props.num === anecdotes.length+1) {
      return(
        <div>
          No votes yet
        </div>
      )
    }
  return(
  <div>
    {anecdotes[props.num]}
  </div>
  )
  }


  return (
    <div>
      <Header text="Anecodote of the day" />
      <Returnanecdote num={selected}/>
      <Button onClick={voteforQuote} quote={selected} text="vote" />
      <Button onClick={nextClick} text="next anecdote" />

      <Header text="Anecdote with the most votes" />
      <Returnanecdote num={topvote}/>

    </div>
  )
}

export default App