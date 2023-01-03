import "./topHeadHomeClient.css"
import { SearchPropertyHomeTop } from "../SearchPropertyHomeTop/SearchPropertyHomeTop";
import image1 from "../../assets/images/background13.jpg";
import image2 from "../../assets/images/background11.jpg";
import image3 from "../../assets/images/background18.jpg";

export function TopHeadHomeClient() {
    return (
        <div className="TopHeadHomeClient">
            <div className="blockTop">
            <div className="SearchText">
                <div className="TextTopSearch">
                <h1>Nós temos <span>a chave</span> do seu sonho!</h1>
                <h4>Mais de 5000 imóveis disponíveis para você!</h4>
               

                {/* <button>Anunciar imóvel</button> */}
                </div>
                <div className="searchHome">
                <SearchPropertyHomeTop />
                </div>
            </div>
            </div>
        </div>
    )
}