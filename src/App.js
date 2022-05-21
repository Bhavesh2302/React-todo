import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">

<Todo/>
    
    </div>
  );
}

export default App;
