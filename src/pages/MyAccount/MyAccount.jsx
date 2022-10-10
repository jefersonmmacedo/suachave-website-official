import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./myAccount.css";
import {IoCloseCircle} from 'react-icons/io5';
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";

export function MyAccount() {
    return (
        <div className="MyAccount">
            <Navbar2 />

                <div className="main">
                <ToolBarClient />
                <div className="text">
                <h2>Minha Conta</h2>
                    <form action="">
                        <input type="text" placeholder="Nome completo" />
                        <input type="email" placeholder="E-mail" />
                        <input type="text" placeholder="Telefone" />
                        <input type="text" placeholder="Whatsapp" />
                        <br />
                        <br />
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                        <br />
                        <br />
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Confirmar senha" />
                    </form>
                </div>
            </div>
                <Footer />
        </div>
    )
}