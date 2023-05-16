import GameShopCard from "../components/GameShopCard";

export default function GameShop({recentGames}) {
    recentGames = recentGames?.results?.slice(0, 12)
    return (<>
        <h1>Game shop</h1>
        {recentGames?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
    </>)

}