import GameCard from "../components/GameCard";


export default function Dashboard({ games }) {

    games = games.slice(0, 4)

    return (
        <>
            {games?.map((game, i) => <GameCard key={i} game={game} />)}
        </>
    )
}