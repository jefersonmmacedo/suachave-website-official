import "./pricing.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Plains } from "../../components/Plains/Plains";
import { Footer } from "../../components/Footer/Footer";
// import Anuncie from "../../assets/images/anuncie.jpg";

export function Pricing() {
    return (
        <div className="Pricing">
            <Navbar2 />
            <h2>Planos</h2>

            <Plains />

            {/* <img src={Anuncie} alt="" className="img"/> */}
            <Footer />
        </div>
    )
}