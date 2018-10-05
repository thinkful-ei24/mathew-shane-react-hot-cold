export const CHANGEGUESS = 'CHANGEGUESS';
export const UPDATEGUESSARRAY = 'UPDATEGUESSARRAY';
export const UPDATEFEEDBACK = 'UPDATEFEEDBACK';
export const PICKSTARTINGRANDOMNUM = 'PICKSTARTINGRANDOMNUM';

export const changeGuess = (guess) => {
  return {
    type: CHANGEGUESS,
    guess
  }
}

export const updateGuessArray = (guess) => {
  return {
    type: UPDATEGUESSARRAY,
    guess
  }
}

export const updateFeedback = (feedback) => {
  return {
    type: UPDATEFEEDBACK,
    feedback
  }
}

export const pickStartingRandomNum = (randomNum) => {
  return {
    type: PICKSTARTINGRANDOMNUM,
    randomNum
  }
}

//action
// {type: 'something unique', payload}

//HandleSubmit Action
// guesses: guessArr,
// currentFeedback: message
