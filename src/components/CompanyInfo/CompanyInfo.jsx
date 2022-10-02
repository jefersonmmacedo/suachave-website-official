import "./companyInfo.css";
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoChatboxEllipsesOutline} from 'react-icons/io5'
const profile = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"

export function CompanyInfo() {
    return (
        <div className="CompanyInfo">
            <div className="image">
                <img src={profile} alt="" />
            </div>
            <h2>Sua Chave Imóveis</h2>
            <h5>Centro - Rio Bonito - Rio de Janeiro</h5>

            <div className="contact">
                <div className="info">
                    <IoCallOutline />
                    <h4>(21) 2222-2222</h4>
                </div>
                <div className="info">
                    <IoLogoWhatsapp />
                    <h4>(21) 99999-9999</h4>
                </div>
                <div className="info">
                    <IoMailOutline />
                    <h4>contato@suachaveimoveis.com.br</h4>
                </div>
            </div>
                <divo className="buttonsContact">
                    <button className="btn-whats"><IoLogoWhatsapp /> Whatsapp</button>
                    <button className="btn-call"><IoCallOutline /> Ligar</button>
                    <button><IoChatboxEllipsesOutline /> Mensagem</button>
                </divo>
        </div>
    )
}