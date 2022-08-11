import React, { useState, useEffect } from "react";
import Question from "./Question";
import parseQuizData from "../utils/parseQuizData";
import getSrc from "../utils/getSrc";

export default function Quiz({toggleStatus, settings}) {
    const [quiz, setQuiz] = useState([])
    const [result, setResult] = useState(false)

    useEffect(() => {
        fetch(getSrc(settings))
            .then(r => r.json())
            .then(data => setQuiz(parseQuizData(data.results)))
            .catch(err => alert(err.stack))
    }, [settings])

    function collectAnswers() {
        let answersCollected = {
            all: 0,
            correct: 0,
        }
        quiz.forEach(question => {
            const res = question.answers.find(
                answer => answer.chosenCorr || answer.chosenFalse
            )
            if (res !== undefined) {
                answersCollected.all++
                if (res.chosenCorr) {
                    answersCollected.correct++
                }
            }

        })

        return answersCollected
    }

    function goToResults() {
        const chosenAnswers = collectAnswers()

        if (chosenAnswers.all === quiz.length) {
            setResult(true)
        }
    }

    const questions = quiz.map(quizItem =>
        <Question
            key={quizItem.id}
            questionId={quizItem.id}
            value={quizItem.question}
            answers={quizItem.answers}
            setQuiz={setQuiz}
            result={result}
        />
    )

    return (
        <div className="quiz-box">
            {questions}
            {
                !result &&
                <button className="complete-btn" onClick={goToResults}>Check answers</button>
            }
            {
                result &&
                <div className="result-line">
                    <p>You scored {`${collectAnswers().correct}/${quiz.length}`} correct answers</p>
                    <button onClick={toggleStatus}>Play again</button>
                </div>
            }
        </div>
    )
}