import "./notifications.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Notification } from "../../components/Notification/Notifications";

export function Notifications() {
    return (
        <div className="Notifications">
            <Navbar2 />

            <h2>Notificações</h2>

            <Notification />
        </div>
    )
}