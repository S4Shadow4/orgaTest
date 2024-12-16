import React from "react";
import { Link } from "react-router-dom";
const HomePage: React.FC = () => {
  return (
    <div className="bg-custom-gray">
      {/* section du Header */}
      {/* shadow-md */}
      <header className="bg-custom-gray py-4 px-6 flex justify-between items-center">
        <img
          src="../../images/logo.png"
          alt="orga image"
          className="ml-5"
        />
        <nav className="space-x-24 mr-8">
          <a href="/services" className="text-gray-700 hover:text-red-600">Services</a>
          <a href="/tarifs" className="text-gray-700 hover:text-red-600">Tarifs</a>
          <a href="/login" className="text-DB4A2B font-medium">Connexion</a>
        </nav>
      </header>

      {/* section du texte de bienvenue */}
      <section className="flex flex-wrap items-center justify-between px-12 py-4">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-8xl  text-gray-800">
            BIENVENUE
          </h2>
          <p className="text-5xl text-gray-600 pb-8">
            gérer facilement votre clientèle
          </p>
          <a
            href="/download"
            className="text-DB4A2B text-5xl"
          >
            Télécharger
          </a>

          <div className="flex space-x-4 mt-4">
            {/* App Store Links */}
            <div className="flex gap-4">
              {/* Bouton App Store */}
              <a href="https://www.apple.com/app-store/" target="_blank" className="store-badge">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>

              {/* Bouton Google Play */}
              <a href="https://play.google.com/store" target="_blank" className="store-badge">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="../../images/Group 4506.png"
            alt="Mockup App"
            className="max-w-full object-cover "
          />
        </div>
      </section>

      {/* sections de préservices */}
      <section className="px-12 py-4 bg-custom-gray">
        {/* <p className="text-2xl text-gray-800 mb-4"> Gérer vos clients,</p> */}
        <div className="flex flex-wrap space-x-4">

          <div className="flex-1">
            <p className="text-2xl text-DB4A2B">Gérer vos clients,</p>
          </div>
          <div className="flex-1">
            <p className="text-2xl text-center text-DB4A2B">éliminez les files d'attente,</p>
          </div>
          <div className="flex-1">
            <p className="text-2xl text-end text-DB4A2B">fidélisez efficacement,</p>
          </div>
        </div>
      </section>

      {/* sections des Services */}


      <section className="flex flex-col items-center justify-center mt-64 py-12 px-6 bg-custom-gray">
        <h2 className="text-5xl font-bold text-gray-800 ml-6 mb-4 self-stretch">Nos Services</h2>
        <div className="flex items-center ml-28 mb-16 self-stretch">
          <div className="relative">
            <span className="absolute -top-6 -right-28 w-12 h-12 rounded-full bg-DB4A2B flex items-center justify-center">
              <span className="text-white">
                <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <line x1="15" y1="15" x2="35" y2="35" stroke="white" stroke-width="5" stroke-linecap="round" />
                  <line x1="28" y1="35" x2="35" y2="35" stroke="white" stroke-width="5" stroke-linecap="round" />
                  <line x1="35" y1="28" x2="35" y2="35" stroke="white" stroke-width="5" stroke-linecap="round" />
                </svg>
              </span>
            </span>
            <hr className="ml-20 w-28 border-t-4 border-gray-800" />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Left Column */}
            <div className="space-y-32 pr-32 -translate-y-6">

              {/* Premier élément */}
              <div className="flex flex-col"> {/* items-center */}
                <span className="text-orange-500 text-4xl mb-4">
                  <img 
                    src="../../images/commande-icone.png" 
                    alt="Commande icone" 
                  />
                </span>
                <p className="text-xl text-gray-600 text-center">Gérer facilement vos commandes</p>
              </div>

              {/* Deuxième élément */}
              <div className="flex flex-col"> {/* items-center */}
                <span className="text-orange-500 text-4xl mb-4">
                  <img 
                    src="../../images/rapport-icone.png" 
                    alt="Rapport icone" 
                  />
                </span>
                <p className="text-xl text-gray-600 text-center">Des rapports quotidiens et variés</p>
              </div>
            </div>


          {/* Image */}
          <div className="flex-1 flex justify-center pr-20">
            <img
              src="../../images/tel_renverse2.png"
              alt="Phone Display"
              className="max-w-full object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-32 mr-0  -translate-y-10  ">

              {/* Premier élément */}
              <div className="flex flex-col items-end">
                <span className="text-orange-500 text-4xl mb-4">
                  <img 
                    src="../../images/analyse-icone.png" 
                    alt="Analyse icone" 
                  />
                </span>
                <p className=" text-xl text-gray-600 text-center">
                  Analyser les habitudes de <br />consommation de vos clients avec l’IA
                </p>
              </div>

              {/* Deuxième élément */}
              <div className="flex flex-col items-end">
                <span className="text-orange-500 text-4xl mb-4">
                  <img 
                    src="../../images/payement-icone.png" 
                    alt="Payement icone" 
                  />
                </span>
                <p className="text-xl text-gray-600 text-center">
                  Choisissez les moyens de <br />paiement que vous préférez
                </p>
              </div>
          </div>
        </div>
      </section>


      {/* sections de News Letters */}
      <section className="flex flex-col items-center justify-center mt-64 py-12 px-6 bg-custom-gray">
        <h2 className="text-5xl font-bold text-gray-800 ml-6 mb-4 self-stretch">News Letters</h2>
          <div className="flex items-center ml-28 mb-16 self-stretch">
            <div className="relative">
              <hr className="ml-32 w-28 border-t-4 border-gray-800" />
            </div>
          </div>
          <div className="flex ">
            <input
                  type="email"
                  name="email"
                  placeholder="email ...."
                  className="w-full p-4 pr-96  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            <button>
              <span className=" ml-2 w-16 h-14 rounded bg-red-500 flex items-center justify-center">
                <span className="text-white">
                <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="25" x2="35" y2="25" stroke="white" stroke-width="5" stroke-linecap="round" />
                  <line x1="35" y1="25" x2="25" y2="15" stroke="white" stroke-width="5" stroke-linecap="round" />
                  <line x1="35" y1="25" x2="25" y2="35" stroke="white" stroke-width="5" stroke-linecap="round" />
                </svg>
                </span>
              </span>
            </button>
          </div>
      </section>


      {/* section du Footer */}
      <div className=" w-3.5/4 relative pl-10 pr-10 mb-2">
        <hr className="w-full border-second-custom-gray" />
      </div>
      <footer className="bg-custom-gray py-4 p-10 ">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          
          {/* Icons Section */}
          <div className="flex flex-col items-center text-DB4A2B space-y-4 ">
              {/* Section de l'image */}
              <div className="w-full text-center">
                <img
                  src="../../images/logo.png"
                  alt="orga image"
                  className="pr-10"
                />
              </div>

              {/* Section des icônes  */}
              <div className="flex space-x-6">
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
          </div>


          {/* <!-- Text Section --> */}
          <div className="text-DB4A2B text-sm flex flex-col items-center lg:flex-row lg:space-x-4 pt-14">
              <div className="flex items-center space-x-2">
                <i className="fas fa-globe"></i>
                <span>FR</span>
              </div>
            <p>© 2024 Orga</p>
            <a href="#">Tout droit réservés</a>{/* underline */}
            <a href="#">Police d'Utilisation</a> {/* underline */}
          </div>

          {/* App Store Links */}
          <div className="flex gap-4 pt-10">
            {/* Bouton App Store */}
            <a href="https://www.apple.com/app-store/" target="_blank" className="store-badge">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>

            {/* Bouton Google Play */}
            <a href="https://play.google.com/store" target="_blank" className="store-badge">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
