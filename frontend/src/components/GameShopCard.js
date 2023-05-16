import { useEffect, useState } from 'react';

export default function GameShopCard({recent}) {
    return (<>
        <div className="gameshopCard">
            <img className="thumbnail" src={recent.background_image} alt = {recent.name}/>
            <h3>{recent.name}</h3>
            {recent?.genres.map((genres, i) => <p key={i}>{genres.name}</p>)}
            <button>Buy</button>
        </div>
    </>)
}

//{recent?.genres?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
//<button>Buy{recent.stores.map}</button>

//https://api.rawg.io/api/platforms