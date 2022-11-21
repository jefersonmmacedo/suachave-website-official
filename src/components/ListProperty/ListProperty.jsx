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
import { useFetch } from "../../hooks/useFetch";

export function ListProperty({status}) {
    const availability = "Disponível";

    const {data} = useFetch(`/property/lists/${availability}/${status}`);

    if(!data) {
        return (
            <h5>Carregando..</h5>
        )
    }

    return (
        <div className="ListProperty">
            <div className="itens">
            
            {data?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}
                
                </div>        
        </div>
    )
}