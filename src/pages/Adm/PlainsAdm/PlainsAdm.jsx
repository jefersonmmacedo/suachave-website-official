import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./plainsAdm.css"

export function PlainsAdm() {
    return (
        <div className="PlainsAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Meu plano e histórico de pagamentos</h3>
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