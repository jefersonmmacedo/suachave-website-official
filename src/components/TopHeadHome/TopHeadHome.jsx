import "./topHeadHome.css"
import { SearchPropertyHomeTop } from "../SearchPropertyHomeTop/SearchPropertyHomeTop";
import image1 from "../../assets/images/house1.jpg";
import image2 from "../../assets/images/house2.jpg";
import image3 from "../../assets/images/house3.jpg";

export function TopHeadHome() {
    return (
        <div className="TopHeadHome">
            <div className="blockTop">
            <div className="SearchText">
                <div className="TextTopSearch">
                <h1>Seu novo imóvel, você encontra aqui!</h1>
                <h4>Mais de 5000 imóveis disponíveis para você!</h4>
                <h4>Casas, apartamentos, fazendas lotes, lojas, salas comerciais e muito mais.</h4>

                {/* <button>Anunciar imóvel</button> */}
                </div>

                <SearchPropertyHomeTop />
            </div>

            <div className="ImagesTop">
                <div className="imagesLeft">
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className="imagesRigth">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}