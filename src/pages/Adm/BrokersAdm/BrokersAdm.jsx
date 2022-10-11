import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./brokersAdm.css"

export function BrokersAdm() {
    return (
        <div className="BrokersAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Corretores</h3>
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