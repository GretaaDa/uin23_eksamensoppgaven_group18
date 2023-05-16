import GameShopCard from "../components/GameShopCard";

export default function GameShop({games}) {
    games = games?.slice(0, 12)
    return (<>
        <h1>Game shop</h1>
        {games?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
    </>)

}