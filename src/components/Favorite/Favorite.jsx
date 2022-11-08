import "./favorite.css";
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";

export function Favorite() {
    return (
        <div className="Favorite">
            <div className="listFavorite">
                    <PropertyUnicBlock image={ImageHouse}/>
                    <PropertyUnicBlock image={ImageHouse1}/>
                    <PropertyUnicBlock image={ImageHouse2}/>
                    <PropertyUnicBlock image={ImageHouse2}/>

                </div>        
        </div>
    )
}