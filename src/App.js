import React, {useState, useEffect} from 'react';
import InputElement from './components/common/InputElement';
import CardGrid from './components/common/CardGrid';
import SearchElement from './components/common/SearchElement';
import DropdownElement from './components/common/DropdownElement';
import bestiary from './data/bestiaryData.json'
import { getMultipleCards } from './components/functions/getMultipleCards';

function App() {
  const [cardList, setCardList] = useState(false);
  const [selectedType, setSelectedType] = useState([]);
  const [inputedDifficulty, setInputedDifficulty] = useState([]);
  const [searchByName, setSearch] = useState([]);

  useEffect(()=>{
    if (inputedDifficulty.length !== 0){
      const parseInput = parseInt(inputedDifficulty);
      // Run combinationSum with bestiary and parseInput
      const matcher = combinationSum(bestiary, parseInput);
      
      function combinationSum(arr, sum) {
        let ans = new Array();
        let temp = new Array();
        
        // Sort list from lowest value to the largest
        const sortedArr = arr.sort((a, b) => a.difficulty - b.difficulty);
        
        // Used to prevent using same value more than once
        let unusedArr = [...sortedArr];
      
        findNumbers(ans, sortedArr, sum, 0, temp, unusedArr);
        console.log(ans, "output");
        return ans;
      }
      function findNumbers(ans, arr, sum, index, temp, unusedArr) {
        // Match is completed
        if (sum === 0) {
          // pushing deep copy of list to ans
          ans.push([...temp]);
          // reset unusedArr
          unusedArr = [...arr];
          // Break the recursion
          return;
        }
        for (let i = index; i < unusedArr.length; i++) {
          if (sum - unusedArr[i].difficulty >= 0) {
            // pushing element which can contribute to sum
            temp.push(unusedArr[i].id);
            // remove used value from unused array for the rest of this scenario
            const newUnused = [...unusedArr];
            newUnused.splice(i, 1);
            findNumbers(ans, arr, sum - unusedArr[i].difficulty, i, temp, newUnused);
      
            // removing element from list (backtracking)
            temp.splice(temp.indexOf(unusedArr[i]), 1);
          }
        }
      }
      if (!matcher.length) {
        const filteredList = bestiary.filter((best) => {
          // checks & stores if difficulty was input and checks if the value was less than inputed value
          const isDifficulty = inputedDifficulty.length === 0 || parseInput === best.difficulty;
          // checks & stores if selected type was input and matches with the creature type
          const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
          // checks & stores if search by name was input and matches with the name of the creature
          const isNamed = searchByName.length === 0 || searchByName.includes(best.name);
          return isSelectedType && isDifficulty && isNamed;
        })
        setCardList(filteredList);
      } else {
        // Get random combination
        const randomIndex = getRandomInt(0, matcher.length - 1);
        const randomCombination = matcher[randomIndex];
      
        // find matching monster by id's
        const monsters = randomCombination.map((i) =>
        bestiary.find((m) => m.id === i)
        );
        console.log(monsters);
        setCardList(monsters);
      }
    } else if (selectedType.length !== 0 || searchByName.length !== 0) {
      const filteredList2 = bestiary.filter((best) => {
        // checks & stores if selected type was input and matches with the creature type
        const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
        // checks & stores if search by name was input and matches with the name of the creature
        const isNamed = searchByName.length === 0 || searchByName.includes(best.name);
        return isSelectedType && isNamed;
      })
      setCardList(filteredList2);
    }
    else {
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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
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
