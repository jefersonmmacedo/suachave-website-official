import "./sliderBox.css";
import { IoArrowBack, IoArrowForward} from 'react-icons/io5';
import imageBack from "../../assets/images/background15.jpg"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function SliderBox({images, idProperty}) {
    console.log("images");
    console.log(images);

    if(!images) {
        return (
            <div className="each-slide-effectBoxLoading">
            <div className="imageTopLoading">
            <div className="imageLoading">
                 <a href="">
                    <img src={imageBack} alt="" />
                </a>
            </div>
            </div>
            </div>
        )
    }

const buttonStyle = {
  padding: '5px',
  borderRadius: '50%',
  background: 'rgba(237,50,55, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px',
  width: '25px',
  height: '25px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack /></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties} autoplay={false}>
          {images?.map((property) => {
            return (
                <div className="each-slide-effectBox" key={property.id}>
            <div className="imageTop">
                 <a href={`/imovel/${idProperty}`}>
                    <img src={property.link} alt="" />
                </a>
            </div>
            </div>
            )
          })
          }
      </Slide>
  );
};
  

  export { SliderBox }