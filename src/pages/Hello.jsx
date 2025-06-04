import { Button, Typography, Container, Box, Fade } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import { Github, Linkedin, Mail, Zap, Star, Sparkles, Download } from 'lucide-react';
import bg from "../assets/laptop1.jpg";
import profilePhoto from "../assets/miekely.png"; // Remplacez par votre photo de profil

export default function Hero() {
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-20 animate-pulse"
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
          <Box className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 py-16 px-4">
            {/* Contenu texte */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-orange-500 animate-pulse" />
                <span className="text-green-400 font-medium bg-green-400/10 px-3 py-1 rounded-full text-sm">
                  Disponible pour de nouveaux projets
                </span>
              </div>
              
              <h2 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Salut!, Je suis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 animate-gradient">
                  Mamitiana RANDRIANANTENAINA
                </span>
              </h2>
              
              <Typography 
                variant="h5" 
                className="max-w-2xl text-gray-200 text-xl md:text-2xl font-light leading-relaxed"
              >
                Je suis{" "}
                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Developeur web & Logiciel
                </span>{" "}
                Passionné par la création d'expériences numériques exceptionnelles, 
                je transforme des idées innovantes en solutions web modernes et performantes.
              </Typography>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="contained" 
                  size="large" 
                  className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-purple-600 hover:to-orange-500 py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
                  endIcon={<ArrowDownward className="group-hover:animate-bounce" />}
                >
                  Découvrir mes projets
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  className="border-2 text-white border-white/30 hover:border-white py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 group"
                  startIcon={<Download className="w-5 h-5 group-hover:animate-pulse" />}
                >
                  Télécharger mon CV
                </Button>
              </div>
              
              {/* Liens sociaux améliorés */}
              <div className="flex space-x-4 pt-8">
                <Button 
                  variant="text" 
                  className="min-w-0 p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  variant="text" 
                  className="min-w-0 p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Photo de profil avec effets d'orbite infinie */}
            <div className="flex-1 flex justify-center lg:justify-end relative">
              <div className="relative w-80 h-80 flex items-center justify-center">
                
                {/* Système d'orbite principale */}
                <div className="absolute inset-0 flex items-center justify-center">
                  
                  {/* Orbite externe - rotation lente */}
                  <div className="absolute w-96 h-96 border-4 border-purple-600/20 rounded-full animate-orbit-slow"></div>
                  
                  {/* Orbite moyenne - rotation moyenne */}
                  <div className="absolute w-80 h-80 border-4 border-blue-500/25 rounded-full animate-orbit-medium"></div>
                  
                  {/* Orbite interne - rotation rapide */}
                  <div className="absolute w-72 h-72 border-4 border-cyan-400/30 rounded-full animate-orbit-fast"></div>
                  
                  {/* Points en orbite */}
                  <div className="absolute w-96 h-96 animate-orbit-slow">
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  <div className="absolute w-80 h-80 animate-orbit-medium-reverse">
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                  
                  <div className="absolute w-72 h-72 animate-orbit-fast">
                    <div className="absolute top-1/2 right-0 w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  {/* Étoiles tournantes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-96 h-96 animate-orbit-slow"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <div 
                        className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                        style={{
                          top: `${50 + 45 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                          left: `${50 + 45 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                        }}
                      ></div>
                    </div>
                  ))}

                </div>

                {/* Photo de profil au centre */}
                <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group hover:border-purple-400/50 transition-all duration-500">
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
                  <div className="absolute -inset-4 rounded-full border-2 border-purple-400/10 animate-ping-slow"></div>
                </div>

                {/* Badge flottant */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce z-20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Open to work</span>
                  </div>
                </div>

                {/* Effet de pulsation externe */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse-slow"></div>
              </div>
            </div>
          </Box>
        </Fade>
        
        {/* Indicateur de défilement amélioré */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce w-6 h-6 border-r-2 border-b-2 border-white/70 rotate-45"></div>
          <div className="text-white/70 text-sm mt-2 animate-pulse">Scroll Down</div>
        </div>
      </Container>
      
      {/* Styles d'animation améliorés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
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
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-orbit-slow {
          animation: orbit-slow 20s linear infinite;
        }
        
        .animate-orbit-medium {
          animation: orbit-medium 15s linear infinite;
        }
        
        .animate-orbit-fast {
          animation: orbit-fast 8s linear infinite;
        }
        
        .animate-orbit-medium-reverse {
          animation: orbit-medium-reverse 12s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}