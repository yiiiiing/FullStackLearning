import React from 'react';
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return(
    <p>{props.part} {props.value}</p>
  )
}

const Content = (props) => {
  let items = [];
  for (var k in props.data){
    items.push(<Part key={k} part={k} value={props.data[k]}/>)
  }  
  return(
    <>{items}</>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exercises {props.data}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const data = {
    'Fundamentals of React': 10,
    'Using props to pass data': 7,
    'State of a component': 14
  }
  const total_number = Object.values(data).reduce((a, b) => a + b, 0)  
  return (
    <div>
      <Header course={course} />
      <Content data={data} />
      <Total data={total_number} />
    </div>
  )
}
export default App;
