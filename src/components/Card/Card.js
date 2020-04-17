import React from 'react';
import './Card.css'

const Card = ({id, key, name, cardBack, imgGold, addCardToDeck }) => {
  return(
    <section key={key} className="card-container">
      <img onError={(e)=>{e.target.onerror = null; e.target.src="http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"}} src={imgGold} alt={name} />
      <h2 className="card-name-text">{name}</h2>
      <div className="card-button-container">
        <button id={name} onClick={e => addCardToDeck(e.target.id)} className="cardList-btn">Add</button>
        <button id={id} className="cardList-btn">View</button>
      </div>
    </section>
  )
}

export default Card
