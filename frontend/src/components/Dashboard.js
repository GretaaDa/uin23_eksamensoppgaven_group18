export default function Dashboard(){
    return <nav className="nav">
        <a href="/" className="title">MACs Gamehub</a>
        <ul>
            <li>
                <a href="/Gameshop">Shop</a>
            </li>
            <li>
                <a href="/MyGames">My Games</a>
            </li>
            <li>
                <a href="/MyFavourites">Favourites</a>
            </li>
        </ul>

    </nav>
}