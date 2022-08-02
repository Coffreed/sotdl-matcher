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
                <p className="card-title i gap gap-l">Size {size}</p>
                <p className="card-title i remove-bottom-margin">{ frightening ? <p className="card-title i gap">frightening</p> : null }</p>
                <p className="card-title i remove-bottom-margin">{ horrifying ? <p className="card-title i gap">horrifying</p> : null }</p>
                <p className="card-title i">{creatureType}</p>
                </div>

                <div className="flexRow">
                <p className="card-text b gap remove-bottom-margin">Perception</p>
                <p className="card-text">{perception}</p>
                </div>
                <div className="flexRow">
                <p className="card-text b gap remove-bottom-margin">Defense</p>
                <p className="card-text gap remove-bottom-margin">{defense}</p>
                <p className="card-text b gap remove-bottom-margin">Health</p>
                <p className="card-text remove-bottom-margin">{health}</p>
                </div>
                <div className="flexRow">
                <p className="card-text b gap remove-bottom-margin">Strength</p>
                <p className="card-text gap remove-bottom-margin">{strength}</p>
                <p className="card-text b gap remove-bottom-margin">Agility</p>
                <p className="card-text gap remove-bottom-margin">{agility}</p>
                <p className="card-text b gap remove-bottom-margin">Intellect</p>
                <p className="card-text gap remove-bottom-margin">{intellect}</p>
                <p className="card-text b gap remove-bottom-margin">Will</p>
                <p className="card-text gap remove-bottom-margin">{will}</p>
                </div>
                <div className="flexRow">
                <p className="card-text b gap remove-bottom-margin">Speed</p>
                <p className="card-text">{speed}</p>
                </div>
                <div className="flexRow">
                <p className="card-text">{ immune ? <div className="flexRow">
                <p className="card-text b gap remove-bottom-margin">Immune</p>
                <p className="card-text remove-bottom-margin">{immune}</p>
                </div> : null }</p>
                </div>
                <div className="flexRow">
                <p className="card-text">{ traits ? <div className="flexRow">
                <p className="card-text remove-bottom-margin br">{traits}</p>
                </div> : null }</p>
                </div>

                <div className="flexRow add-top-margin bg-gray">
                <p className="card-text b remove-bottom-margin gap-l">ATTACK OPTIONS</p>
                </div>
                <p className="card-text remove-bottom-margin br">{attackOptions}</p>

                <p className="card-text remove-bottom-margin">{ specialAttacks ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <p className="card-text b remove-bottom-margin gap-l">SPECIAL ATTACKS</p>
                </div> : null }</p>
                <div className="flexRow">
                <p className="card-text">{ specialAttacks ? <div className="flexRow">
                <p className="card-text remove-bottom-margin br">{specialAttacks}</p>
                </div> : null }</p>
                </div>

                <p className="card-text remove-bottom-margin">{ specialActions ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <p className="card-text b remove-bottom-margin gap-l">SPECIAL ACTIONS</p>
                </div> : null }</p>
                <div className="flexRow">
                <p className="card-text">{ specialActions ? <div className="flexRow">
                <p className="card-text remove-bottom-margin br">{specialActions}</p>
                </div> : null }</p>
                </div>

                <p className="card-text remove-bottom-margin">{ legendaryActions ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <p className="card-text b remove-bottom-margin gap-l">LEGENDARY ACTIONS</p>
                </div> : null }</p>
                <div className="flexRow">
                <p className="card-text">{ legendaryActions ? <div className="flexRow">
                <p className="card-text remove-bottom-margin br">{legendaryActions}</p>
                </div> : null }</p>
                </div>

                <p className="card-text remove-bottom-margin">{ endOfRound ? <div className="flexRow add-top-margin bg-gray remove-bottom-margin">
                <p className="card-text b remove-bottom-margin gap-l">END OF THE ROUND</p>
                </div> : null }</p>
                <div className="flexRow">
                <p className="card-text">{ endOfRound ? <div className="flexRow">
                <p className="card-text remove-bottom-margin br">{endOfRound}</p>
                </div> : null }</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CardElement;