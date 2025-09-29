import { Button, Typography, Container, Box, Fade } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { Github, Linkedin, Mail, Zap, Star, Sparkles, Download } from 'lucide-react';
import bg from "../assets/laptop1.jpg";
import profilePhoto from "../assets/miekely.png";

export default function Hero() {
  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    // Créer un contenu de CV structuré
    const cvContent = `
  Informations personnelles
  Nom et prénom : RANDRIANANTENAINA Herilalaina Mamitiana
  Âge : 24 ans
  Adresse : Lot VR 104 Ambohimiandra
  Email : mamitianarandrianantenaina253@gmail.com
  Téléphone : 0346155335/ 0326123350
  Portfolio : https://mamitiana-portfolio.vercel.app
  Profil
  Développeur web passionné, maîtrisant plusieurs technologies front-end et back-end. Créatif, rigoureux et capable de travailler en équipe, je conçois et développe des applications web et logicielles adaptées aux besoins des utilisateurs.
  Formation
  2025 : Licence 3 en Informatique et Programmation (en cours)
  2024 : Diplôme de Technicien Supérieur (DTS)
  2022 : Formation en langue anglaise
  2021 : Baccalauréat série D
  2016 : BEPC
  Expérience professionnelle et projets
  2025 : Création d’un site web standard pour restaurant (Django, JavaScript, Bootstrap, SQLite) – Projet personnel
  2025 : Développement d’un logiciel de gestion d’établissement (Python, PyQt5, MySQL, MySQLServer)
  2025 : Développement d’une plateforme E-learning pour l’entreprise Hoavi (ReactJS/NextJS, Django/Django REST Framework, PostgreSQL, Firebase) – Projet en cours
  2024 : Réalisation d’une application web de gestion de stock (Django, JavaScript, JQuery, SQLite) – Projet de fin d’études DTS
  Compétences techniques
  Front-end : HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, ReactJS, NextJS
  Back-end : Python/Django, NodeJS, PHP
  Bases de données : MySQL, PostgreSQL, MongoDB, SQLite
  Outils & DevOps : Git/GitHub, CI/CD, Docker
  Autres : WordPress, Tkinter, PyQt5, Dart/Flutter, POO, Méthodologie Agile/Scrum
  Langues
  Malagasy : Langue maternelle
  Français : Lecture et écriture
  Anglais : Lecture et écriture
  Qualités personnelles
  Rigoureux et organisé
  Esprit d’équipe
  Créatif et orienté résolution de problèmes
  Bon sens du conseil et de la communication
    `;

    // Créer un blob et déclencher le téléchargement
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Mamitiana_RANDRIANANTENAINA_Developpeur_FullStack.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Éléments décoratifs améliorés */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-4 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 bg-pink-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <Container maxWidth="lg" className="relative z-10">
        <Fade in={true} timeout={2000}>
          <Box className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 py-8 md:py-16 px-4">
            {/* Contenu texte - Ordre modifié pour mobile */}
            <div className="flex-1 space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-orange-500 animate-pulse" />
                <span className="text-green-400 font-medium bg-green-400/10 px-3 py-1 rounded-full text-xs md:text-sm">
                  Disponible pour de nouveaux projets
                </span>
              </div>
              
              <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Salut!, Je suis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 animate-gradient block md:inline">
                  Mamitiana RANDRIANANTENAINA
                </span>
              </h1>
              
              <Typography 
                variant="h5" 
                className="max-w-2xl text-gray-200 text-lg sm:text-xl md:text-2xl font-light leading-relaxed"
              >
                Je suis{" "}
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Développeur Full Stack & Logiciel
                </span>{" "}
                Passionné par la création d'expériences numériques exceptionnelles, 
                je transforme des idées innovantes en solutions web modernes et performantes.
              </Typography>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                <Button 
                  variant="contained" 
                  size="large" 
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-purple-600 hover:to-orange-500 py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group text-sm md:text-base"
                  endIcon={<ArrowDownward className="group-hover:animate-bounce" />}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Découvrir mes projets
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  className="border-2 text-white border-white/30 hover:border-white py-2 md:py-3 px-6 md:px-8 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 group text-sm md:text-base"
                  startIcon={<Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />}
                  onClick={handleDownloadCV}
                >
                  Télécharger mon CV
                </Button>
              </div>
              
              {/* Liens sociaux améliorés */}
              <div className="flex space-x-3 md:space-x-4 pt-6 md:pt-8">
                <Button 
                  variant="text" 
                  className="min-w-0 p-2 md:p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label="GitHub"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  variant="text" 
                  className="min-w-0 p-2 md:p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  variant="text" 
                  className="min-w-0 p-2 md:p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label="Email"
                  onClick={() => window.location.href = 'mailto:mamitiana.randrianantenaina@gmail.com'}
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Photo de profil avec effets d'orbite - Ordre modifié pour mobile */}
            <div className="flex-1 flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
                
                {/* Système d'orbite principale */}
                <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Orbites responsive */}
                  <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-2 md:border-4 border-purple-600/20 rounded-full animate-orbit-slow"></div>
                  
                  <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 md:border-4 border-blue-500/25 rounded-full animate-orbit-medium"></div>
                  
                  <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 border-2 md:border-4 border-cyan-400/30 rounded-full animate-orbit-fast"></div>
                  
                  {/* Points en orbite */}
                  <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-orbit-slow">
                    <div className="absolute top-0 left-1/2 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 animate-orbit-medium-reverse">
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                  
                  <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 animate-orbit-fast">
                    <div className="absolute top-1/2 right-0 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Étoiles tournantes réduites pour mobile */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-orbit-slow"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <div 
                        className="absolute w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"
                        style={{
                          top: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                          left: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                        }}
                      ></div>
                    </div>
                  ))}

                </div>

                {/* Photo de profil au centre */}
                <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 md:border-4 border-white/20 shadow-2xl group hover:border-purple-400/50 transition-all duration-500">
                  <img
                    src={profilePhoto}
                    alt="Mamitiana RANDRIANANTENAINA"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Points lumineux autour de la photo */}
                  <div className="absolute -inset-2 md:-inset-4 rounded-full border border-purple-400/10 animate-ping-slow"></div>
                </div>

                {/* Badge flottant responsive */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg animate-bounce z-20">
                  <div className="flex items-center gap-1 md:gap-2">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <span className="text-xs md:text-sm font-medium">Open to work</span>
                  </div>
                </div>

                {/* Effet de pulsation externe */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse-slow"></div>
              </div>
            </div>
          </Box>
        </Fade>
        
        {/* Indicateur de défilement amélioré */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce w-5 h-5 md:w-6 md:h-6 border-r-2 border-b-2 border-white/70 rotate-45"></div>
          <div className="text-white/70 text-xs md:text-sm mt-1 md:mt-2 animate-pulse">Scroll Down</div>
        </div>
      </Container>
      
      {/* Styles d'animation améliorés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        
        @keyframes orbit-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit-medium {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit-medium-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.1); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-orbit-slow {
          animation: orbit-slow 25s linear infinite;
        }
        
        .animate-orbit-medium {
          animation: orbit-medium 18s linear infinite;
        }
        
        .animate-orbit-fast {
          animation: orbit-fast 10s linear infinite;
        }
        
        .animate-orbit-medium-reverse {
          animation: orbit-medium-reverse 15s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }

        /* Media queries pour améliorer le responsive */
        @media (max-width: 640px) {
          .animate-orbit-slow,
          .animate-orbit-medium,
          .animate-orbit-fast {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}