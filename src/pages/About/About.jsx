import "./about.css"
import { SliderHome } from "../../components/SliderHome/SliderHome";
import Navbar2 from "../../components/Nav/Navbar";
import { Featured } from "../../components/Featured/Featured";
import { Property, PropertyCarroussel } from "../../components/PropertyCarroussel/PropertyCarroussel";

export function About() {
    return (
<div className="About">
    <PropertyCarroussel />
</div>
    )
}