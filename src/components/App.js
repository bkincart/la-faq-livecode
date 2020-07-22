import React from 'react'
import QuestionsContainer from './QuestionsContainer'

const App = (props) => {
  return (
    <div className="app row">
      <h1 className="header">We're here to help</h1>
      <QuestionsContainer data={props.data} />
    </div>
  )
}

export default App
