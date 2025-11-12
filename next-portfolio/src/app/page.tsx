'use client';

import Image from "next/image";
import CVModal from "./components/CVModal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-black/80 border-b border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 shadow-xl"
      >
        <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ 
              scale: 1.1,
              background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
              color: "white"
            }}
            className="relative px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-bold text-lg tracking-tight shadow-lg"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              ZH
            </motion.span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ zIndex: -1 }}
            />
          </motion.div>
          
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-2 text-sm font-medium"
          >
            {['Services', 'Parcours', 'Compétences', 'Projets', 'Certifications', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ y: -30, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.1 * index + 0.6, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  y: -2,
                  background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                  color: "white",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
              >
                <motion.a 
                  href={`#${item.toLowerCase()}`} 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center relative overflow-hidden">
        {/* Background animated gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899, #f59e0b)",
              "linear-gradient(45deg, #ec4899, #f59e0b, #06b6d4, #8b5cf6)",
              "linear-gradient(45deg, #8b5cf6, #06b6d4, #f59e0b, #ec4899)",
              "linear-gradient(45deg, #f59e0b, #ec4899, #8b5cf6, #06b6d4)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.1 }}
        />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          {[
            { size: 80, left: 10, top: 20, duration: 10, delay: 0 },
            { size: 120, left: 80, top: 15, duration: 12, delay: 0.5 },
            { size: 60, left: 60, top: 70, duration: 8, delay: 1 },
            { size: 100, left: 20, top: 80, duration: 11, delay: 1.5 },
            { size: 70, left: 90, top: 60, duration: 9, delay: 0.8 },
            { size: 90, left: 40, top: 30, duration: 13, delay: 1.2 },
            { size: 110, left: 70, top: 50, duration: 10, delay: 0.3 },
            { size: 85, left: 30, top: 10, duration: 14, delay: 1.8 }
          ].map((shape, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                left: `${shape.left}%`,
                top: `${shape.top}%`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 60, 0],
                scale: [1, 1.5, 1],
                rotate: [0, 360, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                delay: shape.delay
              }}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="relative z-10"
        >
          {/* Photo 3D */}
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 80 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                rotateX: 5,
                boxShadow: "0 30px 60px rgba(6,182,212,0.4)"
              }}
              animate={{
                rotateY: [0, 5, -5, 0],
                boxShadow: [
                  "0 20px 40px rgba(6,182,212,0.2)",
                  "0 25px 50px rgba(139,92,246,0.3)",
                  "0 20px 40px rgba(236,72,153,0.2)",
                  "0 20px 40px rgba(6,182,212,0.2)"
                ]
              }}
              transition={{ 
                rotateY: { duration: 6, repeat: Infinity },
                boxShadow: { duration: 4, repeat: Infinity }
              }}
              className="relative"
            >
              {/* Glow effect background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Photo container */}
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm"
                style={{
                  background: "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))"
                }}
              >
                <motion.img
                  src="/zzzz.png"
                  alt="Zineb Hourry"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              {/* Floating particles around photo */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + i * 15}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, -10, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              y: { delay: 0.3, duration: 0.8, ease: "easeOut" },
              opacity: { delay: 0.3, duration: 0.8, ease: "easeOut" },
              backgroundPosition: { duration: 4, repeat: Infinity }
            }}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
          >
            Développeuse Web & Mobile
          </motion.h1>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 max-w-2xl text-zinc-600 dark:text-zinc-300"
          >
            Bienvenue sur mon portfolio. Découvrez mon parcours, mes compétences, mes projets et mes certifications.
          </motion.p>
          
          <motion.a 
            href="#contact"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg transition-all duration-300"
          >
            Me contacter
          </motion.a>
        </motion.div>
        
        {/* Floating particles */}
        {[
          { left: 15, top: 25, x: 30, duration: 4, delay: 0 },
          { left: 75, top: 35, x: -20, duration: 5, delay: 0.5 },
          { left: 45, top: 60, x: 40, duration: 3.5, delay: 1 },
          { left: 85, top: 70, x: -35, duration: 4.5, delay: 1.5 },
          { left: 25, top: 80, x: 25, duration: 3.8, delay: 0.8 },
          { left: 65, top: 45, x: -15, duration: 4.2, delay: 1.2 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
            animate={{
              y: [0, -100, 0],
              x: [0, particle.x, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`
            }}
          />
        ))}
      </section>

      {/* Services */}
      <motion.section 
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-4 relative overflow-hidden"
      >
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-purple-50/30 to-pink-50/30 dark:from-cyan-900/10 dark:via-purple-900/10 dark:to-pink-900/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(6,182,212,0.05), rgba(139,92,246,0.05), rgba(236,72,153,0.05))",
              "linear-gradient(45deg, rgba(236,72,153,0.05), rgba(6,182,212,0.05), rgba(139,92,246,0.05))",
              "linear-gradient(45deg, rgba(139,92,246,0.05), rgba(236,72,153,0.05), rgba(6,182,212,0.05))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Toutes sortes de solutions de développement.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WordPress & Plugin Development */}
            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59,130,246,0.2)"
              }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2">Solutions Hébergées & Déploiement</h3>
                <p className="text-blue-100 mb-6 text-sm">Déploiement et hébergement d'applications web</p>
                
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    Déploiement Cloud
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    Configuration Serveur
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3"></span>
                    CI/CD Pipeline
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Web & Mobile App Development */}
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(139,92,246,0.2)"
              }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 overflow-hidden group"
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2 text-purple-800 dark:text-purple-200">Développement Web & Mobile</h3>
                <p className="text-purple-600 dark:text-purple-300 mb-6 text-sm">Applications web et mobiles sur mesure</p>
                
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    React & Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    Développement Mobile
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    Applications Responsives
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Interface Design & Development */}
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(236,72,153,0.2)"
              }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/50 dark:to-pink-800/50 overflow-hidden group"
            >
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">🎨</span>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2 text-pink-800 dark:text-pink-200">Design d'Interface & Développement</h3>
                <p className="text-pink-600 dark:text-pink-300 mb-6 text-sm">Interfaces utilisateur modernes et intuitives</p>
                
                <ul className="space-y-2 text-sm text-pink-700 dark:text-pink-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                    Design UI/UX
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                    Développement Front-End
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                    Prototypage
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Parcours */}
      <section id="parcours" className="max-w-4xl mx-auto py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
  <h2 className="text-2xl font-bold mb-6">Parcours</h2>
  <ol className="relative border-l border-zinc-300 dark:border-zinc-700">
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-8 ring-white dark:ring-black dark:bg-blue-900">
        🎓
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold">IGA Casablanca</h3>
      <p className="mb-2 text-base text-zinc-600 dark:text-zinc-400">Cycle d'ingénieur en développement informatique Web & Mobile</p>
    </li>
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-8 ring-white dark:ring-black dark:bg-green-900">
        📚
      </span>
      <h3 className="mb-1 text-lg font-semibold">Classes préparatoires</h3>
      <p className="text-base text-zinc-600 dark:text-zinc-400">Classes préparatoires scientifiques</p>
    </li>
    <li className="ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -left-4 ring-8 ring-white dark:ring-black dark:bg-purple-900">
        📜
      </span>
      <h3 className="mb-1 text-lg font-semibold">Baccalauréat scientifique</h3>
      <p className="text-base text-zinc-600 dark:text-zinc-400">Option Sciences Mathématiques, mention Très Bien</p>
    </li>
  </ol>
</section>

      {/* Compétences */}
      <motion.section 
        id="competences" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-4 border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden"
      >
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-purple-50/50 to-pink-50/50 dark:from-cyan-900/10 dark:via-purple-900/10 dark:to-pink-900/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1), rgba(236,72,153,0.1))",
              "linear-gradient(45deg, rgba(236,72,153,0.1), rgba(6,182,212,0.1), rgba(139,92,246,0.1))",
              "linear-gradient(45deg, rgba(139,92,246,0.1), rgba(236,72,153,0.1), rgba(6,182,212,0.1))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.h2 
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10"
        >
          Compétences
        </motion.h2>
        
        {/* Langages de programmation */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 relative z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-cyan-700 dark:text-cyan-300"
          >
            Langages de programmation
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(6,182,212,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg hover:shadow-cyan-200/50 transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                alt="HTML5" 
                className="w-12 h-12 mb-2" 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-cyan-700 dark:text-cyan-300">HTML/CSS/JS</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.2, boxShadow: "0 20px 40px rgba(139,92,246,0.3)" }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                alt="PHP" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-purple-700 dark:text-purple-300">PHP</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.2, boxShadow: "0 20px 40px rgba(236,72,153,0.3)" }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
                alt="Java" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-pink-700 dark:text-pink-300">Java</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.2, boxShadow: "0 20px 40px rgba(245,158,11,0.3)" }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                alt="Python" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-orange-700 dark:text-orange-300">Python</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 relative z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-purple-700 dark:text-purple-300"
          >
            Frameworks
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(6,182,212,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                alt="React" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-cyan-700 dark:text-cyan-300">React.js</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(220,38,127,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" 
                alt="Angular" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-red-700 dark:text-red-300">Angular</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(34,197,94,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
                alt="Spring" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-green-700 dark:text-green-300">Spring Boot</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(239,68,68,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 mb-2 flex items-center justify-center bg-red-100 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-red-600 font-bold text-lg">L</span>
              </motion.div>
              <span className="font-semibold text-red-700 dark:text-red-300">Laravel</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(34,197,94,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                alt="Node.js" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-green-700 dark:text-green-300">Node.js</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(139,92,246,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                alt="Bootstrap" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-purple-700 dark:text-purple-300">Bootstrap</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Base de données */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 relative z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-pink-700 dark:text-pink-300"
          >
            Base de données
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(59,130,246,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                alt="MySQL" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-blue-700 dark:text-blue-300">MySQL</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(34,197,94,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                alt="MongoDB" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-green-700 dark:text-green-300">MongoDB</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(59,130,246,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
                alt="PostgreSQL" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-blue-700 dark:text-blue-300">PostgreSQL</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Architecture & API */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 relative z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-orange-700 dark:text-orange-300"
          >
            Architecture & API
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(59,130,246,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 mb-2 flex items-center justify-center bg-blue-100 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-blue-600 font-bold text-lg">MVC</span>
              </motion.div>
              <span className="font-semibold text-blue-700 dark:text-blue-300">MVC</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(34,197,94,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 mb-2 flex items-center justify-center bg-green-100 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-green-600 font-bold text-xs">API</span>
              </motion.div>
              <span className="font-semibold text-green-700 dark:text-green-300">REST API</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(139,92,246,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 mb-2 flex items-center justify-center bg-purple-100 rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-purple-600 font-bold text-xs">μS</span>
              </motion.div>
              <span className="font-semibold text-purple-700 dark:text-purple-300">Microservices</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Déploiement & DevOps */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 relative z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-cyan-700 dark:text-cyan-300"
          >
            Déploiement & DevOps
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(6,182,212,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                alt="Docker" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-cyan-700 dark:text-cyan-300">Docker</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(245,158,11,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" 
                alt="GitLab" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-orange-700 dark:text-orange-300">GitLab CI/CD</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(75,85,99,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" 
                alt="Linux" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Linux</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Outils & Design */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-pink-700 dark:text-pink-300"
          >
            Outils & Design
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(236,72,153,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                alt="Figma" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-pink-700 dark:text-pink-300">Figma</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(59,130,246,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" 
                alt="WordPress" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-blue-700 dark:text-blue-300">WordPress</span>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0 20px 40px rgba(34,197,94,0.3)"
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg transition-all duration-300"
            >
              <motion.img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" 
                alt="Android" 
                className="w-12 h-12 mb-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="font-semibold text-green-700 dark:text-green-300">Android Studio</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Projets */}
      <motion.section 
        id="projets" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto py-16 px-4 border-b border-zinc-200 dark:border-zinc-800"
      >
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ x: -100, opacity: 0, scale: 0.8 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col transform-gpu transition-all duration-300 hover:text-white group"
          >
            <motion.span 
              className="text-2xl mb-2"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              📦
            </motion.span>
            <h3 className="font-bold text-lg mb-1 group-hover:text-white">Système de Gestion de Stock</h3>
            <span className="text-xs text-zinc-500 mb-2 group-hover:text-zinc-200">Spring Boot & React</span>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4 group-hover:text-zinc-100">Application complète de gestion de stock avec interface React et API Spring Boot pour la gestion des produits et inventaires.</p>
            <motion.a 
              href="/projets/5" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold w-max text-center group-hover:bg-white group-hover:text-black transition-all duration-300"
            >
              Voir détails
            </motion.a>
          </motion.div>
    <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col">
      <span className="text-2xl mb-2">🎓</span>
      <h3 className="font-bold text-lg mb-1">Plateforme E-Learning</h3>
      <span className="text-xs text-zinc-500 mb-2">Laravel & ReactJS</span>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">Plateforme d'apprentissage en ligne complète avec gestion des cours, étudiants, évaluations et suivi des progrès.</p>
      <a href="/projets/6" className="mt-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold w-max text-center">Voir détails</a>
    </div>
    <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col">
      <span className="text-2xl mb-2">🏠</span>
      <h3 className="font-bold text-lg mb-1">Agence immobilière Bayti</h3>
      <span className="text-xs text-zinc-500 mb-2">Front-end & Back-end</span>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">Développement d'une plateforme web pour la gestion et la présentation d'annonces immobilières.</p>
      <a href="/projets/1" className="mt-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold w-max text-center">Voir détails</a>
    </div>
    <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col">
      <span className="text-2xl mb-2">🏫</span>
      <h3 className="font-bold text-lg mb-1">Renouvellement IGA WEBSITE</h3>
      <span className="text-xs text-zinc-500 mb-2">UI/UX, Front-end & Back-end</span>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">Refonte graphique et technique de l'espace étudiant de l'IGA, avec amélioration de l'expérience utilisateur.</p>
      <a href="/projets/3" className="mt-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold w-max text-center">Voir détails</a>
    </div>
    <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col">
      <span className="text-2xl mb-2">🖨️</span>
      <h3 className="font-bold text-lg mb-1">Application mobile bureautique</h3>
      <span className="text-xs text-zinc-500 mb-2">UI/UX, Front-end</span>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">Conception et développement d'une application mobile pour la gestion de fournitures bureautiques.</p>
      <a href="/projets/4" className="mt-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold w-max text-center">Voir détails</a>
    </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <section id="certifications" className="max-w-4xl mx-auto py-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col items-center text-center">
            <img 
              src="/certif2.jpg" 
              alt="Certification WordPress Coursera" 
              className="w-full max-w-xs h-auto rounded-lg mb-4 object-cover"
            />
            <h3 className="font-bold text-lg mb-2">Développement d'un site web avec WordPress</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm">Certification obtenue sur Coursera</p>
          </div>
          <div className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col items-center text-center">
            <img 
              src="/certif1.png" 
              alt="Certification Python IBM" 
              className="w-full max-w-xs h-auto rounded-lg mb-4 object-cover"
            />
            <h3 className="font-bold text-lg mb-2">Python</h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm">Formation avec certificat sur IBM Skills Network</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <span>+212 612 655 169</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <span>zinebhourry12@gmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <CVModal />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nom" 
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:scale-105 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Zineb Hourry. Tous droits réservés.
      </footer>
    </main>
  );
}

