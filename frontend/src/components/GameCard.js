export default function GameCard({ game }) {

    return (
        <>
            <div className="myGames-card">
                <img></img>
                <h3>{game.title}</h3>
                {game?.genre.map((genre, i) => <p key={i}>{genre.genre_name}</p>)}
                <p>Hours played: {game.played_time}</p>
            </div>
        </>
    )
}