import React from 'react';
import './Card.css'
import { NavLink } from 'react-router-dom'

const Card = ({id, key, name, cardBack, imgGold, addCardToDeck }) => {
  return(
    <section key={key} className="card-container">
      <img onError={(e)=>{e.target.onerror = null; e.target.src="http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"}} src={imgGold} alt={name} />
      <h2 className="card-name-text">{name}</h2>
      <div className="card-button-container">
        <button id={name} onClick={e => addCardToDeck(e.target.id)} className="cardList-btn-add">Add</button>
        <NavLink id={id} className="view-card-btn" to={`/card-details/${id}`}><button className="cardList-btn-view">View</button></NavLink>
      </div>
    </section>
  )
}

export default Card
