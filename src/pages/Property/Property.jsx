import "./property.css"
import { SliderImages } from '../../components/SliderImages/SliderImages';
import Navbar2 from "../../components/Nav/Navbar";
import {FaBed, FaShower, FaCar, FaBath} from 'react-icons/fa';
import {IoCrop, IoMove, IoArrowBack, IoArrowForward, IoLocationOutline, IoBedOutline, IoCarSportOutline, IoCheckmarkSharp} from 'react-icons/io5';
import {TfiRulerAlt2} from 'react-icons/tfi';
import {MdOutlineShower} from 'react-icons/md';
import {TbBath} from 'react-icons/tb';
import { Footer } from "../../components/Footer/Footer";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import { NewScheduling } from "../../components/NewScheduling/NewScheduling";
import { NewMessageProperty } from "../../components/NewMessageProperty/NewMessageProperty";
import { NewFavorite } from "../../components/NewFavorite/NewFavorite";



export function Property() {

    const data = new Date();
    var text = "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Saquarema RJ&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    return (
       <div className="Property">
        <Navbar2 />
        <div className="main">
          <SliderImages />
          <div className="data">
          <div className="propertyUnic">
            <div className="targets">
            <div className="featured">
                        <p>Novo</p>
                    </div>

                    <NewMessageProperty />
                    <NewScheduling />
                    <NewFavorite />
                     {/* <div className="heart">
                    <IoHeart onClick={handleOpenModal}/>
                    </div> */}
            </div>
                <div className="text">
                    <h2>Lindo apartamento luxuoso</h2>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    {/* <h4>ID: 9fcb1vbb</h4> */}
                    <h4>ID: IMOV-{data.getFullYear()}{data.getMonth()+1}{data.getDate()}{data.getHours()}{data.getMinutes()}</h4>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <h4 className="description">Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.</h4>

                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                            <p>3 Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TbBath />
                            <div className="simbol">
                            <p>3 Suítes</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                            <p>3 Banheiro</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                            <p>2 Vagas</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TfiRulerAlt2 />
                            <div className="simbol">
                                <p>300 M<sup>2</sup></p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCrop />
                            <div className="simbol">
                                <p>150 M<sup>2</sup></p>
                            </div>
                        </div>
                    </div>

                    <div className="characteristics">
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Piscina</p> 
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Sacada</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Sala de estar</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Suíte</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Churrasqueira</p>
                        </div>
                        <div className="item">
                            <IoCheckmarkSharp /> <p>Wifi</p>
                        </div>
                    </div>
                    <div className="infosCompanyMobile">
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ <span>2.000,00</span> / Mês</h2>
                    </div>
                    <div className="otherPrincings">
                        <h5>Condomínio</h5>
                        <h5>R$ 100,00</h5>
                    </div>
                    <div className="otherPrincings">
                        <h5>IPTU</h5>
                        <h5>R$ 150,00</h5>
                    </div>
                    <div className="otherPrincings">
                        <h5>Outros encargos</h5>
                        <h5>R$ 250,00</h5>
                    </div>
                    <div className="pricingTotal">
                        <h4>Total</h4>
                        <h4>R$ 2.500,00</h4>
                    </div>
                    <div className="pricing">
                        <h5>Venda</h5>
                        <h2>R$ <span>200.000,00</span></h2>
                    </div>
                    <CompanyInfo />
                    </div>

                    <div className="video">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/vrLSiAbdXb4" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>


                    <div className="map">
                    {/* <iframe
  width="600"
  height="450"
  style={{border:"0px", borderRadius: "6px"}}
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key="AIzaSyAKKy0iHlEZMQavlxNM5i-tkIYp4q7X_Y0
    &q=Space+Needle,Seattle+WA`}>
</iframe> */}
                    {/* <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src={text}
                    width="100%" height="300" style={{border:"0px", borderRadius: "6px"}} allowFullScreen=""
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12290.419599284141!2d-42.62790332892239!3d-22.711818016034076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1664680466523!5m2!1spt-BR!2sbr"
                    width="100%" height="300" style={{border:"0px", borderRadius: "6px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                </div>

                <div className="infosCompany">
                <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ <span>2.000,00</span> / Mês</h2>
                    </div>
                    <div className="otherPrincings">
                        <h5>Condomínio</h5>
                        <h5>R$ 100,00</h5>
                    </div>
                    <div className="otherPrincings">
                        <h5>IPTU</h5>
                        <h5>R$ 150,00</h5>
                    </div>
                    <div className="otherPrincings">
                        <h5>Outros encargos</h5>
                        <h5>R$ 250,00</h5>
                    </div>
                    <div className="pricingTotal">
                        <h4>Total</h4>
                        <h4>R$ 2.500,00</h4>
                    </div>

                    <div className="pricing">
                        <h5>Venda</h5>
                        <h2>R$ <span>200.000,00</span></h2>
                    </div>
                <CompanyInfo />
                </div>
                </div>
        </div>
        <Footer />


       </div>
      )
}