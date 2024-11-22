import { useState } from 'react'


const Header = ({header}) => {
  // the name of parameters must consistent with name defined in component rendering
  return (
    <h1>{header}</h1>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value, suffix}) => {
  const text_str = text + ' ' + value + suffix
  return (
    <tr><td>{text_str}</td></tr>
  )
  
}

const Statistics = ({good, neutral, bad}) => {
  const total = good +  neutral + bad
  if (!total){
    return (
    <>
      <Header header='statistics'></Header>
      <p>No feedback given</p>
    </>)
  }

  const average = (good * 1 + neutral * 0 + bad * (-1)) / total
  const positive = good * 100 / total
  return (
    <>
      <Header header='statistics'></Header>
      <table>
        <tbody>
            <StatisticLine text='good' value={good} suffix={''} />
            <StatisticLine text='neutral' value={neutral} suffix={''} />
            <StatisticLine text='bad' value={bad} suffix={''} />
            <StatisticLine text='all' value={total} suffix={''} />
            <StatisticLine text='average' value={average} suffix={''} />
            <StatisticLine text='positive' value={positive} suffix={'%'} />
        </tbody>
      </table>      
    </>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="App">
      <Header header='give feedback'></Header>
      <Button text='good' onClick={() => setGood(good+1)}></Button>
      <Button text='neutral' onClick={() => setNeutral(neutral+1)}></Button>
      <Button text='bad' onClick={() => setBad(bad+1)}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
}

export default App;
