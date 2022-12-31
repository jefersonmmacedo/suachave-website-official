import "./searchPropertyHomeTop.css";
import { useState } from "react";
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';
import {FaHome, FaBuilding, FaStore} from "react-icons/fa";
import {IoSearch, IoLocationOutline} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";

export function SearchPropertyHomeTop({openModal}) {
    const LocalCity = localStorage.getItem("suachavecity");
    const userCity = JSON.parse(LocalCity);
    const [uf, setUf] = useState(userCity === null || userCity === undefined || userCity === ""? "" : userCity.uf);
    const [city, setCity] = useState(userCity === null || userCity === undefined || userCity === ""? "" : userCity.city);
    const [districtAll, setDistrictAll] = useState([]);
    const [professional, setProfessional] = useState("");
    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("venda");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [garage, setGarage] = useState("");
    const [restroom, setRestroom] = useState("");

    const [citySelected, setCitySelected] = useState("");
    const [ufSelected, setUfSelected] = useState("");

    console.log(uf)
    console.log(city)
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
            toast.error("Escolha um estado e clica em buscar cidades");
        }
        return
    }

    const availability = "Disponível";
    const {data} = useFetch(`/property/all/${availability}`);

    if(data) {
        console.log(data);
    }

    var cityList = [];
    var ufList = [];

    data?.forEach((item) => {
        var duplicated  = cityList.findIndex(redItem => {
            return item.city == redItem.city;
        }) > -1;
    
        if(!duplicated) {
            cityList.push(item);
        }
    });
    
    data?.forEach((item) => {
        var duplicated  = ufList.findIndex(redItem => {
            return item.uf == redItem.uf;
        }) > -1;
    
        if(!duplicated) {
            ufList.push(item);
        }
    });
    
    console.log("cityList");
    console.log(cityList);
    console.log("ufList");
    console.log(ufList);

    const filterCity = cityList.filter((item) => item.uf === ufSelected);



    if(ufList) {
        ufList.sort(function(a,b) {
            if(a.uf < b.uf ) {
                return -1
            } else {
                return true
            }
        })
        }

    if(filterCity) {
        filterCity.sort(function(a,b) {
            if(a.city < b.city ) {
                return -1
            } else {
                return true
            }
        })
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


    function handleSetectCity(e) {
        setCity(e.target.value)
        console.log(e.target.value)
      }
      function handleSetectUf(e) {
        setUf(e.target.value)
        console.log(e.target.value)
        handleSearchDistrict(e.target.value)
      }
      function handleSearchProfessional(e) {
        console.log(e.target.value)
        toast.info(`Você escolheu: ${professional}, na cidade ${city} - ${uf}`)
        const suachave = {
            city: city,
            uf: uf,
          };

        localStorage.setItem("suachavecity", JSON.stringify(suachave));
      }

      function handleActiveCode(data, status) {
        setCode(data)
        setStatus(status)
      }

      function handleSetectUfSelected(e) {
        setUfSelected(e.target.value)
        console.log(e.target.value)
      }

      function handleSetectCitySelected(e) {
        setCitySelected(e.target.value)
        console.log(e.target.value)
      }

        function handleClearAddress(e) {
            e.preventDefault();
            setUf("")
            setCity("")
            setUfSelected("")
            setCitySelected("")
        }


    return (
        <div className="SearchPropertyHomeTop">
            <div className="selectButtonsHomeTop">
            <button className={status === "venda" ? "btn" : "btn1"} onClick={() => handleActiveCode(false, "venda")}>Venda</button>
            <button className={status === "aluguel" ? "btn2" : ""} onClick={() => handleActiveCode(false, "aluguel")}>Aluguel</button>
            {/* <button className={status === "temporada" ? "btn2" : ""} onClick={() => handleActiveCode(false, "temporada")}>Temporada</button> */}
            {/* <button className={status === "temporada" ? "btn" : ""} onClick={() => handleActiveCode(false, "temporada")}>Temporada</button>
            <button className={status === "diária" ? "btn" : ""} onClick={() => handleActiveCode(false, "diária")}>Diária</button> */}
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
                        :  <option value="">Subtipo</option>
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
                        <option value="">Garagem</option>
                        <option value="1">1 Vaga</option>
                        <option value="2">2 Vagas</option>
                        <option value="3">3 Vagas</option>
                        <option value="4">4 Vagas</option>
                        <option value="5">5 Vagas</option>
                        <option value="6">6 Vagas</option>
                        <option value="7">7 Vagas</option>
                        <option value="8">8 Vagas</option>
                        <option value="9">9 Vagas</option>
                        <option value="10">10 Vagas</option>
                    </select>
                </>
                    :
                    <input type="text" className="primary" placeholder="Digite o código" />
                }
          
                     <button onClick={handleSearchProfessional}><IoSearch /></button>
            </div>

            <div className="textLocation">
                <div className="checkDiv">
                    <input type="checkbox" name="" id="" />
                    <h5>Aceita pets</h5>
                </div>
                <div className="checkDiv">
                    <input type="checkbox" name="" id="" />
                    <h5>Com mobilha</h5>
                </div>
            </div>

            <div className="textLocation">
                <h4>Onde?</h4>
                <select value={ufSelected} onChange={handleSetectUfSelected}> 
                            <option value="">Estado</option>
                            {ufList?.map((uf) => {
                                return (
                                    <option value={uf.uf}>{uf.uf}</option>
                                )
                            })}
                                
                    </select>
                    <select value={citySelected} onChange={handleSetectCitySelected}> 
                    {filterCity.length === 0 ?
                    <option value="">Cidade</option>
                    :
                    <>
                    <option value="">Escolha sua cidade</option>
                    {filterCity?.map((district) => {
                            return (
                                <option autocomplete="off" key={district.id} value={district.city}>{district.city}</option>
                            )
                        })}
                    </>
                    }     
                    </select>
                    {/* <button onClick={handleClearAddress}>X Limpar</button> */}
            </div>

        </div>
    )
}
