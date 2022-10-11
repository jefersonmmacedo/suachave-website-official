import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./webApp.css"

export function WebApp() {
    return (
        <div className="WebApp">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Site e Aplicativos</h3>
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