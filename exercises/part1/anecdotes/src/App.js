import { useState } from 'react'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  // Math.random return the value between 0 and 1
  return Math.floor(Math.random() * (max - min) + min); 
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const Header = ({header}) => {
  // the name of parameters must consistent with name defined in component rendering
  return (
    <h1>{header}</h1>
  )
}

const DisplayAnecdote = ({text, num_votes}) => {
  return (
    <>
      <p>{text}</p>
      <p>has {num_votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const min_length = 0
  const max_length = anecdotes.length
  const [votes, setVotes] = useState(Array(max_length).fill(0))
  console.log(votes)
  const selected_most_votes = votes.indexOf(Math.max(...votes))
  console.log(selected_most_votes)

  return (
    <div>
      <Header header='Anecdote of the day' />
      <DisplayAnecdote text={anecdotes[selected]} num_votes={votes[selected]} />
      <Button text='votes' onClick={() => {
        const votes_copy = [...votes]
        votes_copy[selected] += 1
        setVotes(votes_copy)
        }} />
      <Button text='next anecdote' onClick={() => {
        let random_idx = getRandomInt(min_length, max_length)
        setSelected(random_idx)
        }} />
      <Header header='Anecdote with the most votes'></Header>
      <DisplayAnecdote text={anecdotes[selected_most_votes]} num_votes={votes[selected_most_votes]} />
    </div>
  )
}

export default App
