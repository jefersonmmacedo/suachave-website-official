import "./home.css";
import { Featured } from "../../components/Featured/Featured";
import { Sale } from "../../components/Sale/Sale";
import { Rent } from "../../components/Rent/Rent";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";

import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { Slider } from "../../components/Slider/Slider";

export function Home() {
    return (
        <div className="Home">
            <Navbar2 />
            <Slider />
            <SearchProperty />
            <Featured />
            <Rent />
            <Sale />
            <Footer />
        </div>
    )
}