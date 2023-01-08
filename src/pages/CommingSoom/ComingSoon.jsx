import "./comingSoon.css"
import Logo from "../../assets/images/Logo.png";
import Notebook from "../../assets/images/svg/comming2.svg";

export function ComingSoon() {
    return(
        <div className="ComingSoon">
            <div className="logo">
              <img src={Logo} alt="Logo sua chave" />
            </div>
            
            <h1>Encontre imóveis, imobiliárias e <br />corretores em poucos cliques!</h1>

            <img src={Notebook} alt="Notebook" />
            <div className="coming">
                <h4>Estamos quase prontos...</h4>
            </div>
            

                
        </div>
    )
}