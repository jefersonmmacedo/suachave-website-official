import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./myAccount.css";
import { ToolBarClient } from "../../components/ToolBarClient/ToolBarClient";
import { IoCalendarOutline, IoChatboxEllipsesOutline, IoHeartOutline, IoHomeOutline} from "react-icons/io5"

export function MyAccount() {
    const LocalCity = localStorage.getItem("suachave");
    const user = JSON.parse(LocalCity);
     
    return (
        <div className="MyAccount">
            <Navbar2 />

                <div className="main">
                <ToolBarClient />
                <div className="text">
                <h2>Seja bem-vindo, {user.name}</h2>
                    <div className="indicators">
                        <a href="/favoritos">
                        <div className="indicatorUnic">
                            <IoHeartOutline />
                            <div className="textIndicator">
                                <h3>5</h3>
                                <h4>Favoritos</h4>
                            </div>
                        </div>
                        </a>
                        <a href="/agendamentos">
                        <div className="indicatorUnic">
                            <IoCalendarOutline />
                            <div className="textIndicator">
                                <h3>5</h3>
                                <h4>Agendamentos</h4>
                            </div>
                        </div>
                        </a>
                        <a href="/mensagens">
                        <div className="indicatorUnic">
                            <IoChatboxEllipsesOutline />
                            <div className="textIndicator">
                                <h3>5</h3>
                                <h4>Conversas</h4>
                            </div>
                        </div>
                        </a>
                        <a href="/meusimoveis">
                        <div className="indicatorUnic">
                            <IoHomeOutline />
                            <div className="textIndicator">
                                <h3>5</h3>
                                <h4>Imóveis</h4>
                            </div>
                        </div>
                        </a>

                    </div>
                </div>
            </div>
            <div className="viewFooter">
            <Footer />
        </div>
        </div>
    )
}       