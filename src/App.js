import React, {useState, useEffect} from 'react';
import InputElement from './components/common/InputElement';
import CardGrid from './components/common/CardGrid';
import SearchElement from './components/common/SearchElement';
import DropdownElement from './components/common/DropdownElement';
import bestiary from './data/bestiaryData.json'

function App() {
  const [cardList, setCardList] = useState(false);
  const [selectedType, setSelectedType] = useState([]);
  const [inputedDifficulty, setInputedDifficulty] = useState([]);
  const [searchByName, setSearch] = useState([]);

  useEffect(()=>{
    // generates a random number 0 or 1 for filter
    const totalGenerator = Math.floor(Math.random() * 2);
    // primarily detects input
    if ((selectedType.length !== 0 || inputedDifficulty.length !== 0 || searchByName.length !== 0)){
      // stores input value
      const parseInput = parseInt(inputedDifficulty);
      // filteres & stores difficulty 1 monsters
      const getOnes = bestiary.filter(best => {
        return best.difficulty === 1;
      });
      // filteres & stores difficulty 10 monsters
      const getTens = bestiary.filter(best => {
        return best.difficulty === 10;
      });
      // filteres & stores difficulty 25 monsters
      const getTwentyFives = bestiary.filter(best => {
        return best.difficulty === 25;
      });
      // filteres & stores difficulty 50 monsters
      const getFiftys = bestiary.filter(best => {
        return best.difficulty === 50;
      });
      // filteres & stores difficulty 100 monsters
      const getHundreds = bestiary.filter(best => {
        return best.difficulty === 100;
      });
      // filteres & stores difficulty 250 monsters
      const getTwoHundredFiftys = bestiary.filter(best => {
        return best.difficulty === 250;
      });
      // filteres & stores difficulty 500 monsters
      const getFiveHundreds = bestiary.filter(best => {
        return best.difficulty === 500;
      });

      // totals & stores the values of all difficulties
      const getOnesTotal = getOnes.reduce((a, b) => a = a + b.difficulty, 0);
      const getTensTotal = getTens.reduce((a, b) => a = a + b.difficulty, 0);
      const getTwentyFivesTotal = getTwentyFives.reduce((a, b) => a = a + b.difficulty, 0);
      const getFiftysTotal = getFiftys.reduce((a, b) => a = a + b.difficulty, 0);
      const getHundredsTotal = getHundreds.reduce((a, b) => a = a + b.difficulty, 0);
      const getTwoHundredFiftysTotal = getTwoHundredFiftys.reduce((a, b) => a = a + b.difficulty, 0);
      const getFiveHundredTotal = getFiveHundreds.reduce((a, b) => a = a + b.difficulty, 0);

      console.log(getOnesTotal, "1");
      console.log(getTensTotal, "10");
      console.log(getTwentyFivesTotal, "25");
      console.log(getFiftysTotal, "50");
      console.log(getHundredsTotal, "100");
      console.log(getTwoHundredFiftysTotal, "250");
      console.log(getFiveHundredTotal, "500");
      console.log('THE INPUT', parseInput);

      // detects parse input value and tries to match it with totals
      if (parseInput === getOnesTotal || (parseInput === getTensTotal && totalGenerator === 1) || (parseInput === getTwentyFivesTotal && totalGenerator === 1) ||
      selectedType.length !== 0 || searchByName.length !== 0 || parseInput === getFiftysTotal || parseInput === getHundredsTotal || 
      (parseInput === getTwoHundredFiftysTotal && totalGenerator === 1) || parseInput === getFiveHundredTotal){
        // filter looks to display result that was in criteria
        const filteredList = bestiary.filter((best) => {
          // checks & stores if difficulty was input and checks if the value was less than inputed value
          const isDifficulty = inputedDifficulty.length === 0 || parseInput > best.difficulty;
          // checks & stores if selected type was input and matches with the creature type
          const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
          // checks & stores if search by name was input and matches with the name of the creature
          const isNamed = searchByName.length === 0 || searchByName.includes(best.name);
          return isSelectedType && isDifficulty && isNamed;
        })
        // sorts result in random
        filteredList.sort(() => 0.5 - Math.random());
        // sorts result by highest difficulty accessible
        filteredList.sort((a, b) => b.difficulty - a.difficulty);
        console.log(filteredList, 'CHECK HOW it is filtering')
        // totals and stores total amount of all difficulties in data
        const totalDifficultyFilteredList = filteredList.reduce((a, b) => a = a + b.difficulty, 0);
        console.log('totalDifficultyFilteredList', totalDifficultyFilteredList);
        // checks if total difficulty in filtered list is less than inputted value
        if (totalDifficultyFilteredList > parseInput) {
          const matchOnes = getOnes.length * 1;
          const matchTens = getTens.length * 10;
          const matchTwentyFives = getTwentyFives.length * 25;
          const matchFiftys = getFiftys.length * 50;
          const matchHundreds = getHundreds.length * 100;
          const matchTwoHundredFiftys = getTwoHundredFiftys.length * 250;
          const matchFiveHundreds = getFiveHundreds.length * 500;
          if (parseInput === matchOnes) {
            return setCardList(getOnes);
          } else if (parseInput === matchTens) {
            return setCardList(getTens);
          } else if (parseInput === matchTwentyFives) {
            return setCardList(getTwentyFives);
          } else if (parseInput === matchFiftys) {
            return setCardList(getFiftys);
          } else if (parseInput === matchHundreds) {
            return setCardList(getHundreds);
          } else if (parseInput === matchTwoHundredFiftys) {
            return setCardList(getTwoHundredFiftys);
          } else if (parseInput === matchFiveHundreds) {
            return setCardList(getFiveHundreds);
          }
        } else {
          setCardList(filteredList);
        }
        console.log(filteredList, 'filteredlist');
        setCardList(filteredList);
      } else {
        const filteredList2 = bestiary.filter((best) => {
          const isDifficulty = parseInput === best.difficulty;
          const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
          const isNamed = searchByName.length === 0 || searchByName.includes(best.name);
          return isSelectedType && isDifficulty && isNamed;
        })
        filteredList2.sort(() => 0.5 - Math.random());
        filteredList2.sort((a, b) => b.difficulty - a.difficulty);
        const returnedBeast = filteredList2.slice(0, 1);
        setCardList(returnedBeast);
      }
    } else {
      setCardList(bestiary);
    }
  }, [selectedType, inputedDifficulty, searchByName])

  function onSelectedTypeChange(creatureTypeList){
    setSelectedType(creatureTypeList);
  }

  function onInputedChange(difficultyNumber){
    setInputedDifficulty(difficultyNumber);
  }

  function onSearchChange(name){
    setSearch(name);
  }

  return (
    <>
    <div className='container-md flexRow'>
      <div className='margin-default'>
        <SearchElement onChange={onSearchChange} inputedValue={searchByName}/>
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
