import React from 'react'
import QuestionTile from './QuestionTile'

const QuestionsContainer = (props) => {
  // Commented code is for Part 2 with one question seleced at a time
  // const [selectedQuestionId, setSelectedQuestionId] = useState(null)

  const questionTilesArray = props.data.map((questionData) => {
    // let visible = false

    // if(questionData.id === selectedQuestionId) {
    //   visible = true
    // }
    // const handleClick = () => {
    //   setSelectedQuestion(questionData.id)
    // }
    return (
      <QuestionTile
        key={questionData.id}
        question={questionData.question}
        answer={questionData.answer}
        // handleClick={handleClick}
        // visible={visible}
      />
    )
  })

  return <div>{questionTilesArray}</div>
}

export default QuestionsContainer
