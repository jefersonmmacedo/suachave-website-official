import "./brokerList.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline, IoLocationOutline, IoHomeOutline} from 'react-icons/io5'
import imobiliária from "../../assets/images/corretor1.jpg";
import imobiliária2 from "../../assets/images/corretor2.jpg";
import imobiliária3 from "../../assets/images/corretor3.jpg";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";

export function BrokerList() {
    const [broker, setBroker] = useState([]);
    const type = "Corretor";
    useEffect(() => {
        async function broketLoad() {
            await api.get(`/company/${type}`).then((res) => {
                console.log(res.data);
                setBroker(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        broketLoad()
    },[])
    return (
        <div className="BrokerList">
            <div className="searchBrokers">
                <input type="text" placeholder="Busque pelo nome"/>
                <select name="" id="">
                    <option value="">Individual</option>
                    <option value="">De imobiliária</option>
                </select>
                <select name="" id="">
                    <option value="">Estado</option>
                </select>
                <select name="" id="">
                    <option value="">Cidade</option>
                </select>
            </div>

            <div className="listBroker">
            
            {broker.map((broker) => {
                return (
                <div className="BrokerUnicFavorite">
                    <div className="image">
                        <a href={`/imobiliaria/${broker.id}`}>
                    <img src={broker.logo} alt="" />
                        </a>
                    </div>
                    <div className="text">
                    <a href={`/imobiliaria/${broker.id}`}>
                    <h3>{broker.fantasyName}</h3>
                    </a>
                    <h5>{broker.road}, Nº {broker.number}, {broker.district} - {broker.city} - {broker.uf}</h5>
                    <h5><IoHomeOutline />55 Anuncios</h5>
                    <a className="LinkCompany" href={`/imobiliaria/${broker.id}`}>
                        Ver empresa
                    </a>
                    </div>
                </div> 
                )
            })}


                </div>        
        </div>
    )
}