import React from "react"
import settingsOptions from "../settings/options"

export default function Start({toggleStatus, settings, setSettings}) {
    function handleChange(event) {
        const {name, value} = event.target
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: value,
        }))
    }
    const optionsDifficulty = Object.entries(settingsOptions.difficulty)
        .map((item, index) => <option key={index} value={item[0]}>{item[1]}</option>)
    const optionsQuestionsAmount = settingsOptions.questionsAmount
        .map((item, index) => <option key={index} value={item}>{item}</option>)
    const optionsCategory = Object.entries(settingsOptions.category)
        .map((item, index) => <option key={index} value={item[0]}>{item[1]}</option>)

    return (
        <div className="start">
            <div className="start-title">
                <h3>Quizzical</h3>
                <p>Pick the parameters and test yourself</p>
            </div>
            <hr/>
            <form>
                <div className="settings-line">
                    <label htmlFor="difficulty">Select difficulty</label>
                    <select
                        name="difficulty"
                        id="difficulty"
                        value={settings.difficulty}
                        onChange={handleChange}
                    >
                        {optionsDifficulty}
                    </select>
                </div>
                <div className="settings-line">
                    <label htmlFor="questionsAmount">Select amount of questions</label>
                    <select
                        name="questionsAmount"
                        id="questionsAmount"
                        value={settings.questionsAmount}
                        onChange={handleChange}
                    >
                        {optionsQuestionsAmount}
                    </select>
                </div>
                <div className="settings-line">
                    <label htmlFor="category">Select category</label>
                    <select
                        name="category"
                        id="category"
                        value={settings.category}
                        onChange={handleChange}
                    >
                        {optionsCategory}
                    </select>
                </div>
            </form>
            <button className="start-btn" onClick={toggleStatus}>
                Start quiz
            </button>
        </div>
    )
}