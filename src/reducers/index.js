'use strict';

const initialState = {
  guesses: [],
  gameNum: 5,
  currentGuess: 10,
  feedback: ['Make your guess!', 'You guessed Lower', 'You guessed Higher', 'You win!'],
  currentFeedback: 'Make your guess!'
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'CHANGEGUESS') {
    return Object.assign({}, state, {
      currentGuess: action.guess
    })
  } else if (action.type === 'UPDATEGUESSARRAY') {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    })
  } else if (action.type === 'UPDATEFEEDBACK') {
    if (action.feedback > 3 || action.feedback < 0) {
      return new Error('Error! Feedback can not be a number other than 0 to 3')
    }
    return Object.assign({}, state, {
      currentFeedback: state.feedback[action.feedback]
    })
  } else if (action.type === 'PICKSTARTINGRANDOMNUM') {
    return Object.assign({}, state, {
        gameNum: action.randomNum
    })
  }

  return state;
}

export default rootReducer;