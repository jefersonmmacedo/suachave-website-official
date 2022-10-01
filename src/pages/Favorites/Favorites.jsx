import "./favorites.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Favorite } from "../../components/Favorite/Favorite";

export function Favorites() {
    return (
        <div className="Favorites">
            <Navbar2 />

            <h2>Meus favoritos</h2>

            <Favorite />
        </div>
    )
}