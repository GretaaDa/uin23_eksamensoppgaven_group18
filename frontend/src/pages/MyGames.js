import GameCard from "../components/GameCard";

export default function MyGames({ games }) {
    return (
        <>
            <h1>My Games Library</h1>
            <div className="my-games">
                {games?.map((game, i) => <GameCard key={i} game={game} />)}
            </div>

        </>
    )
}