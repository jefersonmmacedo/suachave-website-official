import "./recuperation.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";

export function Recuperation() {
    const [email, setEmail] = useState()
    return (
        <div className="Recuperation">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo Sua Chave" />
                    <div className="data">
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>

                        <button>Enviar código</button>
                    </div>
                </form>

            </div>
        </div>
    )
}