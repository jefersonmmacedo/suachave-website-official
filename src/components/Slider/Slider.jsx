import "./slider.css";
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCrop, IoMove} from 'react-icons/io5';
import houseImage from "../../assets/images/house.jpg";

export function Slider() {
    return (
        <div className="Slider">
                <div className="imageTop">
                    <img src={houseImage} alt="" />
                <div className="block">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <h2>Apartamento luxuoso</h2>
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
                        <div className="iconUnic">
                            <p>Área total</p>
                            <div className="simbol">
                                <IoMove />
                                <p>300 M2</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Construção</p>
                            <div className="simbol">
                                <IoCrop />
                                <p>150 M2</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ 2.000,00 / Mês</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}