import { useState } from 'react';
// import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Note: Pour le backend, il faudra connecter Supabase
//     console.log('Formulaire soumis:', formData);
//     alert('Merci pour votre message ! Je vous répondrai bientôt.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@portfolio.dev',
      link: 'mailto:contact@portfolio.dev'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 1 23 45 67 89',
      link: 'tel:+33123456789'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Paris, France',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: '#',
      color: 'hover:text-sky-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:contact@portfolio.dev',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-card/20 via-background to-card/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float opacity-60" />
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-bounce-slow opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 relative">
            <span className="text-gradient-primary">Contactez</span>-moi
            <span className="absolute -top-4 -right-12 text-3xl animate-wiggle">📧</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
            Vous avez un projet en tête ? Discutons ensemble de vos besoins et créons quelque chose d'exceptionnel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Informations de contact */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="card-elegant">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gradient-accent">
                Restons en contact
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 hover:text-foreground transition-colors duration-300">
                Je suis toujours ravi de discuter de nouveaux projets, d'opportunités de collaboration 
                ou simplement d'échanger sur les technologies web. N'hésitez pas à me contacter !
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 p-6 rounded-lg bg-card/50 hover:bg-card transition-all duration-500 hover:scale-105 hover:-rotate-1 group hover:shadow-2xl hover:shadow-primary/10 animate-slideInBottom cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:animate-bounce transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-primary-foreground transition-transform duration-300 group-hover:scale-125" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">{info.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-2xl animate-bounce">✨</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="card-glass">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-card ${social.color}`}
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Formulaire de contact */}
          <div className="card-elegant animate-slideInRight">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-gradient-accent">
              Envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground hover:shadow-md focus:shadow-lg focus:scale-[1.02]"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground hover:shadow-md focus:shadow-lg focus:scale-[1.02]"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground hover:shadow-md focus:shadow-lg focus:scale-[1.02]"
                  placeholder="Objet de votre message"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground placeholder-muted-foreground resize-none hover:shadow-md focus:shadow-lg focus:scale-[1.02]"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-hero group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:animate-bounce transition-transform duration-300" />
                  Envoyer le message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-accent-foreground">
                <strong>Note:</strong> Pour activer l'envoi d'emails, connectez votre projet à Supabase via l'intégration native de Lovable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;