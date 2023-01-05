import "./recuperationCode.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";

export function RecuperationCode() {
    const [code, setCode] = useState()

    return (
        <div className="RecuperationCode">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                    <input type="text" placeholder="######" value={code} onChange={e => setCode(e.target.value)}/>

                        <button>Confirmar código</button>
                    </div>
                </form>

            </div>
        </div>
    )
}