import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { SearchPropertyListing } from "../../components/SearchPropertyHomeTop/SearchPropertyHomeTop";
import { Footer } from "../../components/Footer/Footer";
import { FiArrowUpCircle } from "react-icons/fi";
import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { IoClose, IoCloseOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { useState } from "react";
import { useParams, useLocation, useSearchParams, useRoutes} from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import notFoundImage from "../../assets/images/svg/404property.svg";
import { PropertyUnicBlockLoader } from "../../components/PropertyUnicBlockLoader/PropertyUnicBlockLoader";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlock } from "../../components/PropertyUnicBlock/PropertyUnicBlock";
import api from "../../services/api";
import { useEffect } from "react";
import { FilterPropertiesList } from "../../components/FilterPropertiesList/FilterPropertiesList";

export function Properties(){
    const {status} = useParams();
    const query = useQuery();

    const [isOpenModalSearch, setIsOpenModaSearch] = useState(false);

    const availability = "Disponível";
    const type = query.get("tipo") === null ? "" : query.get("tipo")
    const subType = query.get("subtipo") === null ? "" : query.get("subtipo")
    const bedroom = query.get("quartos") === null ? "0" : query.get("quartos")
    const garage = query.get("garagem") === null ? "0" : query.get("garagem")
    const suite = query.get("suites") === null ? "0" : query.get("suites")
    const restroom = query.get("banheirtos") === null ? "0" : query.get("banheirtos")
    const pets = query.get("pets")
    const furnished = query.get("mobilha")

    const city = query.get("city") 
    const uf = query.get("uf") 


    const {data} = useFetch(
        type !== "" && subType !== "" ?
        `property/listsadressfull/${availability}/${status}?city=${city}&uf=${uf}&type=${type}&subType=${subType}&bedroom=${bedroom}&restroom=${restroom}&garage=${garage}&suite=${suite}`
        :status === undefined ?
        `/property/all/${availability}`
        :
        status !== undefined && city === null && uf === null ?
        `/property/lists/${availability}/${status}`
        :
        status !== undefined && city !== null && uf !== null ?
        `/property/listsadress/${availability}/${status}?city=${city}&uf=${uf}`
       :"");



    if(!data) {
        return (
            <div className="loader">
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            </div>
        )
    }

    function handleTop(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    


   
    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
          
        <div className="ListProperty">
        <div className="topList">
        <div className="textItens">
            {data.length === 0 ?
                ""                   
            : data.length === 1 ?
            <h3>{data.length} {status === "Venda" ? `imóvel à ${status}` : `imóvel para ${status}`}</h3>
            : status === undefined ?
            <h3>{data.length} Imóveis disponíveis</h3>
            :
            <h3>{data.length} {status === "Venda" ? `imóveis à ${status}` : `imóveis para ${status}`}</h3>
            }
            </div>
        <FilterPropertiesList status={status} typeProperty={type} subTypeProperty={subType} city={city} uf={uf} quarto={bedroom} banheiro={restroom} suítes={suite} garagem={garage} petsProperty={pets} furnishedProperty={furnished}/>
        </div>



        {data?.length > 0 ?
         <div className="itens">
            {data?.map((property) => {
                    return (
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}
            </div> 
            :
                <div className="MainAbout">
                    <img src={notFoundImage} alt="" />
                    <h3>Nenhum imóvel localizado</h3>
                </div>
            

        }

              
    </div>
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />
        </div>
    )
}
