import "./listProperty.css";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { IoClose, IoLocationOutline, IoSearch} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { PropertyUnicBlockLoader } from "../PropertyUnicBlockLoader/PropertyUnicBlockLoader";
import buscaDistrito from "../../services/api-buscaDistrito";
import { toast } from 'react-toastify';
import notFoundImage from "../../assets/images/svg/404property.svg";


export function ListProperty({status, tipo, city, uf, subtipo, quartos, suites, banheiros, garagem}) {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const availability = "Disponível";
    const [statusProperty, setStatusProperty] = useState(status);
    const [type, setType] = useState(tipo === null ? "" : tipo);
    const [subType, setSubType] = useState(subtipo === null ? "" : subtipo);
    const [bedroom, setBedroom] = useState(quartos === null ? "0" : quartos);
    const [garage, setGarage] = useState(garagem === null ? "0" : garagem);
    const [suite, setSuite] = useState(suites === null ? "0" : suites);
    const [restroom, setRestroom] = useState(banheiros === null ? "0" : banheiros);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(false);

    const [city2, setCity2] = useState(city !== null ? city : user !== null ? user?.city : "");
    const [districtAll, setDistrictAll] = useState([]);
    const [uf2, setUf2] = useState( uf !== null ? uf : user !== null ? user?.uf : "");

    console.log(status, uf, city, tipo, subtipo, quartos, suites, banheiros, garagem);
    console.log(status, type, subType, bedroom, suite, restroom, garage);



    const {data} = useFetch(
        `/property/listsadressfull/${availability}/${statusProperty}?city=${city2}&uf=${uf2}&tipo=${tipo === null ? type : tipo }&subtipo=${subtipo === null ? subType : subtipo}&bedroom=${quartos === null ? bedroom : quartos}&suite=${suites === null ? suite : suites}&restroom=${banheiros === null ? restroom : banheiros}&garage=${garagem === null ? garage : garagem}`
        );
     console.log(
        `/property/listsadressfull/${availability}/${statusProperty}?city=${city2}&uf=${uf2}&tipo=${tipo === null ? type : tipo }&subtipo=${subtipo === null ? subType : subtipo}&bedroom=${quartos === null ? bedroom : quartos}&suite=${suites === null ? suite : suites}&restroom=${banheiros === null ? restroom : banheiros}&garage=${garagem === null ? garage : garagem}`
        )

        function dataInfos(e) {
            e.preventDefault();
         
           console.log(`/property/lists/${availability}/${statusProperty}?tipo=${tipo === null ? type : tipo }&subtipo=${subtipo === null ? subType : subtipo}&bedroom=${quartos === null ? bedroom : quartos}&suite=${suites === null ? suite : suites}&restroom=${banheiros === null ? restroom : banheiros}&garage=${garagem === null ? garage : garagem}`)
        }


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

        
    async function handleSearchDistrict(ufSelect) {
        console.log(ufSelect)
        try {
          const res = await buscaDistrito.get(`${ufSelect}/distritos`) 
            console.log(res.data)
            setDistrictAll(res.data)
            console.log(res.data[0].municipio.nome);
            return;
          }catch{
            console.log("error")
            toast.error("Escolha um estado e clica em buscar cidades")
        }
        return
    }

    if(districtAll) {
        districtAll.sort(function(a,b) {
            if(a.nome < b.nome ) {
                return -1
            } else {
                return true
            }
        })
        }

        
    function handleSetectCity(e) {
        setCity2(e.target.value)
        console.log(e.target.value)
      }
      function handleSetectUf(e) {
        setUf2(e.target.value)
        console.log(e.target.value)
        handleSearchDistrict(e.target.value)
      }



    function handleNewStatus(data) {
        setStatusProperty(data)
        console.log(data)
    }
    function handleType(e) {
        setType(e.target.value)
        setSubType("")
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

      console.log(subType)

    const statusSelected = statusProperty === "" ? status : statusProperty
    const searchLower = search.toLowerCase()
    const SearchProperty =  data?.filter((property) => property.title.toLowerCase().includes(searchLower)
                        || property.district.toLowerCase().includes(searchLower)
                        )

    return (
        <div className="ListProperty">
            <div className="topList">
            <div className="textItens">
                {data.length === 0 ?
                    ""                   
                : data.length === 1 ?
                <h3>{data.length} {statusProperty === "Venda" ? `imóvel à ${statusProperty}` : `imóvel para ${statusProperty}`}</h3>
                :
                <h3>{data.length} {statusProperty === "Venda" ? `imóveis à ${statusProperty}` : `imóveis para ${statusProperty}`}</h3>
                }
                </div>
            <button onClick={handleFiltro}>Filtro +</button>
            </div>



            <div className={filter === true ? "searchItens" : "searchItensNone"}>
                <div className="buttons">
                <button onClick={handleFiltro}>X</button>
                </div>
                <div className="searchOptions">
                    <div className="dataSearchOptions">
                    
                    <div className="dataSelectsButtons">
                     <button className={statusSelected === "Aluguel" ? "" : "btn"} onClick={() => handleNewStatus("Aluguel")}>Para Alugar</button>
                     <button className={statusSelected === "Venda" ? "" : "btn"} onClick={() => handleNewStatus("Venda")}>À venda</button>
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
                        :  <option value="">{subType === "" ? "Selecione o tipo" : subType}</option>
                        }
                    </select>
                    </div>
                    
                    <div className="dataSelects">
                        <h4>Quartos: </h4>
                    <select value={bedroom} onChange={handleBedroom} className={bedroom === "0" ? "" : "select"}>
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
                    <h4>Suítes: </h4>
                    <select value={suite} onChange={handleSuite} className={suite === "0" ? "" : "select"}>
                        <option value="">Suítes</option>
                        <option value="1">1 Suíte</option>
                        <option value="2">2 Suítes</option>
                        <option value="3">3 Suítes</option>
                        <option value="4">4 Suítes</option>
                        <option value="5">5 Suítes</option>
                        <option value="6">6 Suítes</option>
                        <option value="7">7 Suítes</option>
                        <option value="8">8 Suítes</option>
                        <option value="9">9 Suítes</option>
                        <option value="10">10 Suítes</option>
                    </select>
                    </div>
                    
                    <div className="dataSelects">
                    <h4>Banheiros: </h4>
                    <select value={restroom} onChange={handleRestroom} className={restroom === "0" ? "" : "select"}>
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
                    <select value={garage} onChange={handleGarage} className={garage === "0" ? "" : "select"}>
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

                    <div className="dataSelects">
                       <input type="search" placeholder="Digite bairro ou título" className={search === "" ? "" : "selectInput"}
                        value={search.toLowerCase()} onChange={e => setSearch(e.target.value)}/>
                    </div>

                    <div className="textLocation">
                <h4>Local:</h4>
                <select value={uf2} onChange={handleSetectUf}> 
                            <option value="">Escolha seu estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>     
                    </select>
                    <select value={city2} onChange={handleSetectCity}> 
                    {districtAll.length === 0 ?
                    <option value={city}>{city}</option>
                    :
                    <>
                    <option value="">Escolha sua cidade</option>
                    {districtAll?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={district.nome}>{district.nome}</option>
                            )
                        })}
                    </>
                    }     
                    </select>
            </div>

                    <div className="dataSelectsButtonsAction">
                        <button onClick={dataInfos}><IoSearch /> Buscar</button>
                        <button className="btn"><IoClose /> Limpar</button>
                </div>
                    </div>
                </div>
            </div>
            {SearchProperty?.length > 0 ?
             <div className="itens">
                {SearchProperty?.map((property) => {
                        return (
                            <PropertyUnicBlock id={property.id} key={property.id}/>
                        )
                    })}
                </div> 
                :
                    <div className="MainAbout">
                        <img src={notFoundImage} alt="" />
                        <h3>Nenhum imóvel localizado</h3>
                    </div>
                

            }

                  
        </div>
    )
}