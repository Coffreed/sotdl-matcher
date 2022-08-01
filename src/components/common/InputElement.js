import React, {useState} from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState('');

    return <>
        <div className="input-group">
        <span className="input-group-text" id="inputGroup-sizing-lg">Difficulty</span>
        <input
        onChange={(e) => {
        setInputText(e.target.value)
        }}
        placeholder='enter difficulty' type="text" className="form-control" aria-label="Difficulty" aria-describedby="basic-addon1" />
        </div>
        <hr />
        Difficulty: {inputText}
    </>
};

export default InputElement;