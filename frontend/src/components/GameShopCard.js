export default function GameShopCard({recent}) {
    return(<>
        <div className="gameshopCard">
        <img src={recent.background_image}/>
        <h3>{recent.name}</h3>
        <button>Buy</button>
        </div>
        </>)
}

//{recent?.genres?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}