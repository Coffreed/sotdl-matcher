import App from '../../App'

function MultipleCardDispatcher(setCardList){
    const inputedDifficulty = App.inputedDifficulty;
    // filteres & stores difficulty 1 monsters
    const getOnes = App.getOnes;
    // filteres & stores difficulty 10 monsters
    const getTens = App.getTens;
    // filteres & stores difficulty 25 monsters
    const getTwentyFives = App.getTwentyFives;
    // filteres & stores difficulty 50 monsters
    const getFiftys = App.getFiftys;
    // filteres & stores difficulty 100 monsters
    const getHundreds = App.getHundreds;
    // filteres & stores difficulty 250 monsters
    const getTwoHundredFiftys = App.getTwoHundredFiftys;
    // filteres & stores difficulty 500 monsters
    const getFiveHundreds = App.getFiveHundreds;

    const matchOnes = getOnes.length * 1;
    const matchTens = getTens.length * 10;
    const matchTwentyFives = getTwentyFives.length * 25;
    const matchFiftys = getFiftys.length * 50;
    const matchHundreds = getHundreds.length * 100;
    const matchTwoHundredFiftys = getTwoHundredFiftys.length * 250;
    const matchFiveHundreds = getFiveHundreds.length * 500;
    
    if (inputedDifficulty === matchOnes) {
        return setCardList(getOnes);
    } else if (inputedDifficulty === matchTens) {
        return setCardList(getTens);
    } else if (inputedDifficulty === matchTwentyFives) {
        return setCardList(getTwentyFives);
    } else if (inputedDifficulty === matchFiftys) {
        return setCardList(getFiftys);
    } else if (inputedDifficulty === matchHundreds) {
        return setCardList(getHundreds);
    } else if (inputedDifficulty === matchTwoHundredFiftys) {
        return setCardList(getTwoHundredFiftys);
    } else if (inputedDifficulty === matchFiveHundreds) {
        return setCardList(getFiveHundreds);
    }
};

export default MultipleCardDispatcher();