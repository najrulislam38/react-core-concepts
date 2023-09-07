import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ['Rubel', 'Manna', 'Joshim', 'Alomgir', 'Razzak'];
  const singers =[
    {name: "Emran Mahabul", age: 32},
    {name: "Wahid", age: 36},
    {name: "Tahsan", age: 38},
    {name: "Arfin Rumi", age: 30}
  ];
  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Mathematics', price: 130},
    {id: 3, name: 'Chemistry', price: 120},
    {id: 4, name: 'Biology', price: 150},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer info={singer}></Singer>)
      }
      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo 
      task="Learn React" 
      isDone={true}></Todo>
      <Todo 
      task="Explore core concepts" 
      isDone={false}></Todo>
      <Todo 
      task="Try react JSX" 
      isDone={true}></Todo> */}
      {/* <Device name ="Mobile" price="17"></Device>
      <Device name="Laptop" price="55"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade='4' score='99' ></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This device: {props.name} and price: {props.price}
    </h2>
  );
}

function Person() {
  const person = {
    name: "Najrul Islam",
    age: 23,
  };
  return (
    <h3>
      I am a {person.name} and I am {person.age} years old.{" "}
    </h3>
  );
}

const { grade, score } = { grade: "4", score: "99" };

function Student({ grade = 1, score = 0 }) {
  const name = "Md. Najrul Islam";
  const age = 23;
  return (
    <div className="student">
      <h3>This is a student.</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>
  );
}

export default App;
