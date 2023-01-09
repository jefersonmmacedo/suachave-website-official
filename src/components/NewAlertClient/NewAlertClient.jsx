import "./newAlertClient.css"
import { HiOutlineBellAlert } from "react-icons/hi2";


export function NewAlertClient({city, uf, type, subtype, bedroom, suites, restroom, garage}) {

  function handleNewAlert() {
    console.log({city, uf, type, subtype, bedroom, suites, restroom, garage})
  }
    return (
      <button className="NewAlertClient" onClick={handleNewAlert}>
      <HiOutlineBellAlert /> Quero receber alerta de imóveis similares
      </button>
    )
}
