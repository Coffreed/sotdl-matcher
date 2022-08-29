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
    const totalGenerator = Math.floor(Math.random() * 2);
    if ((selectedType.length !== 0 || inputedDifficulty.length !== 0 || searchByName.length !== 0)){
      const parseInput = parseInt(inputedDifficulty);
      const getOnes = bestiary.filter(best => {
        return best.difficulty === 1;
      });
      const getTens = bestiary.filter(best => {
        return best.difficulty === 10;
      });
      const getTwentyFives = bestiary.filter(best => {
        return best.difficulty === 25;
      });
      const getFiftys = bestiary.filter(best => {
        return best.difficulty === 50;
      });

      const getOnesTotal = getOnes.reduce((a, b) => a = a + b.difficulty, 0);
      const getTensTotal = getTens.reduce((a, b) => a = a + b.difficulty, 0);
      const getTwentyFivesTotal = getTwentyFives.reduce((a, b) => a = a + b.difficulty, 0);
      const getFiftysTotal = getFiftys.reduce((a, b) => a = a + b.difficulty, 0);

      // const poss1 = getOnesTotal + getTensTotal;
      // const poss2 = getOnesTotal + getTwentyFivesTotal;
      // const poss3 = getOnesTotal + getFiftysTotal;
      // const poss4 = getTensTotal + getTwentyFivesTotal;
      // const poss5 = getTensTotal + getFiftysTotal;
      // const poss6 = getTwentyFivesTotal + getFiftysTotal;
        
      // console.log(parseInput, poss1);
      // console.log(parseInput, poss2);
      // console.log(parseInput, poss3);
      // console.log(parseInput, poss4);
      // console.log(parseInput, poss5);
      // console.log(parseInput, poss6);
      console.log(getOnesTotal);
      console.log(getTensTotal);
      console.log(getTwentyFives);
      console.log(getFiftysTotal);
      console.log('THE INPUT', parseInput);

      if (parseInput === getOnesTotal || (parseInput === getTensTotal && totalGenerator === 1) || (parseInput === getTwentyFivesTotal && totalGenerator === 1) ||
      selectedType.length !== 0 || searchByName.length !== 0){
        const filteredList = bestiary.filter((best) => {
          const isDifficulty = inputedDifficulty.length === 0 || parseInt(inputedDifficulty) > best.difficulty;
          const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
          const isNamed = searchByName.length === 0 || searchByName.includes(best.name);
          return isSelectedType && isDifficulty && isNamed;
        })
        filteredList.sort(() => 0.5 - Math.random());
        filteredList.sort((a, b) => b.difficulty - a.difficulty);
        const totalDifficultyFilteredList = filteredList.reduce((a, b) => a = a + b.difficulty, 0);
        if (totalDifficultyFilteredList > parseInput) {
          const chop = filteredList.slice(0, 2);
          return setCardList(chop);
        } else {
          setCardList(filteredList);
        }
        console.log(filteredList, 'filteredlist');
        setCardList(filteredList);
      } else {
        const filteredList2 = bestiary.filter((best) => {
          const isDifficulty = parseInt(inputedDifficulty) === best.difficulty;
          const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
          const isNamed = searchByName.length === 0 || searchByName.includes(best.name);
          return isSelectedType && isDifficulty && isNamed;
        })
        filteredList2.sort(() => 0.5 - Math.random());
        filteredList2.sort((a, b) => b.difficulty - a.difficulty);
        const returnedBeast = filteredList2.slice(0, 1);
        setCardList(returnedBeast);
      }
      


      // console.log('+++++++++++ OUR BOYS +++++++++++++++');
      // console.log(getOnes, getOnes.length, getOnesTotal);
      // console.log(getTens, getTens.length, getTensTotal);
      // console.log(getTwentyFives, getTwentyFives.length, getTwentyFivesTotal);
      // console.log(getFiftys, getFiftys.length, getFiftysTotal);
      // console.log('++++++++++++++++++++++++++++++++++++');
      
      // filteredList.sort(() => 0.5 - Math.random());
      // console.log('THE INPUT', parseInput);
      console.log('RNG', totalGenerator);
      // setCardList(filteredList);
      // if (sumFiltered !== parseInput){
      //   const filteredList2 = bestiary.filter((best) => {
      //     const isDifficulty = parseInt(inputedDifficulty) === best.difficulty;
      //     const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
      //     return isSelectedType && isDifficulty;
      //   })
      //   filteredList2.sort(() => 0.5 - Math.random());
      //   filteredList2.sort((a, b) => b.difficulty - a.difficulty);
      //   const returnedBeast = filteredList2.slice(0, 1);
      //   setCardList(returnedBeast);
        // const sumFiltered2 = filteredList2.reduce((a, b) => a = a + b.difficulty, 0);
        // const numberByLenght = filteredList2.length;
        // const sumFiltered3 = sumFiltered2;
        // console.log("ed go home you are tired", numberByLenght);
        // const filteredTotal = sumFiltered2 / numberByLenght;
        // console.log('return numberByLenght ed you dumb bro', numberByLenght);
        // console.log('return my bs', filteredTotal);
        
        // const bestTotalFiltered = bestiary.reduce((a, b) => a = a + b.difficulty, 0);
        // const numberByLenght = bestiary.length;
        // const filteredTotal = bestTotalFiltered / numberByLenght;
        // console.log('return filteredList2', filteredList2);

        // console.log('first condition', sumFiltered3);
        // console.log('second condition', parseInput);
        // console.log('thrid condition', totalGenerator);

        // if (sumFiltered3 === parseInput && totalGenerator === 1) {
        //   const filteredList3 = bestiary.filter((best) => {
        //     const isDifficulty = inputedDifficulty.length === 0 || parseInt(inputedDifficulty) > best.difficulty;
        //     const isSelectedType = selectedType.length === 0 || selectedType.includes(best.creatureType);
        //     return isSelectedType && isDifficulty;
        //   })
        //   setCardList(filteredList3);
        // }
      //}
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
