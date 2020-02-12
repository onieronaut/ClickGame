import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container';
import Portrait from './components/Portrait/Portrait';
import Row from './components/Row/Row';
import portraits from "./portraits.json";
import Col from "./components/Col/Col"
import Alert from './components/Alert/Alert'

class App extends Component {

  state = {
    portraits,
    correct: 0,
    topScore: 0,
    guessed: [],
    guessAlert: null,
    startGame: true
  };

  
  checkGuess = guess => {

    let wrong = false;
    
    this.state.guessed.forEach(guesses => {
      if (guesses === guess)
        wrong = true;
    });

    if (wrong) {
      this.wrongGuess();
    } else {
      this.correctGuess(guess);
    };

  };

  wrongGuess = () => {

    this.setState({
      correct: 0,
      guessed: [],
      guessAlert: false,
      startGame: false
    });

    this.shufflePortraits(portraits);

  };

  correctGuess = guess => {
    this.setState(
      {
        correct: this.state.correct + 1,
        guessed: this.state.guessed.concat(guess),
        guessAlert: true,
        startGame: false
      }
    );

    this.shufflePortraits(portraits);

    if (this.state.correct >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 })
    }
  }

  shufflePortraits = array => {

    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {

    return (
      <div>

        <Navbar score={this.state.correct} topScore={this.state.topScore} />
        <Alert start={this.state.startGame} type={ this.state.guessAlert ? "success" : "danger"}>{this.state.guessAlert ? "You guessed right":"You guessed wrong"}</Alert>
        <Container>
          <Row>
            {
              this.state.portraits.map(portrait => (
                <Col size="sm-3" key={portrait.id}>
                  <Portrait
                    id={portrait.id}
                    image={portrait.image}
                    onClick={() => this.checkGuess(portrait.id)} />
                </Col>
              ))
            }
          </Row>
        </Container>

      </div>
    );
  }

};

export default App;
