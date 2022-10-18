import "./rent.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa'
import {IoHeart, IoHeartOutline} from 'react-icons/io5'
import ImageHouse from "../../assets/images/house3.jpg";
import ImageHouse1 from "../../assets/images/house4.jpg";
import ImageHouse2 from "../../assets/images/house5.jpg";

export function Rent() {
    return (
        <div className="Rent">
            <h2>Imóveis similares</h2>  

            <div className="itens">
            
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse} alt="" />
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart">
                    <IoHeartOutline />
                    </div>
                    <h3>Fazenda para plantio</h3>
                    <h5>Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <h3>R$ 2.000,00 / Mês</h3>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <div className="heart2">
                    <IoHeart />
                    </div>
                    <h3>Xácara com piscina</h3>
                    <h5>Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <h5>Venda</h5>
                        <h3>R$ 2.000.000,00</h3>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse2} alt="" />
                    </div>
                    <div className="heart">
                    <IoHeartOutline />
                    </div>
                    <h3>Apartamentos em condomínio</h3>
                    <h5>Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <h5>Venda</h5>
                        <h3>R$ 5.000.000</h3>
                    </div>
                </div>
            <div className="block">
                    <div className="image">
                    <img src={ImageHouse2} alt="" />
                    </div>
                    <div className="heart">
                    <IoHeartOutline />
                    </div>
                    <h3>Apartamentos em condomínio</h3>
                    <h5>Centro - Rio Bonito - Rio de Janeiro</h5>
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
                        <h5>Venda</h5>
                        <h3>R$ 5.000.000</h3>
                    </div>
                </div>
                
                </div>        
        </div>
    )
}