import React, { Component } from 'react'
import Questions from './Questions'

class Quizzes extends Component {
  constructor() {
    super()
    this.loadQuizzes = this.loadQuizzes.bind(this)
  }

  loadQuizzes() {
    return this.props.quizzes.map(quiz => {
      return(
        <div key={quiz.id}>
          <h1 className="quiz-title">{quiz.title}</h1>
          <Questions
            questions = {quiz.questions}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div className='quizzes-container'>
        {this.loadQuizzes()}
      </div>
    );
  }
}

export default Quizzes
