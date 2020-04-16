import React from 'react';
import './Card.css'

const Card = ({id, key, name, cardSet, type, faction, rarity, cost, text, flavorText, artist, playerClass, img, imgGold, addCardToDeck }) => {
  return(
    <section key={key} className="card-container">
      <img onError={(e)=>{e.target.onerror = null; e.target.src="../../images/ErrorCard.png"}} src={imgGold} alt={name} />
      <h2 className="card-name-text">{name}</h2>
      <div className="card-button-container">
        <button id={name} onClick={e => addCardToDeck(e.target.id)} className="cardList-btn">Add</button>
        <button id={id} className="cardList-btn">View</button>
      </div>
    </section>
  )
}

export default Card
