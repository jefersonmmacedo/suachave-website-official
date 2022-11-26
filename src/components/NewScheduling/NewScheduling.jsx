import "./newScheduling.css"
import { IoCalendar, IoCloseOutline, IoLocationOutline, IoBusinessOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { useState } from "react";
import ImageHouse1 from "../../assets/images/house.jpg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";

export function NewScheduling({idProperty, idCompany}) {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const [isOpenModal, setIsOpenModa] = useState(false);
    const [isOpenModalLogin, setIsOpenModaLogin] = useState(false);
    const [value, onChange] = useState(new Date());
    const [shift, setShift] = useState();
    const [hour, setHour] = useState();
    const [ownACar, setOwnACar] = useState();
    const [similarProperties, setSimilarProperties] = useState();
    const [amountOfPeople, setAmountOfPeople] = useState();
    const [meet, setMeet] = useState();

    // const {data} = useFetch(`/property/${idCompany}`)

    function handleNewScheduling() {
        const status = "Pendente"
        console.log({
            idClient: user.id, idProperty, idCompany, email: user.email, phone: user.phone, whatsapp: user.whatsapp, status,
            day: new Date(value).getDate(), month: new Date(value).getMonth()+1, year: new Date(value).getFullYear(), shift, hour, ownACar, nameCompany: "", address: "", amountOfPeople,
            similarProperties, dateCompleted: value
        })
    }


    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false);
      }
    function handleOpenModalLogin(e) {
      e.preventDefault();
        setIsOpenModaLogin(true)
      }
    
      function handleCloseModalLogin(e) {
        e.preventDefault();
        setIsOpenModaLogin(false);
      }

      function handleShift(e) {
        setShift(e.target.value);
      }
      function handleHour(e) {
        setHour(e.target.value);
      }
      function handleAmountOfPeople(e) {
        setAmountOfPeople(e.target.value);
      }
      function handleOwnACar(e) {
        setOwnACar(e.target.value);
      }
      function handleSimilarProperties(e) {
        setSimilarProperties(e.target.value);
      }
      function handleMeet(e) {
        setMeet(e.target.value);
      }

    Modal.setAppElement('#root');
    return (
        <>
        <button className="buttonScheduling" onClick={handleOpenModal}><IoCalendar/> Agendar visita</button>

        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-scheduling">
            <div className="itensModal-scheduling">
              <h2>Novo agendamento</h2>
                <Calendar onChange={onChange} value={value} />
                <div className="form">
                <div className="data">
                    <div className="infosData">
                    <div className="textModal-scheduling">
                        <p>Turno</p>
                    </div>
                     <select value={shift} onChange={handleShift}>
                    <option value="Escolha">Escolha</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                </select>
                    </div>
                    <div className="infosData">
                    <div className="textModal-scheduling">
                        <p>Escolha um horário</p>
                    </div>
                     <select value={hour} onChange={handleHour}>
                     {shift === "Manhã" ?
                        <>
                         <option value="Escolha">Escolha</option>
                        <option value="08h - 09h">08h - 09h</option>
                        <option value="09h - 10h">09h - 10h</option>
                        <option value="10h - 11h">10h - 11h</option>
                        <option value="11h - 12h">11h - 12h</option>
                        </>
                        : shift === "Tarde" ?
                        <>
                        <option value="Escolha">Escolha</option>
                        <option value="13h - 14h">13h - 14h</option>
                        <option value="14h - 15h">14h - 15h</option>
                        <option value="15h - 16h">15h - 16h</option>
                        <option value="16h - 17h">16h - 17h</option>
                        </>
                        : <option value="Escolha">Escolha Turno</option>}
                  

                </select>
                    </div>

                </div>
                <div className="data">

                    <div className="infosData">
                    <div className="textModal-scheduling">
                        <p>Possúi carro?</p>
                    </div>
                 <select value={ownACar} onChange={handleOwnACar}>
                    <option value="Escolha">Escolha</option>
                    <option value="Não">Não</option>
                    <option value="Sim">Sim</option>
                </select>
                    </div>

                    <div className="infosData">
                    <div className="textModal-scheduling">
                        <p>Quantidade de pessoas</p>
                    </div>
                     <select value={amountOfPeople} onChange={handleAmountOfPeople}>
                        {ownACar === "Sim" ?
                        <>
                        <option value="Escolha">Escolha</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option></>
                        :
                        <>
                        <option value="Escolha">Escolha</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </>}
                </select>
                    </div>

                </div>


                    <div className="data">
                    <div className="infosData">
<div className="textModal-scheduling">
    <p>Local de encontro</p>
</div>
 <select value={meet} onChange={handleMeet}>
    <option value="Escolha">Local de encontro</option>
    <option value="Imobiliária">Imobiliária</option>
    <option value="Endereço do imóvel">Endereço do imóvel</option>
</select>
</div>
<div className="infosData">
<div className="textModal-scheduling">
                        <p>Deseja ver imóveis similares da imobiliária?</p>
                    </div>
                 <select value={similarProperties} onChange={handleSimilarProperties}>
                    <option>Escolha</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>

</div>



</div>
<div className="textModal-scheduling">
                        <p>Endereço de encontro</p>
                    </div>
                <div className="address">
                    <p><IoBusinessOutline />Imobiliária Sua Chave</p>
                    <p><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</p>
                </div>
                {/* <div className="dataProperty">
                    <div className="image">
                    <img src={ImageHouse1} alt="" />
                    </div>
                    <div className="textProperty">
                    <h4>Apartamento luxuoso</h4>
                    <h6><IoLocationOutline />Centro - Rio Bonito - RJ</h6>
                    <div className="pricing">
                        <h6>Aluguel /<span> Mensal</span></h6>
                        <h3>R$ <span>2.000,00</span></h3>
                    </div>
                    </div>
                </div> */}

                <PropertyUnicBlock id={idProperty}/>
                <button className="btnSubmit" onClick={handleNewScheduling}>Enviar solicitação de agendamento</button>
                </div>
            </div>
            </div>
            </Modal>

            
        <Modal isOpen={isOpenModalLogin} onRequestClose={handleCloseModalLogin}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModalLogin}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-Favorite">
            <div className="itensModalFavorite">
                    <IoCalendar />

                    <h1>Legal! <br />
                    Venha nos visitar.</h1>

                    <h4>Entre em sua conta ou cadastre-se para para poder agendar visitas, conhecer os anúncios e ver cada detalhe.</h4>

                    <a href="/entrar">Fazer login</a>

            </div>
            </div>
            </Modal>
        </>
    )
}
