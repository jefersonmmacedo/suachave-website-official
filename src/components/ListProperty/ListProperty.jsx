import "./listProperty.css";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { IoClose, IoLocationOutline, IoSearch} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { PropertyUnicBlockLoader } from "../PropertyUnicBlockLoader/PropertyUnicBlockLoader";


export function ListProperty({status, tipo, subtipo, quartos, suites, banheiros, garagem}) {
    const LocalCity = localStorage.getItem("suachavecity");
    const userCity = JSON.parse(LocalCity);

    const availability = "Disponível";
    const [statusProperty, setStatusProperty] = useState("");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [garage, setGarage] = useState("");
    const [suite, setSuite] = useState("");
    const [restroom, setRestroom] = useState("");
    const [filter, setFilter] = useState(false);

    console.log(status, tipo, subtipo, quartos, suites, banheiros, garagem)

    const {data} = useFetch(`/property/lists/${availability}/${status}`);

    if(!data) {
        return (
            <div className="loader">
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            </div>
        )
    }

    function handleStatusProperty(e) {
        setStatusProperty(e.target.value)
        console.log(e.target.value)
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
    function handleSuite(e) {
        setSuite(e.target.value)
        console.log(e.target.value)
    }
    function handleGarage(e) {
        setGarage(e.target.value)
        console.log(e.target.value)
    }

    function handleFiltro(e) {
        e.preventDefault();

        setFilter(!filter)
        console.log(!filter)
    }
    return (
        <div className="ListProperty">
            <div className="topList">
            <siv className="textItens">
                    <h3>{data.length} {status === "Venda" ? `imóveis à ${status}` : `imóveis para ${status}`}</h3>

                    {userCity === null || userCity === undefined || userCity === "" ? 
                    <div className="textLocation">
                        {/* <button onClick={openModal}>Definir cidade</button> */}
                        <button >Definir cidade</button>
                    </div>
                    : 
                    <div className="textLocation">
                    <h5><IoLocationOutline /> {userCity.city} - {userCity.uf}</h5> 
                    {/* <button onClick={openModal}>Alterar</button> */}
                    <button >Alterar</button>
                    </div>
                    }
                </siv>
            <button onClick={handleFiltro}>Filtro +</button>
            </div>



            <div className={filter === true ? "searchItens" : "searchItensNone"}>
                <div className="buttons">
                <button onClick={handleFiltro}>X</button>
                </div>
                <div className="searchOptions">
                    <div className="dataSearchOptions">
                    
                    <div className="dataSelectsButtons">
                     <button className={status === "Aluguel" ? "" : "btn"}>Para Alugar</button>
                     <button className={status === "Venda" ? "" : "btn"}>À venda</button>
                     </div>
                     
                     <div className="dataSelects">
                       <input type="search" placeholder="Digite bairro ou cidade" />
                    </div>
                     
                     <div className="dataSelects">
                     <h4>Tipo:</h4>
                    <select value={type} onChange={handleType} className={type === "" ? "" : "select"}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    </div>
                     
                     <div className="dataSelects">
                     <h4>Subtipo:</h4>
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
                    </div>
                    
                    <div className="dataSelects">
                        <h4>Quartos: </h4>
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
                    </div>
                    
                    <div className="dataSelects">
                    <h4>Banheiros: </h4>
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
                    </div>
                    
                    <div className="dataSelects">
                    <h4>Garagem: </h4>
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
                    </div>

                    <div className="dataSelectsButtons">
                        <button><IoSearch /> Buscar</button>
                        <button className="btn"><IoClose /> Limpar</button>
                </div>
                    </div>
                </div>
            </div>
            <div className="itens">
            
            {data?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}
                
                </div>        
        </div>
    )
}