import "./toolBar.css";
import LogoImg from '../../../assets/images/imob2.png'
import {IoSpeedometer, IoPerson,  IoNotifications, IoLogOutOutline, IoChatboxEllipses,
    IoHome, IoLaptopOutline, IoCalendar, IoLogoWhatsapp, IoQrCode, IoPeople, IoKey, IoRocket, IoTimerOutline, IoTimer } from 'react-icons/io5';
import {FaLaptopHouse, FaHouseUser, FaDollarSign } from 'react-icons/fa';
export function ToolBar() {
    return (
        <div className="ToolBar">
            <div className="image">
                <img src={LogoImg} alt="" />
            </div>
            <div className="Tools">
                <div className="ToolUnic">
                   <a href="/painel">
                    <IoSpeedometer /><p>Painel</p>                    
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/painel/chat">
                    <IoChatboxEllipses /><p>Chat</p>
                    </a>
                </div>
                <div className="ToolUnic3">
                   <a href="/painel/imoveis">
                    <IoHome /><p>Imóveis</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/painel/agendamentos">
                    <IoCalendar /><p>Agenda</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/alugueis">
                    <IoKey /><p>Aluguéis</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/vendas">
                    <IoRocket /><p>Vendas</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/avaliacoes">
                    <FaHouseUser /><p>Avaliações</p>
                    </a>
                </div>

                <div className="ToolUnic2">
                   <a href="/painel/avaliacoes">
                   <FaDollarSign /><p>Financeiro</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/planos">
                    <IoQrCode /><p>Meu plano</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/corretores">
                    <IoPeople /><p>Corretores</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/painel/minhaconta">
                    <IoPerson /><p>Conta</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/web">
                    <IoLaptopOutline /><p>Site/App</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/painel/historico">
                   <IoTimer /><p>Histórico</p>
                    </a>
                </div>
                   <button className="btnToolBar">Atendimento</button>
                {/* <button className="btnToolBar"><IoLogoWhatsapp />Financeiro</button>
                <button className="btnToolBar"><IoLogoWhatsapp />Comercial</button> */}
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}