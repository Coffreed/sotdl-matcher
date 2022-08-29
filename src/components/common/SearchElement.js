import React from "react";

const SearchElement = ({onChange, inputedValue}) => {

    function handleAddition(e) {
        if(e.key === 'Enter'){
            inputedValue = e.target.value;
            onChange(inputedValue);
        } 
    }

    return <>
        <div className="input-group">
        <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
        <input
        onKeyDown={handleAddition}
        onChange={(e) => handleAddition(e.target.value)}
        placeholder='Beast name' type="text" className="form-control" aria-label="Name" aria-describedby="basic-addon1" />
        </div>
        <hr />
    </>
};

export default SearchElement;