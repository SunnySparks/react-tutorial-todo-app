import React from 'react';
import ReactDOM from 'react-dom';
import "./functionBased/components/App.css";
// import App from './App';
import TodoContainer from "./functionBased/components/TodoContainer";
//component file

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)

