import React from "react";
import "../Styles/Partner.css";
import { partnerSection } from "../data/PartnerSection";

function Partner(props) {
 return ( // HTML
    <div className="partner-list">
      {partnerSection.partnerList.map((partner, index) => {
        return (
        
          <div className="kartu-partner" key={index}>
            <img src={partner.image} />
          </div>
        
        )
})}
    </div>
 );
}

export default Partner;
