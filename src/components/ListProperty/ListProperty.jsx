import "./listProperty.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCrop, IoHeart, IoHeartOutline, IoLocationOutline} from 'react-icons/io5';
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";
import ImageHouse3 from "../../assets/images/house3.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";

export function ListProperty() {
    return (
        <div className="ListProperty">
            <div className="itens">
            
                <PropertyUnicBlock image={ImageHouse}/>
                <PropertyUnicBlock image={ImageHouse1}/>
                <PropertyUnicBlock image={ImageHouse2}/>
                <PropertyUnicBlock image={ImageHouse3}/>
                <PropertyUnicBlock image={ImageHouse4}/>
                <PropertyUnicBlock image={ImageHouse5}/>
                <PropertyUnicBlock image={ImageHouse}/>
                <PropertyUnicBlock image={ImageHouse1}/>
                <PropertyUnicBlock image={ImageHouse2}/>
                <PropertyUnicBlock image={ImageHouse3}/>
                <PropertyUnicBlock image={ImageHouse4}/>
                <PropertyUnicBlock image={ImageHouse5}/>
                
                </div>        
        </div>
    )
}