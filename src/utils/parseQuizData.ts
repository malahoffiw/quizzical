import he from "he"
import { Answer, QuestionType, QuestionData } from "../model"

export default function parseQuizData(data: QuestionData[]): QuestionType[] {
    return data.map((item, index) => {
        const answers: string[] = item.incorrect_answers
        answers.splice(getRandomNumber(), 0, item.correct_answer)

        const parsedAnswers: Answer[] = answers.map(answer => ({
            text: he.decode(answer),
            correct: answer === item.correct_answer,
            chosenCorr: false,
            chosenFalse: false
        }))

        return {
            id: index,
            question: he.decode(item.question),
            answers: parsedAnswers,
        }
    })
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4)
}