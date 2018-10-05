import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store';
import { changeGuess, updateGuessArray, updateFeedback, pickStartingRandomNum } from './actions/actions'

console.log(store.getState());
store.dispatch(changeGuess(12))
console.log(store.getState())
store.dispatch(updateGuessArray(20))
console.log(store.getState())
store.dispatch(updateGuessArray(25))
console.log(store.getState())
store.dispatch(updateGuessArray(32))
console.log(store.getState())
store.dispatch(updateFeedback(2))
console.log(store.getState())

const rand = Math.floor(Math.random() * 100) + 1;
console.log(rand)
store.dispatch(pickStartingRandomNum(rand))
console.log(store.getState())

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);