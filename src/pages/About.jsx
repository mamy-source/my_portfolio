import { User, MapPin, Calendar, Award, Sparkles, Target, Zap } from "lucide-react";

const stats = [
  { label: "Années d'expérience", value: "2+", icon: Calendar },
  { label: "Projets complétés", value: "5+", icon: Award },
  { label: "Technologies maîtrisées", value: "10+", icon: User },
  { label: "Clients satisfaits", value: "100%", icon: Award },
];

const philosophies = [
  {
    icon: "💡",
    title: "Innovation",
    text: "Repousser constamment les limites avec des solutions créatives et modernes",
  },
  {
    icon: "⚡",
    title: "Performance",
    text: "Optimiser chaque ligne de code pour une expérience utilisateur fluide",
  },
  {
    icon: "🎯",
    title: "Précision",
    text: "Attention méticuleuse aux détails pour des résultats impeccables",
  },
];

// ✅ Sous-composante pour une statistique
const StatCard = ({ icon: Icon, value, label, delay }) => (
  <div
    className="card-glass text-center p-6 hover:scale-105 hover:rotate-2 
               transition-all duration-500 group hover:shadow-2xl 
               hover:shadow-purple-500/20 animate-slideInBottom cursor-pointer
               border border-white/10 bg-white/5 backdrop-blur-sm"
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce transition-all duration-300 shadow-lg">
      <Icon aria-label={label} className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-125" />
    </div>
    <div className="text-3xl font-bold  mb-2 group-hover:animate-pulse bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
      {value}
    </div>
    <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
      {label}
    </p>
    <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

// ✅ Sous-composante pour une valeur/philosophie
const PhilosophyCard = ({ icon, title, text, index }) => (
  <div 
    className="space-y-4 animate-fadeInUp p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover:scale-105"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto group-hover:shadow-lg transition-all duration-300">
      <span className="text-2xl">{icon}</span>
    </div>
    <h4 className="font-semibold text-lg bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
      {title}
    </h4>
    <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
      {text}
    </p>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
    >
      {/* ✅ Background Animation amélioré */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce-slow" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full animate-pulse-slow" />
      
      {/* Éléments décoratifs supplémentaires */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ✅ Titre principal amélioré */}
        <header className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
              À propos de moi
            </span>
            <span className="absolute -top-2 -right-8 text-2xl animate-wiggle">
              ✨
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mon parcours, mes passions et ce qui me motive dans le développement web moderne
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse mt-6" />
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* ✅ Bloc profil amélioré */}
          <article className="space-y-8 animate-slideInLeft">
            <div className="card-elegant group hover:scale-105 transition-all duration-500 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:animate-bounce transition-all duration-300 shadow-lg">
                  <User aria-label="Avatar" className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    Développeur Web & Logiciel
                  </h3>
                  <p className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300 mt-2">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400 group-hover:animate-wiggle" />
                    Tananarive, Madagascar
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                Passionné par les technologies web modernes, je conçois et développe des applications 
                performantes et intuitives. Mon approche combine créativité, rigueur technique et 
                attention aux détails pour créer des expériences utilisateur exceptionnelles.
              </p>

              <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                Toujours en quête d'apprentissage, je reste à l'affût des dernières innovations 
                technologiques pour offrir des solutions à la pointe de la modernité. Mon objectif 
                est de transformer chaque projet en une réussite remarquable.
              </p>
            </div>
          </article>

          {/* ✅ Bloc statistiques amélioré */}
          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                {...stat}
                delay={`${index * 0.1}s`}
              />
            ))}
          </div>
        </div>

        {/* ✅ Bloc philosophie amélioré */}
        <section className="mt-16 animate-fadeInUp">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-orange-400 animate-pulse" />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Ma philosophie de développement
              </h3>
              <Target className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Une approche centrée sur l'excellence technique et l'innovation constante
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {philosophies.map((philo, index) => (
              <PhilosophyCard key={index} {...philo} index={index} />
            ))}
          </div>
        </section>

        {/* ✅ Section supplémentaire - Expertise */}
        <section className="mt-16 text-center animate-fadeInUp">
          <div className="card-elegant p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Expertise Polyvalente
              </span>
            </h4>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Du front-end au back-end, en passant par la base de données et le déploiement, 
              je maîtrise l'ensemble du cycle de développement pour vous offrir des solutions 
              complètes et cohérentes.
            </p>
          </div>
        </section>
      </div>

      {/* ✅ Styles d'animation améliorés */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes slideInBottom {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-slideInBottom {
          animation: slideInBottom 0.8s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;