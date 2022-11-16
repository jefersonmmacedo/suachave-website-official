import "./companyList.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline, IoLocationOutline, IoHome} from 'react-icons/io5'
import imobiliária from "../../assets/images/imob1.png";
import imobiliária2 from "../../assets/images/imob2.png";
import { useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";

export function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const type = "Imobiliária";

    useEffect(() => {
        async function companiesLoad() {
            await api.get(`/company/${type}`).then((res) => {
                console.log(res.data);
                setCompanies(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        companiesLoad()
    },[])

    return (
        <div className="CompanyList">
            <div className="searchCompanies">
                <input type="text" placeholder="Busque pelo nome"/>
                <select name="" id="">
                    <option value="">Estado</option>
                </select>
                <select name="" id="">
                    <option value="">Cidade</option>
                </select>
            </div>
            <div className="listProperties">
            {companies.map((company) => {
                return (
            <div className="propertyUnicFavorite">
                    <div className="image">
                        <a href="/imobiliaria">
                    <img src={company.logo} alt="" />
                        </a>
                    </div>
                    <div className="text">
                    <h3>{company.fantasyName}</h3>
                    <h5><IoLocationOutline />{company.road}, Nº {company.number}, {company.district} - {company.city} - {company.uf}</h5>

                    <div className="icons">
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoCallOutline />
                                <p>{company.phone}</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoLogoWhatsapp />
                                <p>{company.whatsapp}</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoMailOutline />
                                <p>{company.email}</p>
                            </div>
                        </div>                        
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoGlobeOutline />
                                <p>{company.website}</p>
                            </div>
                        </div>                        
                    </div>
                    <h5><IoHome />55 Anuncios</h5>
                    </div>
                </div> 
                )
            })}

                </div>        
        </div>
    )
}