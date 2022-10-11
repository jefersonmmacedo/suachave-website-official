import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./notificationsAdm.css"

export function NotificationsAdm() {
    return (
        <div className="NotificationsAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Notificações e Alertas</h3>
            <div className="informations">
                <div className="infoData">
                </div>
                <div className="infoData">
                </div>
                <div className="infoData">
                </div>
                <div className="infoData">
                </div>
            </div>
            </div>
        </div>
    )
}