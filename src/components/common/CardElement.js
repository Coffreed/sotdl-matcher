import React,{useState} from "react";
import butcher from "../../images/butcher.jpg"

const CardElement = ({data}) => {
const { id, name, difficulty, size, frightening, horrifying, creatureType, 
    perception, defense, health, strength, agility, intellect, will, speed, immune, traits, 
    attackOptions, specialAttacks, specialActions, legendaryActions, endOfRound } = data;
return (
        <div className="col">
            <div className="card">
            <img src={butcher} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="flexRow bg-black">
                <h5 className="card-title gap-l">{name}</h5> 
                <h5 className="card-title c-right gap">Difficulty: {difficulty}</h5>
                </div>

                <div className="flexRow bg-crimson ">
                <span className="card-title i gap gap-l">Size {size}</span>
                <span className="card-title i remove-bottom-margin">{ frightening ? <span className="card-title i gap">frightening</span> : null }</span>
                <span className="card-title i remove-bottom-margin">{ horrifying ? <span className="card-title i gap">horrifying</span> : null }</span>
                <span className="card-title i">{creatureType}</span>
                </div>

                <div className="flexRow">
                <span className="card-text b gap remove-bottom-margin">Perception</span>
                <span className="card-text">{perception}</span>
                </div>
                <div className="flexRow">
                <span className="card-text b gap remove-bottom-margin">Defense</span>
                <span className="card-text gap remove-bottom-margin">{defense}</span>
                <span className="card-text b gap remove-bottom-margin">Health</span>
                <span className="card-text remove-bottom-margin">{health}</span>
                </div>
                <div className="flexRow">
                <span className="card-text b gap remove-bottom-margin">Strength</span>
                <span className="card-text gap remove-bottom-margin">{strength}</span>
                <span className="card-text b gap remove-bottom-margin">Agility</span>
                <span className="card-text gap remove-bottom-margin">{agility}</span>
                <span className="card-text b gap remove-bottom-margin">Intellect</span>
                <span className="card-text gap remove-bottom-margin">{intellect}</span>
                <span className="card-text b gap remove-bottom-margin">Will</span>
                <span className="card-text gap remove-bottom-margin">{will}</span>
                </div>
                <div className="flexRow">
                <span className="card-text b gap remove-bottom-margin">Speed</span>
                <span className="card-text">{speed}</span>
                </div>
                <div className="flexRow">
                <span className="card-text">{ immune ? <div className="flexRow">
                <span className="card-text b gap remove-bottom-margin">Immune</span>
                <span className="card-text remove-bottom-margin">{immune}</span>
                </div> : null }</span>
                </div>
                <div className="flexRow">
                <span className="card-text">{ traits ? <div className="flexRow">
                <span className="card-text remove-bottom-margin br">{traits}</span>
                </div> : null }</span>
                </div>

                <div className="flexRow add-top-margin bg-gray">
                <span className="card-text b remove-bottom-margin gap-l">ATTACK OPTIONS</span>
                </div>
                <span className="card-text remove-bottom-margin br">{attackOptions}</span>

                <span className="card-text remove-bottom-margin">{ specialAttacks ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <span className="card-text b remove-bottom-margin gap-l">SPECIAL ATTACKS</span>
                </div> : null }</span>
                <div className="flexRow">
                <span className="card-text">{ specialAttacks ? <div className="flexRow">
                <span className="card-text remove-bottom-margin br">{specialAttacks}</span>
                </div> : null }</span>
                </div>

                <span className="card-text remove-bottom-margin">{ specialActions ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <span className="card-text b remove-bottom-margin gap-l">SPECIAL ACTIONS</span>
                </div> : null }</span>
                <div className="flexRow">
                <span className="card-text">{ specialActions ? <div className="flexRow">
                <span className="card-text remove-bottom-margin br">{specialActions}</span>
                </div> : null }</span>
                </div>

                <span className="card-text remove-bottom-margin">{ legendaryActions ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <span className="card-text b remove-bottom-margin gap-l">LEGENDARY ACTIONS</span>
                </div> : null }</span>
                <div className="flexRow">
                <span className="card-text">{ legendaryActions ? <div className="flexRow">
                <span className="card-text remove-bottom-margin br">{legendaryActions}</span>
                </div> : null }</span>
                </div>

                <span className="card-text remove-bottom-margin">{ endOfRound ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <span className="card-text b remove-bottom-margin gap-l">END OF THE ROUND</span>
                </div> : null }</span>
                <div className="flexRow">
                <span className="card-text">{ endOfRound ? <div className="flexRow">
                <span className="card-text remove-bottom-margin br">{endOfRound}</span>
                </div> : null }</span>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CardElement;