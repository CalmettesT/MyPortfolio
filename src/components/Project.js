import React from "react";
import CardProject from "./CardProject";
import BPS from "../asset/video/BPS.mp4";
import SiteChloe from "../asset/video/siteChloe.mp4";
import NewSection from "./NewSection";
import imgMoi from "../asset/img/moiV2.jpg"

export function Project() {
  return (
    <div id="project" className="p-4 mt-[10vh]">
      <NewSection image={imgMoi} title="Mes Projets" />
      <div className="grid gap-y-24 gap-x-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[4vw] pt-[25vh]">
        <CardProject
          videoSrc={BPS}
          title="Bois Pyrénées Services"
          description="Création d'un site pour une entreprise de vente de bois de chauffage. Technologies utilisées: HTML, CSS et JavaScript pour une structure robuste et des interactions dynamiques."
          buttonText="Git Hub"
          buttonLink="https://www.example.com"
        />
        <CardProject
          videoSrc={SiteChloe}
          title="Educatrice Canine"
          description="Développement d'un site pour une éducatrice canine à Toulouse. Réalisé avec React et Tailwind CSS pour une interface utilisateur moderne et responsive."
          buttonText="Visitez le site"
          buttonLink="https://chlo-educ-canin.fr/"
        />
        <CardProject
          videoSrc={SiteChloe}
          title="GestInvest"
          description="Développement d'une application mobile pour la gestion des investissements personnels. Technologies utilisées: React Native pour le développement mobile multiplateforme."
          buttonText="En savoir plus"
          buttonLink="https://www.example.com"
        />
        <CardProject
          videoSrc={SiteChloe}
          title="Projet Personnel"
          description="Développement d'une application de gestion de projet personnelle. Utilisation de React pour le front-end et Node.js pour le back-end, offrant une solution complète et performante."
          buttonText="En savoir plus"
          buttonLink="https://www.example.com"
        />
      </div>
    </div>
  );
}

export default Project;
