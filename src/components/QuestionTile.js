import React, { useState } from 'react'

const QuestionTile = (props) => {
  const [visible, setVisible] = useState(false)

  // could alternately be called `handleClick`
  // const handleClick = () => {
  const changeVisibility = () => {
    // Change the state of `visible` to the opposite of what it is
    // const newVisibility = !visible
    // setVisible(newVisibility)
    setVisible(!visible)
  }

  let icon
  let answerParagraph

  // if (visible === true) {
  if (visible) {
    icon = 'fa fa-minus-square icon green'
    answerParagraph = <p>{props.answer}</p>
  } else {
    icon = 'fa fa-plus-square icon'
    // answerParagraph = ''
  }

  return (
    <div className="small-12 columns tile" onClick={changeVisibility}>
      <i className={icon} aria-hidden="true"></i>
      <span className="question">{props.question}</span>
      {answerParagraph}
    </div>
  )
}

export default QuestionTile
