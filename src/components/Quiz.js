import React, { useState, useEffect } from "react";
import Question from "./Question";

export default function () {
    const [quiz, setQuiz] = useState({
        value: 0
    })


    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(r => r.json())
            .then(data => console.log(data.results))
    }, [])



    return (
        <div className="quiz-box">
            <Question />
            <button className="complete-btn">
                Check answers
            </button>
        </div>
    )
}