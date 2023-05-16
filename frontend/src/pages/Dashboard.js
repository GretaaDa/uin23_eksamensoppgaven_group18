import GameShopCard from "../components/GameShopCard"

export default function Dashboard({games}) {
    games = games?.slice(0, 3)
    return(<>
    <h2>Dashboard</h2>
    {games?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
    
    </>)
}