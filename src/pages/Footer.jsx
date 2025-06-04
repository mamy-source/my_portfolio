import { motion } from "framer-motion";
import { Heart, Sparkles, Rocket, Copyright, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  border-t border-white/10 py-12 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0">
        {/* Particules flottantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10"
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * 100
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Étoiles scintillantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-yellow-300 rounded-full"
            initial={{ 
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Lignes de connexion */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            x: [-100, 100]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Citation inspirante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
          </div>
          
          <blockquote className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed italic">
            « Je peux tout grâce à Celui qui m'a créé, donc, rien n'est impossible 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold not-italic">
              {" "}lorsque l'on est vraiment prêt à changer les choses
            </span>
            . »
          </blockquote>

          {/* Signature décorative */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-4 text-cyan-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="text-sm font-medium">Mamitiana</span>
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Séparateur décoratif */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </motion.div>

        {/* Informations de copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            {/* Cœur animé */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>

            {/* Texte principal */}
            <div className="flex items-center gap-2 text-gray-300">
              <Copyright className="w-4 h-4" />
              <span className="text-sm font-medium">
                {currentYear} 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold mx-2">
                  mamy_source
                </span>
              </span>
              
              {/* Rocket animé */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-5 h-5 text-cyan-400" />
              </motion.div>
            </div>

            {/* Étoile scintillante */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
          </div>

          {/* Sous-titre */}
          <p className="text-xs text-gray-500 font-medium">
            Crafted with passion and innovation • Made in Madagascar
          </p>

          {/* Barre de progression décorative */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Liens sociaux rapides (optionnel) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center gap-6 mt-8 pt-8 border-t border-white/5"
        >
          {['Privacité', 'Conditions', 'Support'].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-gray-500 hover:text-cyan-400 text-xs font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Effet de brillance en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}