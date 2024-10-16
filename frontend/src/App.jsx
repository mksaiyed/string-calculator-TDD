import React, { useState } from "react";
import StringCalculator from "../../backend/src";
import "./App.css";

function App() {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
        setResult("");
        setError("");
    };

    const handleAddButtonClick = () => {
        const stringCalculator = new StringCalculator();
        try {
            const result = stringCalculator.add(text);
            setResult(result);
        } catch (error) {
            setError(error);
        }
    };
    return (
        <>
            <h1>String Calculator</h1>
            <div>
                <input
                    className="inputText"
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Enter numner with comma seperater"
                />
                <button onClick={handleAddButtonClick}>Add</button>
            </div>
            <div className="resultText">
                {error !== ""
                    ? `Error: ${error}`
                    : result !== ""
                    ? `Result: ${result}`
                    : ``}
            </div>
        </>
    );
}

export default App;
