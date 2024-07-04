import React, { useEffect, useRef } from 'react';
import NewSection from "./NewSection";
import imgMoi from "../asset/img/moi.png";

const About = () => {
  const speedRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        speedRef.current.setAttribute('data-scroll-speed', '3');
      } else {
        speedRef.current.setAttribute('data-scroll-speed', '6');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="about" className="about" data-scroll data-scroll-call="about" data-scroll-repeat>
      <NewSection image={imgMoi} title="À propos" />
      <div className="wrapper-text max-w-full px-6 md:px-20 h-full">
        <div id="about-colonnes" className="colonnes flex flex-wrap mx-auto h-full">
          <div data-scroll className="colonne left w-full md:w-1/2 p-6 h-[80vh] flex items-start">
            <div
              data-scroll
              ref={speedRef}
              data-scroll-sticky
              data-scroll-target="#about-colonnes"
              className="top-1/2 transform md:sticky md:-translate-y-1/2"
            >
              <div data-scroll className="line-wrapper ml-20 mr-20 mb-8">
                <div className="line h-1 bg-gray-800 w-3/5 mx-auto transition duration-1000 delay-400 opacity-0 transform scale-x-0"></div>
              </div>
              <div className="text-justify font-semibold ml-[5vw] mr-[5vw]">
                <h4 className="text-3xl md:text-5xl pt-16 pb-10">
                  <span>Bonjour,</span>
                </h4>
                <p className="text-xl md:text-3xl leading-14">
                  Je suis Thomas Calmettes, développeur front-end passionné par l'art de la programmation, spécialisé dans la création de sites web interactifs et esthétiques grâce à ma maîtrise des langages de développement et des outils de conception modernes.
                </p>
              </div>
            </div>
          </div>
          <div className="colonne right w-full md:w-1/2 p-6 min-h-[100vh] hidden md:block">
            <div className="mt-96">
              <div data-scroll data-scroll-speed="3" className="about__text-anim about__text text-gray-700 text-base ml-[5vw] mr-[5vw]">
                <p className="leading-20 text-lg">
                  Actuellement étudiant en <strong className='text-gray-900'>Master 2</strong> à l'ESTIAM, j'ai acquis une solide connaissance des langages fondamentaux du développement web tels que <strong className='text-gray-900'>HTML</strong>, <strong className='text-gray-900'>CSS</strong> et <strong className='text-gray-900'>JavaScript</strong>. De plus, je me spécialise dans l'utilisation de frameworks modernes comme <strong className='text-gray-900'>React</strong>, ce qui me permet de créer des sites web dynamiques et interactifs répondant aux besoins actuels des utilisateurs.
                </p>
                <br />
                <p className="leading-20 text-lg">
                  Ma passion pour le développement front-end s'étend également au développement mobile. Grâce à <strong className='text-gray-900'>React Native</strong>, je suis capable de concevoir des applications mobiles performantes et intuitives. Cette double compétence me permet de proposer des solutions complètes et cohérentes, tant pour les environnements web que mobiles.
                </p>
                <br />
                <p className="leading-20 text-lg">
                  En plus de mes compétences techniques, j'attache une grande importance à <strong className='text-gray-900'>l'expérience utilisateur</strong> et à <strong className='text-gray-900'>l'ergonomie</strong>, cherchant toujours à optimiser l'interaction et la satisfaction des utilisateurs. Mon parcours académique à l'ESTIAM m'a permis d'acquérir une vision globale et intégrée du développement, que ce soit pour des projets web ou mobiles.
                </p>
                <br />
                <p className="leading-20 text-lg">
                  Je suis constamment à la recherche de nouveaux défis et opportunités pour enrichir mes compétences et contribuer à des projets innovants.
                </p>
                <br />
                <p className="leading-20 text-lg">
                  N'hésitez pas à consulter mes projets et réalisations pour découvrir mon univers de développement front-end et mobile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
