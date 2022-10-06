import "./footer.css";
import logo from '../../assets/images/Logo2.png';
import {AiFillAndroid, AiFillApple} from 'react-icons/ai'


export function Footer() {

    const date = new Date().getFullYear();
    return (
        <div className="Footer">
                <div className="sections">
                        <div className="sectionUnic">
                        <a href="/"><img src={logo} alt="" /></a>
                            <h5>Nós temos a chave do seu sonho!</h5>
                        </div>
                        <div className="sectionUnic">
                            <h4><b>SUA CHAVE</b></h4>
                                <h5><a href="/">Sobre nós</a></h5>
                                <h5><a href="/">Blog</a></h5>
                                <h5><a href="/imoveis/all">Imóveis</a></h5>
                                <h5><a href="/imobiliarias">Imobiliárias</a></h5>
                                <h5><a href="/corretores">Corretores</a></h5>
                                <h5><a href="/">Simulador</a></h5>
                                <h5><a href="/planos">Preços</a></h5>
                        </div>
                        <div className="sectionUnic">
                            <h4><b>CENTRAL DE AJUDA</b></h4>
                            <h5><a href="/">Faq</a></h5>
                            <h5><a href="/termos">Termos de uso</a></h5>
                            <h5><a href="/privacidade">Política de privacidade</a></h5>
                            <h5><a href="/">Fale conosco</a></h5>
                            <br />
                            <p><b>BAIXE AGORA:</b></p>
                            <div className="apps">
                                <div className="app">
                                <h5>Clientes</h5>
                                <div className="logos">
                                <button><AiFillAndroid /></button>       
                                <button><AiFillApple /></button>       
                                </div>
                                </div>
                                <div className="app">
                                <h5>Imobiliária</h5>
                                <div className="logos">
                                <button><AiFillAndroid /></button>       
                                <button><AiFillApple /></button>            
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="sectionUnic">
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
