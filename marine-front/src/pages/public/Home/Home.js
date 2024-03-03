import React from 'react';
import Navbar from '../../../components/common/Navbar/Navbar';
import Header from '../../../components/common/Header/Header';

import './home.css'
import InfoCard from '../../../components/InfoCard/InfoCard';

import logo1 from '../../../assets/img/logo1.webp';
import logo2 from '../../../assets/img/logo2.webp';
import logo3 from '../../../assets/img/logo3.webp';
import logo4 from '../../../assets/img/logo4.webp';
import marine from '../../../assets/img/marine.webp';
import plante from '../../../assets/img/plante.webp';


import SocialMedia from '../../../components/SocialMedia/SocialMedia';
import SectionServices from '../../../components/ServicesCard/SectionServices';


const Home = () => {

  const handlePsychoClick = () => {
    window.open('https://www.psychologue.net/cabinets/marine-ottaviani', '_blank');
  };

  
  return (
    <>
      <Navbar/>
      <Header/>
      <main className="homMain">
      
          <div className="titleWrapper">
              <h1 className="homeTitle">Thérapie brève systèmique</h1>
              <span className="titleSlogan">Relation à soi, couple, famille</span>
          </div>
          <section className="firstSection">
          <div className="logoWrapper">            
            <div className="backgroundLogo">
              <div className="topLogo">
                  <span className="spanTitle">Pour qui ?</span>
                  <p className="pourText">Adulte, couple, enfant, adolescent, famille en difficulté et/ou en souffrance</p>
              </div>

              <div className="spaceLogo"></div>

              <div className="bodyLogo">
                  <span className="spanTitle">Pourquoi ?</span>
                  <p className="pourText">Anxiété, stress, crise d'angoisse, peur panique, troubles alimentaires, problèmes relationnels, mauvaise gestion émotionnelle, phobie, dépression, manque de confiance en soi, conflits répétitifs, dépendance affective, communication difficile, incompréhension dans le couple, troubles sexuels, infidélité, mauvais vécu de la grossesse, accouchement difficile, comportement perturbateur de l'enfant, lien parent(s)-enfant(s) compliqué, séparation complexe, divorce conflictuel, deuil.</p>
              </div>
              <div className="spaceLogo"></div>

              <div className="footerLogo">
                  <span className="spanTitle">Où ?</span>
                  <ul>
                    <li className='ouItem'>Séance en cabinet à Metz</li>
                    <li className='ouItem'>Rendez-vous en visioconférence</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="commentWrapper">
              <span className="spanTitle">Comment ?</span>
              <p className="comment">Mon approche est souvent ciblée, concrète et limitée dans le temps, avec un accent mis sur la résolution de problèmes spécifiques plutôt que sur une exploration approfondie des mécanismes psychologiques.</p>
          </div>
        </section>

        <section className="secondSection">
          <div className="citationWrapper">
            <blockquote className="citation">"Tout ce que je sais, c'est que je ne sais rien"</blockquote>
            <div className="socrate"><span>Socrate</span></div> 
          </div>
          <p className="citationFooter">Nous cherchons ensemble comment le problème qui vous pèse s'est installé.</p>
          <h2>Un accompagnement pour créer le changement et retrouver votre autonomie.</h2>
          <div className="infoCardWrapper">
            <InfoCard imageSrc={logo1} alt='à définir' primaryText='Séance individuelle'/>
            <InfoCard imageSrc={logo2} alt='à définir' primaryText='Thérapie de couple'/>
            <InfoCard imageSrc={logo3} alt=" à définir" primaryText='Thérapie familiale' secondaryText='Soutien à la parentalité'/>
            <InfoCard imageSrc={logo4} alt=" à définir" primaryText='Ateliers collectifs'/>
          </div>
          <div className="infoConclusion">
            <p className="infoText">La thérapie brève se déroule généralement en <strong>10 séances par problématique.</strong></p>
            <p className="infoText">La durée des séances peut varier <strong>de 1h à 2h</strong> et elles s'effectuent <strong>une à deux fois par mois</strong> en fonction des besoins</p>
            <p className="infoText">Les ateliers collectifs en constellations familiales et systémiques ont lieu trimestriellement.</p>
          </div>        
        </section>

        <section className="thirdSection">
          <h2>Dans un cadre bienvaillant, confidentiel et sécurisant</h2>
          <p className="thirdIntro">Je propose mes séances en cabinet à Metz, ou à distance, aux adultes, aux couples, aux familles, aux enfants, aux professionnels de santé, aux salariés d'entreprises, qui rencontre et vivent dans leur vie personnelle, familiale, ou professionnelle des difficultés, des conflits et des situations de souffrance.</p> 
          <div className="socialWrapper">
            <img className="portrait" src={marine} alt="portrait de Mme Ottaviani Marine"/>
            <SocialMedia/>
          </div>         
        </section>
        <section className="fourSection">
          <h2>Oser le changement, révélez votre potentiel</h2>
          <SectionServices/>
          <p className="infoText">Grâce à ces diffèrentes méthodes thérapeutique, nous découvront ensemble ce qui bloque ou freine l'atteinte de vos objectifs ou de votre épanouissement</p>
          <p className="infoText">Dans le respect de votre rythme et de vos intentions, je vous aide à faire naître la version de vous-même qui vous convient, l'être qui vous habite, vos projets, ce qui vous tient à coeur, le parent que vous êtes, l'amant(e) qui sommeille en vous, les relations harmonieuses que vous souhaitez vivre.</p>
          <img className="decoImg" src={plante} alt="à définir"/>
          <p className="infoText">Je suis également sage-fmme et c'est tout naturellement que mon activité professionnelle à évolué vers le domaine de la santé mentale et du bien-être.</p>
          <p className="infoText">Je suis donc plus spécialisée dans tout ce qui touhe à la femme, au couple, aux relations amoureuses, à la fammille, à la grossesse, à la naissance d'un enfant, à son éducation, au "métier" de parent(s).</p>
          <button class="buttonPsycho" onClick={handlePsychoClick}>
            Prendre rendez-vous via psychologue.net
          </button>
        </section>
        <section className="fiveSection">

          
        </section>



      </main>


      
    </>
  );
};

export default Home;