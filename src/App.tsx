import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect, useDispatch, useSelector} from 'react-redux';
import {IStore} from "./redux/rootReducer";
import {addNumber, decrement, increment, removeNumber} from "./constants";
import {Counter} from "./counter";

export const App=()=> {
  const counter = useSelector((state: IStore) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Счетчик <strong>{counter}</strong></h1>
      <h1>aasdasdas</h1>
      <hr/>
      <div className="Actions">
        <button onClick={()=>dispatch({
          type: increment,
        })}>Добавить 1</button>
        <button onClick={()=>dispatch({
          type:decrement,
        })}>Вычесть 1</button>
      </div>
      <div className="Actions">
        <button onClick={(number)=>dispatch({
          type: addNumber, payload:5
        })}>Добавить </button>
        <button onClick={(number)=>dispatch({
          type:removeNumber,payload:5
        })}>Вычесть </button>
      </div>
      <Counter/>
    </div>
  );
}





