import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function GameCard({ game }) {
    //Initialized the state values for the rawg API game information
    const [gameInfo, setGameInfo] = useState([])

    //Got the game information from rawg API, while using the premade sanity ids to fetch the right game info
    const getGameInfo = async () => {
        const result = await fetch(`https://api.rawg.io/api/games/${game.api_id}?key=5e35f504c4154714add5b9909f65f051`)
        const data = await result.json()
        setGameInfo(data)
    }

    //Ran the function on the first render
    useEffect(() => {
        getGameInfo()
    }, [])

    return (
        <>
        <div className="sanityCard">
            <Link to={`/${game.slug.current}`}>
                <article className="myGame-card" >
                    <img src={gameInfo.background_image} />
                    <h3>{game.title}</h3>
                    {game?.genre.map((genre, i) => <p key={i}>{genre.genre_name}</p>)}
                    <p>Hours played: {game.played_time}</p>
                </article>
            </Link>
        </div>
        </>
    )
}