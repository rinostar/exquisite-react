import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      ready: false,
    }
  }

  addLine = (line) =>{
    const lines = this.state.lines;
    lines.push(line);

    this.setState({ lines });
  }

  finalSubmit = () => {
    this.setState({ ready: true })
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        { this.state.lines.length > 0 && !this.state.ready ?
          <RecentSubmission recentLine={ this.state.lines[this.state.lines.length - 1] } />
          :
          ''
        }

        { this.state.ready?
          ''
          :
          <PlayerSubmissionForm addLineCallback={this.addLine} id={ (this.state.lines.length + 1) }/>
        }
        
        <FinalPoem poem={ this.state.lines } ready={ this.state.ready } onFinalSubmit={ this.finalSubmit }/>

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
]

export default Game;
