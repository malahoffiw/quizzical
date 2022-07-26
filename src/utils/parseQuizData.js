import he from "he";

export default function parseQuizData(data) {
    return data.map((item, index) => {
        let answers = item.incorrect_answers
        answers.splice(getRandomNumber(), 0, item.correct_answer)
        answers = answers.map(answer => ({
            text: he.decode(answer),
            correct: answer === item.correct_answer,
            chosenCorr: false,
            chosenFalse: false
        }))

        return {
            id: index,
            question: he.decode(item.question),
            answers: answers,
        }
    })
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4)
}