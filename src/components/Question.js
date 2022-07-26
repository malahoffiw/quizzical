import React from "react";

export default function Question(props) {
    function chooseAnswer(event) {
        const chosenId = Number(event.target.id)

        props.setQuiz(prevQuiz => prevQuiz.map(question => {
            if (question.id !== props.questionId) return question

            const newAnswers = question.answers.map((answer, index) => {
                if (index === chosenId) {
                    if (answer.correct) {
                        return {
                            ...answer,
                            chosenCorr: true,
                            chosenFalse: false,
                        }
                    } else {
                        return {
                            ...answer,
                            chosenCorr: false,
                            chosenFalse: true,
                        }
                    }
                } else {
                    return {
                        ...answer,
                        chosenCorr: false,
                        chosenFalse: false,
                    }
                }

            })

            return {
                ...question,
                answers: newAnswers
            }
        }))
    }

    const answers = props.answers.map((answer, index) =>
        <div
            key={index}
            id={index}
            className={
                `answers-option 
                ${answer.chosenCorr || answer.chosenFalse ? "chosen" : ""}
                ${props.result && answer.chosenFalse ? "false" : ""}
                ${props.result && answer.correct ? "correct" : ""}
                ${props.result && !answer.correct ? "other" : ""}`
            }
            onClick={chooseAnswer}
        >
            {answer.text}
        </div>
    )

    return (
        <div className="question">
            <h4>{props.value}</h4>
            <div className="answers">
                {answers}
            </div>
            <hr/>
        </div>
    )
}