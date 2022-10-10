import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./messagesProperty.css";
import {IoCloseCircle} from 'react-icons/io5';
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";

export function MessagesProperty() {
    return (
        <div className="MessagesProperty">
            <Navbar2 />

                <div className="main">
                <ToolBarClient />
                <div className="text">
                <h2>Minhas mensagens</h2>
                    <h3><IoCloseCircle /></h3>
                    <h3>Você não possui agendamentos</h3>

                    <a href="/imoveis/venda">Ver imóveis</a>
                </div>
            </div>
                <Footer />
        </div>
    )
}