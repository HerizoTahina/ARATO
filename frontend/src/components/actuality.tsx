import React from "react";
import { IActualite } from "../types/IActualite";
import { BASE_URL } from "../constants/env";

type ActualityProps = {
  actualite: IActualite
}

function Actuality({ actualite }: ActualityProps) {
  return (
    <div className="actuality" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)),url('${BASE_URL}/media/${actualite.filePath}')` }}>
      <h2 className="actuality__title">
        {actualite.TitreActivite}
      </h2>
      <p className="actuality__description">
        {actualite.descActivite}
      </p>
    </div>
  );
}

export default Actuality;
