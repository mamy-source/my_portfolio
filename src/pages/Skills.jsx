import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Zap, 
  Heart, 
  Users, 
  Target,
  Cpu,
  Cloud,
  GitBranch,
  Smartphone,
  Server,
  Layout,
  Sparkles,
  Star
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Frontend',
      icon: Globe,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'HTML/CSS/JS', level: 90 },
        { name: 'React / Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Bootstrap/Tailwind CSS', level: 92 },
        { name: 'Material-UI', level: 75 },
      ]
    },
    
    {
      category: 'Outils & DevOps',
      icon: Zap,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 65 },
        { name: 'AWS / Vercel', level: 78 },
        { name: 'Figma / Design', level: 65 },
        { name: 'CI/CD', level: 72 },
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: [
        { name: 'Django / Python', level: 90 },
        { name: 'Node.js', level: 60 },
        { name: 'PostgreSQL/MySQL', level: 82 },
        { name: 'REST APIs', level: 88 },
        { name: 'MongoDB', level: 68 },
      ]
    }
  ];

  const softSkills = [
    {
      name: 'Communication',
      icon: Users,
      description: 'Capacité à expliquer des concepts techniques clairement',
      level: 90,
      color: '#3B82F6'
    },
    {
      name: 'Résolution de problèmes',
      icon: Target,
      description: 'Approche analytique pour résoudre les défis complexes',
      level: 92,
      color: '#10B981'
    },
    {
      name: 'Créativité',
      icon: Palette,
      description: 'Innovation dans la conception d\'interfaces utilisateur',
      level: 88,
      color: '#8B5CF6'
    },
    {
      name: 'Passion',
      icon: Heart,
      description: 'Amour authentique pour le développement et l\'apprentissage',
      level: 100,
      color: '#EF4444'
    }
  ];

  const technologies = [
    { name: 'WordPress', icon: Layout, color: '#61DAFB' },
    { name: 'PHP', icon: Code, color: '#3178C6' },
    { name: 'Python', icon: Code, color: '#3178C6' },
    { name: 'PyQt5', icon: Cpu, color: '#3776AB' },
    { name: 'Tkinter', icon: Server, color: '#339933' },
    { name: 'Dart', icon: Zap, color: '#000000' },
    { name: 'Flutter', icon: Smartphone, color: '#61DAFB' },
  ];

  // Composant pour les étoiles scintillantes
  const ShiningStar = ({ style = {} }) => (
    <motion.div
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Star 
        size={16} 
        fill="currentColor"
        className="text-white drop-shadow-lg"
      />
    </motion.div>
  );

  const SkillProgress = ({ skill, color }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <p className="text-white font-medium">
          {skill.name}
        </p>
        <p className="text-gray-400 text-sm">
          {skill.level}%
        </p>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500"
          style={{ 
            width: `${skill.level}%`,
            background: color
          }}
        />
      </div>
    </div>
  );

  const CircularProgress = ({ value, color, icon: Icon }) => {
    const circumference = 2 * Math.PI * 15.9155;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <div className="relative">
          <svg width={80} height={80} viewBox="0 0 36 36" className="transform -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke={`${color}33`}
              strokeWidth="3"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Icon size={20} color={color} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div
        className="absolute top-25 right-25 w-50 h-50 rounded-full blur-2xl opacity-10"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-25 left-25 w-37 h-37 rounded-full blur-2xl opacity-10"
        style={{
          background: 'linear-gradient(135deg, #8b5cf6 0%, transparent 70%)'
        }}
      />

      {/* Étoiles scintillantes dans le background */}
      <ShiningStar style={{ position: 'absolute', top: '10%', left: '10%' }} />
      <ShiningStar style={{ position: 'absolute', top: '20%', right: '15%' }} />
      <ShiningStar style={{ position: 'absolute', bottom: '30%', left: '20%' }} />
      <ShiningStar style={{ position: 'absolute', bottom: '15%', right: '25%' }} />
      <ShiningStar style={{ position: 'absolute', top: '40%', left: '5%' }} />
      <ShiningStar style={{ position: 'absolute', top: '60%', right: '5%' }} />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16 relative">
            {/* Étoiles autour du titre */}
            <ShiningStar style={{ position: 'absolute', top: '-20px', left: '25%' }} />
            <ShiningStar style={{ position: 'absolute', top: '-10px', right: '25%' }} />
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <Sparkles size={24} color="#8b5cf6" />
              <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mes Compétences
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Un ensemble de compétences techniques et humaines pour créer des solutions exceptionnelles
            </p>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Étoiles dans la section technique */}
          <ShiningStar style={{ position: 'absolute', top: '50px', left: '5%' }} />
          <ShiningStar style={{ position: 'absolute', top: '100px', right: '10%' }} />
          
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Compétences Techniques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="col-span-1 relative">
                  {/* Étoile sur chaque carte de compétence */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <ShiningStar />
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillProgress 
                          key={skillIndex} 
                          skill={skill} 
                          color={category.color}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Technologies Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Étoiles dans la section technologies */}
          <ShiningStar style={{ position: 'absolute', top: '0', left: '15%' }} />
          <ShiningStar style={{ position: 'absolute', top: '50px', right: '20%' }} />
          
          <h4 className="text-2xl font-bold text-center mb-8 text-white">
            Autres Technologies Maîtrisées
          </h4>
          <div className="flex justify-center flex-wrap gap-2 mb-16">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Étoile sur chaque technologie */}
                  <div className="absolute -top-1 -right-1">
                    <Star 
                      size={12} 
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  </div>
                  
                  <div 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border transition-colors duration-200 hover:bg-opacity-20"
                    style={{ borderColor: `${tech.color}4D` }}
                  >
                    <Icon size={16} />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Étoiles dans la section soft skills */}
          <ShiningStar style={{ position: 'absolute', top: '0', left: '10%' }} />
          <ShiningStar style={{ position: 'absolute', top: '100px', right: '5%' }} />
          
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Qualités Humaines
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="col-span-1 relative">
                  {/* Étoile sur chaque soft skill */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <ShiningStar />
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <div 
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center h-full transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                      style={{
                        boxShadow: `0 15px 30px ${skill.color}33`
                      }}
                    >
                      <div className="flex justify-center mb-4">
                        <CircularProgress 
                          value={skill.level} 
                          color={skill.color}
                          icon={Icon}
                        />
                      </div>
                      
                      <h5 className="text-white font-bold text-lg mb-2">
                        {skill.name}
                      </h5>
                      
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>

                      <p 
                        className="text-sm font-bold mt-4"
                        style={{ color: skill.color }}
                      >
                        {skill.level}%
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;