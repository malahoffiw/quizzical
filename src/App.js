import React, { useState } from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {
    const [status, setStatus] = useState("start")
    const [settings, setSettings] = useState({
        difficulty: "easy",
        questionsAmount: "5",
        category: ""
    })

    function toggleStatus() {
        setStatus(prevStatus => {
            if (prevStatus === "start") return "quiz"
            if (prevStatus === "quiz") return "start"
        })
    }

    return (
        <main>
            {status === "start" && <Start settings={settings} setSettings={setSettings} toggleStatus={toggleStatus}/>}
            {status === "quiz" && <Quiz settings={settings} toggleStatus={toggleStatus}/>}
        </main>
    )
}

export default App