import "./about.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import {IoPlayCircle, IoLogoWhatsapp, IoHome, IoQrCodeOutline, IoIdCardOutline, IoPhonePortraitOutline,
        IoLayersOutline, IoChatbubblesOutline, IoCropOutline, IoLaptopOutline, IoMailOpenOutline, IoCallOutline, IoCloseOutline, IoCalendarOutline, IoHomeOutline, IoOptionsOutline, IoChatboxEllipsesOutline} from "react-icons/io5"
import { Plains } from "../../components/Plains/Plains";
import SmartPhone from "../../assets/images/iphone.png";
import Modal from 'react-modal';
import { useState } from "react";
import imgFamily from "../../assets/images/background2.jpg"
import Mackbook from "../../assets/images/Mockup.png"
import { FaHouseUser } from "react-icons/fa";

export function About() {
    const [isOpenModal, setIsOpenModa] = useState(false);

    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false);
      }

    Modal.setAppElement('#root');

    return (
<div className="About">
    <Navbar2 />
    <div className="MainAbout">
            <div className="bloco">
                <div className="imageAbout">
                    <div className="imgBlock">
                  <img src={imgFamily} alt="" />
                    </div>
                </div>
                <div className="textAbout">
                    <h1>Seja bem-vindo.<br /><span>O Sua Chave é para você</span></h1>
                    <h3>Somos uma start-up criada para imobiliárias e corretores, <br />
                    com foco em conectar seus imóveis a novos clientes.</h3>

                    <div className="buttonsText">
                        {/* <button onClick={handleOpenModal}><IoPlayCircle /> Clique e conheça nossa empresa</button> */}
                        <button className="btn" onClick={handleOpenModal}><IoLogoWhatsapp /> Falar com time Comercial</button>
                    </div>
                </div>
        </div>
        <div className="textPricing">
        <h1>Porque escolher o <span>Sua Chave</span>?</h1>
        <h4>Veja os motivos que faz nossos clientes nos escolherem e o que podemos agregar ao seu negócio.</h4>
    </div>
        <div className="WhyChoose">
            <div className="IconsWhyChoose">
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoLayersOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Totalmente funcional</h2>
                    <h4>Design moderno, fácil utilização com foco nas imagens e informações</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoChatbubblesOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Chat único por anúncio</h2>
                    <h4>Seu cliente conversa com você em uma aba específica por anúncio</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoCropOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Design responsivo</h2>
                    <h4>Você e seu cliente acessam o nosso site de qualquer dispositivo facilmente</h4>
                    </div>
                </div>
            </div>
            <div className="WhyChooseImage">
                <img src={SmartPhone} alt="" />
            </div>
            <div className="IconsWhyChoose">
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoPhonePortraitOutline />
                    </div>
                    <div className="IconsWhyText">
                        <h2>Aplicativo administrativo</h2>
                        <h4>Controle seu negócio de qualquer lugar a qualquer hora [Em breve...]</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoLaptopOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Site para o seu negócio</h2>
                    <h4>Tenha o site do seu negócio totalmente integrado ao nosso site</h4>
                    </div>
                </div>
                <div className="IconsWhyChooseUnic">
                    <div className="iconSvg">
                        <IoPhonePortraitOutline />
                    </div>
                    <div className="IconsWhyText">
                    <h2>Aplicativo para o seu negócio</h2>
                    <h4>Tenha o aplicativo do seu negócio totalmente integrado ao nosso site [Em breve...]</h4>
                    </div>
                </div>
            </div>
        </div>

    <div className="howItWorks">
        <h1>Como funciona o Sua Chave ?</h1>
        <h4>Nossos serviços tem como foco conectar os imóveis de nossos parceiros a clientes interessados.
            <br />
        Utilizando ferramentas de marketing, geolocalização e integrações, trazendo mais objetividade nas ofertas de propriedades.</h4>
        <div className="iconsWorks">
            <div className="iconWork">
                <IoIdCardOutline />
                <h3>Cadastre-se</h3>
                <h4>Realize seu cadastro para imobiliária ou corretor de forma rápida e objetiva.</h4>
            </div>
            <div className="iconWork">
                <IoQrCodeOutline />
                <h3>Escolha seu plano</h3>
                <h4>Escolha o pacote que mais se adequa ao momento atual de seu negócio</h4>
            </div>
            <div className="iconWork">
                <IoHome />
                <h3>Adicione seus imóveis</h3>
                <h4>Cadastre seus imóveis e aproveite nossas ferramentas para alcancar mais clientes </h4>
            </div>
        </div>
    </div>

    <div className="beneficies">
        <div className="imageDashboard">
            <img src={Mackbook} alt="" />
        </div>
        <div className="textDashboardAbout">
        <h2>Controle <span>completo</span> <br /> para sua <span>imobiliária</span>:</h2>
                <div className="itensToHireAbout">
                    <div className="ToHireUnicAbout">
                    <IoHomeOutline />
                        <h4>Anúncios ilimitados</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                    <IoCalendarOutline />
                        <h4>Agenda de visitas</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                        <IoOptionsOutline />
                        <h4>Controle de alugueis e vendas</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                        <IoHomeOutline />
                        <h4>Imóveis para avaliação</h4>
                    </div>
                    <div className="ToHireUnicAbout">
                    <IoChatboxEllipsesOutline />
                        <h4>Chat único por anúncio</h4>
                    </div>

                    <a href="/cadastro-profissional">Quero digitalizar minha imobiliária</a>
                </div>
        </div>
    </div>
    <div className="textPricing">
        <h1>Escolha o <span>plano ideal</span> para o seu negócio</h1>
        <h4>Temos um plano cara cada momento do seu negócio. Acesse o link a abaixo e confira:</h4>
    </div>
    <div className="buttonsPlainsAbout">
        <a href="/planos"><IoQrCodeOutline /> Conheça nossos planos</a>
    </div>
        <div className="textPricing">
        <h1>Fale com <span>nossa equipe</span></h1>
        <h4>Entre em contato conosco, estamos prontos para atendê-lo.</h4>
    </div>
    
        <div className="BlocksContact">
        <button className="btn" onClick={handleOpenModal}><IoLogoWhatsapp /> Falar com time Comercial</button>
            </div> 
    </div>
    <Footer />


    <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal">
   
    <iframe width="100%" height="400" src="https://www.youtube-nocookie.com/embed/YODMbyiUng4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
            </Modal>


</div>
    )
}