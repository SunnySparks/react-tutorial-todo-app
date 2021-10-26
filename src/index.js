import React from 'react';
import ReactDOM from 'react-dom';
import "./components/App.css"
// import App from './App';
import TodoContainer from "./components/TodoContainer"

//component file

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)

