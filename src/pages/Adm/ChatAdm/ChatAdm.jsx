import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./chatAdm.css"

export function ChatAdm() {
    return (
        <div className="ChatAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Mensagens</h3>
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