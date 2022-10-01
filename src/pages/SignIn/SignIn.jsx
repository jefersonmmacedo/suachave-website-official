import "./signIn.css";
import Logo from "../../assets/images/Logo.png";

export function SignIn() {
    return (
        <div className="SignIn">
            <div className="professional">
                <div className="block">
                </div>
            </div>
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                        <input type="text" placeholder="Email ou ID"/>
                        <input type="password" placeholder="Senha"/>
                        <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button>Entrar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}