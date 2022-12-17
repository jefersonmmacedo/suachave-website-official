﻿import "./finance.css";
import {FaHandshake, FaRegHandshake} from "react-icons/fa"
import {IoDesktopOutline, IoHomeOutline} from "react-icons/io5"

export function Finance() {
    return (
        <div className="Finance">
            <div className="simulation">
            <IoHomeOutline />
            <h2>Deseja financiar?</h2>
            <h4> Simule um valor de entrada e descubra quanto vão custar as parcelas do seu próximo imóvel.</h4>
            <a href="/financiamento">Faça uma simulação</a>
            </div>
            <div className="FinanceValue">
            <FaRegHandshake />
            <h2>Deseja vender?</h2>
            <h4> Cadastre seu imóvel e escolha uma de nossas imobiliárias para efetuar uma avaliação profissional!</h4>
            <a href="/avaliacao">Avaliar meu imóvel</a>
            </div>
        </div>
    )
}