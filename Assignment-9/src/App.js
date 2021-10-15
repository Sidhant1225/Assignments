import React, { useState } from 'react';
import './App.css';
import Todolist from './todolist';

const App = () => {
  const [input , setinput] = useState("");
  const [list , setlist] = useState([]);

  const items = (e) => {
    setinput(e.target.value);
  }
  const updatelist =()=>{
    setlist((oldinput)=>{
      return [...oldinput,input];
    });
    };
  return (
    <>
    <div className='main div'>
      <div className='center div'>
        <h1>TODO LIST</h1>
        <br/>
        <input type='text' placeholder='Add New Text' onChange={items}/>
        <span><button className='btn' onClick={updatelist}><i class="fas fa-plus-circle"></i></button></span>
        <ul>
          {list.map((value)=>{
            
           return <Todolist text={value}/>;
             
          })}
        </ul>
          </div>
    </div>
    
    </>
  );
}

export default App;
