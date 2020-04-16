import React from 'react';
import './Card.css'

const Card = ({id, key, name, cardSet, type, faction, rarity, cost, text, flavorText, artist, playerClass, img, imgGold }) => {
  return(
    <section id={id} key={key} className="card-container">
      <img onError={(e)=>{e.target.onerror = null; e.target.src="../../images/ErrorCard.png"}} src={imgGold} alt={name} />
      <h2 className="card-name-text">{name}</h2>
      <div className="card-button-container">
        <button className="cardList-btn">Add</button>
        <button className="cardList-btn">View</button>
      </div>
    </section>
  )
}

export default Card
