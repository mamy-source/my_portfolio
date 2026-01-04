import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Upload,
  Send,
  Heart,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Star,
  Sparkles,
  Zap
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    file: null,
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSnackbar({ 
        open: true, 
        message: "Votre message a été envoyé avec succès! Je vous répondrai dans les plus brefs délais.", 
        severity: "success" 
      });
      setFormData({ name: "", email: "", subject: "", file: null, message: "" });
    } catch (error) {
      setSnackbar({ 
        open: true, 
        message: "Une erreur s'est produite. Veuillez réessayer.", 
        severity: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+261 32 61 233 50/ +261 34 61 553 35",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Email",
      value: "mamitianarandrianantenaina253@gmail.com",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Lot VR 104 Ambohimiandra, Tananarive, Madagascar",
      color: "from-green-500 to-teal-500",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun - Ven: 7h - 22h",
      color: "from-orange-500 to-yellow-500",
      delay: 0.4
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      color: "hover:bg-gray-800 border-gray-700", 
      url: 'https://github.com/mamy-source', 
      name: "GitHub",
      delay: 0.1
    },
    { 
      icon: Linkedin, 
      color: "hover:bg-blue-600 border-blue-500", 
      url: 'https://www.linkedin.com/in/mamitiana-randrianantenaina-857603380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      name: "LinkedIn",
      delay: 0.2
    },
    { 
      icon: Facebook, 
      color: "hover:bg-blue-500 border-blue-400", 
      url: 'https://www.facebook.com/mamitianajt.rijaniaina', 
      name: "Facebook",
      delay: 0.4
    },
    { 
      icon: Instagram, 
      color: "hover:bg-pink-600 border-pink-500", 
      url: 'https://instagram.com', 
      name: "Instagram",
      delay: 0.5
    }
  ];

  // Composant de particules flottantes
  const FloatingParticles = () => (
    <>
      {/* Particules principales */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"
          initial={{ 
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
          }}
        />
      ))}
      
      {/* Étoiles scintillantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute bg-yellow-300 rounded-full"
          initial={{ 
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 0.5, 0],
            rotate: 360
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          }}
        />
      ))}
    </>
  );

  // Composant d'éléments décoratifs
  const DecorativeElements = () => (
    <>
      {/* Orbes flottantes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Formes géométriques animées */}
      <motion.div
        className="absolute top-40 right-40 w-32 h-32 border-2 border-purple-400/30 rounded-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-40 w-24 h-24 border-2 border-cyan-400/30 rounded-full"
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Lignes de connexion animées */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          x: [-100, 100]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );

  return (
    <section 
      id="contact"
      className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden"
    >
      {/* Éléments décoratifs de fond */}
      <DecorativeElements />
      
      {/* Particules flottantes */}
      <FloatingParticles />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            <MessageCircle className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
              Contactez-moi
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discutons de votre prochain projet. Je suis toujours ravi de collaborer sur des idées innovantes 
            et de transformer vos visions en réalité numérique.
          </p>

          {/* Élément décoratif sous le titre */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Travaillons ensemble <Heart className="inline w-8 h-8 text-red-500 animate-pulse ml-2" />
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionné par la création de solutions web innovantes, je suis toujours ouvert aux nouvelles opportunités 
                et collaborations. N'hésitez pas à me contacter pour discuter de votre projet.
              </p>

              {/* Badge de disponibilité */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2"
              >
                <Zap className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Disponible pour de nouveaux projets</span>
              </motion.div>
            </div>

            {/* Informations de contact */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: info.delay, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-300 text-base">
                          {info.value}
                        </p>
                      </div>
                      <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Séparateur décoratif */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <Star className="w-6 h-6 text-purple-400 bg-gray-900 px-2" />
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">
                Suivez-moi sur les réseaux
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: social.delay, duration: 0.5 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300 hover:shadow-lg ${social.color} bg-white/5 backdrop-blur-sm`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Effet de brillance en haut */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-t-2xl"></div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl shadow-purple-500/10">
              <h3 className="text-3xl font-bold text-white mb-2">
                Parlons de votre projet
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg">
                Remplissez le formulaire et je vous répondrai dans les plus brefs délais.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white font-medium text-sm">Adresse email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium text-sm">Sujet *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white font-medium text-sm">Fichier (optionnel, votre cahier de charge en pdf)</label>
                  <label className="flex items-center justify-center w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-300 cursor-pointer hover:bg-white/10 transition-all duration-300 border-dashed">
                    <Upload className="w-5 h-5 mr-3" />
                    <span>Télécharger un fichier</span>
                    <input
                      type="file"
                      name="file"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                  {formData.file && (
                    <p className="text-cyan-400 text-sm mt-2">
                      📎 Fichier sélectionné: {formData.file.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-white font-medium text-sm">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Éléments décoratifs autour du formulaire */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 rounded-full blur-xl opacity-50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Snackbar de notification */}
      {snackbar.open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-2xl ${
            snackbar.severity === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-red-500 to-pink-600'
          } text-white font-medium`}
        >
          <div className="flex items-center gap-3">
            {snackbar.severity === 'success' ? (
              <Sparkles className="w-5 h-5" />
            ) : (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {snackbar.message}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;