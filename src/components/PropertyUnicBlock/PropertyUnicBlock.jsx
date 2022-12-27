import "./propertyUnicBlock.css";
import { IoBedOutline, IoCarSportOutline, IoChevronForwardOutline, IoHome, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineShower } from "react-icons/md";


import { NewFavorite } from "../NewFavorite/NewFavorite";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { NewShareBox } from "../NewShareBox/NewShareBox";

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

    const titleProperty = `${property?.title}`
    const cityProperty = `${property?.subType} ${property?.status === "Venda" ? "à venda" : "para aluguel"}`
    return (
        <div className="PropertyUnicBlock">
                    <div className="image">
                        <a href={`/imovel/${property?.id}`}>
                    <img src={property?.featuredImage} alt="" />
                        </a>
                    </div>
                    {new Date(property?.created_at).getDate() === new Date().getDate() &&
                    new Date(property?.created_at).getMonth() === new Date().getMonth() &&
                    new Date(property?.created_at).getFullYear() === new Date().getFullYear()
                    ?
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
                    <NewFavorite idProperty={property?.id} idCompany={property?.idCompany} page={"not"}/>
                    </div>
                    <div className="share">
                    <NewShareBox idProperty={property?.id} title={property?.title}/>
                    </div>
                    <div className="text">
                    <a href={`/imovel/${property?.id}`}>
                    <h4>{titleProperty !== undefined ? titleProperty.slice(0,27) : titleProperty}</h4>
                        </a>
                    <h5>{cityProperty}</h5>
                    <h6><IoLocationOutline />{property?.district} - {property?.city} - {property?.uf}</h6>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                                <p>{property?.bedroom} Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                                <p>{property?.restroom} Banheiros</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                                <p>{property?.garage} Vagas</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h6>{property?.status} {property?.textRent !==  "" ? "/" : "" }<span> {property?.textRent}</span></h6>
                        <h3>R$ <span>{property?.status === "Venda" ? property?.priceSale : property?.priceRent}</span></h3>
                    </div>
                    </div>
                </div>
    )
}