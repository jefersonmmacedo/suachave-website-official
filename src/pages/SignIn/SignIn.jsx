import "./signIn.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

export function SignIn() {
    const [company, setCompany] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const {loginSession} = useContext(AuthContext);

    function handleSelectClient(e) {
        e.preventDefault();
        setCompany(false)
    }
    function handleSelectCompany(e) {
        e.preventDefault();
        setCompany(true)
    }
    function handleRedirectToPage(e) {
        e.preventDefault();
        window.open("https://adm.suachave.com.br/")
    }

    function handleLogin(e) {
        e.preventDefault();
        loginSession({login: login, password:password})
    }

    return (
        <div className="SignIn">
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                <div className="buttons">
                    <button className={company === false ? "btn" : "btn2"} onClick={handleSelectClient}>Cliente</button>
                    <button className={company === false ? "button1" : "button2"} onClick={handleSelectCompany}>Imobiliária</button>
                </div>

                {company === false ?
                    <>
                        <input type="text" placeholder="Email ou ID" value={login} onChange={(e) => setLogin(e.target.value)}/>
                        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button onClick={handleLogin}>Entrar</button>
                        <a href="/cadastrar">Cadastre-se aqui!</a>
                    </>
                    :
                    <>
                    <button className="buttonCompany" onClick={handleRedirectToPage}>Entrar como imobiliária / Corretor</button>
                    <a href="/cadastrar">Cadastre-se aqui!</a>
                    </>
                }
                    </div>
                </form>

            </div>
            <div className="professional">
                <div className="block">
                </div>
            </div>
        </div>
    )
}