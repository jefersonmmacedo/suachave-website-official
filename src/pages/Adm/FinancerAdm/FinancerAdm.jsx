import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import { BrokerList } from "../../../components/BrokerList/BrokerList";
import { FaDollarSign} from "react-icons/fa"
import { FiDollarSign} from "react-icons/fi"
import { IoArrowUpCircleOutline, IoArrowDownCircleOutline, IoChevronDownOutline, IoTimeSharp} from "react-icons/io5"
import "./financerAdm.css"

export function FinancerAdm() {
    return (
        <div className="FinancerAdm">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <div className="infosFinancer">
                        <div className="infoFinancerUnic">
                            <div className="top">
                                <h5>Entradas</h5>
                                <IoArrowUpCircleOutline color="00a859" size={24}/>
                            </div>
                            <h2>R$ 150.000,00</h2>
                        </div>
                        <div className="infoFinancerUnic">
                            <div className="top">
                                <h5>Saídas</h5>
                                <IoArrowDownCircleOutline color="ed3237" size={24}/>
                            </div>
                            <h2>R$ 45.000,00</h2>
                        </div>
                        <div className="infoFinancerUnicTotal">
                            <div className="top">
                                <h5>Saldo</h5>
                                <FiDollarSign color="fff" size={24}/>
                            </div>
                            <h2>R$ 105.000,00</h2>
                        </div>
                </div>
            <div className="financerList">
                <button>+ Nova Transação </button>

                <div className="FinancerListUnic">
                    <h5>Venda de Imóvel</h5>
                    <h5 className="up">R$ 10.000,00</h5>
                    <h5 className="date">15/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Pintura Imóvel Aluguel</h5>
                    <h5 className="down">R$ 3.000,00</h5>
                    <h5 className="date">13/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Conta de luz</h5>
                    <h5 className="down">R$ 120,00</h5>
                    <h5 className="date">08/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Recebimento de Transação</h5>
                    <h5 className="up">R$ 25.000,00</h5>
                    <h5 className="date">05/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Venda de Imóvel</h5>
                    <h5 className="up">R$ 10.000,00</h5>
                    <h5 className="date">15/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Pintura Imóvel Aluguel</h5>
                    <h5 className="down">R$ 3.000,00</h5>
                    <h5 className="date">13/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Conta de luz</h5>
                    <h5 className="down">R$ 120,00</h5>
                    <h5 className="date">08/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
                <div className="FinancerListUnic">
                    <h5>Recebimento de Transação</h5>
                    <h5 className="up">R$ 25.000,00</h5>
                    <h5 className="date">05/11/2022</h5>
                    <button><IoChevronDownOutline /> </button>
                </div>
            </div>
            </div>
        </div>
    )
}

