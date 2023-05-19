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

//Help with the count: https://www.sanity.io/schemas/display-a-document-count-in-the-title-of-a-pane-in-structure-builder-a8e80394
export const fetchCount = async () => {
    const data = await client.fetch(`count(*[_type == "games"])`)
    return data
}