import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='reslt'>
        Your Score: {props.score} <br />
        Total: {props.totalScore}
    </div>

    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}
export default QuizResult