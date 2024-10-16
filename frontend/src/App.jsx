import React, { useState } from "react";
import "./App.css";

function App() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleAddButtonClick = () => {
        // handle add button click functionality
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
        </>
    );
}

export default App;
