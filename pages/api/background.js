const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'ENSIAS UM5',
                degree: 'Diplome d\'ingénieur d\'etat, Génie logiciel',
                detail: "",
                year: '2023- en cours'
            },
            {
                id: 1,
                title: 'Université Moulay Ismail Meknes',
                degree: 'Licence, génie informatique',
                detail: "",
                year: '2013-2016'
            },
            
        ]
    },
    {
        expCards :[
            {
                id: 1,
                title: 'OpenClassrooms',
                role: 'Développeur Frontend',
                url: 'https://openclassrooms.com/',
                desc: "En tant que développeur frontend, j'ai utilisé React, Next.js et JavaScript pour créer des interfaces utilisateur modernes et performantes pour des applications web.",
                year: '01/2024 - Présent',
                location: 'Paris, France'
            },
            {
                id: 2,
                title: 'Simplon.co',
                role: 'Stagiaire Développeur Web',
                url: 'https://simplon.co/',
                desc: "En tant que stagiaire, j'ai appris à développer des sites interactifs avec React et JavaScript, en mettant l'accent sur l'accessibilité et l'expérience utilisateur.",
                year: '06/2023 - 12/2023',
                location: 'Lille, France'
            },
            {
                id: 3,
                title: 'Theodo',
                role: 'Développeur PHP',
                url: 'https://www.theodo.fr/',
                desc: "J'ai travaillé comme développeur PHP où j'ai appris à réaliser des opérations CRUD, optimiser des bases de données, et intégrer des services cloud comme Firebase.",
                year: '03/2022 - 05/2023',
                location: 'Paris, France'
            },
        ]
        
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
