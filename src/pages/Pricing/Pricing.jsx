import "./pricing.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Plains } from "../../components/Plains/Plains";
import { Footer } from "../../components/Footer/Footer";
import {MdAlarm} from "react-icons/md"

export function Pricing() {
    return (
        <div className="Pricing">
            <Navbar2 />
            <h2>Escolha o <span>plano ideal</span> para o seu negócio</h2>
            <h4>Cada plano atende a uma necessidade, de acordo com as ferramentas oferecidas. <br/>Você poderá alterar a qualquer momento.</h4>

            <Plains />

            <div className="future">
                <h4>Serviços disponíveis <span>em breve</span>:</h4>
                <h5><MdAlarm /> Processo de compra de imóvel online</h5>
                <h5><MdAlarm /> Processo de aluguel de imóvel online</h5>
                <h5><MdAlarm /> Assinatura digital de contrato</h5>
                <h5><MdAlarm /> Sistema de pagamento e recebimento de aluguel</h5>
                <h5><MdAlarm /> Sistema de solicitação e acompanhamento de reparo em imóveis</h5>
                <h5><MdAlarm /> Integração com portais</h5>
                {/* <h5><MdAlarm /> Disparo de e-mail automático personalizável</h5> */}
                <h5><MdAlarm /> Google Analytcs</h5>
                {/* <h5><MdAlarm /> Contas de Email (1GB/5GB/15BG/50GB de espaço)</h5> */}
                {/* <h5><MdAlarm /> Aplicativo para clientes</h5> */}
                <h5><MdAlarm /> Aplicativo para gerenciamento de sua imobiliária</h5>
                <h5><MdAlarm /> Aplicativo único para sua imobiliáiria</h5>
                <h5><MdAlarm /> Agendamento de visitas via WhatsApp</h5>
                <h5><MdAlarm /> Marketing Digital Especializado</h5>
                {/* <h5><MdAlarm /> Adição de novos usuários</h5> */}
                {/* <h5><MdAlarm /> Novos modelos de site individual</h5> */}
            </div>

            <Footer />
        </div>
    )
}