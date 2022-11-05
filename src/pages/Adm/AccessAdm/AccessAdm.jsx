import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import { BrokerList } from "../../../components/BrokerList/BrokerList";
import { FaTimer} from "react-icons/fa"
import { IoTimerOutline, IoTimerSharp, IoTimeOutline, IoTimeSharp} from "react-icons/io5"
import "./accessAdm.css"

export function AccessAdm() {
    return (
        <div className="AccessAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
            <div className="informations">
                
            </div>
            </div>
        </div>
    )
}