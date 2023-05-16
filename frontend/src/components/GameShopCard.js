import { useEffect, useState } from 'react';
import AddFavourite from './AddFavourite';


export default function GameShopCard({recent}) {
    return (<>
        <div className="gameshopCard">
            <img className="thumbnail" src={recent.background_image} alt = {recent.name}/>
            <h3>{recent.name}</h3>
            {recent?.genres.map((genres, i) => <p className='genres' key={i}>{genres.name}</p>)}
            <button className='favBtn'><AddFavourite/></button>
            <button className='buyBtn'>Buy</button>
        </div>
    </>)
}
