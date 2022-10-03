import "./sliderHome.css"
import {FaBed, FaShower, FaCar} from 'react-icons/fa';
import {IoCrop, IoMove, IoArrowBack} from 'react-icons/io5';
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
  background: '#fff',
  color: '#000',
  border: '0px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>
}
   
    return (
      <Slide {...properties}>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                  <span>Slide 1</span>
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  <span>Slide 2</span>
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  <span>Slide 3</span>
              </div>
          </div>
          <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                  <span>Slide 3</span>
              </div>
          </div>
      </Slide>
  );
};
  

  export { SliderHome }