import "./proposals.css";
import Navbar2 from "../../components/Nav/Navbar";
import { ProposalList } from "../../components/ProposalList/ProposalList";
import { useState } from "react";

export function Proposals(){
    const [professional, setProfessional] = useState("");
    return (
        <div className="Proposals">
        <Navbar2 />
        <h2>PROPOSTAS</h2>
        <div className="search">
                <h3>BUSQUE UM PROFISSIONAL</h3>
                    <input className="primary" type="text" placeholder="Escreva o profissional ou" value={professional} onChange={(e) => setProfessional(e.target.value)} />
                            <select> 
                                      <option value="">Escolha profissional</option>   
                                      <option value="">Pedreiro</option>   
                                      <option value="">Servente de Obras</option>   
                                      <option value="">Marceneiro</option>   
                                      <option value="">Motorista</option>   
                                      <option value="">Enfermeira</option>   
                                      <option value="">Confeiteira/o</option>   
                                      <option value="">Padeiro/a</option>   
                                      <option value="">Serranheiro</option>   
                                      <option value="">Programador</option>   
                                      <option value="">Designer</option>   
                                      <option value="">Designer de Interiores</option>   
                                      <option value="">Encanador</option>   
                                      <option value="">Pintor</option>   
                                      <option value="">Chapeiro/a</option>   
                                      <option value="">Cozinhairo/a</option>   
                                      <option value="">Porteiro</option>   
                                      <option value="">Zelador</option>   
                                      <option value="">Projetista</option>   
                                      <option value="">Engenheiro/a</option>   
                                      <option value="">Mestre de Obras</option>   
                                      <option value="">Corretor</option>   
                                      <option value="">Contador</option>   
                                      <option value="">Cuidador/a de Idosos</option>   
                                      <option value="">Faxineira/Diarista</option>  
                                      <option value="">Atendente</option>    
                                      <option value="">Vendedor</option>    
                                      <option value="">Vendedor Externo</option>    
                                      <option value="">Eletricista</option>    
                                      <option value="">Mecânico</option>    
                                      <option value="">Bombeiro Hidráulico</option>    
                                      <option value="">Professor/ra Particular</option>    
                                      <option value="">Personal Trainner</option>    
                                      <option value="">Jornalista</option>    
                                      <option value="">Pesquisador</option>    
                                      <option value="">Digitador</option>    
                                      <option value="">Caixa</option>    
                                      <option value="">Frentista</option>    
                                      <option value="">Garçom</option>    
                                      <option value="">Cerimonialista</option>    
                                      <option value="">Fotógrafo</option>    
                                      <option value="">Web Designer</option>    
                                      <option value="">Panfletista</option>    
                                      <option value="">Banda Músical</option>    
                                      <option value="">Cantor</option>    
                                      <option value="">Adestrador</option>    
                                      <option value="">Limpador de Piscina</option>    
                                      <option value="">Professor de Música</option>    
                                      <option value="">Lenhador</option>    
                                      <option value="">Técnico em Informática</option>    
                                      <option value="">Recepcionista</option>    
                                      <option value="">Estoquista</option>    
                                      <option value="">Repositor</option>    
                                      <option value="">Churrasqueiro</option>    
                                      <option value="">Costureira</option>    
                                      <option value="">Motoboy</option>    
                                      <option value="">Officeboy</option>    
                                      <option value="">Pescador</option>    
                                      <option value="">Trader</option>    
                                      <option value="">Caminhoneiro</option>    
                                      <option value="">Chaveiro</option>    
                                      <option value="">Segurança</option>    
                                      <option value="">Lavador de Carros</option>    
                                      <option value="">Lavador de Estofados</option>    
                                      <option value="">Estofador</option>    
                                      <option value="">Lanterneiro</option>    
                              </select>
                            <select className="secundary"> 
                                      <option value="">Status da proposta</option>   
                                      <option value="">Aberto</option>   
                                      <option value="">Negociando</option>   
                                      <option value="">Fechado</option>   
                              </select>
                </div>
        <ProposalList />
        </div>
    )
}
