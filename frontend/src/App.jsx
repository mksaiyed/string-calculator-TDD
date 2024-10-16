import React from "react";
import "./App.css";

function App() {
    return (
        <>
            <h1>String Calculator</h1>
            <div>
                <input
                    className="inputText"
                    type="text"
                    placeholder="Enter numner with comma seperater"
                />
                <button>Add</button>
            </div>
        </>
    );
}

export default App;
