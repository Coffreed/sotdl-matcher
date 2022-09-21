const getMultipleCards = ({parseInput, getOnes, getTens, getTwentyFives, getFiftys, getHundreds, getTwoHundredFiftys, getFiveHundreds}) => {
    const matchOnes = getOnes.length * 1;
    const matchTens = getTens.length * 10;
    const matchTwentyFives = getTwentyFives.length * 25;
    const matchFiftys = getFiftys.length * 50;
    const matchHundreds = getHundreds.length * 100;
    const matchTwoHundredFiftys = getTwoHundredFiftys.length * 250;
    const matchFiveHundreds = getFiveHundreds.length * 500;
    
    if (parseInput === matchOnes) {
        return getOnes;
    } else if (parseInput === matchTens) {
        return getTens;
    } else if (parseInput === matchTwentyFives) {
        return getTwentyFives;
    } else if (parseInput === matchFiftys) {
        return getFiftys;
    } else if (parseInput === matchHundreds) {
        return getHundreds;
    } else if (parseInput === matchTwoHundredFiftys) {
        return getTwoHundredFiftys;
    } else if (parseInput === matchFiveHundreds) {
        return getFiveHundreds;
    }
    return [];
};

export {getMultipleCards}