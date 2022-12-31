import "./home.css";
import Navbar2 from "../../components/Nav/Navbar";
import Modal from 'react-modal';
import { useState } from "react";
import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { Footer } from "../../components/Footer/Footer";
import { SliderHome } from "../../components/SliderHome/SliderHome";
import {  PropertyCarroussel } from "../../components/PropertyCarroussel/PropertyCarroussel";
import { DownloadApp } from "../../components/DownloadApp/DownloadApp";
import { Cities } from "../../components/Cities/Cities";
import { ExploreIconsProperties } from "../../components/ExploreIconsProperties/ExploreIconsProperties";
import { IoBusiness, IoCloseOutline, IoSearch, IoPersonCircleOutline, IoCheckboxOutline } from "react-icons/io5";
import { ToHire } from "../../components/ToHire/ToHire";
import { FaBuilding, FaHome, FaStore } from "react-icons/fa";
import { Finance } from "../../components/Finance/Finance";
import { TopHeadHome } from "../../components/TopHeadHome/TopHeadHome";
import { ProcessProperty } from "../../components/ProcessProperty/ProcessProperty";


export function Home() {
    const [isOpenModalSearchProperty, setIsOpenModaSearchProperty] = useState(false);

    function handleOpenModalSearchProperty(e) {
      e.preventDefault();
      console.log("Olá")
        setIsOpenModaSearchProperty(true)
      }
    
      function handleCloseModalSearchProperty(e) {
        e.preventDefault();
        setIsOpenModaSearchProperty(false);
      }


    Modal.setAppElement('#root');

    return (
        <div className="Home">
            <Navbar2 />
            {/* <SliderHome />
            <div className="searchView">
            <SearchProperty openModal={handleOpenModalSearchProperty}/>
            </div> */}
            <TopHeadHome />
            {/* <div className="searchViewButton">
            <button onClick={handleOpenModalSearchProperty}><IoSearch/>Buscar Imóveis</button>
            </div> */}
            {/* <div className="iconsHomeProperties">
                <div className="unic">
                    <FaHome />
                    Casas
                </div>
                <div className="unic">
                    <FaBuilding />
                    Apartamentos
                </div>
                <div className="unic">
                    <IoBusiness />
                    Salas Comercais
                </div>
                <div className="unic">
                    <FaStore />
                    Lojas
                </div>
            </div> */}
           <ExploreIconsProperties />
            <div className="textFeature">
            <h3>Imóveis à venda</h3>
            </div>

            <div className="carroussel">
            <PropertyCarroussel status={"Venda"}/>
            </div>
            
            <div className="textFeature">
            <h3>Imóveis para alugar</h3>
            </div>
            <div className="carroussel">
            <PropertyCarroussel status={"Aluguel"}/>
            </div>
            <Finance />
         
            <Cities />
            <ToHire />
            <DownloadApp />
            <Footer />

            <Modal isOpen={isOpenModalSearchProperty} onRequestClose={handleCloseModalSearchProperty}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalSearchProperty}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-home-Search">
            <div className="itensModalHome-Search">
                <SearchProperty />
            </div>
            </div>
            </Modal>

        </div>
    )
}