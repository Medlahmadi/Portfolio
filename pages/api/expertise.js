const expertise = [
    {
      id: 0,
      title: 'Développement Full-Stack',
      desc:
        "Maîtrise des architectures web modernes : MERN (MongoDB, Express, React, Node), Spring Boot, Laravel et Oracle APEX. De la conception de l'API REST jusqu'au déploiement cloud (OCI, Firebase) en passant par les tests et l'intégration continue.",
    },
    {
      id: 1,
      title: 'Conception & Modélisation',
      desc:
        "Solide expérience UML et Merise pour l’analyse et la modélisation des SI : diagrammes de classes, séquences, MCD/MPD. Je traduis les besoins métier en modèles clairs, prêts à être implémentés.",
    },
    {
      id: 2,
      title: 'Systèmes & Réseaux',
      desc:
        "Administration Linux (bash, systemd, services) et bases réseaux (routing, VLAN, QoS). Certification CCNA validée ; capable de configurer, superviser et dépanner des infrastructures IP.",
    },
    {
      id: 3,
      title: 'Intelligence Artificielle & NLP',
      desc:
        "Certifié IBM AI Analyst. Développement d’outils NLP avec llama.cpp / CUDA et Python : extraction d’information, génération de texte et assistants IA embarqués dans des extensions VS Code.",
    },
    {
      id: 4,
      title: 'Agilité & Collaboration',
      desc:
        "Pratique quotidienne du Scrum : sprints, daily meetings, rétrospectives. Utilisation avancée de Jira pour le suivi des tâches et de Git/GitHub (branching, pull-requests, CI) pour un travail d’équipe fluide.",
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(expertise);
  }
  