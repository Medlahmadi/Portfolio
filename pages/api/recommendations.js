// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 4,
    name: 'Youssef El Amrani',
    image: "images/shahmir.jfif",
    designation: 'Développeur Full Stack | React | Node.js | Next.js',
    view: "Je recommande vivement Anas pour tout projet de développement web. Travailler avec lui a été un vrai plaisir : il est rigoureux, créatif et toujours prêt à relever de nouveaux défis. Son expertise en React et Next.js est remarquable et il sait livrer des projets de qualité dans les délais. Un vrai atout pour toute équipe tech !",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 5,
    name: 'Rayan Benchekroun',
    image: "images/sikandar.jpeg",
    designation: 'Ingénieure en Machine Learning | Python | Data Science',
    view: "Collaborer avec Anas a été une expérience enrichissante. Sa capacité à comprendre les besoins métier et à proposer des solutions adaptées est impressionnante. Il est professionnel, organisé et toujours à l'écoute. Je le recommande sans hésiter pour toute mission liée au développement web et aux nouvelles technologies.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 6,
    name: 'Othmane Berrada',
    image: "images/nasir.jpg",
    designation: 'Développeur Frontend | MERN Stack | UI/UX Designer',
    view: "Anas est un développeur frontend exceptionnel avec une vraie sensibilité pour le design UI/UX. J'ai eu l'occasion de suivre son travail sur plusieurs projets, et sa capacité à livrer des interfaces élégantes et performantes est remarquable. Il serait une excellente recrue pour tout projet ambitieux.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 7,
    name: 'Hafiz El Idrissi',
    image: "images/muhammad.jpeg",
    designation: 'Développeuse Web | Spécialiste React & Next.js',
    view: "Je recommande fortement Anas Javed pour toute opportunité dans le développement web. Il possède une expertise technique avancée en ReactJS et Next.js, combinée à une grande rigueur professionnelle. Travailler avec lui est toujours fluide et efficace.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
