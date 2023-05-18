import GameCard from "../components/GameCard";


export default function Dashboard({ games }) {

    //Sliced the fetched sanity array to 4 article cards, so not all of them are desplayed on the front page
    games = games.slice(0, 4)

    return (
        <>
            <div className="dash-myGame">
                {games?.map((game, i) => <GameCard key={i} game={game} />)}
            </div>
        </>
    )
}