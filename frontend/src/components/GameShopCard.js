export default function GameShopCard({ recent }) {
    console.log(recent)
    return (<>
        <div className="gameshopCard">
            <img />
            <h3></h3>
            <button>Buy</button>
        </div>
    </>)
}

//{recent?.genres?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}