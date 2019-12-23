import React from 'react';
import './card-style.css';
const Card = (props) =>{
  return  (
    <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
    <h2>{props.monster.name}</h2>
    <h3>{props.monster.email}</h3>
    <p>{props.monster.phone}</p>
    </div>
    )
}

export default Card;