import React from 'react';
import ReactDOM from 'react-dom';
import "./functionBased/components/App.css";
// import App from './App';
import TodoContainer from "./functionBased/components/TodoContainer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

