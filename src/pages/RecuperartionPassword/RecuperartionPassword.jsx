import "./recuperationPassword.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";

export function RecuperationPassword() {
    const [Password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    return (
        <div className="RecuperationPassword">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                    <input type="text" placeholder="Senha" value={Password} onChange={e => setPassword(e.target.value)}/>
                    <input type="text" placeholder="Confirmar Senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>

                        <button>Gerar nova senha</button>
                    </div>
                </form>

            </div>
        </div>
    )
}