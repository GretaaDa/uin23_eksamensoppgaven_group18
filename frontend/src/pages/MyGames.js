import GameCard from "../components/GameCard";

export default function MyGames({ games, count }) {
    return (
        <>
            <header>
                <h2>My Games Library ({count})</h2>
            </header>
            <div className="my-games">
                {games?.map((game, i) => <GameCard key={i} game={game} />)}
            </div>
        </>
    )
}