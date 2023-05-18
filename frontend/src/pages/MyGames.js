import GameCard from "../components/GameCard";

export default function MyGames({ games }) {
    return (
        <>
        <header>
            <h2>My Games Library</h2>
        </header>
            <div className="my-games">
                {games?.map((game, i) => <GameCard key={i} game={game} />)}
            </div>
        </>
    )
}