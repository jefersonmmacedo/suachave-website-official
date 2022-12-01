import "./searchProperty.css";
import { useState } from "react";
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';
import {FaHome, FaBuilding, FaStore} from "react-icons/fa";
import {IoBusiness, IoLocationOutline} from "react-icons/io5";

export function SearchProperty({openModal}) {
    const LocalCity = localStorage.getItem("suachavecity");
    const userCity = JSON.parse(LocalCity);

    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("venda");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [garage, setGarage] = useState("");
    const [restroom, setRestroom] = useState("");


    function handleLinkSearchProperty(e) {
        e.preventDefault()
        window.open(`/imoveis/${status}?tipo=${type}${subType !== "" ? `&subtipo=${subType}` : ""}${bedroom !== "" ? `&quartos=${bedroom}` : ""}${restroom !== "" ? `&banheiros=${restroom}` : ""}${garage !== "" ? `&garagem=${garage}` : ""}`,"_self")
    }

      function handleType(e) {
        setType(e.target.value)
        console.log(e.target.value)
    }
    function handleSubType(e) {
        setSubType(e.target.value)
        console.log(e.target.value)
    }

    function handleBedroom(e) {
        setBedroom(e.target.value)
        console.log(e.target.value)
    }
    function handleRestroom(e) {
        setRestroom(e.target.value)
        console.log(e.target.value)
    }

    function handleGarage(e) {
        setGarage(e.target.value)
        console.log(e.target.value)
    }

      function handleActiveCode(data, status) {
        setCode(data)
        setStatus(status)
      }
    return (
        <div className="SearchProperty">
            <div className="selectButtons">
            <button className={status === "venda" ? "btn" : "btn1"} onClick={() => handleActiveCode(false, "venda")}>Venda</button>
            <button className={status === "aluguel" ? "btn2" : ""} onClick={() => handleActiveCode(false, "aluguel")}>Aluguel</button>
            <button className={status === "codigo" ? "btn3" : "btn4"} onClick={() => handleActiveCode(true, "codigo")}>Código</button>
                </div>   
            <div className="search">
                {code === false ?
                <>
            <select className="primary" value={type} onChange={handleType}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select value={subType} onChange={handleSubType} className={subType === "" ? "" : "select"}>
                        {type === "Residencial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Casa geminada">Casa geminada</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Bangalô">Bangalô</option>
                        <option value="Edícula">Edícula</option>
                        <option value="Flat">Flat</option>
                        <option value="Casa de vila">Casa de vila</option>
                        <option value="Condomínio fechado">Condomínio fechado</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Apartamento duplex">Apartamento duplex</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Cobertura duplex">Cobertura duplex</option>
                        <option value="Loft">Loft</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Mansão">Mansão</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Comercial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Loja">Loja</option>
                        <option value="Conjunto comercial">Conjunto comercial</option>
                        <option value="Ponto comercial">Ponto comercial</option>
                        <option value="Sala Comercial">Sala Comercial</option>
                        <option value="Prédio">Prédio</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Industrial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Galpão">Galpão</option>
                        <option value="Área industrial">Área industrial</option>
                        </>
                        : type === "Rural" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Chácara">Chácara</option>
                        <option value="Fazenda">Fazenda</option>
                        <option value="Sítio">Sítio</option>
                        </>
                        : type === "Terrenos e Lotes" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Área">Área</option>
                        <option value="Terreno/Lote">Terreno/Lote</option>
                        </>
                        :  <option value="">Selecione o tipo</option>
                        }
                    </select>
                    <select value={bedroom} onChange={handleBedroom} className={bedroom === "" ? "" : "select"}>
                        <option value="">Quartos</option>
                        <option value="1">1 Quarto</option>
                        <option value="2">2 Quartos</option>
                        <option value="3">3 Quartos</option>
                        <option value="4">4 Quartos</option>
                        <option value="5">5 Quartos</option>
                        <option value="6">6 Quartos</option>
                        <option value="7">7 Quartos</option>
                        <option value="8">8 Quartos</option>
                        <option value="9">9 Quartos</option>
                        <option value="10">10 Quartos</option>
                    </select>

                    <select value={restroom} onChange={handleRestroom} className={restroom === "" ? "" : "select"}>
                        <option value="">Banheiros</option>
                        <option value="1">1 Banheiro</option>
                        <option value="2">2 Banheiros</option>
                        <option value="3">3 Banheiros</option>
                        <option value="4">4 Banheiros</option>
                        <option value="5">5 Banheiros</option>
                        <option value="6">6 Banheiros</option>
                        <option value="7">7 Banheiros</option>
                        <option value="8">8 Banheiros</option>
                        <option value="9">9 Banheiros</option>
                        <option value="10">10 Banheiros</option>
                    </select>

                    <select value={garage} onChange={handleGarage} className={garage === "" ? "" : "select"}>
                        <option value="">Vagas de garagem</option>
                        <option value="1">1 Vaga de garagem</option>
                        <option value="2">2 Vagas de garagem</option>
                        <option value="3">3 Vagas de garagem</option>
                        <option value="4">4 Vagas de garagem</option>
                        <option value="5">5 Vagas de garagem</option>
                        <option value="6">6 Vagas de garagem</option>
                        <option value="7">7 Vagas de garagem</option>
                        <option value="8">8 Vagas de garagem</option>
                        <option value="9">9 Vagas de garagem</option>
                        <option value="10">10 Vagas de garagem</option>
                    </select>
                </>
                    :
                    <input type="text" className="primary" placeholder="Digite o código" />
                }
          
                     <button onClick={handleLinkSearchProperty}>Buscar</button>
            </div>

            {userCity === null || userCity === undefined || userCity === "" ? 
            <div className="textLocation">
                <button onClick={openModal}>Definir cidade</button>
            </div>
             : 
             <div className="textLocation">
             <h4><IoLocationOutline /> {userCity.city} - {userCity.uf}</h4> 
             <button onClick={openModal}>Alterar</button>
         </div>
             }

        </div>
    )
}
