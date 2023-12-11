import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../CSS/Single.scss";
import Charts from "./Charts";
import { useAppSelector } from "../../../hooks/store";
import { BASE_URL } from "../../../constants/env";

const Single = ({ Id, admin, setshowSingle }) => {
  const { users } = useAppSelector((state) => state.data);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    if (Id) {
      const userSearch = users.find((user) => user.id === Id);
      if (userSearch) {
        setUserSelected(userSelected);
      }
    }
  }, [Id]);

  return (
    <div className="singleContainer">
      <div className="single">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={`${BASE_URL}/${userSelected?.contentUrl}`}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">
                  A propos de l'utilisateur {userSelected?.nom}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Nom :</span>
                  <span className="itemValue">{userSelected?.nom}</span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Contact :</span>
                  <span className="itemValue">{contact}</span>
                </div> */}
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userSelected?.email}</span>
                </div>
              </div>
            </div>
            <button className="btn-retour" onClick={() => setshowSingle("")}>
              Annuler
            </button>
          </div>
          <div className="right">
            <Charts aspect={2 / 1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
