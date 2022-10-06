﻿import "./companyList.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline, IoLocationOutline} from 'react-icons/io5'
import imobiliária from "../../assets/images/imob1.png";
import imobiliária2 from "../../assets/images/imob2.png";

export function CompanyList() {
    return (
        <div className="CompanyList">
            <div className="listProperties">
            
            <div className="propertyUnicFavorite">
                    <div className="image">
                    <img src={imobiliária2} alt="" />
                    </div>
                    <div className="text">
                    <h2>Alice State Agency</h2>
                    <h4><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h4>
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
                    </div>
                </div> 
            <div className="propertyUnicFavorite">
                    <div className="image">
                    <img src={imobiliária} alt="" />
                    </div>
                    <div className="text">
                    <h2>James State Agency</h2>
                    <h4><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h4>
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
                    </div>
                </div> 

                </div>        
        </div>
    )
}