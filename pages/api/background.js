const background = [
    /* ──────────────── FORMATION ──────────────── */
    {
      eduCards: [
        {
          id: 0,
          title: 'ENSIAS – UM5, Rabat',
          degree: "Diplôme d’ingénieur d’État, Génie logiciel",
          detail: '',
          year: '2023 – Présent',
        },
        {
          id: 1,
          title: 'École Royale Navale, Casablanca',
          degree: 'Licence, Télécommunications',
          detail: '',
          year: '2020 – 2021',
        },
        {
          id: 2,
          title: 'École Royale Navale, Casablanca',
          degree: 'Diplôme d’Études Universitaires Générales (DEUG)',
          detail: '',
          year: '2019 – 2022',
        },
        {
          id: 3,
          title: 'Lycée Errahali El Farouk, Kelaat Sraghna',
          degree: 'Baccalauréat Sciences Mathématiques',
          detail: '',
          year: '2017 – 2018',
        },
      ],
    },
  
    /* ─────────────── EXPÉRIENCES & PROJETS ─────────────── */
    {
      expCards: [
        {
          id: 1,
          title: 'Stage – Gestion dynamique des réseaux d’assainissement',
          role: 'Stagiaire Data Analyst',
          url: '',
          desc:
            'Étude et analyse des données des réseaux d’assainissement et développement d’un modèle prédictif pour prévenir les débordements.',
          year: '07/2023 – 09/2023',
          location: 'Casablanca, Maroc',
        },
        {
          id: 2,
          title: 'Extension VS Code basée sur LLM',
          role: 'Développeur Full-Stack',
          url: '',
          desc:
            'Conception et développement d’une extension VS Code générant automatiquement la documentation grâce à un grand modèle de langage.',
          year: '02/2024 – Présent',
          location: 'Rabat, Maroc',
        },
        {
          id: 3,
          title: 'Application mobile de gestion de voyages',
          role: 'Développeur Android',
          url: '',
          desc:
            'Implémentation d’une application mobile pour la planification et le suivi de voyages (Java • MVVM • Firebase).',
          year: '02/2024 – 04/2024',
          location: 'Rabat, Maroc',
        },
        {
          id: 4,
          title: 'Compilateur Pascal',
          role: 'Développeur C',
          url: '',
          desc:
            'Création d’un compilateur Pascal : analyse lexicale/syntaxique et génération de code machine.',
          year: '12/2023 – 01/2024',
          location: 'Rabat, Maroc',
        },
        {
          id: 5,
          title: 'Plateforme web de gestion de stages',
          role: 'Développeur Full-Stack',
          url: '',
          desc:
            'Développement d’une plateforme web pour gérer le cycle des stages (Oracle APEX, Spring Boot, OCI).',
          year: '11/2023 – 12/2023',
          location: 'Rabat, Maroc',
        },
        {
          id: 6,
          title: 'Application web de gestion des courriers',
          role: 'Développeur Full-Stack',
          url: '',
          desc:
            'Automatisation de la gestion des courriers administratifs via Laravel, MySQL et Merise.',
          year: '02/2023 – 04/2023',
          location: 'Rabat, Maroc',
        },
      ],
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(background);
  }
  