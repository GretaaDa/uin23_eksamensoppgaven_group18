import { useEffect, useState } from 'react';

export default function GameShopCard({ recent }) {
    /*Prepared the useState hook with two values, recentGameId used to display the current state and setRecentGameId function
    to update the state*/
    const [recentGameId, setRecentGameId] = useState([])

    //Fentched API info for the game stores to get a new array (results) with the store information
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
            <h3>{recent.name}</h3>
            {recent?.genres.map((genres, i) => <p key={i}>{genres.name}</p>)}
            <button>Buy</button>
        </div>
    </>)
}