import { useEffect, useState } from 'react';
import AddFavourite from './AddFavourite';

export default function GameShopCard({ recent }) {
    const genresToShow = recent.genres.slice(0, 2); // Get only the first 2 genres, rather than every one of them

    /*Prepared the useState hook with two values, recentGameId used to display the current state and setRecentGameId function
    to update the state*/
    const [recentGameId, setRecentGameId] = useState([])

    //Fetched API info for the game stores to get a new array (results) with the store information
    const getRecentGameId = async () => {
        const result = await fetch(`https://api.rawg.io/api/games/${recent.id}/stores?&key=5e35f504c4154714add5b9909f65f051`)
        const data = await result.json()
        setRecentGameId(data)
        console.log(data.results)
    }

    //Renders getRecentGameId, set the second parameter to an ampty array to run the function only the first time when rendering
    useEffect(() => {
        getRecentGameId()
    }, [])


    return (<>
        <div className="gameshopCard">
            <img className="thumbnail" src={recent.background_image} alt={recent.name} />
            <h3 className='gameName'>{recent.name}</h3>
            {genresToShow.map((genre, i) => (
          <p key={i}>{genre.name}</p>
        ))}
            <button className='buyBtn'>Buy</button>
            <button><AddFavourite></AddFavourite></button>
        </div>
    </>)
}