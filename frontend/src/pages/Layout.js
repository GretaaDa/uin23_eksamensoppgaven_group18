import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Layout() {
    return (
        <>
        <div className="layoutGrid">
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer >
                <Link to="https://rawg.io/">
                RAWG: https://rawg.io/</Link>
                <Link to="https://rawg.io/apidocs">RAWG API :https://rawg.io/apidocs</Link>
            </footer>
            </div>
        </>
    )
}