import React, { Component } from 'react'

class Answers extends Component {
  constructor() {
    super()
    this.loadAnswers = this.loadAnswers.bind(this)
  }

  loadAnswers() {
    return this.props.answers.map((answer, index) => {
      return(
        <article key={index}>
          <h5>{answer.title}</h5>
        </article>
      )
    })
  }

  render() {
    return (
      <div className='answers-container'>
        {this.loadAnswers()}
      </div>
    );
  }
}

export default Answers
