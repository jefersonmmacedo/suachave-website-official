﻿import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./myPropertiesList.css";
import ImageHouse from "../../../assets/images/house.jpg";
import ImageHouse1 from "../../../assets/images/house1.jpg";
import ImageHouse2 from "../../../assets/images/house2.jpg";
import {IoFileTrayFullOutline, IoTrashOutline, IoCreateOutline, IoLocationOutline, IoEyeOutline, IoHeartOutline, IoLogoWhatsapp, IoCallOutline} from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';

export function MyPropertiesList() {
    return (
        <div className="MyPropertiesList">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Meus imóveis</h3>
                <div className="infoData">
                    <div className="textInfo">
                <h5><span>200</span> Total de Imóveis</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Imóveis disponíveis</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Imóveis vendidos</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Imóveis alugados</h5>
                    </div>
                    <div className="textInfo">
                <h5><span>200</span> Imóveis indisponíveis</h5>
                    </div>
                </div>
                <a className="link" href="/painel/novoimovel">Novo anúncio</a>

                <div className="search">
                    <input type="text" placeholder="Busque por: Título, código ou cidade" />
                    <div className="selection">
                    <select>
                        <option value="">Venda</option>
                        <option value="">Aluguel</option>
                    </select>
                    <select>
                        <option value="">Disponível</option>
                        <option value="">Indisponível</option>
                    </select>
                    <select>
                        <option value="">Tipo</option>
                        <option value="">Residencial</option>
                        <option value="">Comercial</option>
                    </select>
                    <select>
                        <option value="">Subtipo</option>
                        <option value="">Casa</option>
                        <option value="">Apartamento</option>
                    </select>
                    </div>
                </div>
            <div className="informations">
            <div className="propertyListAdm">
                    <div className="image">
                        <a href="/conversa">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textpropertyListAdm">
                        <div className="textDatapropertyListAdm">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>15/10/2022 16:45h</h6>
                        </div>
                        <h4>Disponível</h4>
                    <div className="infosContactData">
                        <div className="infoUnicData">
                        <IoEyeOutline />
                            <h5> 157 Visualizações</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoHeartOutline />
                            <h5> 78 Salvos</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoLogoWhatsapp />
                            <h5> 37 Whatsapp</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoCallOutline />
                            <h5>25 Ligações</h5>
                        </div>
                    </div>
                    </div>




                    <div className="buttons">
                    <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                    <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                     <span>Editar</span>
                    </ReactTooltip>

                    <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                    <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                     <span>Deletar</span>
                    </ReactTooltip>

                    <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                    <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                     <span>Vendido/Alugado</span>
                    </ReactTooltip>

                    </div>
                </div>
            <div className="propertyListAdm">
                    <div className="image">
                        <a href="/conversa">
                        <img src={ImageHouse1} alt="" />
                        </a>
                    </div>
                    <div className="textpropertyListAdm">
                        <div className="textDatapropertyListAdm">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>15/10/2022 16:45h</h6>
                        </div>
                        <h4>Disponível</h4>
                    <div className="infosContactData">
                        <div className="infoUnicData">
                        <IoEyeOutline />
                            <h5> 157 Visualizações</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoHeartOutline />
                            <h5> 78 Salvos</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoLogoWhatsapp />
                            <h5> 37 Whatsapp</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoCallOutline />
                            <h5>25 Ligações</h5>
                        </div>
                    </div>
                    </div>




                    <div className="buttons">
                    <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                    <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                     <span>Editar</span>
                    </ReactTooltip>

                    <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                    <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                     <span>Deletar</span>
                    </ReactTooltip>

                    <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                    <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                     <span>Vendido/Alugado</span>
                    </ReactTooltip>

                    </div>
                </div>
            <div className="propertyListAdm">
                    <div className="image">
                        <a href="/conversa">
                        <img src={ImageHouse2} alt="" />
                        </a>
                    </div>
                    <div className="textpropertyListAdm">
                        <div className="textDatapropertyListAdm">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>15/10/2022 16:45h</h6>
                        </div>
                        <h4>Disponível</h4>
                    <div className="infosContactData">
                        <div className="infoUnicData">
                        <IoEyeOutline />
                            <h5> 157 Visualizações</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoHeartOutline />
                            <h5> 78 Salvos</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoLogoWhatsapp />
                            <h5> 37 Whatsapp</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoCallOutline />
                            <h5>25 Ligações</h5>
                        </div>
                    </div>
                    </div>




                    <div className="buttons">
                    <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                    <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                     <span>Editar</span>
                    </ReactTooltip>

                    <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                    <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                     <span>Deletar</span>
                    </ReactTooltip>

                    <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                    <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                     <span>Vendido/Alugado</span>
                    </ReactTooltip>

                    </div>
                </div>
            <div className="propertyListAdm">
                    <div className="image">
                        <a href="/conversa">
                        <img src={ImageHouse} alt="" />
                        </a>
                    </div>
                    <div className="textpropertyListAdm">
                        <div className="textDatapropertyListAdm">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>15/10/2022 16:45h</h6>
                        </div>
                        <h4>Disponível</h4>
                    <div className="infosContactData">
                        <div className="infoUnicData">
                        <IoEyeOutline />
                            <h5> 157 Visualizações</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoHeartOutline />
                            <h5> 78 Salvos</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoLogoWhatsapp />
                            <h5> 37 Whatsapp</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoCallOutline />
                            <h5>25 Ligações</h5>
                        </div>
                    </div>
                    </div>




                    <div className="buttons">
                    <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                    <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                     <span>Editar</span>
                    </ReactTooltip>

                    <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                    <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                     <span>Deletar</span>
                    </ReactTooltip>

                    <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                    <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                     <span>Vendido/Alugado</span>
                    </ReactTooltip>

                    </div>
                </div>
            <div className="propertyListAdm">
                    <div className="image">
                        <a href="/conversa">
                        <img src={ImageHouse1} alt="" />
                        </a>
                    </div>
                    <div className="textpropertyListAdm">
                        <div className="textDatapropertyListAdm">
                    <h3>Lindo apartamento luxuoso</h3>
                    <h5><IoLocationOutline />Centro - Rio Bonito - RJ</h5>
                    <h6>15/10/2022 16:45h</h6>
                        </div>
                        <h4>Disponível</h4>
                    <div className="infosContactData">
                        <div className="infoUnicData">
                        <IoEyeOutline />
                            <h5> 157 Visualizações</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoHeartOutline />
                            <h5> 78 Salvos</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoLogoWhatsapp />
                            <h5> 37 Whatsapp</h5>
                        </div>
                        <div className="infoUnicData">
                        <IoCallOutline />
                            <h5>25 Ligações</h5>
                        </div>
                    </div>
                    </div>




                    <div className="buttons">
                    <a href="/painel/editarimovel" className="linkEdit" data-tip data-for='Editar'><IoCreateOutline /></a>
                    <ReactTooltip id='Editar' place="bottom" type="dark" effect="solid">
                     <span>Editar</span>
                    </ReactTooltip>

                    <button className="delete" data-tip data-for='Deletar'><IoTrashOutline /></button>
                    <ReactTooltip id='Deletar' place="bottom" type="dark" effect="solid">
                     <span>Deletar</span>
                    </ReactTooltip>

                    <button className="notView" data-tip data-for='Vendido/Alugado'><IoFileTrayFullOutline /></button>
                    <ReactTooltip id='Vendido/Alugado' place="bottom" type="dark" effect="solid">
                     <span>Vendido/Alugado</span>
                    </ReactTooltip>

                    </div>
                </div>


            </div>
            </div>
        </div>
    )
}