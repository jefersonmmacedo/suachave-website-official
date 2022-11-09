﻿import "./footer.css";
import logo from '../../assets/images/Logo2.png';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube} from 'react-icons/io5';
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";


export function Footer() {

    const date = new Date().getFullYear();
    return (
        <div className="Footer">
                <div className="sections">
                        <div className="sectionUnic">
                        <a href="/"><img src={logo} alt="" /></a>
                            <h5> <b>Encontre imóveis, imobiliárias e corretores em poucos cliques!</b> </h5>
                        </div>
                        <div className="sectionUnic">
                            <h3>SUA CHAVE</h3>
                                <h5><a href="/sobre">Sobre nós</a></h5>
                                {/* <h5><a href="/sobre">Blog</a></h5> */}
                                <h5><a href="/imoveis/all">Imóveis</a></h5>
                                <h5><a href="/imobiliarias">Imobiliárias</a></h5>
                                <h5><a href="/corretores">Corretores</a></h5>
                                <h5><a href="/financiamento">Financiamento</a></h5>
                                <h5><a href="/planos">Planos</a></h5>
                        </div>
                        <div className="sectionUnic">
                            <h3>CENTRAL DE AJUDA</h3>
                            <h5><a href="/faq">Faq</a></h5>
                            <h5><a href="/termos">Termos de uso</a></h5>
                            <h5><a href="/privacidade">Política de privacidade</a></h5>
                            <h5><a href="/faleconosco">Fale conosco</a></h5>
                            <br />
                            {/* <h3>ATENDIMENTO</h3>
                            <h5><IoCallOutline />(21) 99742-9585</h5>
                            <h5><IoLogoWhatsapp />(21) 99742-9585</h5>
                            <h5><IoMailOutline />contato@suachave.com.br</h5> */}
                        </div>
                        <div className="sectionUnic">
                        <h3>ATENDIMENTO</h3>
                            <h5><IoCallOutline />(21) 99742-9585</h5>
                            <h5><IoLogoWhatsapp />(21) 99742-9585</h5>
                            <h5><IoMailOutline />contato@suachave.com.br</h5>
                            <br />
                            <h3> SIGA-NOS</h3>
                            <div className="network">
                                <button className="networkButton"><IoLogoFacebook/></button>
                                <button className="networkButton"><IoLogoInstagram/></button>
                                <button className="networkButton"><IoLogoTwitter/></button>
                                <button className="networkButton"><IoLogoLinkedin/></button>
                                <button className="networkButton"><IoLogoYoutube/></button>
                            </div>
                            {/* <h3>BAIXE AGORA:</h3>
                            <div className="apps">
                                <div className="app">
                                <h5>Clientes</h5>
                                <div className="logos">
                                <a href="/"><img src={google} alt="" /></a>       
                                <a href="/"><img src={apple} alt="" /></a>       
                                </div>
                                </div>
                                <div className="app">
                                <h5>Imobiliária</h5>
                                <div className="logos">
                                <a href="/"><img src={google} alt="" /></a>       
                                <a href="/"><img src={apple} alt="" /></a>         
                                </div>
                                </div>
                            </div> */}
                        </div>
                </div>
                <div className="copy">
                    <h5>© Sua Chave {date}. Todos os direitos reservados</h5>
                    {/* <h5>Desenvolvido e mantido por: <a href="https://www.codingit.com.br/" target="_Blank">Coding It</a></h5> */}
                </div>
        </div>
    )
}
