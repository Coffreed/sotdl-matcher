import React, {useState, useEffect} from 'react';
import InputElement from './components/common/InputElement';
import CardGrid from './components/common/CardGrid';
import DropdownElement from './components/common/DropdownElement';
import bestiary from './data/bestiaryData.json'

function App() {
  const [cardList, setCardList] = useState(false);
  const [selectedType, setSelectedType] = useState([]);

  useEffect(()=>{
    if(selectedType.length === 0){
      setCardList(bestiary);
    } else {
      const filteredList = bestiary.filter((best) => {
        return selectedType.includes(best.creatureType);
      })
      setCardList(filteredList);
    }
  }, [selectedType])

  function onSelectedTypeChange(creatureTypeList){
    setSelectedType(creatureTypeList);
  }

  return (
    <>
    <div className='container-md flexRow'>
      <div className='margin-default'>
        <InputElement></InputElement>
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
