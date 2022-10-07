import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./schedules.css";
import {IoCloseCircle} from 'react-icons/io5'

export function Schedules() {
    return (
        <div className="Schedules">
            <Navbar2 />
                <h2>Meus agendamentos</h2>

                <div className="text">
                    <h3><IoCloseCircle /></h3>
                    <h3>Você não possui agendamentos</h3>

                    <a href="/imoveis/venda">Ver imóveis</a>
                </div>
                <Footer />
        </div>
    )
}