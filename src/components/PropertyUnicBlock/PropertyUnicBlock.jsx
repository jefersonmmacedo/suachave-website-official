import "./propertyUnicBlock.css"
import { FaBed, FaCar, FaShower } from "react-icons/fa";
import { IoHeart, IoLocationOutline } from "react-icons/io5";
import profile from "../../assets/images/profile.png";
import { NewFavorite } from "../NewFavorite/NewFavorite";

export function PropertyUnicBlock({image}) {
    console.log(image)
    return (
        <div className="PropertyUnicBlock">
                    <div className="image">
                        <a href="/imovel">
                    <img src={image} alt="" />
                        </a>
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="userBlock">
                            <div className="ImgUserBlock">
                                <img src={profile} alt="" />
                            </div>
                            <h5 className="name">João Felix Silva imobiliar</h5>
                            {/* 26 letras */}
                        </div>
                    <div className="heart2">
                    <NewFavorite />
                    </div>
                    <div className="text">
                        <a href="/imovel">
                    <h3>Lindo apartamento luxuoso</h3>
                        </a>
                    <h6><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h6>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ 2.000,00 / Mês</h2>
                    </div>
                    </div>
                </div>
    )
}