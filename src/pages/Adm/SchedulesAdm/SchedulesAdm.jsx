import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./schedulesAdm.css"

export function SchedulesAdm() {
    return (
        <div className="SchedulesAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Agendamentos</h3>
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