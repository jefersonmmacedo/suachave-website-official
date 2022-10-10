import "./toolBar.css";
import LogoImg from '../../../assets/images/imob1.png'
import {IoSpeedometer, IoPerson, IoHeart, IoNotifications, IoLogOutOutline, IoChatboxEllipses,
    IoHome, IoLaptopOutline, IoCalendar, IoLogoWhatsapp, IoQrCode, IoPeople } from 'react-icons/io5';
export function ToolBar() {
    return (
        <div className="ToolBar">
            <div className="image">
                <img src={LogoImg} alt="" />
            </div>
            <div className="Tools">
                <div className="ToolUnic">
                   <a href="/adm/dashboard">
                    <IoSpeedometer /><p>Painel</p>                    
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/adm/dashboard">
                    <IoHome /><p>Imóveis</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/adm/dashboard">
                    <IoChatboxEllipses /><p>Chat</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/adm/dashboard">
                    <IoCalendar /><p>Agenda</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/adm/dashboard">
                    <IoHeart /><p>Favoritos</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/adm/dashboard">
                    <IoNotifications /><p>Alertas</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/adm/dashboard">
                    <IoQrCode /><p>Meu plano</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/adm/dashboard">
                    <IoPeople /><p>Corretores</p>
                    </a>
                </div>
                <div className="ToolUnic">
                   <a href="/adm/dashboard">
                    <IoPerson /><p>Conta</p>
                    </a>
                </div>
                <div className="ToolUnic2">
                   <a href="/adm/dashboard">
                    <IoLaptopOutline /><p>Site/App</p>
                    </a>
                </div>
                   <button className="btnToolBar"><IoLogoWhatsapp />Suporte</button>
                <button className="btnToolBar"><IoLogoWhatsapp />Financeiro</button>
                <button className="btnToolBar"><IoLogoWhatsapp />Comercial</button>
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}