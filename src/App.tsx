import { useState } from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"
import { Settings } from "./model"

type Status = "start" | "quiz"
const initialSettings = {
    difficulty: "easy",
    questionsAmount: "5"
}

function App() {
    const [status, setStatus] = useState<Status>("start")
    const [settings, setSettings] = useState<Settings>(initialSettings)

    function toggleStatus() {
        setStatus(prevStatus => {
            if (prevStatus === "start") return "quiz"
            return "start"
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