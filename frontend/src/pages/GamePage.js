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
            const result = await fetch(`https://api.rawg.io/api/games/${specGame?.api_id}?key=5e35f504c4154714add5b9909f65f051`)
            const data = await result.json()
            setExtraInfo(data)
        }
    }

    //Got all of the store information from rawg API, using specGame data to get the ids, when specGame has a value 
    const getStoreInfo = async () => {
        if (specGame) {
            const result = await fetch(`https://api.rawg.io/api/games/${specGame?.api_id}/stores?key=5e35f504c4154714add5b9909f65f051`)
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
            <article>
                <img src={extraInfo?.background_image} />
                <div className="heading">
                    <h1>{specGame?.title}</h1>
                    <p>{extraInfo?.rating}</p>
                    <button onClick={() => onFavourite(specGame)} >Favourite</button>
                </div>
                <p>{extraInfo?.description_raw}</p>
                <div className="publish-details">
                    <p>Genre: </p>
                    {specGame?.genre.map((genre, i) => <p key={i}>{genre.genre_name}</p>)}
                    <p>Published: {extraInfo?.released}</p>
                    <p>Publisher: {extraInfo?.publishers[0].name}</p>
                </div>
                <div className="develop-platforms">
                    <p>Developers: </p>
                    {extraInfo?.developers.map((dev, i) => <p key={i}>{dev.name}</p>)}
                    <p>Platforms: </p>
                    {extraInfo?.platforms.map((plat, i) => <p key={i}>{plat?.platform?.name}</p>)}
                </div>
                <div className="tags-hours">
                    <p>Tags: </p>
                    {extraInfo?.tags.map((tag, i) => <p key={i}>{tag.name}</p>)}
                    <p>Hours played: {specGame?.played_time}</p>
                </div>
                <Link to={storeUrl()} className="buy"><button>Buy</button></Link>
            </article>
        </>
    )
}