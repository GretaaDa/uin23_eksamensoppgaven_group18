export default function GameShopCard({recent}) {
    console.log(recent)
    return(<>
        <div className="gameshopCard">
        <img src={recent.background_image}/>
        <h3>{recent.name}</h3>
        {recent?.genres?.map((recent, i) => <GameShopCard key={i} recent={recent}/>)}
        <button>Buy</button>
        </div>
        </>)
}