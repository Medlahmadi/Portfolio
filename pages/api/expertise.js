const expertise = [
    {
        id: 0,
        title: 'Développement Full Stack',
        desc: "Je suis un développeur MERN stack expérimenté avec une grande expertise dans la création d'applications web robustes utilisant MongoDB, Express.js, React.js et Node.js. Je maîtrise parfaitement le rendu côté serveur, l'intégration d'API et la gestion de bases de données. Grâce à mes compétences, je peux livrer des solutions web dynamiques et efficaces, adaptées aux besoins spécifiques des clients.",
    },
    {
        id: 1,
        title: 'Scrum et Jira',
        desc: "En tant que développeur, je maîtrise Jira et les méthodologies Scrum. J'utilise Jira pour simplifier la gestion de projet : attribution des tâches, hiérarchisation et suivi de l'avancement. Scrum a renforcé mon travail d'équipe grâce aux réunions quotidiennes, aux planifications de sprint et aux rétrospectives. Mon expertise garantit la livraison rapide de produits logiciels de haute qualité.",
    },
    {
        id: 2,
        title: 'Design (UI/UX)',
        desc: "Je maîtrise des logiciels de design tels que Figma, Adobe XD et Adobe Illustrator. Grâce à ma participation à des hackathons et à des missions freelance, j'ai acquis une solide expérience pratique en design UI/UX et en graphisme. Le design est ma passion, ce qui me permet de développer constamment ma créativité et de progresser dans ce domaine.",
    },
    {
        id: 3,
        title: 'GitHub',
        desc: "GitHub est essentiel pour le contrôle de version et la collaboration. Son interface intuitive et ses fonctionnalités comme les pull requests et le suivi des issues facilitent la gestion de projet. L'intégration continue permet de maintenir un code à jour. GitHub est un outil indispensable à ma réussite en tant que développeur.",
    },
    {
        id: 4,
        title: 'Contributeur Open Source',
        desc: "L'Open Source est l'avenir. Je consacre généralement du temps le week-end pour contribuer à des projets open source. Cela me permet d'apprendre des meilleures pratiques des développeurs, d'aider les autres et d'apporter ma contribution à la communauté pour le bien commun.",
    },
];


export default function handler(req, res) {
    res.status(200).json(expertise)
}
