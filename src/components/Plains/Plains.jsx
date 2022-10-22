import "./plains.css"
import {IoCheckbox} from "react-icons/io5";

export function Plains() {
    return (
        <div className="Plains">
            <div className="plain">
                <h3>Plano Básico</h3>
                <div className="title">
                <h1>R$ 99,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via ligação e whatsapp</p>
                    <p><IoCheckbox /> Cadastro de corretores</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    {/* <p><IoCheckbox /> Processo de compra digitalizado</p> */}
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                      <p><IoCheckbox /> Anúncios no site Sua Chave</p>
                    {/* <p><IoCheckbox /> Anúncios no app Sua Chave</p> */}
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Seu plano atual</a>
            </div>

            <div className="plain2">
                <h3>Plano Web</h3>
                <div className="title">
                <h1>R$ 149,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via whatsapp</p>
                    <p><IoCheckbox /> Contato via ligação</p>
                    <p><IoCheckbox /> Site responsivo</p>
                    <p><IoCheckbox /> Cadastro de corretores</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> Processo de compra digitalizado.</p>
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckbox /> Recebe solicitação para avaliação*</p>
                    {/* <p><IoCheckbox /> App administrativo</p> */}
                    <p><IoCheckbox /> Site individual e responsivo para sua empresa</p>
                    <p><IoCheckbox /> Relatório Mensal do Google Analytics</p>
                    {/* <p><IoCheckbox /> Site individual integrado ao sua chave</p>
                    <p><IoCheckbox /> Anúncios no seu site e no sua chave</p> */}
                    {/* <p><IoCheckbox /> Anúncios no app Sua Chave</p> */}
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Selecionar plano</a>
                <p>* Receba imóveis de clientes para avaliação aumentando seu catálogo de anúncios. <br /> (Apenas no site individual).</p>
            </div>

            <div className="plain">
                <h3>Plano Corretor Home-Office</h3>
                <div className="title">
                <h1>R$ 74,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via ligação e whatsapp</p>
                    <p><IoCheckbox /> Cadastro de corretores</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    {/* <p><IoCheckbox /> Processo de compra digitalizado</p> */}
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                      <p><IoCheckbox /> Anúncios no site Sua Chave</p>
                    {/* <p><IoCheckbox /> Anúncios no app Sua Chave</p> */}
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Seu plano atual</a>
                <p>* Plano destinado a corretores que não possúem escritório.</p>
            </div>

            {/* <div className="plain3">
                <h3>Plano WebApp</h3>
                <div className="title">
                <h1>R$ 329,99</h1>
                <h4>/mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Anúncios ilimitados</p>
                    <p><IoCheckbox /> Agendamento de visitas</p>
                    <p><IoCheckbox /> Chat único por anúncio</p>
                    <p><IoCheckbox /> Contato via ligação e whatsapp</p>
                    <p><IoCheckbox /> Site totalmente responsivo</p>
                    <p><IoCheckbox /> Cadastro de corretores</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> Processo de compra digitalizado</p>
                    <p><IoCheckbox /> Envio e recebimento de documentos</p>
                    <p><IoCheckbox /> Controle de recebimento de aluguéis</p>
                    <p><IoCheckbox /> Recebe imóveis para avaliação</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> Site individual responsivo e integrado</p>
                    <p><IoCheckbox /> App individual para sua empresa integrado</p>
                    <p><IoCheckbox /> Anúncios no seu site</p>
                    <p><IoCheckbox /> Anúncios no seu app</p>
                    <p><IoCheckbox /> Anúncios no site Sua Chave</p>
                    <p><IoCheckbox /> Anúncios no app Sua Chave</p>
                    <p><IoCheckbox /> Plano sem fidelidade</p>
                </div>
                <a href="/plano">Selecionar plano</a>
            </div> */}


        </div>
    )
}