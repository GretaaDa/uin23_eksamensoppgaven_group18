import { Outlet } from "react-router-dom";
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
            <footer>
                RAWG: https://rawg.io/
                RAWG API :https://rawg.io/apidocs
            </footer>
            </div>
        </>
    )
}