'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Composant Particules
const Particles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 6
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            background: particle.id % 3 === 0 ? '#00f5ff' : particle.id % 3 === 1 ? '#ff006e' : '#8338ec'
          }}
          animate={{
            y: [window.innerHeight, -100],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Composant Header
const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl' : 'bg-black/80 backdrop-blur-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="text-3xl font-black gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          DIGIQO
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Services', 'Portfolio', 'A propos', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-neon-cyan transition-colors relative"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="bg-gradient-to-r from-neon-cyan to-neon-pink px-6 py-3 rounded-full text-white font-semibold neon-glow"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Demarrer maintenant
        </motion.button>
      </nav>
    </motion.header>
  )
}

// Composant Hero
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grille animee */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          animation: 'float 20s linear infinite'
        }}
      />
      
      {/* Gradient radial */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/10 via-neon-pink/5 to-transparent" />
      
      <Particles />
      
      <div className="text-center z-10 max-w-6xl px-6">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="gradient-text animate-glow">
            VOTRE PUBLICITE<br />EN LIGNE{' '}
            <div className="rocket-3d inline-block ml-4">
              <div className="fin-left"></div>
              <div className="fin-right"></div>
              <div className="window"></div>
            </div>
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          L'agence qui transforme vos investissements publicitaires en croissance explosive
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-neon-cyan to-neon-pink px-10 py-5 rounded-full text-white text-xl font-bold neon-glow relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            Exploser vos ventes
          </motion.button>
          
          <motion.button
            className="border-2 border-white/30 px-10 py-5 rounded-full text-white text-xl font-bold glass-effect hover:border-neon-cyan hover:bg-neon-cyan/10"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir nos resultats
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Composant Metriques
const Metrics = () => {
  const metrics = [
    { number: 500, label: 'Clients conquis', suffix: '+' },
    { number: 50, label: 'Budget pub gere', suffix: 'M€' },
    { number: 2000, label: 'Campagnes lancees', suffix: '+' },
    { number: 400, label: 'ROI moyen', suffix: '%' }
  ]

  const [counts, setCounts] = useState(metrics.map(() => 0))

  useEffect(() => {
    const timers = metrics.map((metric, index) => {
      return setTimeout(() => {
        const increment = metric.number / 100
        const timer = setInterval(() => {
          setCounts(prev => {
            const newCounts = [...prev]
            if (newCounts[index] < metric.number) {
              newCounts[index] = Math.min(newCounts[index] + increment, metric.number)
            }
            return newCounts
          })
        }, 20)
        
        setTimeout(() => clearInterval(timer), 2000)
      }, index * 200)
    })

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-neon-cyan/5 to-neon-pink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-8 glass-effect rounded-3xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Bordure animee */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple bg-[length:200%_100%] animate-gradient-shift" />
              
              <motion.div 
                className="text-5xl md:text-6xl font-black gradient-text mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {Math.floor(counts[index])}{metric.suffix}
              </motion.div>
              
              <div className="text-lg text-gray-300 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant Services
const Services = () => {
  const services = [
    {
      icon: 'icon-target',
      title: 'Meta Ads Mastery',
      description: 'Nous transformons Facebook et Instagram en machines a cash pour votre business',
      features: ['Ciblage laser precis', 'Creas qui convertissent', 'Optimisation IA continue', 'ROI garanti ou rembourse']
    },
    {
      icon: 'icon-fire',
      title: 'Google Ads Domination',
      description: 'Capturez vos prospects au moment exact ou ils cherchent vos services',
      features: ['Mots-cles ultra-rentables', 'Landing pages optimisees', 'Tracking avance', 'Scaling automatise']
    },
    {
      icon: 'icon-video',
      title: 'Videos Virales',
      description: 'Notre equipe de production cree des videos publicitaires qui marquent les esprits',
      features: ['Production sur site', 'Scripts percutants', 'Montage professionnel', 'Formats multi-plateformes']
    },
    {
      icon: 'icon-chart',
      title: 'Analytics & Growth',
      description: 'Data-driven decisions pour maximiser chaque euro investi',
      features: ['Dashboards en temps reel', 'Rapports detailles', 'Predictions IA', 'Optimisation continue']
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-black text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NOS SUPER-POUVOIRS
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 glass-effect rounded-3xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -20, scale: 1.02 }}
            >
              {/* Effet de rotation au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-conic from-neon-cyan/20 via-transparent to-neon-pink/20 opacity-0 group-hover:opacity-100"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <div className="mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                  {service.icon === 'icon-target' && (
                    <motion.svg 
                      width="80" height="80" viewBox="0 0 80 80"
                      className="text-neon-cyan"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.circle 
                        cx="40" cy="40" r="35" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                      <motion.circle 
                        cx="40" cy="40" r="25" 
                        fill="none" 
                        stroke="#ff006e" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                      <motion.circle 
                        cx="40" cy="40" r="15" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.5 }}
                      />
                      <motion.circle 
                        cx="40" cy="40" r="5" 
                        fill="#ff006e"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.svg>
                  )}
                  
                  {service.icon === 'icon-fire' && (
                    <motion.svg 
                      width="80" height="80" viewBox="0 0 80 80"
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.path 
                        d="M40 10 C50 20, 60 30, 55 45 C50 60, 30 60, 25 45 C20 30, 30 20, 40 10 Z"
                        fill="url(#fireGradient)"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />
                      <motion.path 
                        d="M40 15 C45 22, 50 28, 47 38 C44 48, 32 48, 29 38 C26 28, 32 22, 40 15 Z"
                        fill="url(#fireGradient2)"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#00f5ff" />
                          <stop offset="50%" stopColor="#ff006e" />
                          <stop offset="100%" stopColor="#8338ec" />
                        </linearGradient>
                        <linearGradient id="fireGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  )}
                  
                  {service.icon === 'icon-video' && (
                    <motion.svg 
                      width="80" height="80" viewBox="0 0 80 80"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.rect 
                        x="10" y="25" width="45" height="30" 
                        rx="5" 
                        fill="none" 
                        stroke="#00f5ff" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                      />
                      <motion.polygon 
                        points="25,35 25,45 35,40"
                        fill="#ff006e"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                      />
                      <motion.circle 
                        cx="65" cy="30" r="8"
                        fill="none" 
                        stroke="#8338ec" 
                        strokeWidth="2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.circle 
                        cx="65" cy="50" r="6"
                        fill="none" 
                        stroke="#8338ec" 
                        strokeWidth="2"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.svg>
                  )}
                  
                  {service.icon === 'icon-chart' && (
                    <motion.svg 
                      width="80" height="80" viewBox="0 0 80 80"
                    >
                      <motion.rect 
                        x="15" y="50" width="8" height="20"
                        fill="#00f5ff"
                        initial={{ height: 0, y: 70 }}
                        animate={{ height: 20, y: 50 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <motion.rect 
                        x="30" y="40" width="8" height="30"
                        fill="#ff006e"
                        initial={{ height: 0, y: 70 }}
                        animate={{ height: 30, y: 40 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                      <motion.rect 
                        x="45" y="30" width="8" height="40"
                        fill="#8338ec"
                        initial={{ height: 0, y: 70 }}
                        animate={{ height: 40, y: 30 }}
                        transition={{ duration: 1, delay: 1.5 }}
                      />
                      <motion.rect 
                        x="60" y="20" width="8" height="50"
                        fill="#00f5ff"
                        initial={{ height: 0, y: 70 }}
                        animate={{ height: 50, y: 20 }}
                        transition={{ duration: 1, delay: 2 }}
                      />
                      <motion.path 
                        d="M15 55 L30 45 L45 35 L60 25"
                        stroke="#ffffff"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 2.5 }}
                      />
                    </motion.svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                    >
                      <span className="text-neon-cyan mr-3">✨</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant Portfolio
const Portfolio = () => {
  const clients = [
    'FOOT KORNER', 'LA BOUCHERIE', 'HEC PARIS', 'PITAYA',
    'CCI REUNION', 'VELOCITAI', 'SULTANIA', 'DIGICADEMY'
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-neon-cyan/2 to-neon-pink/2">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-black text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ILS NOUS FONT CONFIANCE
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="h-32 glass-effect rounded-2xl flex items-center justify-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <span className="font-bold text-white group-hover:text-neon-cyan transition-colors text-center px-4">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant Footer
const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          className="text-4xl font-black gradient-text mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          DIGIQO
        </motion.div>
        
        <p className="text-gray-400 mb-8 text-lg">
          L'agence qui fait exploser votre croissance depuis 2020
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          {['F', 'I', 'L', 'T', 'P'].map((letter, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-xl hover:bg-neon-cyan/20"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {letter}
            </motion.a>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm">
          © 2024 Digiqo. Tous droits reserves.
        </p>
      </div>
    </footer>
  )
}

// Composant Temoignages
const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "E-commerce Fashion",
      text: "Digiqo a multiplie notre CA par 5 en 6 mois. Leur approche data-driven est bluffante !",
      rating: 5
    },
    {
      name: "Thomas Martin", 
      company: "SaaS B2B",
      text: "ROI de 800% sur nos campagnes Meta Ads. Une equipe de pros qui delivre !",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "Restaurant Chain", 
      text: "Leurs videos ont fait le buzz ! +300% de trafic en magasin grace a TikTok.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-neon-purple/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-black text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ILS EXPLOSENT LEURS VENTES
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 glass-effect rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 text-lg italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-neon-cyan text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Composant CTA Final
const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-neon-cyan/10 via-neon-pink/10 to-neon-purple/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 animate-pulse" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-black mb-8 gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          PRET A EXPLOSER ?
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Rejoignez les 500+ entreprises qui font confiance a Digiqo pour leur croissance
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-neon-cyan to-neon-pink px-12 py-6 rounded-full text-white text-2xl font-bold neon-glow relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">AUDIT GRATUIT</span>
          </motion.button>
          
          <motion.button
            className="border-2 border-neon-cyan px-12 py-6 rounded-full text-neon-cyan text-2xl font-bold glass-effect hover:bg-neon-cyan hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Appeler maintenant
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-sm text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          ✅ Audit complet de vos campagnes actuelles<br />
          ✅ Strategie personnalisee en 48h<br />
          ✅ ROI garanti des le premier mois
        </motion.p>
      </div>
    </section>
  )
}

// Composant Process
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "AUDIT COMPLET",
      description: "Analyse approfondie de vos campagnes actuelles et identification des opportunites"
    },
    {
      number: "02", 
      title: "STRATEGIE SUR-MESURE",
      description: "Creation d'une roadmap personnalisee basee sur vos objectifs et votre marche"
    },
    {
      number: "03",
      title: "LANCEMENT OPTIMISE", 
      description: "Mise en place des campagnes avec notre methode eprouvee de scaling rapide"
    },
    {
      number: "04",
      title: "SCALING & OPTIMISATION",
      description: "Montee en puissance progressive avec optimisation continue basee sur la data"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-black text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NOTRE METHODE EPROUVEE
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="text-6xl font-black gradient-text mb-6"
                whileHover={{ scale: 1.1 }}
              >
                {step.number}
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-neon-cyan to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Page principale
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Metrics />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}