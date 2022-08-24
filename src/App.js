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
    if ((selectedType.length !== 0 || inputedDifficulty.length !== 0)){
      const filteredList = bestiary.filter((best) => {
        const isDifficulty = inputedDifficulty.length === 0 || (parseInt(inputedDifficulty) === best.difficulty || parseInt(inputedDifficulty) > best.difficulty);
        const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
        return isSelectedType && isDifficulty;
      })
      const sumFiltered = filteredList.reduce((a, b) => a = a + b.difficulty, 0);
      const parseInput = parseInt(inputedDifficulty);
      
      filteredList.sort(() => 0.5 - Math.random());
      console.log('sumFiltered IS THIS', sumFiltered);
      setCardList(filteredList);
      if (sumFiltered !== parseInput){
        const filteredList2 = bestiary.filter((best) => {
          const isDifficulty = parseInt(inputedDifficulty) === best.difficulty;
          const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
          return isSelectedType && isDifficulty;
        })
        filteredList2.sort(() => 0.5 - Math.random());
        filteredList2.sort((a, b) => b.difficulty - a.difficulty);
        const returnedBeast = filteredList2.slice(0, 1);
        setCardList(returnedBeast);
        const sumFiltered2 = filteredList2.reduce((a, b) => a = a + b.difficulty, 0);
        const numberByLenght = filteredList2.length;
        const sumFiltered3 = sumFiltered2;
        console.log("ed go home you are tired", numberByLenght);
        const filteredTotal = sumFiltered2 / numberByLenght;
        console.log('return numberByLenght ed you dumb bro', numberByLenght);
        console.log('return my bs', filteredTotal);
        console.log('sumFilte333333333333333333333tered3', sumFiltered3);
        
        console.log('return filteredList2', filteredList2);
      }
    } else {
      setCardList(bestiary);
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
