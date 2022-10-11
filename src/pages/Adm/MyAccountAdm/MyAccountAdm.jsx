import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./myAccountAdm.css"

export function MyAccountAdm() {
    return (
        <div className="MyAccountAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Minha conta</h3>
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