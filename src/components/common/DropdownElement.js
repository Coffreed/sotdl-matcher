import React,{useState} from "react";
import bestiary from "../../data/bestiaryData.json";

const DropdownElement = () => {
const [tags, setTags] = useState([])
const uniqueTagIds = [];

const uniqueBeastIds = [];
const [isActive, setIsActive] = useState(false);
const onClick = () => setIsActive(!isActive);

const uniqueBeasts = bestiary.filter(element => {
    const isDuplicate = uniqueBeastIds.includes(element.creatureType);
    if (!isDuplicate) {
        uniqueBeastIds.push(element.creatureType);
        return true;
    }
    return false;
});

function removeType(e) {
    e.target.innerText = '';
}

function handleAddition(tag) {
    const value = tag.target.innerText;
    var names = tags.map(({name}) => name);
    console.log(uniqueTagIds, "uniqueTagIds");
    if(!value.trim()){ 
        console.log(value, "Trim");
        return; 
    } 
    else if (value === uniqueTagIds) {
        console.log(tag.name, "Tag name");
        console.log(names, "NAMES");
        console.log(value, "print");
        return;
    } else {
        uniqueTagIds.push(value);
        return setTags([...tags, value]);
    }
}

return ( <>
        <div className="dropdown btn-group me-1">
            <button onClick={onClick} type="button" className="btn btn-secondary dropdown-toggle margin-default" id="dropdownMenuOffset" placeholder="Select creature type">
                Select creature type
            </button>

            <ul className={`menu ${isActive ? 'active' : 'inactive'}`}>
                {uniqueBeasts.map(bestiary => {
                return (
                <a key={bestiary.id} onClick={handleAddition} className="dropdown-item" value={bestiary.creatureType}>{bestiary.creatureType}</a>
                )
                })}
            </ul>
            
        </div>
        <div className="tags-input-container">
            { tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span id="tag" onClick={removeType} className="text">{tag}</span>
                </div>
            )) }
        </div>
        </>
    )
}
export default DropdownElement;