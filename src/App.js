import React, {useState, useEffect} from 'react';
import InputElement from './components/common/InputElement';
import CardGrid from './components/common/CardGrid';
import DropdownElement from './components/common/DropdownElement';
import bestiary from './data/bestiaryData.json'

function App() {
  const [cardList, setCardList] = useState(false);
  const [selectedType, setSelectedType] = useState([]);
  const [inputedDifficulty, setInputedDifficulty] = useState([]);

  useEffect(()=>{
    console.log('input VALUE', inputedDifficulty);
    // if(selectedType.length === 0 && inputedDifficulty.length === 0){
    //   console.log('inputted lenght IF', inputedDifficulty);
    //   setCardList(bestiary);
    // } 
    if (inputedDifficulty.length !== 0){
      console.log('APP else if input lenght', inputedDifficulty.length);
      const filteredList = bestiary.filter((best) => {
        console.log('APP filter input difficulty', inputedDifficulty, best.difficulty);
        return inputedDifficulty.includes(best.difficulty);
      })
      setCardList(filteredList);
    } 
    else {
      const filteredList = bestiary.filter((best) => {
        return selectedType.includes(best.creatureType);
      })
      setCardList(filteredList);
    }
  }, [selectedType, inputedDifficulty])

  function onSelectedTypeChange(creatureTypeList){
    setSelectedType(creatureTypeList);
  }

  function onInputedChange(difficultyNumber){
    setInputedDifficulty(difficultyNumber);
  }

  return (
    <>
    <div className='container-md flexRow'>
      <div className='margin-default'>
        <InputElement onChange={onInputedChange} inputedValue={inputedDifficulty}/>
        <DropdownElement onChange={onSelectedTypeChange} selectedValue={selectedType}/>
      </div>
      <div className="verticalLine"></div>
      <div className='margin-default'>
        <CardGrid cardList={cardList}/>
      </div>
    </div>
    </>
  );
}

export default App;
