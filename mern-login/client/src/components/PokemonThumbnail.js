import React from 'react'
import PokemonFavorite from './PokemonFavorite'
import { id, name, image, type } from '../pages/Pokemon'

const PokemonThumbnail = ({id, name, image, type}) => {

  const style = `thumb-container ${type}`  
  return (
    <div className={style}>
        <div className='shiny-button'>
            <button>SHINY</button>
            <span></span>
            <PokemonFavorite userFrom={localStorage.getItem('userEmail')} pokemonId={id} pokemonName={name} pokemonImage={image} pokemonType={type} />
        </div>
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className="detail-wrapper">
            <h1>{name}</h1>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonThumbnail