import "./footer.css";
import logo from '../../assets/images/Logo2.png';
import {AiFillAndroid, AiFillApple} from 'react-icons/ai'


export function Footer() {

    const date = new Date().getFullYear();
    return (
        <div className="Footer">
                <div className="blocks">
                        <div className="block">
                            <img src={logo} alt="" />
                            <h5>Nós temos a chave do seu sonho!</h5>
                        </div>
                        <div className="block">
                            <h4><b>SUA CHAVE</b></h4>
                                <h5>Sobre nós</h5>
                                <h5>Blog</h5>
                                <h5>Imóveis</h5>
                                <h5>Imobiliárias</h5>
                                <h5>Corretores</h5>
                                <h5>Simulador</h5>
                        </div>
                        <div className="block">
                            <h4><b>CENTRAL DE AJUDA</b></h4>
                            <h5>Faq</h5>
                            <h5>Termos de uso</h5>
                            <h5>Fale conosco</h5>
                            <br />
                            <p><b>BAIXE AGORA:</b></p>
                            <div className="icons">
                                <div className="icon">
                                <h5>Clientes</h5>
                                <div className="logos">
                                <h2><AiFillAndroid /></h2>       
                                <h2><AiFillApple /></h2>       
                                </div>
                                </div>
                                <div className="icon">
                                <h5>Imobiliária</h5>
                                <div className="logos">
                                <h2><AiFillAndroid /></h2>       
                                <h2><AiFillApple /></h2>            
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <h4><b>ATENDIMENTO</b></h4>
                            <h5>(21) 2222-2222</h5>
                            <h5>(21) 99999-9999</h5>
                            <h5>contato@suachave.com.br</h5>
                        </div>
                </div>
                <div className="copy">
                    <h5>Sua Chave {date}. Todos os direitos reservados</h5>
                    <h5>Desenvolvido e mantido por: <a href="https://www.codingit.com.br/" target="_Blank">Coding It</a></h5>
                </div>
        </div>
    )
}
