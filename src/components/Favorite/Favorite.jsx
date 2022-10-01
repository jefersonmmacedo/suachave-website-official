import "./favorite.css";
import { IoHeart } from "react-icons/io5";
import Profile from "../../assets/images/profile.png";

export function Favorite() {
    return (
        <div className="Favorite">
            <div className="infos">
                <div className="image">
                    <img src={Profile} alt="" />
                </div>
                <div className="text">
                <h4>Nome Completo de Usuário</h4>
                <div className="professionals">
                        <p>Profissão</p>
                        <p>Profissão</p>
                        <p>Profissão</p>
                    </div>
                </div>
            </div>
            <IoHeart />
        </div>
    )
}