﻿import "./companyInfo.css";
import {IoCall,IoMail, IoLocationOutline, IoLogoWhatsapp, IoMailOutline, IoChatboxEllipsesOutline, IoCloseOutline} from 'react-icons/io5'
import {FaIdCard} from 'react-icons/fa'
import {HiOutlineIdentification} from 'react-icons/hi'
import imobiliária from "../../assets/images/imob1.png";
import { useState } from "react";
import Modal from 'react-modal';

export function CompanyInfo() {
    const [isOpenModal, setIsOpenModa] = useState(false);
    const [isOpenModalPhone, setIsOpenModaPhone] = useState(false);
    function handleOpenModal(e) {
        e.preventDefault();
          setIsOpenModa(true)
        }
      
        function handleCloseModal(e) {
          e.preventDefault();
          setIsOpenModa(false);
        }
  
    function handleOpenModalPhone(e) {
        e.preventDefault();
          setIsOpenModaPhone(true)
        }
      
        function handleCloseModalPhone(e) {
          e.preventDefault();
          setIsOpenModaPhone(false);
        }
  

    Modal.setAppElement('#root');

    return (
        <div className="CompanyInfo">
            <div className="Head">
            <div className="image">
                <img src={imobiliária} alt="" />
            </div>
            <div className="textHead">
            <h4 >Sua Chave Imóveis e consultoria imobiliária</h4>
            <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
            <h5><HiOutlineIdentification />CRECI: <span> 00.000J</span></h5>
            </div>
            </div>

            <div className="contact">
                {/* <div className="info">  
                <h4>Contato</h4>           
                    <h5><IoCall /> (21) 2222-2222</h5> 
                    <h5><IoLogoWhatsapp /> (21) 99999-9999</h5>          
                    <h5><IoMailOutline /> contato@suachave.com.br</h5>
                </div> */}
            </div>
                <divo className="buttonsContact">
                    <button className="btn-whats" onClick={handleOpenModal}><IoLogoWhatsapp /> Whatsapp</button>
                    <button onClick={handleOpenModalPhone}><IoCall /> Ligar</button>
                </divo>



                <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-Message">
            <div className="itensModalMessage">
                    <h2>Fale conosco! </h2>

                    <form action="">
                        <span>Nome</span>
                        <input type="text" placeholder="Nome completo"/>
                        <span>Whatsapp</span>
                        <input type="text" placeholder="(XX)XXXXX-XXXX"/>
                    </form>

                    <button>Ir para Whatsapp</button>

            </div>
            </div>
            </Modal>
                <Modal isOpen={isOpenModalPhone} onRequestClose={handleCloseModalPhone}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalPhone}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-Message">
            <div className="itensModalMessage">
                    <h2>Fale conosco! </h2>

                    <form action="">
                        <span>Nome</span>
                        <input type="text" placeholder="Nome completo"/>
                        <span>Whatsapp</span>
                        <input type="text" placeholder="(XX)XXXXX-XXXX"/>
                    </form>

                    <button>Ir para Ligação</button>

            </div>
            </div>
            </Modal>
        </div>
    )
}