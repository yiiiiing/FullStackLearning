import React from 'react';
const Header = (props) => {
  // may have issues when use 'properties' that component receive
  // so logging in console is a good way to debug
  console.log(props)
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
  props.data.forEach(ele => {
    items.push(<Part key={ele.name} part={ele.name} value={ele.exercises}/>)
  });

  return(
    <>{items}</>
  )
}

const Total = (props) => {
  const total_number = props.data.reduce((total, part) => { return total + part.exercises}, 0)
  return(
    <p>
      Number of exercises {total_number}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total data={course.parts} />
    </div>
  )
}
export default App;
