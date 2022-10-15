import "./contact.css";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import {IoMailOpenOutline, IoCallOutline, IoPhonePortraitOutline} from "react-icons/io5"

export function Contact() {
    return (
        <div className="Contact">
            <Navbar2/>
            <div className="main">
                <h2>Fale conosco</h2>
                <h4>Entre em contato conosco, estamos prontos para atendê-lo.</h4>


            <div className="form">
                <div className="inputsContact">               
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Empresa (Opcional)"/>
                </div>
                <div className="inputsContact">               
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Telefone"/>
                </div>
                <select name="" id="">
                    <option value="">Assunto</option>
                    <option value="">Dúvida</option>
                    <option value="">Dica</option>
                    <option value="">Sujestão</option>
                    <option value="">Solução de problemas </option>
                </select>

                <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>

                <button>Enviar mensagem</button>
            </div>

            {/* <div className="BlocksContact">
                <div className="blockContact">
                        <h3><IoMailOpenOutline /> Email</h3>
                        <h5>contato@suachave.com.br</h5>

                        <button>Enviar e-mail</button>
                </div>
                <div className="blockContact">
                        <h3><IoCallOutline  /> Telefone</h3>
                        <h5>21 97168-4632</h5>

                        <button>Ligar</button>
                </div>
                <div className="blockContact">
                    <h3><IoPhonePortraitOutline /> Whatsapp </h3>
                    <h5>21 97168-4632</h5>
                    <button>Enviar mensagem</button>
                </div>
            </div> */}
            </div>
            <Footer/>
        </div>
    )
}