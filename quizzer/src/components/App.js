import React, { Component } from 'react';
import axios from 'axios'
import Quizzes from './Quizzes'
import '../App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount() {
    this.handleQuizzes()
  }



  handleQuizzes() {
   axios.get('/quizzes', {})
     .then((response) => {
       this.setState({ quizzes: response.data.quizzes })
     })
     .catch(() => {
       console.log('request failed')
     })
   }



  render() {
    return (
      <div className="App">
        <Quizzes
          quizzes={this.state.quizzes}
        />
      </div>
    );
  }
}

export default App;
