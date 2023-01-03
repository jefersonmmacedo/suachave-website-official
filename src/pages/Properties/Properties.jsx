import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { ListProperty } from "../../components/ListProperty/ListProperty";
import { SearchPropertyListing } from "../../components/SearchPropertyHomeTop/SearchPropertyHomeTop";
import { Footer } from "../../components/Footer/Footer";
import { FiArrowUpCircle } from "react-icons/fi";
import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { IoClose, IoCloseOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { useState } from "react";
import { useParams, useLocation, useSearchParams, useRoutes} from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import notFoundImage from "../../assets/images/svg/404property.svg";
import { PropertyUnicBlockLoader } from "../../components/PropertyUnicBlockLoader/PropertyUnicBlockLoader";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlock } from "../../components/PropertyUnicBlock/PropertyUnicBlock";
import api from "../../services/api";
import { useEffect } from "react";

export function Properties(){
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);
    const {status} = useParams();
    const query = useQuery();
    
    const [isOpenModalSearch, setIsOpenModaSearch] = useState(false);
    const [statusProperty, setStatusProperty] = useState(status);
    const [citySelected, setCitySelected] = useState("");
    const [ufSelected, setUfSelected] = useState("");




    const availability = "Disponível";
    const [type, setType] = useState(query.get("tipo") === null ? "" : query.get("tipo"));
    const [subType, setSubType] = useState(query.get("subtipo") === null ? "" : query.get("subtipo"));
    const [bedroom, setBedroom] = useState(query.get("quartos") === null ? "0" : query.get("quartos"));
    const [garage, setGarage] = useState(query.get("garagem") === null ? "0" : query.get("garagem"));
    const [suite, setSuite] = useState(query.get("suites") === null ? "0" : query.get("suites"));
    const [restroom, setRestroom] = useState(query.get("banheirtos") === null ? "0" : query.get("banheirtos"));
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(false);

    const [city, setCity] = useState(status === undefined ? "" : query.get("city") !== null ? query.get("city") : "");
    const [uf, setUf] = useState( status === undefined ? "" : query.get("uf") !== null ? query.get("uf") : "");

    const [city2, setCity2] = useState([])
    const [uf2, setUf2] = useState([])

    var cityList = [];
    var ufList = [];

    useEffect(() => {
        async function loadProperties() {
            await api.get(`/property/all/${availability}`).then((res) => {
                res.data?.forEach((item) => {
                    var duplicated  = cityList.findIndex(redItem => {
                        return item.city == redItem.city;
                    }) > -1;
                
                    if(!duplicated) {
                        cityList.push(item);
                        setCity2(oldDistancia => [...oldDistancia, item])
                    }
                });
            })
        }

        loadProperties()
    },[])
        


    const cityOffUf =citySelected?.slice(-5);
    const cityNew = citySelected.replace(cityOffUf, "");
    const ufNew = citySelected?.slice(-2);


    function handleSelectAddress(e) {
        setCitySelected(e.target.value)
        console.log(e.target.value)
      }


    const {data} = useFetch(
        type !== "" && subType !== "" ?
        `property/listsadressfull/${availability}/${statusProperty}?city=${city === "" ? cityNew : city}&uf=${uf === "" ? ufNew : uf}&type=${type}&subType=${subType}&bedroom=${bedroom}&restroom=${restroom}&garage=${garage}&suite=${suite}`
        :statusProperty === undefined ?
        `/property/all/${availability}`
        :
        statusProperty !== undefined && city === "" && uf === "" ?
        `/property/lists/${availability}/${statusProperty}`
        :
        statusProperty !== undefined && city !== "" && uf !== "" ?
        `/property/listsadress/${availability}/${statusProperty}?city=${city}&uf=${uf}`
       :"");

        function handleNewSearchProperty(e) {
            e.preventDefault();
            window.open(`/imoveis/${status}?city=${city}&uf=${uf}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}`,"_self");
        }


    if(data) {
       console.log(data)
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

    function handleTop(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
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

    function handleClearAddress(e) {
        e.preventDefault();
        setUf("")
        setCity("")
    }
    function handleClearItens(e) {
        e.preventDefault();
        setUf("")
        setCity("")
        setStatusProperty(status)
        setType("")
        setSubType("")
        setBedroom("0")
        setSuite("0")
        setRestroom("0")
        setGarage("0")
        setSearch("")
    }

    const statusSelected = statusProperty === "" ? status : statusProperty
    const searchLower = search.toLowerCase()
    const SearchProperty =  data?.filter((property) => property.title.toLowerCase().includes(searchLower)
                        || property.district.toLowerCase().includes(searchLower)
                        )

    function handleOpenModalSearch(e) {
        e.preventDefault();
          setIsOpenModaSearch(true)
        }
      
        function handleCloseModalSearch(e) {
          e.preventDefault();
          setIsOpenModaSearch(false);
        }

        Modal.setAppElement('#root');
    
    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
          
        <div className="ListProperty">
        <div className="topList">
        <div className="textItens">
            {data.length === 0 ?
                ""                   
            : data.length === 1 ?
            <h3>{data.length} {statusProperty === "Venda" ? `imóvel à ${statusProperty}` : `imóvel para ${statusProperty}`}</h3>
            : status === undefined ?
            <h3>{data.length} Imóveis disponíveis</h3>
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
                <input type="text" placeholder="Digite a Cidade ou Estado(UF)" list="brow" value={citySelected} onChange={handleSelectAddress} />
                    <datalist id="brow" >
                    {city2?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={`${district.city} - ${district.uf}`}>{district.city} - {district.uf}</option>
                            )
                        })}
                    </datalist>
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

                <div className="dataSelectsButtonsAction">
                    <button  onClick={handleNewSearchProperty}><IoSearchOutline /> Buscar</button>
                    <button className="btn" onClick={handleClearItens}><IoClose /> Limpar</button>
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
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />


        <Modal isOpen={isOpenModalSearch} onRequestClose={handleCloseModalSearch}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalSearch}>
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
