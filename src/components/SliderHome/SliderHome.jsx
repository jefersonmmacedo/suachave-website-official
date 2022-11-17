import "./sliderHome.css"
import {FaBed, FaShower, FaCar, FaBath} from 'react-icons/fa';
import {IoCrop, IoMove, IoArrowBack, IoArrowForward, IoLocationOutline, IoBedOutline, IoCarSportOutline} from 'react-icons/io5';
import {TfiRulerAlt2} from 'react-icons/tfi';
import {MdOutlineShower} from 'react-icons/md';
import {TbBath} from 'react-icons/tb';
import ImageHouse1 from "../../assets/images/house.jpg";
import ImageHouse2 from "../../assets/images/house1.jpg";
import ImageHouse3 from "../../assets/images/house2.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import ImageHouse6 from "../../assets/images/house6.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function SliderHome() {
  const images = [
    ImageHouse1,
    ImageHouse2,
    ImageHouse3,
    ImageHouse4,
];

const buttonStyle = {
  padding: '10px',
  borderRadius: '50%',
  background: 'rgba(237,50,55, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties}>
          <div className="each-slide-effect">
          <div className="imageTop">
            <div className="image">
                <a href="/imovel">
                    <img src={images[0]} alt="" />
                </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>Apartamento de luxo</h3>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                            <p>3 Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TbBath />
                            <div className="simbol">
                            <p>3 Suítes</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                            <p>Banheiro</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                                <p>3 Vagas</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TfiRulerAlt2 />
                            <div className="simbol">
                                <p>300 M<sup>2</sup></p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCrop />
                            <div className="simbol">
                                <p>150 M<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ <span>2.000,00</span> /Mês</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[1]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>Apartamento luxuoso</h3>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                            <p>3 Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TbBath />
                            <div className="simbol">
                            <p>3 Suítes</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                            <p>1 Banheiro</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                            <p>2 Vagas</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TfiRulerAlt2 />
                            <div className="simbol">
                                <p>300 M<sup>2</sup></p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCrop />
                            <div className="simbol">
                                <p>150 M<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ <span>2.000,00</span> /Mês</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[2]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>Apartamento luxuoso</h3>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                            <p>3 Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TbBath />
                            <div className="simbol">
                            <p>3 Suítes</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                            <p>Banheiro</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                                <p>3 Vagas</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TfiRulerAlt2 />
                            <div className="simbol">
                                <p>300 M<sup>2</sup></p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCrop />
                            <div className="simbol">
                                <p>150 M<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ <span>2.000,00</span> /Mês</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[3]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>Apartamento luxuoso</h3>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                                <IoBedOutline />
                            <div className="simbol">
                            <p>3 Quartos</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TbBath />
                            <div className="simbol">
                            <p>3 Suítes</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <MdOutlineShower />
                            <div className="simbol">
                            <p>Banheiro</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCarSportOutline />
                            <div className="simbol">
                                <p>3 Vagas</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <TfiRulerAlt2 />
                            <div className="simbol">
                                <p>300 M<sup>2</sup></p>
                            </div>
                        </div>
                        <div className="iconUnic">
                                <IoCrop />
                            <div className="simbol">
                                <p>150 M<sup>2</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h5>Aluguel</h5>
                        <h2>R$ <span>2.000,00</span> /Mês</h2>
                    </div>
                </div>
            </div>
          </div>
      </Slide>
  );
};
  

  export { SliderHome }