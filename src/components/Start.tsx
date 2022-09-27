import React from "react"
import settingsOptions from "../settings/options"
import { Settings } from "../model"

type StartProps = {
    settings: Settings,
    setSettings: React.Dispatch<React.SetStateAction<Settings>>,
    toggleStatus: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export default function Start({ toggleStatus, settings, setSettings }: StartProps) {
    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target
        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: value,
        }))
    }

    const settingsLines = Object.keys(settingsOptions)
        .map((line, i) => {
            const lineToShow = line === "questionsAmount" ? "amount of questions" : line
            const optionsLine = Object.entries(settingsOptions[line as keyof typeof settingsOptions])
                .map((item, index) => <option key={index} value={item[0]}>{item[1]}</option>)

            return (
                <div key={i} className="settings-line">
                    <label htmlFor={line}>Select {lineToShow}</label>
                    <select
                        name={line}
                        id={line}
                        value={settings[line as keyof typeof settingsOptions]}
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