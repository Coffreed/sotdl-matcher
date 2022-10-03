import butcher from "../images/butcher.jpg";
import faeriedevil from "../images/devil.PNG";
import animal from "../images/animal.PNG"
import undead from "../images/undead.PNG"
import animalswarm from "../images/animalswarm.PNG"
import beastman from "../images/beastman.PNG"
import faerie from "../images/faerie.PNG"
import monster from "../images/monster.PNG"
import clockwork from "../images/clockwork.PNG"
import construct from "../images/construct.jpg"
import demon from "../images/demon1.PNG"
import dwarf from "../images/dwarf.PNG"
import fungus from "../images/fungus.PNG"

const MatchCreatureType = {
    butcher,
    faeriedevil,
    animal,
    undead,
    animalswarm,
    beastman,
    faerie,
    monster,
    clockwork,
    construct,
    demon,
    dwarf,
    fungus,
}
export default MatchCreatureType;

// const getImages = ({name}) => {
//     const bestImages = [
//         butcher,
//         devil,
//         animal,
//         undead,
//         animalSwarm,
//         beastman,
//         faerie,
//         monster,
//         clockwork,
//         construct,
//         demon,
//         dwarf,
//         fungus,
//     ]

        // const BestImages = [
        //     {butcher},
        //     {devil},
        //     {animal},
        //     {undead},
        //     {animalswarm},
        //     {beastman},
        //     {faerie},
        //     {monster},
        //     {clockwork},
        //     {construct},
        //     {demon},
        //     {dwarf},
        //     {fungus},
        // ]

//     const matchImage = () => {
//         const resName = name.replace(/ /g, '')
//         if (name === creatureType || name === resName) {
//             return resName;
//         } else {
//             return butcher;
//         }
//     };
   
//     return (<>
//             <span className="bulkImageArea">
//                 { creatureType === name ? bulkImages.map((img) => (
//                     <img key={img} src={img} className="card-img-top" alt="..." />
//                 )) : null }
//             </span>
//             </>
//     );
// };

// export {getImages}