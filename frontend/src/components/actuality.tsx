import React from "react";

function Actuality() {
  return (
    <div className="actuality" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)),url('/actualite.jpeg')" }}>
      <h2 className="actuality__title">
        Campagne de sensibilisation aux alentours du Corridor Forestier de
        Vohibato et Lalangiana
      </h2>
      <p className="actuality__description">
        En partenariat avec l’Alliance Voahary Gasy, l’Association des
        journalistes Aro Voahary,
      </p>
    </div>
  );
}

export default Actuality;
