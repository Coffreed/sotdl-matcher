import React, {useState} from "react";

const InputElement = ({onChange, inputedValue}) => {

    function handleAddition(e) {
        if(e.key === 'Enter'){
            console.log('hello this is input element', inputedValue);
            console.log('thetarget value', e.target.value);
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
        placeholder='enter difficulty' type="text" className="form-control" aria-label="Difficulty" aria-describedby="basic-addon1" />
        </div>
        <hr />
        Difficulty: {inputedValue}
    </>
};

export default InputElement;