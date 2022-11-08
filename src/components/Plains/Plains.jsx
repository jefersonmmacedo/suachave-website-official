﻿import "./plains.css"
import {IoCheckmarkOutline} from "react-icons/io5";

export function Plains() {
    return (
        <div className="Plains">

            <div className="plain">
                <h3>Plano Home-Office</h3>
                <div className="title">
                <h1>R$ 99,99</h1>
                {/* <h1>R$ 74,99</h1> */}
                <h4>/mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckmarkOutline /> Anúncios ilimitados</p>
                    <p><IoCheckmarkOutline /> Agendamento de visitas</p>
                    <p><IoCheckmarkOutline /> Chat único por anúncio</p>
                    <p><IoCheckmarkOutline /> Contato via ligação e whatsapp</p>
                    <p><IoCheckmarkOutline /> Área administrativa</p>
                    <p><IoCheckmarkOutline /> Envio e recebimento de documentos</p>
                    <p><IoCheckmarkOutline /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckmarkOutline /> Processo de compra e venda digitalizado</p>
                    <p><IoCheckmarkOutline /> Captação de leads</p>
                    <p><IoCheckmarkOutline /> Sem custo de integração</p>
                    <p><IoCheckmarkOutline /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Contratar plano</a>
                <p>* Plano destinado a corretores que não possúem escritório.</p>
            </div>

            <div className="plain">
                <h3>Plano Básico</h3>
                <div className="title">
                {/* <h1>R$ 99,99</h1> */}
                <h1>R$ 149,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckmarkOutline /> Anúncios ilimitados</p>
                    <p><IoCheckmarkOutline /> Agendamento de visitas</p>
                    <p><IoCheckmarkOutline /> Chat único por anúncio</p>
                    <p><IoCheckmarkOutline /> Contato via ligação e whatsapp</p>
                    <p><IoCheckmarkOutline /> Cadastre seus corretores</p>
                    <p><IoCheckmarkOutline /> Área administrativa</p>
                    <p><IoCheckmarkOutline /> Envio e recebimento de documentos</p>
                    <p><IoCheckmarkOutline /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckmarkOutline /> Processo de compra e venda digitalizado</p>
                    <p><IoCheckmarkOutline /> Captação de leads</p>
                    <p><IoCheckmarkOutline /> Sem custo de integração</p>
                    <p><IoCheckmarkOutline /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Contratar plano</a>
            </div>

            <div className="plain">
                <h3>Plano Web</h3>
                <div className="title">
                {/* <h1>R$ 149,99</h1> */}
                <h1>R$ 199,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                <p><IoCheckmarkOutline /> Anúncios ilimitados</p>
                    <p><IoCheckmarkOutline /> Agendamento de visitas</p>
                    <p><IoCheckmarkOutline /> Chat único por anúncio</p>
                    <p><IoCheckmarkOutline /> Contato via ligação e whatsapp</p>
                    <p><IoCheckmarkOutline /> Site responsivo</p>
                    <p><IoCheckmarkOutline /> Cadastre seus corretores</p>
                    <p><IoCheckmarkOutline /> Área administrativa</p>
                    <p><IoCheckmarkOutline /> Processo de compra digitalizado.</p>
                    <p><IoCheckmarkOutline /> Envio e recebimento de documentos</p>
                    <p><IoCheckmarkOutline /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckmarkOutline /> Processo de compra e venda digitalizado</p>
                    <p><IoCheckmarkOutline /> Recebe solicitação para avaliação*</p>
                    {/* <p><IoCheckmarkOutline /> App administrativo</p> */}
                    <p><IoCheckmarkOutline /> Site individual para sua empresa</p>
                    {/* <p><IoCheckmarkOutline /> Site individual integrado ao sua chave</p>
                    <p><IoCheckmarkOutline /> Anúncios no seu site e no sua chave</p> */}
                    <p><IoCheckmarkOutline /> Captação de leads</p>
                    <p><IoCheckmarkOutline /> Sem custo de integração</p>
                    <p><IoCheckmarkOutline /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Contratar plano</a>
                <p>* Receba imóveis de clientes para avaliação aumentando seu catálogo de anúncios. <br /> (Apenas no site individual).</p>
            </div>

            {/* <div className="plain2">
                <h3>Plano WebApp</h3>
                <div className="title">
                <h1>Em Breve</h1>
                <h1>R$ 329,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                <p><IoCheckmarkOutline /> Anúncios ilimitados</p>
                    <p><IoCheckmarkOutline /> Agendamento de visitas</p>
                    <p><IoCheckmarkOutline /> Chat único por anúncio</p>
                    <p><IoCheckmarkOutline /> Contato via whatsapp</p>
                    <p><IoCheckmarkOutline /> Contato via ligação</p>
                    <p><IoCheckmarkOutline /> Site responsivo</p>
                    <p><IoCheckmarkOutline /> Cadastre seus corretores</p>
                    <p><IoCheckmarkOutline /> Área administrativa</p>
                    <p><IoCheckmarkOutline /> Processo de compra digitalizado.</p>
                    <p><IoCheckmarkOutline /> Envio e recebimento de documentos</p>
                    <p><IoCheckmarkOutline /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckmarkOutline /> Processo de compra e venda digitalizado</p>
                    <p><IoCheckmarkOutline /> Recebe solicitação para avaliação*</p>
                    <p><IoCheckmarkOutline /> App administrativo</p>
                    <p><IoCheckmarkOutline /> Site individual e responsivo para sua empresa</p>
                    <p><IoCheckmarkOutline /> App individual Android e IOS para sua empresa</p>
                    <p><IoCheckmarkOutline /> Relatório Mensal do Google Analytics</p>
                    <p><IoCheckmarkOutline /> Site individual integrado ao sua chave</p>
                    <p><IoCheckmarkOutline /> Anúncios no seu site e no sua chave</p>
                    <p><IoCheckmarkOutline /> Anúncios no app Sua Chave</p>
                    <p><IoCheckmarkOutline /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Contratar plano</a>
                <p>* Receba imóveis de clientes para avaliação aumentando seu catálogo de anúncios. <br /> (No site e app individual).</p>
            </div> */}

        </div>
    )
}