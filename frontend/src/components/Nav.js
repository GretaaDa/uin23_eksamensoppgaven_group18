import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Nav() {
    //Help adding a local image as the logo: https://stackoverflow.com/questions/34582405/react-wont-load-local-images
    //Help for making a Navbar in react: https://www.youtube.com/watch?v=SLfhMt5OUPI&feature=youtu.be
    return (
        <nav className="nav">
            <Link to="/"><img className="logo" src={require('../files/game-store.png')} /></Link>
            <ul>

                <CustomLink to="/Gameshop">Shop</CustomLink>
                <CustomLink to="/MyGames">My Games</CustomLink>
                <CustomLink to="/MyFavourites">Favourites</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}