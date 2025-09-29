import { Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Zap, ArrowRight } from "lucide-react";

// Importation des images
import ecommerceImg from "../assets/img1.png";
import restaurantImg from "../assets/img2.png";
import lmsImg from "../assets/school.jpg";

// Données des projets
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    desc: 'Plateforme e-commerce complète avec gestion des commandes, paiements sécurisés et tableau de bord administrateur.',
    img: ecommerceImg,
    technologies: ['ReactJS', 'Django', 'PostgreSQL', 'TailwindCss'],
    category: 'fullstack',
    featured: true,
    links: {
      demo: 'https://example.com/demo-ecommerce',
      github: 'https://github.com/example/ecommerce'
    }
  },
  {
    id: 2,
    title: "site Web Restaurant",
    desc: "Site web standard  pour tous restaurant, avec menus, réservations, validations du commande via E-mail, tableau de board pour l'administrateur qui gére le révenue  par jours et semaine, géstion du menu ",
    img: restaurantImg,
    technologies: ['HTML & CSS', 'JavaScript', 'Django', 'SQLite'],
    category: 'web',
    featured: true,
    links: {
      demo: 'https://example.com/demo-restaurant',
      github: 'https://github.com/example/restaurant-app'
    }
  },
  {
    id: 3,
    title: "Scholl Management System",
    desc: "Un logiciel qui gére les Etudiants (Inscription, Bultin, Carte d'identité, ...), les Enseignant(e)s (CRUD et pointage par l'appareil biometrique empreinte Digitale). Logiciel multipost avec réseau local LAN avec le rôle correspondant de chaque utilisateur",
    img: lmsImg,
    technologies: ['Python 3.12', 'PyQt 5', 'MySQL', 'MySQL Server'],
    category: 'Logiciel',
    featured: false,
    links: {
      demo: 'https://example.com/demo-lms',
      github: 'https://github.com/example/lms-platform'
    }
  }
];

// Composant de carte de projet
const ProjectCard = ({ project, index }) => (
  <motion.div
    className={`flex flex-col lg:flex-row items-center gap-8 mb-24 ${
      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
    }`}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
  >
    {/* Image avec effets avancés */}
    <motion.div
      className="lg:w-1/2 relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge featured */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            Featured
          </div>
        )}
        
        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>

    {/* Contenu du projet */}
    <motion.div
      className="lg:w-1/2 space-y-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 + 0.3 }}
    >
      {/* En-tête du projet */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
          <h3 className="text-2xl lg:text-3xl font-bold  bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-lg">
          {project.desc}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech, idx) => (
          <motion.span
            key={idx}
            className="bg-white/10 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/20 backdrop-blur-sm hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Liens et actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
        <div className="flex items-center gap-4">
          <motion.a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
            whileHover={{ x: 5 }}
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium"></span>
            {/* <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" /> */}
          </motion.a>
          
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
            whileHover={{ x: 5 }}
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Code Source</span>
          </motion.a>
        </div>
        
        {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            endIcon={<ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />}
          >
            View Details
          </Button>
        </motion.div> */}
      </div>
    </motion.div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        
        {/* Grille subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      </div>

      <Container className="relative z-10">
        {/* En-tête de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            <Star className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
              Mes Projets
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations les plus récentes, 
            alliant design moderne et technologies innovantes.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse mt-6" />
        </motion.div>

        {/* Liste des projets */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="card-glass p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Un projet en tête ?
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              Discutons de votre vision et créons ensemble quelque chose d'extraordinaire.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contact">
              <Button
                variant="contained"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                endIcon={<ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />}
              >
                Commencer un projet
              </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Styles d'animation */}
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .card-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}