import "./navbar.css";
import Logo from "../../assets/images/Logo.png"

export function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={Logo} alt="Logotipo gpsbuscador" />
            </div>
            <div className="itens">
                <div className="list">
                <p>Início</p>
                <p>Propostas</p>
                <p>Profissionais</p>
                <p>Preços</p>
                <p>Contato</p>
                </div>
                <div className="account">
                <button>Entrar</button>
                <p>Cadastro</p>
                </div>
            </div>
        </div>
    )
}