﻿import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import Caixa from "../../assets/images/logos/caixa.svg";
import Santander from "../../assets/images/logos/santander.svg";
import Bradesco from "../../assets/images/logos/bradesco.svg";
import Itau from "../../assets/images/logos/itau2.svg";
import Brasil from "../../assets/images/logos/brasil.svg";
import Inter from "../../assets/images/logos/inter.svg";
import "./simulator.css";
import {FiDollarSign} from "react-icons/fi";
import {IoCalculatorOutline, IoCalendarOutline, IoPeopleOutline, IoBusinessOutline, IoWalletOutline} from "react-icons/io5";

export function Simulator() {
    return (
        <div className="Simulator">
            <Navbar2 />
            <div className="topImageSimulator">
                <div className="back">
            <h1>Nós temos o imóvel dos seus sonhos!</h1>
                <h3>E também as melhores oções de financiamento.</h3>
                </div>
            </div>

            <div className="financer">
            <h2>Porque <span>financiar</span> um imóvel?</h2>
                <h4>Veja 6 vantagens de realizar um financiamento imobiliário.</h4>

                <div className="benefits">
                    <div className="benefitUnic">
                        <FiDollarSign/>
                         <div className="text">
                        <h5>Tenha sua carta de crédito para negociar o melhor imóvel.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoCalculatorOutline/>
                         <div className="text">
                        <h5>Financie até 80% do valor de imóveis a partir de R$ 90 mil.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoBusinessOutline/>
                         <div className="text">
                        <h5>Imóveis residenciais em até 35 anos e comerciais em até 12 anos.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoCalendarOutline/>
                         <div className="text">
                        <h5>Escolha entre parcelas fixas ou atualizáveis.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoPeopleOutline/>
                         <div className="text">
                        <h5>Some sua renda com mais uma pessoa, mesmo sem parentesco.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoWalletOutline/>
                        <div className="text">
                        <h5>Utilize o FGTS na compra de imóveis de até R$ 1,5 milhão. </h5>
                        <h6>De acordo com as regras vigentes publicadas pela Caixa Econômica Federal</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stepesFinances">
                            <h2>5 passos do <span>financiamento</span></h2>
                <h4>Conheça cada etapa do processo de financiamento imobiliário.</h4>

                <div className="stepesList">
                <div className="stepeUnic">
                    <h1>1</h1>
                    <div className="textStepe">
                        <h4>Simulação e aprovação de crédito </h4>
                        <h5>Preencha os seus dados e os do imóvel para simular e solicitar a análise de crédito. </h5>
                    </div>
                </div>
                <div className="stepeUnic2">
                    <div className="textStepe2">
                        <h4>Cadastro e documentação</h4>
                        <h5>Cadastre as informações da proposta e envie os documentos solicitados. </h5>
                    </div>
                    <h1>2</h1>
                </div>
                <div className="stepeUnic">
                    <h1>3</h1>
                    <div className="textStepe">
                        <h4>Análise de documentos e vistoria do imóvel</h4>
                        <h5>Após enviar seus documentos, é hora de acompanhar a análise técnica e marcar a vistoria. </h5>
                    </div>
                </div>
                <div className="stepeUnic2">
                    <div className="textStepe2">
                        <h4>Contrato</h4>
                        <h5>Após a conclusão das análises, você irá até a agência assinar o contrato.</h5>
                    </div>
                    <h1>4</h1>
                </div>
                <div className="stepeUnic">
                    <h1>5</h1>
                    <div className="textStepe">
                        <h4>Liberação de crédito</h4>
                        <h5>Após a entrega ao Santander do contrato registrado e matrícula atualizada, o crédito será liberado ao vendedor.</h5>
                    </div>
                </div>
                </div>
            </div>
             
             <div className="bank">
                <div className="back2">
                <h2>Escolha um banco para a simulação</h2>
                <h4>Estamos trabalhando para trazer as simulações direto em nosso site.</h4>
                <div className="logosBank">
                    <div className="logoUnicBank">
                        <img src={Caixa} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Bradesco} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Santander} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Itau} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Brasil} alt="" className="imageBank"/>
                    </div>
                    <div className="logoUnicBank">
                        <img src={Inter} alt="" className="imageBank"/>
                    </div>
                </div>
                </div>
                </div>
                <Footer />
        </div>
    )
}