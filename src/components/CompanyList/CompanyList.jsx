﻿import "./companyList.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline, IoLocationOutline, IoHome} from 'react-icons/io5'
import imobiliária from "../../assets/images/imob1.png";
import imobiliária2 from "../../assets/images/imob2.png";

export function CompanyList() {
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
            
            <div className="propertyUnicFavorite">
                    <div className="image">
                        <a href="/imobiliaria">
                    <img src={imobiliária2} alt="" />
                        </a>
                    </div>
                    <div className="text">
                    <h3>Alice State Agency</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>

                    <div className="icons">
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoCallOutline />
                                <p>(21) 2222-2222</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoLogoWhatsapp />
                                <p>(21) 99999-9999)</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoMailOutline />
                                <p>contato@suachave.com.br</p>
                            </div>
                        </div>                        
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoGlobeOutline />
                                <p>www.suachave.com.br</p>
                            </div>
                        </div>                        
                    </div>
                    <h5><IoHome />55 Anuncios</h5>
                    </div>
                </div> 
            <div className="propertyUnicFavorite">
                    <div className="image">
                    <a href="/imobiliaria">
                    <img src={imobiliária} alt="" />
                        </a>
                    </div>
                    <div className="text">
                    <h3>James State Agency</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoCallOutline />
                                <p>(21) 2222-2222</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoLogoWhatsapp />
                                <p>(21) 99999-9999)</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoMailOutline />
                                <p>contato@suachave.com.br</p>
                            </div>
                        </div>                        
                        <div className="iconUnic">
                            <div className="simbol">
                                <IoGlobeOutline />
                                <p>www.suachave.com.br</p>
                            </div>
                        </div>                        
                    </div>
                    <h5><IoHome />73 Anuncios</h5>
                    </div>
                </div> 

                </div>        
        </div>
    )
}