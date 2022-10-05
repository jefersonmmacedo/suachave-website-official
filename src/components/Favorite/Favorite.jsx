import "./favorite.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCrop, IoHeart, IoHeartOutline, IoMove} from 'react-icons/io5';
import ImageHouse from "../../assets/images/house.jpg";
import ImageHouse1 from "../../assets/images/house1.jpg";
import ImageHouse2 from "../../assets/images/house2.jpg";

export function Favorite() {
    return (
        <div className="ListProperty">
            <div className="listProperty">
            
            <div className="propertyUnicFavorite">
                    <div className="image">
                    <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="text">
                    <h2>Lindo apartamento luxuoso</h2>
                    <h4>Centro - Rio Bonito - Rio de Janeiro</h4>
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
                    <div className="text2">
                        <div className="heartFavorite2">
                        <IoHeart />
                        </div>
                    </div>
                </div> 
            <div className="propertyUnicFavorite">
                    <div className="image">
                    <img src={ImageHouse2} alt="" />
                    </div>
                    <div className="text">
                    <h2>Lindo apartamento luxuoso</h2>
                    <h4>Centro - Rio Bonito - Rio de Janeiro</h4>
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
                    <div className="text2">
                        <div className="heartFavorite2">
                        <IoHeart />
                        </div>
                    </div>
                </div> 
            <div className="propertyUnicFavorite">
                    <div className="image">
                    <img src={ImageHouse} alt="" />
                    </div>
                    <div className="text">
                    <h2>Lindo apartamento luxuoso</h2>
                    <h4>Centro - Rio Bonito - Rio de Janeiro</h4>
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
                    <div className="text2">
                        <div className="heartFavorite2">
                        <IoHeart />
                        </div>
                    </div>
                </div> 

                </div>        
        </div>
    )
}