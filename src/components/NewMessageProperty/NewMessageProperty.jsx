import "./newMessageProperty.css"
import { IoChatboxEllipses, IoCloseOutline, IoHeart } from "react-icons/io5";
import { useState } from "react";
import Modal from 'react-modal';
import {v4 as uuidv4} from "uuid";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";

export function NewMessageProperty({idProperty, idCompany, imageProperty}) {
  const Local = localStorage.getItem("suachave");
  const user = JSON.parse(Local);

  const {data} = useFetch(`/rooms/${idProperty}/${idCompany}/${user?.id}`);

  if(data) {
    console.log(data);
  }

  function handleNewChatMessage() {
      if(data?.length > 0) {
        window.open(`/chat/${data[0]?.room}/${idProperty}/${idCompany}/${user?.id}`, "_self");
        return
      }

      handleCreateNewChatmenssage()
  }

  async function handleCreateNewChatmenssage() {
    const newRoom = {
      id: uuidv4().substring(0,8),
      idClient: user?.id,
      idCompany,
      idProperty,
      imageProperty
    }
    await api.post("/rooms", newRoom).then((res) => {
      window.open(`/chat/${newRoom.id}/${newRoom.idProperty}/${newRoom.idCompany}/${newRoom.idClient}`, "_self");
    }).catch((err) => {
      console(err);
    });
  }

  
    const [isOpenModal, setIsOpenModa] = useState(false);
    function handleOpenModal(e) {
        e.preventDefault();
          setIsOpenModa(true)
        }
      
        function handleCloseModal(e) {
          e.preventDefault();
          setIsOpenModa(false);
        }
  

    Modal.setAppElement('#root');

    return (
        <>
        <button className="buttonMessage" onClick={user === null ? handleOpenModal : handleNewChatMessage}><IoChatboxEllipses/> Mensagem</button>

        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal-Favorite">
            <div className="itensModalFavorite">
                    <IoChatboxEllipses />

                    <h1>Oba! <br />
                    Vamos conversar.</h1>

                    <h4>Entre em sua conta ou cadastre-se para para poder mandar mensagens e ter mais detalhes sobre os anúncios.</h4>

                    <a href="/entrar">Fazer login</a>

            </div>
            </div>
            </Modal>
        </>
    )
}
