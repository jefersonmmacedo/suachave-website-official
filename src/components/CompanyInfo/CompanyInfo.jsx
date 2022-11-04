﻿import "./companyInfo.css";
import {IoCallOutline, IoLocationOutline, IoLogoWhatsapp, IoMailOutline, IoChatboxEllipsesOutline, IoCloseOutline} from 'react-icons/io5'
import imobiliária from "../../assets/images/imob1.png";
import { useState } from "react";
import Modal from 'react-modal';

export function CompanyInfo() {
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
        <div className="CompanyInfo">
            <div className="image">
                <img src={imobiliária} alt="" />
            </div>
            <h2>Sua Chave Imóveis</h2>
            <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>

            <div className="contact">
                <div className="info">  
                <h4>Contato</h4>           
                    <h5><IoCallOutline /> (21) 2222-2222</h5> 
                    <h5><IoLogoWhatsapp /> (21) 99999-9999</h5>          
                    <h5><IoMailOutline /> contato@suachave.com.br</h5>
                </div>
            </div>
                <divo className="buttonsContact">
                    <button className="btn-whats" onClick={handleOpenModal}><IoLogoWhatsapp /> Whatsapp</button>
                    <button onClick={handleOpenModal}><IoCallOutline /> Ligar</button>
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

                    <button>Entrar em contato</button>

            </div>
            </div>
            </Modal>
        </div>
    )
}