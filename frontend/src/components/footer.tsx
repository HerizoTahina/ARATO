import React from "react";
import { ReactSVG } from "react-svg";
import { useAppSelector } from "../hooks/store";

function Footer() {
  const {about} = useAppSelector(state => state.data)

  return (
    <footer className="footer-client">
      <div className="contents">
        <section>
          <p className="description">
            Tandavanala est une organisation non statique travaillant dans la
            corrégion de Fianarantsoa. Elle contribue à assurer une meilleure
            gestion des ressources naturelles renouvelables, en particulier du
            corridor forestier.Pour cela, elle appuie les communautés locales à
            améliorer leurs bien être et conditions de vie, développer leurs
            capacités à faire face aux enjeux du changement climatique, renforce
            la gouvernance des ressources naturelles et intensifie
            l'Information, Education, Communication (IEC).
          </p>
        </section>

        <section>
          <h3 className="title">Axes stratégiques</h3>
          <ul className="lists">
            <li className="lists__item">Sécurité alimentaire</li>
            <li className="lists__item">Changement climatique</li>
          </ul>
        </section>

        <section>
          <h3 className="title">Contacts</h3>
          <ul className="lists">
            <li className="lists__item">
              <ReactSVG src="/svg/facebook.svg" /> {about?.fb}
            </li>
            <li className="lists__item">
              <ReactSVG src="/svg/youtube-icon.svg" /> {about?.Youtube}
            </li>
            <li className="lists__item">
              <ReactSVG src="/svg/whatsapp-icon.svg" /> {about?.Telephone}
            </li>
          </ul>
        </section>
      </div>
      <div className="copyright-2">&copy; 2023 Tandavanala.org</div>
    </footer>
  );
}

export default Footer;
