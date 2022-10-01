import "./proposals.css";
import Navbar2 from "../../components/Nav/Navbar";
import { ProposalList } from "../../components/ProposalList/ProposalList";
import { useState } from "react";
import { ListProperty } from "../../components/ListProperty/ListProperty";
import { SearchPropertyListing } from "../../components/SearchPropertyListing/SearchPropertyListing";

export function Proposals(){
    const [professional, setProfessional] = useState("");
    return (
        <div className="Proposals">
        <Navbar2 />
        <div className="listPage">
            <SearchPropertyListing />
            <ListProperty />
        </div>
        </div>
    )
}
