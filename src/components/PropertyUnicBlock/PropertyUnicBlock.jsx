import "./propertyUnicBlock.css"
import { FaBed, FaCar, FaShower } from "react-icons/fa";
import { IoBedOutline, IoCarSportOutline, IoHeart, IoLocationOutline } from "react-icons/io5";
import { GiShower, GiHomeGarage } from "react-icons/gi";
import { MdOutlineShower } from "react-icons/md";
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
                    <h4>Lindo apartamento luxuoso</h4>
                        </a>
                    <h6><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h6>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                                <p>3 Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                                <p>3 Banheiros</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                                <p>3 Vagas</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h6>Aluguel</h6>
                        <h3>R$ <span>2.000,00</span> /Mês</h3>
                    </div>
                    </div>
                </div>
    )
}