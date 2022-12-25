import "./evaluation.css";
import { IoArrowForward, IoArrowUpCircle, IoArrowUpCircleOutline, IoBusinessOutline, IoCheckboxOutline, IoLocationOutline, IoSearch } from "react-icons/io5";
import { useState } from "react";
import buscaCep from "../../services/api-buscaCep";
import { toast } from 'react-toastify';
import LogoImg from '../../assets/images/Logo2.png'
import { toNumber } from "vanilla-masker";
import { useEffect } from "react";
import api from "../../services/api";

export function Evaluation() {
    const [stepes, setStepes] = useState("1");
    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");
    const [cep, setCep] = useState("");
    const [companies, setCompanies] = useState([]);
    const [broker, setBroker] = useState([]);
    const [type, setType] = useState("Imobiliária");

    useEffect(() => {
        async function companiesLoad() {
            await api.get(`/company/${type}`).then((res) => {
                console.log(res.data);
                setCompanies(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        companiesLoad()
    },[type])


    async function handleNewCep(e) {
        e.preventDefault();
        console.log("");
            await buscaCep(`${cep}/json`).then((res) => {
                console.log(res.data);
                setCity(res.data.localidade);
                setUf(res.data.uf);
            })

    }

    function handleSelectStepe(data) {
        setStepes(data)
    }
    function handleSelectTypeCompany(data) {
        setType(data);
        console.log(data)
    }

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
            <input type="text" placeholder="Rua"/>
            <div className="dataInputs">
            <input type="text" placeholder="Número"/>
            <input type="text" placeholder="Bairro"/>
            </div>
            <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
            <input type="text" placeholder="Estado" value={uf} onChange={e => setUf(e.target.value)}/>
            </div>
            </div>
            <div className="buttons">
                <a href="/" className="btnCancel">X Fechar</a>
                <button className="btn" onClick={() => handleSelectStepe("2")}>Avançar</button>
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
            <select >
                <option value="">Residencial</option>
            </select>
            <select >
                <option value="">Casa</option>
            </select>
            </div>
            <select >
                <option value="">Venda</option>
            </select>

            <div className="dataInputs">
            <select >
                <option value="">Quartos</option>
            </select>
            <select >
                <option value="">Suíte</option>
            </select>   
            </div>

            <div className="dataInputs">
            <select >
                <option value="">Garagem</option>
            </select>
            <select >
                <option value="">Banheiro</option>
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
                      <button className="btn2" onClick={() => handleSelectTypeCompany("Imobiliária")}>Imobiliárias</button>
                      <button className="btn" onClick={() => handleSelectTypeCompany("Corretor")}>Corretores</button>
                  </div> 

                    <div className="listCompaniesEvaluation">
                        {companies.map((company) => {
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