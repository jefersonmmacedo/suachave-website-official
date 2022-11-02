import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { ListProperty } from "../../components/ListProperty/ListProperty";
import { SearchPropertyListing } from "../../components/SearchPropertyListing/SearchPropertyListing";
import { Footer } from "../../components/Footer/Footer";
import { FiArrowUpCircle } from "react-icons/fi";

export function Properties(){
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
            <SearchPropertyListing />
            <ListProperty />
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />
        </div>
    )
}
