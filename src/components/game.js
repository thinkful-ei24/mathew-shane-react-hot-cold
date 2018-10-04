import React, {Component} from 'react';


import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import GuessForm from './guess-form';
export default class Game extends Component {
   constructor(props) {
       super(props)

       function random() {
        return Math.floor(Math.random() * 100) + 1;
    }

       this.state = {
           guesses: [],
           gameNum: random(),
           currentGuess: 10,
           feedback: ['Make your guess!', 'You guessed Lower', 'You guessed Higher', 'You win!'],
           currentFeedback: 'Make your guess!'
       }
   }




   handleSubmit(e) {

    let message;
    if(this.state.currentGuess < this.state.gameNum) { message = this.state.feedback[1] }
    else if(this.state.currentGuess > this.state.gameNum) { message = this.state.feedback[2] }
    else if(this.state.currentGuess === this.state.gameNum) { message = this.state.feedback[3] };

    let guessArr = [...this.state.guesses, this.state.currentGuess];
    console.log(message);
    this.setState({
        guesses: guessArr,
        currentFeedback: message
    })
   }

   handleWin() {
       if(this.state.currentGuess === this.state.gameNum) {
           this.setState({currentFeedback: this.state.feedback[4]})}
   }

   handleChange(e) {
       this.setState({currentGuess: e.target.value})
   }

   render() {
    return (
        <div>
            <Header />
            <GuessSection feedback={this.state.currentFeedback} />
            <GuessForm handleGuessClick={e => this.handleSubmit(e)} handleGuessChange={e => this.handleChange(e)} />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
   }

}

