import "./plains.css"
import {IoCheckbox} from "react-icons/io5";

export function Plains() {
    const professional = false;
    return (
        <div className="Plains">
            <div className="plain">
                <h3>Plano Básico</h3>
                <div className="title">
                <h1>R$ 149,99</h1>
                {/* <h4>/ mês</h4> */}
                </div>
                <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> 20 fotos por imóvel</p>
                    <p><IoCheckbox /> Sem vídeo por imóvel</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Imóveis no site e app sua chave</p>
                </div>
                <button>Seu plano atual</button>
            </div>
            <div className="plain2">
                <h3>Plano Web</h3>
                <div className="title">
                <h1>R$ 299,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> 40 fotos por imóvel</p>
                    <p><IoCheckbox /> Até 1 vídeo por imóvel</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Site individual para sua empresa</p>
                    <p><IoCheckbox /> Imóveis em seu site</p>
                    <p><IoCheckbox /> Imóveis no site e app sua chave</p>
                </div>
                <button>Selecionar plano</button>
                <p>Mais procurado</p>
            </div>
            <div className="plain3">
                <h3>Plano WebApp</h3>
                <div className="title">
                <h1>R$ 449,99</h1>
                <h4>/ mês</h4>
                </div>
                <div className="text">
                    <p><IoCheckbox /> Imóveis ilimitadas</p>
                    <p><IoCheckbox /> 40 fotos por imóvel</p>
                    <p><IoCheckbox /> Até 2 vídeos por imóvel</p>
                    <p><IoCheckbox /> Área administrativa</p>
                    <p><IoCheckbox /> App administrativo</p>
                    <p><IoCheckbox /> Site e app individual para sua empresa</p>
                    <p><IoCheckbox /> Imóveis em seu site e app</p>
                    <p><IoCheckbox /> Imóveis no site e app sua chave</p>
                </div>
                <button>Selecionar plano</button>
            </div>


        </div>
    )
}