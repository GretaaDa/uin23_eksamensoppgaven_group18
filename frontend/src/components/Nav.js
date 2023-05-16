import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="title">MACs Gamehub</Link>
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