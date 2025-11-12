'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const projetsData = {
  '5': {
    title: 'Système de Gestion de Stock',
    stack: 'Spring Boot & React',
    description: 'Application complète de gestion de stock développée avec Spring Boot pour le backend et React pour le frontend. Système complet de gestion des produits, inventaires, fournisseurs et commandes avec authentification et tableaux de bord.',
    technologies: ['Spring Boot', 'React', 'MySQL'],
    video: '/gestionprojet(1).mp4',
    features: [
      'Gestion complète des produits',
      'Suivi des inventaires en temps réel',
      'Gestion des fournisseurs',
      'Système de commandes',
      'Authentification JWT',
      'Tableaux de bord analytiques',
      'API REST documentée'
    ]
  },
  '6': {
    title: 'Plateforme E-Learning',
    stack: 'Laravel & ReactJS',
    description: 'Plateforme d\'apprentissage en ligne complète développée avec Laravel pour le backend et ReactJS pour le frontend. Système complet de gestion des cours, étudiants, instructeurs, évaluations et suivi des progrès avec tableau de bord analytique.',
    technologies: ['Laravel', 'ReactJS', 'MySQL'],
    video: '/e-learning plateforme.mp4',
    features: [
      'Gestion des cours et modules',
      'Système d\'inscription des étudiants',
      'Interface instructeur avancée',
      'Évaluations et quiz interactifs',
      'Suivi des progrès en temps réel',
      'Certificats automatiques',
      'Tableau de bord analytique',
      'Système de notifications'
    ]
  },
  '1': {
    title: 'Agence immobilière Bayti',
    stack: 'Front-end & Back-end',
    description: 'Développement d\'une plateforme web complète pour la gestion et la présentation d\'annonces immobilières. Interface utilisateur moderne avec système de recherche avancée, gestion des biens, et espace administrateur.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    video: '/bayti-demo.mp4',
    images: [
      '/bayti-1.jpg',
      '/bayti-2.jpg',
      '/bayti-3.jpg'
    ],
    features: [
      'Système de recherche multicritères',
      'Gestion des annonces immobilières',
      'Interface administrateur',
      'Responsive design',
      'Base de données optimisée'
    ]
  },
  '3': {
    title: 'Renouvellement IGA WEBSITE',
    stack: 'UI/UX, Front-end & Back-end',
    description: 'Refonte complète de l\'espace étudiant de l\'IGA avec amélioration de l\'expérience utilisateur, nouveau design moderne et fonctionnalités avancées.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
    video: '/iga-demo.mp4',
    images: [
      '/iga-1.jpg',
      '/iga-2.jpg',
      '/iga-3.jpg'
    ],
    features: [
      'Design moderne et intuitif',
      'Espace étudiant personnalisé',
      'Gestion des cours et notes',
      'Communication intégrée',
      'Version mobile responsive'
    ]
  },
  '4': {
    title: 'Application mobile bureautique',
    stack: 'UI/UX, Front-end',
    description: 'Conception et développement d\'une application mobile pour la gestion de fournitures bureautiques avec interface intuitive et fonctionnalités de commande.',
    technologies: ['Android Studio', 'Java', 'SQLite', 'Material Design'],
    video: '/bureautique-demo.mp4',
    images: [
      '/bureautique-1.jpg',
      '/bureautique-2.jpg',
      '/bureautique-3.jpg'
    ],
    features: [
      'Catalogue de produits',
      'Système de commande',
      'Gestion du stock',
      'Interface Material Design',
      'Notifications push'
    ]
  }
};

export default function ProjetDetail() {
  const params = useParams();
  const id = params.id as string;
  const projet = projetsData[id as keyof typeof projetsData];

  if (!projet) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ← Retour
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Titre et description */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{projet.title}</h1>
          <span className="text-sm text-zinc-500 mb-4 block">{projet.stack}</span>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">{projet.description}</p>
        </div>

        {/* Vidéo de démonstration */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Démonstration</h2>
          <div className="rounded-lg overflow-hidden">
            <video 
              controls 
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-lg shadow-lg"
              poster="/placeholder-video.jpg"
            >
              <source src={projet.video} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>

        {/* Technologies utilisées */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            {projet.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Fonctionnalités principales</h2>
          <ul className="space-y-2">
            {projet.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </main>
    </div>
  );
}
