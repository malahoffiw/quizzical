import { Settings } from "../model"

export default function getSrc(settings: Settings) {
    if (!settings.category) {
        return `https://opentdb.com/api.php?amount=${settings.questionsAmount}&difficulty=${settings.difficulty}`
    }

    return `https://opentdb.com/api.php?amount=${settings.questionsAmount}&category=${settings.category}&difficulty=${settings.difficulty}`
}