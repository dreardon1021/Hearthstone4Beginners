import React from 'react';
import './CardDetails.css'
import { NavLink } from 'react-router-dom'

const CardDetails = props =>  {
  let cardToRender = props.type === 'spell' ?
    (<ul className="card-detail-list">
    <li>Mana Cost: {props.cost}</li>
    <li>Player Class: {props.playerClass}</li>
    <li>Text: {props.text}</li>
    <li>Card Type: {props.type}</li>
    <li>Card Set: {props.cardSet}</li>
    <li>Rarity: {props.rarity}</li>
    <li>Flavor Text: {props.flavor}</li>
    <li>Artist: {props.artist}</li>
  </ul>) :
    (<ul className="card-detail-list">
      <li>Mana Cost: {props.cost}</li>
      <li>Player Class: {props.playerClass}</li>
      <li>Text: {props.text}</li>
      <li>Attack: {props.attack}</li>
      <li>Health: {props.health}</li>
      <li>Card Type: {props.type}</li>
      <li>Card Set: {props.cardSet}</li>
      <li>Rarity: {props.rarity}</li>
      <li>Flavor Text: {props.flavor}</li>
      <li>Artist: {props.artist}</li>
    </ul>)

  return(
    <section className="card-details">
      <h2>Card Name: {props.name}</h2>
      <div className="details-container">
        <img className="details-img" src={props.imgGold} alt={props.name}/>
        {cardToRender}
      </div>
      <div className="details-button-container">
        <button className="details-add-btn">Add To Deck</button>
        <NavLink className="details-nav-link" to="/"><button className="details-back-btn">Back To Browse</button></NavLink>
      </div>
    </section>
  )
}

export default CardDetails