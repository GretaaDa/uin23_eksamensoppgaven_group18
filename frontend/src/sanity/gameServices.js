import { client } from "./client"

export const fetchGames = async () => {
    const data = await client.fetch(`*[_type == "games"]`)
    return data
}

export const fetchSpecificGame = async (slug) => {
    const data = await client.fetch(`*[_type == "games" && slug.current == $slug] 
    {_id, title, api_id, played_time, genre, slug}`, { slug })
    return data
}
