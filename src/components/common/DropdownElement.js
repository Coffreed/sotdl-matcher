import React,{useState} from "react";
import bestiary from "../../data/bestiaryData.json";

const DropdownElement = ({onChange, selectedValue}) => {
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

function removeType(tag) {
    const newList = selectedValue.filter(element => {
        return element !== tag;
    });
    onChange(newList);
}

function handleAddition(tag) {
    if(!selectedValue.includes(tag)){
        onChange([...selectedValue, tag]);
    }
}

return ( 
    <div className="dropdown-container">
        <div className="dropdown">
            <button onClick={onClick} type="button" className="btn btn-secondary dropdown-toggle margin-default" id="dropdownMenuOffset" placeholder="Select creature type">
                Select creature type
            </button>

            <ul className={`menu ${isActive ? 'active' : 'inactive'}`}>
                {uniqueBeasts.map(bestiary => {
                return (
                <a key={bestiary.id} onClick={()=>handleAddition(bestiary.creatureType)} className="dropdown-item">{bestiary.creatureType}</a>
                )
                })}
            </ul>
        </div>
        <div className="tags-input-container">
            Tags:
            { selectedValue.map((tag) => (
                <div className="tag-item" key={tag}>
                    <span id="tag" onClick={()=>removeType(tag)} className="text">{tag}</span>
                </div>
            )) }
        </div>
    </div>
    )
}
export default DropdownElement;