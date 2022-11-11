import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./schedules.css";
import {IoBusinessOutline, IoCalendarClear, IoCalendarOutline, IoLocationOutline} from 'react-icons/io5';
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";
import ImageHouse1 from "../../assets/images/house.jpg";
import ImageHouse2 from "../../assets/images/house1.jpg";
import ImageHouse3 from "../../assets/images/house2.jpg";

export function Schedules() {
    return (
        <div className="Schedules">
            <Navbar2 />
            <div className="main">
                <ToolBarClient />
                {/* <div className="text">
                <h2>Meus agendamentos</h2>
                    <h4><IoCloseCircle /></h4>
                    <h4>Você não possui agendamentos</h4>

                    <a href="/imoveis/venda">Ver imóveis</a>
                </div> */}
                <div className="text">
                <h2>Meus agendamentos</h2>
                <div className="chat">
                    <div className="image">
                        <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="textChat">
                    <h4>Lindo apartamento luxuoso</h4>
                    <h5><IoCalendarOutline /> 10/12/2022 - 11h às 12h</h5>
                    <h6><IoBusinessOutline />Imobiliária LXZ</h6>
                    <h6><IoLocationOutline />Centro - Rio Bonito - RJ</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                    <img src={ImageHouse2} alt="" />                      
                    </div>
                    <div className="textChat">
                    <h4>Lindo apartamento luxuoso</h4>
                    <h5><IoCalendarOutline /> 10/12/2022 - 11h às 12h</h5>
                    <h6><IoBusinessOutline />Imobiliária LXZ</h6>
                    <h6><IoLocationOutline />Centro - Rio Bonito - RJ</h6>
                    </div>
                </div>
                <div className="chat">
                    <div className="image">
                    <img src={ImageHouse3} alt="" />                     
                    </div>
                    <div className="textChat">
                    <h4>Lindo apartamento luxuoso</h4>
                    <h5><IoCalendarOutline /> 10/12/2022 - 11h às 12h</h5>
                    <h6><IoBusinessOutline />Imobiliária LXZ</h6>
                    <h6><IoLocationOutline />Centro - Rio Bonito - RJ</h6>
                    </div>
                </div>
                </div>
            </div>

            <div className="viewFooter">
            <Footer />
        </div>
        </div>
    )
}