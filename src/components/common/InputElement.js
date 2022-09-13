import React from "react";

const InputElement = ({onChange, inputedValue}) => {

    function handleAddition(e) {
        if(e.key === 'Enter'){
            inputedValue = e.target.value;
            onChange(inputedValue);
        } 
    }

    return <>
        <div className="input-group">
        <span className="input-group-text" id="inputGroup-sizing-lg">Difficulty</span>
        <input
        onKeyDown={handleAddition}
        onChange={(e) => handleAddition(e.target.value)}
        placeholder='Enter difficulty' type="text" className="form-control" aria-label="Difficulty" aria-describedby="basic-addon1" />
        </div>
        <hr />
        <span className="span-text-color-main">Difficulty: {inputedValue}</span>
    </>
};

export default InputElement;