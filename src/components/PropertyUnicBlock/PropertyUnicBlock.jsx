import "./propertyUnicBlock.css";
import { IoBedOutline, IoCarSportOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineShower } from "react-icons/md";

import { NewFavorite } from "../NewFavorite/NewFavorite";
import api from "../../services/api";
import { useEffect, useState } from "react";

export function PropertyUnicBlock({id}) {
    const [property, setProperty] = useState([])
    useEffect(() => {
        async function loadproperties() {
            await api.get(`/property/${id}`).then((res) => {
                setProperty(res.data[0])
            }).catch((error) => {
                console.log(error)
            })
        }

        loadproperties()
    },[id])


    return (
        <div className="PropertyUnicBlock">
                    <div className="image">
                        <a href={`/imovel/${property.id}`}>
                    <img src={property.featuredImage} alt="" />
                        </a>
                    </div>
                    {new Date(property.created_at).getDate() === new Date().getDate() ?
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
                    } 

                    {property?.financing === "" ? "" :
                        <div className="status">
                            <p>Aceita financiamento</p>
                        </div>
                    }
                    <div className="heart2">
                    <NewFavorite idProperty={property.id} idCompany={property.idCompany} page={"not"}/>
                    </div>
                    <div className="text">
                    <a href={`/imovel/${property.id}`}>
                    <h4>{property?.title !== undefined ? property?.title.slice(0,27) : property?.title}</h4>
                        </a>
                    <h6><IoLocationOutline />{property.district} - {property.city} - {property.uf}</h6>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                                <p>{property.bedroom} Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                                <p>{property.restroom} Banheiros</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                                <p>{property.garage} Vagas</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h6>{property.status} {property.textRent !==  "" ? "/" : "" }<span> {property.textRent}</span></h6>
                        <h3>R$ <span>{property.status === "Venda" ? property.priceSale : property.priceRent}</span></h3>
                    </div>
                    </div>
                </div>
    )
}