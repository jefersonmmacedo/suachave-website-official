import "./company.css";
import Navbar2 from "../../components/Nav/Navbar";
import { IoLocationOutline, IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoGlobeOutline, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { Footer } from "../../components/Footer/Footer";
import { BrokerList } from "../../components/BrokerList/BrokerList";
import imobiliária from "../../assets/images/imob1.png";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export function Company({ìd}) {
    const {id} = useParams()
    const {data} = useFetch(`/company/unic/${id}`);

    if(!data) {
        return (
            <>Carregando...</>
        )
    }


    return (
       <div className="Company">
        <Navbar2 />
        <div className="mainCompany">
          <div className="CompanyUnic">
                    <div className="title">
                        <div className="image">
                            <img src={data[0].logo} alt="" />
                        </div>
                        <div className="textTitle">
                    <h2>{data[0].fantasyName}</h2>
                    <h5><IoLocationOutline /> {data[0].road}, Nº {data[0].number} - {data[0].district} - {data[0].city} - {data[0].uf}</h5>
                    <div className="iconsCompany">
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoCallOutline />
                                <p>{data[0].phone}</p>
                            </div>
                        </div>
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoLogoWhatsapp />
                                <p>{data[0].whatsapp}</p>
                            </div>
                        </div>
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoMailOutline />
                                <p>{data[0].email}</p>
                            </div>
                        </div>                        
                        <div className="iconCompanyUnic">
                            <div className="simbol">
                                <IoGlobeOutline />
                                <p>{data[0].website}</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="network">
                        <a href={data[0].facebook}>
                                <button className="networkButton"><IoLogoFacebook/></button>
                        </a>
                        <a href={data[0].instagram}>
                                <button className="networkButton"><IoLogoInstagram/></button>
                        </a>
                        <a href={data[0].linkedin}>
                                <button className="networkButton"><IoLogoLinkedin/></button>
                        </a>
                        <a href={data[0].youtube}>
                                <button className="networkButton"><IoLogoYoutube/></button>
                        </a>
                            </div>
                    <div className="buttonsContactCompany">
                        <button className="btnWhats"><IoLogoWhatsapp />Whatsapp</button>
                        <button className="btnPhone"><IoCallOutline />Ligar</button>
                    </div>
                        </div>
                    </div>
                    {/* <BrokerList /> */}
                </div>
                <button className="btnCompany">Carregar mais imóveis</button>
        </div>
        <Footer />

       </div>
      )
}