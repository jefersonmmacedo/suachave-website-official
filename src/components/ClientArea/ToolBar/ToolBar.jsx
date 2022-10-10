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
                <div className="ToolUnic">
                   <a href="/adm/dashboard">
                    <IoPerson /><p>Conta</p>
                    </a>
                </div>
                <button><IoLogOutOutline />Sair</button>
            </div>
        </div>
    )
}