import "./home.css";
import Navbar2 from "../../components/Nav/Navbar";

import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { Footer } from "../../components/Footer/Footer";
import { SliderHome } from "../../components/SliderHome/SliderHome";
import {  PropertyCarroussel } from "../../components/PropertyCarroussel/PropertyCarroussel";
import { DownloadApp } from "../../components/DownloadApp/DownloadApp";

export function Home() {
    return (
        <div className="Home">
            <Navbar2 />
            <SliderHome />
            <SearchProperty />
            <div className="textFeature">
            <h2>Imóveis em Destaque</h2>
            </div>
            <div className="carroussel">
            <PropertyCarroussel />
            </div>
            <div className="textHome">
            <h2>Imóveis para alugar</h2>
            </div>
            <div className="carroussel">
            <PropertyCarroussel />
            </div>
            <div className="textHome">
            <h2>Imóveis à venda</h2>
            </div>
            <div className="carroussel">
            <PropertyCarroussel />
            </div>
            <DownloadApp />
            <Footer />
        </div>
    )
}