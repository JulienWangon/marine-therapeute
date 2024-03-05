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
import neovie from '../../../assets/img/neovie.webp';
import impot from '../../../assets/img/impot.webp';
import cheque from '../../../assets/img/cheque.webp';
import ethique from '../../../assets/img/ethique.webp';


import SocialMedia from '../../../components/SocialMedia/SocialMedia';
import SectionServices from '../../../components/ServicesCard/SectionServices';
import TestimoniesSlider from '../../../components/Testimonies/TestimoniesSlider/TestimoniesSlider';
import Button from '../../../components/common/Button/Button';
import DiplomeSection from '../../../components/Diplomes/DiplomeSection/DiplomeSection';


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
          <button className="buttonPsycho" onClick={handlePsychoClick}>
            Prendre rendez-vous
          </button>
        </section>
        <section className="fiveSection">
          <h2 className="sliderTitle">Quand le changement prend racine: vos témoignages sont précieux</h2>
          <TestimoniesSlider/>
          <Button className="testimonyBtn purpleBtn" text="Avis"/>
          <div className="priceWrapper">
              <h3 className="priceTitle">TARIFS*</h3>
              <ul className="priceList">
                <li className="priceItem">Séance individuelle: 60€ à 100€ la séance</li>
                <li className="priceItem">Séance de couple ou en famille: 100€ la séance</li>
              </ul>
          </div>
          <p className="infoText">Merci de prévenir le plus tôt possible d'un changement ou d'une annulation. Tout rendez-vous non honoré et non justifié moins de 48 heures en avance sera dû.</p>
          <p className="asterixInfo">* La prestation délivrée par ce professionnel ne fait pas l'objet d'un conventionnement. Dès lors, elle n'est pas prise en charge par la sécurité sociale. Certaines mutuelles peuvent rembourser ses services, vous pouvez lui demander une facture. Le montant des honoraires fixé est cependant déterminé avec tact et mesure.</p>
          <div className="neovieWrapper">
              <div className="neovieLogo">
                  <h3 className="neovieTitle">Retrouvez-moi aussi sur</h3>
                 <a href="https://www.neovieonline.com/marine-ottaviani-praticienne-en-constellations-familiales-f1345483.html"><img className="logoNeovie" src={neovie} alt="logo neovie"/></a>
              </div>
              <div className="impotWrapper">
                <img className="impotCheque" src={impot} alt="logo crédit d'impot"/>
                <p className="impotText">Réglement possible par chèque emploi service universel CESU et crédit d'impôts accessible</p>
                <img className="impotCheque" src={cheque} alt="logo cheque emploi service"/>
              </div>
          </div>
        </section>
        <section className="sixSection">
          <img className="ethiqueImg" src={ethique} alt="un livre et un cadenas"/>
          <h2>Ethique professionnelle</h2>
          <p className="infoText">En conformité avec le code de déontologie de la FF2P (Fédération Française de Psychanalyse et de Psychothérapie) à laquelle je suis adhérente, je m'engage à respecter le secret professionnel et la confidentialité de nos échanges.</p>
          <p className="infoText">Je m'autorise à déroger à cette règle avec votre accord en cas de danger possible pour vous, dans le cadre d'éventuelles violences que vous subiriez ou si vos difficultés sont en dehors de mon champ de compétences.</p>
          <p className="infoText">Les données transmises ne sont utilisées qu'à visée d'orientation et réduites au strict nécessaire.</p>
          <p className="infoText">Les méthodes utilisées s'inscrivent dans la relation d'aide, hors cadre médical et réglementé. Les thérapies proposées ne se substituent en rien à un acte ou traitement médical dont elles sont peut-être complémentaires. Je soumets ma pratique à une supervision régulière de mon travail à des superviseurs expérimentés. Cette supervision m'est indispensable selon moi et m'aide à être dans une relation thérapeutique saine, pour mieux accompagner mes consultants selon leur problèmatique et les résonnances chez moi.</p>
          <p className="infoText">Je m'engage également à une formation continue en participant fréquemment à des stages, des séminaires, des ateliers et des perfectionnements professionnels.</p>
        </section>
        <section className="sevenSection">
          <DiplomeSection/>
        </section>
      </main>


      
    </>
  );
};

export default Home;