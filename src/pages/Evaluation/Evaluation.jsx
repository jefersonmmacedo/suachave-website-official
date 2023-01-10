import "./evaluation.css";
import { IoArrowForward, IoArrowUpCircle, IoArrowUpCircleOutline, IoBusinessOutline, IoCheckboxOutline, IoLocationOutline, IoSearch } from "react-icons/io5";
import { useState } from "react";
import buscaCep from "../../services/api-buscaCep";
import { toast } from 'react-toastify';
import LogoImg from '../../assets/images/Logo2.png'
import { toNumber } from "vanilla-masker";
import { useEffect } from "react";
import api from "../../services/api";
import buscaDistrito from "../../services/api-buscaDistrito";

export function Evaluation() {
    const [stepes, setStepes] = useState("1");
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");
    const [subType, setSubType] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [restroom, setRestroom] = useState("");
    const [suite, setSuite] = useState("");
    const [garage, setGarage] = useState("");

    const [images, setImages] = useState("");
    const [company, setCompany] = useState("");

    const [number, setNumber] = useState("");
    const [road, setRoad] = useState("");
    const [district, setDistrict] = useState("");
    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");
    const [ufCompany, setUfCompany] = useState("");
    const [cityCompany, setCityCompany] = useState("");
    const [districtAll, setDistrictAll] = useState([]);
    const [search, setSearch] = useState("");
    const [cep, setCep] = useState("");
    const [companies, setCompanies] = useState([]);
    const [typeCompany, setTypeCompany] = useState("Imobiliária");
    const searchLower = search.toLowerCase()


    useEffect(() => {
        async function companiesLoad() {
            await api.get(`/company/${typeCompany}`).then((res) => {
                console.log(res.data);
                setCompanies(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        companiesLoad()
    },[typeCompany])


    async function handleNewCep(e) {
        e.preventDefault();
        console.log("");
            await buscaCep(`${cep}/json`).then((res) => {
                console.log(res.data);
                setRoad(res.data.logradouro);
                setDistrict(res.data.bairro);
                setCity(res.data.localidade);
                setCityCompany(res.data.localidade);
                setUf(res.data.uf);
                setUfCompany(res.data.uf);
            })

    }

    function handleSelectStepe(data) {
        setStepes(data)
    }
    function handleSelectTypeCompany(data) {
        setTypeCompany(data);
        console.log(data)
    }

    function handleType(e) {
        setType(e.target.value)
        console.log(e.target.value)
    }
    function handleSubType(e) {
        setSubType(e.target.value)
        console.log(e.target.value)
    }

    function handleStatus(e) {
        setStatus(e.target.value)
        console.log(e.target.value)
    }

    function handleBedroom(e) {
        setBedroom(e.target.value)
        console.log(e.target.value)
    }
    function handleSuite(e) {
        setSuite(e.target.value)
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
 
    function handleSetectCityCompany(e) {
        console.log(e.target.value)
        setCityCompany(e.target.value)
      }
      function handleSetectUfCompany(e) {
          console.log(e.target.value)
          handleSearchDistrict(e.target.value)
          setUfCompany(e.target.value)
          handleClearSearch()
      }

      function handleClearAddress(e) {
        e.preventDefault();
        
        setCityCompany("")
        setUfCompany("")
    }

    function handleClearSearch(e) {
        setSearch("")
    }


    const locationFilter = companies.filter((companies) => companies.city === cityCompany && companies.uf === ufCompany)
    const searchFilter = companies.filter((companies) => companies.fantasyName.toLowerCase().includes(searchLower))

    const filterData = search !== "" ? searchFilter
                    : cityCompany !== "" && ufCompany !== "" ? locationFilter
                    : companies

    return (
        <div className="Evaluation">
            <img src={LogoImg} alt="Logotipo Sua Chave" className="img"/>
            <div className="stepes">
                <div className={toNumber(stepes) >= 1  ? "stepeUnicSelect" : "stepeUnic"}>
                    <h3>1</h3>
                </div>
                    <h5><IoArrowForward /></h5>
                <div className={toNumber(stepes) >= 2  ? "stepeUnicSelect" : "stepeUnic"}>
                    <h3>2</h3>
                </div>
                <h5><IoArrowForward /></h5>
                <div className={toNumber(stepes) >= 3  ? "stepeUnicSelect" : "stepeUnic"}>
                    <h3>3</h3>
                </div>
                <h5><IoArrowForward /></h5>
                <div className={toNumber(stepes) >= 4  ? "stepeUnicSelect" : "stepeUnic"}>
                    <h3>4</h3>
                </div>
                <h5><IoArrowForward /></h5>
                <div className={toNumber(stepes) >= 5  ? "stepeUnicSelect" : "stepeUnic"}>
                    <h3>5</h3>
                </div>
            </div>
            {stepes === "1" ? 
            <>
            <div className="Address">
            <h3>Digite o Cep do imóvel</h3>
            <div className="cep">
                <input type="text" placeholder="XXXXX-XXX" value={cep} onChange={e => setCep(e.target.value)}/>
                <button onClick={handleNewCep}><IoSearch/></button>
            </div>
            <div className={city === "" && uf === "" ? "data2" : "data"}>
                <div className="text">
                    <h3>Endereço</h3>
                </div>
            <input type="text" placeholder="Rua" value={road} onChange={e => setRoad(e.target.value)}/>
            <div className="dataInputs">
            <input type="text" placeholder="Número"/>
            <input type="text" placeholder="Bairro" value={district} onChange={e => setDistrict(e.target.value)}/>
            </div>
            <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
            <input type="text" placeholder="Estado" value={uf} onChange={e => setUf(e.target.value)}/>
            </div>
            </div>
            <div className="buttons">
                <a href="/" className="btnCancel">X Fechar</a>
                {city !== "" && uf !== "" ? 
                <button className="btn" onClick={() => handleSelectStepe("2")}>Avançar</button>
                : ""}
            </div>
            </>
            : stepes === "2" ? 
            <>
            <div className="Address">
           
            <div className={"data"}>
            <h3>Sobre o Imóvel</h3>
            <input type="text" placeholder="Título"/>

            <textarea cols="30" rows="5" placeholder="Descrição"></textarea>
            <div className="dataInputs">
            <select value={type} onChange={handleType}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select value={subType} onChange={handleSubType} >
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
            </div>
            <select value={status} onChange={handleStatus}>
                <option value="">Venda ou Aluguel</option>
                <option value="Venda">Venda</option>
                <option value="Aluguel">Aluguel</option>
            </select>

            <div className="dataInputs">
            <select value={bedroom} onChange={handleBedroom} >
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
                                 <select value={suite} onChange={handleSuite} >
                                    <option value="">Suites</option>
                                    <option value="1">1 Suite</option>
                                    <option value="2">2 Suites</option>
                                    <option value="3">3 Suites</option>
                                    <option value="4">4 Suites</option>
                                    <option value="5">5 Suites</option>
                                    <option value="6">6 Suites</option>
                                    <option value="7">7 Suites</option>
                                    <option value="8">8 Suites</option>
                                    <option value="9">9 Suites</option>
                                    <option value="10">10 Suites</option>
                                </select>
            </div>

            <div className="dataInputs">
            <select value={restroom} onChange={handleRestroom} >
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
            
                                <select value={garage} onChange={handleGarage} >
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
            </div>


            </div>
            </div>
            <div className="buttons">
                <button className="btn" onClick={() => handleSelectStepe("1")}>Voltar</button>
                <button className="btn" onClick={() => handleSelectStepe("3")}>Avançar</button>
            </div>
            </>
               : stepes === "3" ? 
               <>
               <div className="Address">
              
               <div className={"data"}>
               <button onClick={handleNewCep}><IoArrowUpCircleOutline /> Adicionar imagens</button>   
               </div>

               </div>
               <div className="buttons">
                   <button className="btn" onClick={() => handleSelectStepe("2")}>Voltar</button>
                   <button className="btn" onClick={() => handleSelectStepe("4")}>Avançar</button>
               </div>
               </>
                  : stepes === "4" ? 
                  <>
                  <div className="CompaniesEvaluation">
                    <h3>Escolha uma imobiliária/corretor para avaliar e publicar seu imóvel</h3>  

                     <div className="buttons">
                      <button className={typeCompany === "Imobiliária" ? "btnSelect" : "btnSelect2"} onClick={() => handleSelectTypeCompany("Imobiliária")}>Imobiliárias</button>
                      <button className={typeCompany === "Corretor" ? "btnSelect" : "btnSelect2"} onClick={() => handleSelectTypeCompany("Corretor")}>Corretores</button>
                  </div> 

                  <div className="searchBrokers">
                <input type="text" placeholder="Busque pelo nome" value={search} onChange={e => setSearch(e.target.value)} onClick={handleClearAddress}/>
               
                <select value={ufCompany} onChange={handleSetectUfCompany}> 
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
                    <select value={cityCompany} onChange={handleSetectCityCompany}> 
                    {districtAll.length === 0 ?
                    <option value={cityCompany}>{cityCompany}</option>
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

                    <div className="listCompaniesEvaluation">
                        {filterData.map((company) => {
                            return (
                            <div className="CompanieUnicEvaluation">
                                <div className="imageEvaluation">
                                    <img src={company.logo} alt="" />
                                </div>
                                <div className="text">
                                <h3>{company.fantasyName}</h3>
                                <h5><IoLocationOutline />{company.road}, Nº {company.number}, {company.district} - {company.city} - {company.uf}</h5>
                                <h5><IoBusinessOutline />{company.type}</h5>
                                </div>
                                <div className="buttonCompany">
                                    <button className="btnCompany"><IoCheckboxOutline/></button>
                                </div>
                            </div>
                            )
                        })}
                    </div>


   
                  </div>
                  <div className="buttons">
                      <button className="btn" onClick={() => handleSelectStepe("3")}>Voltar</button>
                      <button className="btn" onClick={() => handleSelectStepe("5")}>Avançar</button>
                  </div>
                  </>
                    : stepes === "5" ? 
                    <>
                    <div className="Address">
                   
                    <div className={"data"}>
                   <h2>Resumo das informações</h2> 
                    </div>
     
                    </div>
                    <div className="buttons">
                        <button className="btn" onClick={() => handleSelectStepe("4")}>Voltar</button>
                        <button className="btn" onClick={() => handleSelectStepe("5")}>Enviar</button>
                    </div>
                    </>
            : ""
            }
        </div>
    )
}