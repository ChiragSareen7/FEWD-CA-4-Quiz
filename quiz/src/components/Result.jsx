import React from 'react'

 function Result(props) {
  return (
    <div>
    <div id="top">
          <img src="public/download.png" alt="Logo" />
          <h4>Quizeteria</h4>
        </div>
    <div className='result'>
    <h2>Your Performance</h2>
    <h4>Total Score {props.score}/100</h4>
    <h4>Correct Answers : {props.correctAnswer} out of 5</h4>
    <button onClick={props.handlePlayAgain}>Play Again</button>
 </div>
    </div>
  )
}
export default Result;