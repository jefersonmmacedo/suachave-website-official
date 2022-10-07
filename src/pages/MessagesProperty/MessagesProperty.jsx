import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./messagesProperty.css";
import {IoCloseCircle} from 'react-icons/io5'

export function MessagesProperty() {
    return (
        <div className="MessagesProperty">
            <Navbar2 />
                <h2>Minhas mensagens</h2>

                <div className="text">
                    <h3><IoCloseCircle /></h3>
                    <h3>Você não possui mensagens</h3>

                    <a href="/imoveis/venda">Ver imóveis</a>
                </div>
                <Footer />
        </div>
    )
}