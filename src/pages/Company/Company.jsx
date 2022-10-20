import "./company.css";
import Navbar2 from "../../components/Nav/Navbar";
import { IoLocationOutline, IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline } from "react-icons/io5";
import { Footer } from "../../components/Footer/Footer";
import { BrokerList } from "../../components/BrokerList/BrokerList";
import { Sale } from "../../components/Sale/Sale";
import imobiliária from "../../assets/images/imob1.png";
import { Rent } from "../../components/Rent/Rent";

export function Company() {
    return (
       <div className="Company">
        <Navbar2 />
        <div className="mainCompany">
          <div className="CompanyUnic">
                    <div className="title">
                        <div className="image">
                            <img src={imobiliária} alt="" />
                        </div>
                        <div className="textTitle">
                    <h2>James Estate Agents</h2>
                    <h5><IoLocationOutline /> Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="iconsCompany">
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoCallOutline />
                                <p>(21) 2222-2222</p>
                            </div>
                        </div>
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoLogoWhatsapp />
                                <p>(21) 99999-9999)</p>
                            </div>
                        </div>
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoMailOutline />
                                <p>contato@suachave.com.br</p>
                            </div>
                        </div>                        
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoGlobeOutline />
                                <p>www.suachave.com.br</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="buttonsContactCompany">
                        <button className="btnWhats"><IoLogoWhatsapp />Whatsapp</button>
                        <button className="btnPhone"><IoCallOutline />Ligar</button>
                    </div>
                        </div>
                    </div>
                    {/* <BrokerList /> */}
                </div>
                <Rent />
                <button className="btnCompany">Carregar mais imóveis</button>
        </div>
        <Footer />

       </div>
      )
}