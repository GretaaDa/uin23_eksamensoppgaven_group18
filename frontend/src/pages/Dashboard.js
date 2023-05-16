import GameShopCard from "../components/GameShopCard"

export default function Dashboard({recentGames}) {
    console.log(recentGames)
    recentGames = recentGames?.results?.slice(0, 3)
    return(<>
    <h2>Dashboard</h2>
    {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
    
    </>)
}