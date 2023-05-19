import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchSpecificGame } from "../sanity/gameServices"

export default function GamePage({ onFavourite }) {
    //Used useParams hook to retreive the slug parameter the matching rout
    const { slug } = useParams()

    //Initialized the state values for the sanity game information
    const [specGame, setSpecGame] = useState()
    //Initialized the state values for the rawg game information
    const [extraInfo, setExtraInfo] = useState()
    //Initialized the state values for the game store information
    const [storeInfo, setStoreInfo] = useState()



    //Got the necessary data from sanity that corresponds to the slug
    const getSpecGame = async (slug) => {
        const data = await fetchSpecificGame(slug)
        setSpecGame(data[0])
    }

    //Got all of the game information from rawg API, using specGame data to get the ids, when specGame has a value
    const getExtraInfo = async () => {
        if (specGame) {
            const result = await fetch(`https://api.rawg.io/api/games/${specGame?.api_id}?key=72460563b7d041d4b0db0b87df35dd11`)
            const data = await result.json()
            setExtraInfo(data)
        }
    }

    //Got all of the store information from rawg API, using specGame data to get the ids, when specGame has a value 
    const getStoreInfo = async () => {
        if (specGame) {
            const result = await fetch(`https://api.rawg.io/api/games/${specGame?.api_id}/stores?key=72460563b7d041d4b0db0b87df35dd11`)
            const data = await result.json()
            setStoreInfo(data)
        }
    }

    //Ran getSpecGame when the page loads and slug value changes
    useEffect(() => {
        getSpecGame(slug)
    }, [slug])

    //Ran getExtraInfo and getStoreInfo when the page loads and there are changes to specGame
    useEffect(() => {
        getExtraInfo()
        getStoreInfo()
    }, [specGame])


    //Made a function that gets the stores url that has the id 2 (Microsoft) and return the first one, if there is none with the id
    const storeUrl = () => {
        let url = storeInfo?.results[0].url
        storeInfo?.results.forEach(function (item) {
            if (item.store_id === 2) {
                url = item.url
            }
        })
        return url
    }

    return (
        <>
            <article className="game-page">
                <img src={extraInfo?.background_image} alt={specGame?.title} className="game-img" />
                <div className="text-content">
                    <div className="heading">
                        <h1>{specGame?.title}</h1>
                        <p>{extraInfo?.rating}</p>
                        <button className='heart' onClick={() => onFavourite(specGame)} >Favourite</button>
                    </div>
                    <p>{extraInfo?.description_raw}</p>
                    <div className="publish-details">
                        <div className="genre">
                            <h3 >Genre: </h3>
                            {specGame?.genre.map((genre, i) => <p key={i}>{genre.genre_name}</p>)}
                        </div>
                        <div className="date">
                            <h3 >Published: </h3>
                            <p>{extraInfo?.released}</p>
                        </div>
                        <div className="publish">
                            <h3>Publisher:</h3>
                            <p>{extraInfo?.publishers[0].name}</p>
                        </div>
                    </div>
                    <div className="develop-platforms">
                        <div className="develop">
                            <h3>Developers: </h3>
                            {extraInfo?.developers.map((dev, i) => <p key={i}>{dev.name}</p>)}
                        </div>
                        <div className="platform">
                            <h3>Platforms: </h3>
                            {extraInfo?.platforms.map((plat, i) => <p key={i}>{plat?.platform?.name}</p>).slice(0, 5)}
                        </div>
                    </div>
                    <div className="tags-hours">
                        <div className="tag">
                            <h3>Tags: </h3>
                            {extraInfo?.tags.map((tag, i) => <p key={i}>{tag.name}</p>)}
                        </div>
                        <h3>Hours played: {specGame?.played_time}</h3>
                    </div>
                    <Link to={storeUrl()} className="buy"><button>Buy</button></Link>
                </div>
            </article>
        </>
    )
}