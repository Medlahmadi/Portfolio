const review = [
    {
      id: 5,
      clientName: 'YassineElFassi',
      clientLocation: 'France',
      clientSource: 'Fiverr',
      clientReview:
        "Une expérience exceptionnelle ! Il a respecté toutes les exigences du projet et a livré un travail de grande qualité. Je recommande vivement ses services.",
    },
    {
      id: 6,
      clientName: 'KhadijaBenali',
      clientLocation: 'Belgium',
      clientSource: 'Fiverr',
      clientReview:
        "Très satisfait du résultat final. Communication rapide, travail soigné et professionnel. Je retravaillerai avec lui sans hésiter.",
    },
    {
      id: 7,
      clientName: 'MehdiIdrissi',
      clientLocation: 'Switzerland',
      clientSource: 'Fiverr',
      clientReview:
        "Un prestataire fiable et compétent. Il a su comprendre mes besoins et a proposé des solutions adaptées. Merci pour ton professionnalisme !",
    },
    {
      id: 8,
      clientName: 'FatimaZahraBouzid',
      clientLocation: 'Canada',
      clientSource: 'Fiverr',
      clientReview:
        "Excellente collaboration. Il est rapide, efficace et très à l'écoute. Je suis très content du travail accompli.",
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(review);
  }
  