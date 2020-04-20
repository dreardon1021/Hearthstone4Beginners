import React from 'react';
import './Card.css'
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";

const Card = ({id, key, name, imgGold, addCardToDeck, removeCardFromDeck, currentPage }) => {
  let addOrRemoveButton = currentPage === 'home' ?
    (<button id={name} data-testid={name + '-add'} onClick={e => addCardToDeck(e.target.id)} className="cardList-btn-add">Add</button>) :
    (<button id={name} data-testid={name + '-rmv'} onClick={e => removeCardFromDeck(e.target.id)} className="cardList-btn-remove">Remove</button>)

  return(
    <section data-testid={id} key={key} className="card-container">
      <img onError={(e)=>{e.target.onerror = null; e.target.src="http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png"}} src={imgGold} alt={name} />
      <h2 className="card-name-text">{name}</h2>
      <div className="card-button-container">
        {addOrRemoveButton}
        <NavLink id={id} className="view-card-btn" to={`/card-details/${id}`}><button data-testid={name} className="cardList-btn-view">View</button></NavLink>
      </div>
    </section>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  imgGold: PropTypes.string,
  addCardToDeck: PropTypes.func,
  removeCardFromDeck: PropTypes.func,
  currentPage: PropTypes.string,

}