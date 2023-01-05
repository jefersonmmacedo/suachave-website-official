import "./companyList.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline, IoLocationOutline, IoHomeOutline} from 'react-icons/io5'
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
                        <a href={`/imobiliaria/${company.id}`}>
                    <img src={company.logo} alt="" />
                        </a>
                    </div>
                    <div className="text">
                    <a href={`/imobiliaria/${company.id}`}>
                    <h3>{company.fantasyName}</h3>
                    </a>
                    <h5>{company.road}, Nº {company.number}, {company.district} - {company.city} - {company.uf}</h5>
                    <h5><IoHomeOutline />55 Anuncios</h5>
                    <a className="LinkCompany" href={`/imobiliaria/${company.id}`}>
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