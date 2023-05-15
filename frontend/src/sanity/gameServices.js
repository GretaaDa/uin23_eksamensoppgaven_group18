import { client } from "./client"

export const fetchGames = async () => {
    const data = await client.fetch(`*[_type == "games"]`)
    return data
}