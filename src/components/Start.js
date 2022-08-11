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

    const settingsLines = Object.keys(settingsOptions)
        .map((line, i) => {
            const lineToShow = line === "questionsAmount" ? "amount of questions" : line
            const optionsLine = Object.entries(settingsOptions[line])
                .map((item, index) => <option key={index} value={item[0]}>{item[1]}</option>)

            return (
                <div key={i} className="settings-line">
                    <label htmlFor={line}>Select {lineToShow}</label>
                    <select
                        name={line}
                        id={line}
                        value={settings[line]}
                        onChange={handleChange}
                    >
                        {optionsLine}
                    </select>
                </div>
            )
        })

    return (
        <div className="start">
            <div className="start-title">
                <h3>Quizzical</h3>
                <p>Pick the parameters and test yourself</p>
            </div>
            <hr/>
            <form>
                {settingsLines}
            </form>
            <button className="start-btn" onClick={toggleStatus}>
                Start quiz
            </button>
        </div>
    )
}