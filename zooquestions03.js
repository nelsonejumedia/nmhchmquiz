const questions = [
    {
        question: "What are the body structures that help cestodes attach to their hosts?",
        answers: [
            { text: "Tentacles", correct: false },
            { text: "Hooks and suckers", correct: true },
            { text: "Fins", correct: false },
            { text: "Teeth", correct: false },
        ]
    },
    {
        question: "In what habitat can you find members of the Lecithoepitheliata suborder?",
        answers: [
            { text: "Marine, freshwater, and terrestrial", correct: true },
            { text: "Deserts", correct: false },
            { text: "Polar regions", correct: false },
            { text: "Deep ocean trenches", correct: false },
        ]
    },
    {
        question: "Which order includes turbellarians with a pharynx that can be bulbose or plicate?",
        answers: [
            { text: "Alloecoela", correct: true },
            { text: "Rhabdocoela", correct: false },
            { text: "Tricladida", correct: false },
            { text: "Aspidocotylea", correct: false },
        ]
    },
    {
        question: "What characterizes the digestive system of cestodes?",
        answers: [
            { text: "Complete with mouth and anus", correct: false },
            { text: "Branching with multiple diverticula", correct: false },
            { text: "Lacking a mouth and digestive system", correct: true },
            { text: "Simple sac-like structure", correct: false },
        ]
    },
    {
        question: "How do most flatworms excrete waste?",
        answers: [
            { text: "Through a complex kidney system", correct: false },
            { text: "By diffusion through their skin", correct: false },
            { text: "Using a network of tubules and flame cells", correct: true },
            { text: "Through specialized excretory pores", correct: false },
        ]
    },
    {
        question: "What is a key feature of the reproductive system in Alloecoela turbellarians?",
        answers: [
            { text: "External fertilization", correct: false },
            { text: "A single set of reproductive organs", correct: false },
            { text: "Numerous testes and a pair of ovaries", correct: true },
            { text: "Gonads located externally", correct: false },
        ]
    },
    {
        question: "Which suborder of Rhabdocoela is characterized by a simple pharynx and an unarmed penis?",
        answers: [
            { text: "Notandropora", correct: true },
            { text: "Opisthandropora", correct: false },
            { text: "Lecithopora", correct: false },
            { text: "Temnocephalida", correct: false },
        ]
    },
    {
        question: "What is the typical habitat of Tricladida turbellarians?",
        answers: [
            { text: "Desert sands", correct: false },
            { text: "Marine, freshwater, or terrestrial environments", correct: true },
            { text: "High-altitude mountains", correct: false },
            { text: "Deep-sea vents", correct: false },
        ]
    },
    {
        question: "What is a defining characteristic of the nervous system in Alloecoela turbellarians?",
        answers: [
            { text: "Two pairs of longitudinal nerve cords", correct: false },
            { text: "No nerve cords present", correct: false },
            { text: "Three or four pairs of longitudinal nerve cords", correct: true },
            { text: "One single nerve cord", correct: false },
        ]
    },
    {
        question: "Which subclass of Cestoda lacks both a scolex and strobila?",
        answers: [
            { text: "Cestodaria", correct: true },
            { text: "Eucestoda", correct: false },
            { text: "Tetraphyllidea", correct: false },
            { text: "Pseudophyllidea", correct: false },
        ]
    },
    {
        question: "What kind of pharynx do members of the Lecithoepitheliata suborder have?",
        answers: [
            { text: "Bulbose pharynx", correct: true },
            { text: "Plicate pharynx", correct: false },
            { text: "Branching pharynx", correct: false },
            { text: "Lobed pharynx", correct: false },
        ]
    },
    {
        question: "Which order of flatworms typically inhabits the intestines of vertebrates?",
        answers: [
            { text: "Tricladida", correct: false },
            { text: "Aspidocotylea", correct: true },
            { text: "Alloecoela", correct: false },
            { text: "Rhabdocoela", correct: false },
        ]
    },
    {
        question: "Which class of flatworms includes species that are endoparasites in vertebrates?",
        answers: [
            { text: "Turbellaria", correct: false },
            { text: "Cestoda", correct: true },
            { text: "Trematoda", correct: false },
            { text: "Monogenea", correct: false },
        ]
    },
    {
        question: "What type of reproductive system do Eucestodes typically have?",
        answers: [
            { text: "Dioecious", correct: false },
            { text: "Monoecious with multiple sets of reproductive organs", correct: true },
            { text: "Monoecious with a single set of reproductive organs", correct: false },
            { text: "External fertilization", correct: false },
        ]
    },
    {
        question: "Which suborder of Rhabdocoela features compact testes and an armed penis with a stylet?",
        answers: [
            { text: "Notandropora", correct: false },
            { text: "Opisthandropora", correct true },
            { text: "Lecithopora", correct: false },
            { text: "Temnocephalida", correct: false },
        ]
    },
    {
        question: "In what environments are Lecithoepitheliata turbellarians found?",
        answers: [
            { text: "Exclusively marine", correct: false },
            { text: "Marine, freshwater, and terrestrial", correct: true },
            { text: "Freshwater only", correct: false },
            { text: "Terrestrial only", correct: false },
        ]
    },
    {
        question: "What distinguishes the female reproductive system in Lecithoepitheliata turbellarians?",
        answers: [
            { text: "Presence of multiple yolk glands", correct: false },
            { text: "Minimal to no yolk glands", correct: true },
            { text: "External ovaries", correct: false },
            { text: "Highly branched ovaries", correct: false },
        ]
    },
    {
        question: "What is a unique feature of the Temnocephalida suborder?",
        answers: [
            { text: "Large pharynx", correct: false },
            { text: "2-12 tentacles at the anterior end", correct: true },
            { text: "Multiple adhesive discs", correct: false },
            { text: "Lack of reproductive organs", correct: false },
        ]
    },
    {
        question: "What is the function of the scolex in cestodes?",
        answers: [
            { text: "Digestion", correct: false },
            { text: "Reproduction", correct: false },
            { text: "Attachment to host", correct: true },
            { text: "Sensory perception", correct: false },
        ]
    },
    {
        question: "What kind of environments do members of the Cumulata suborder inhabit?",
        answers: [
            { text: "Only terrestrial", correct: false },
            { text: "Only freshwater", correct: false },
            { text: "Freshwater or marine", correct: true },
            { text: "Only marine", correct: false },
        ]
    }
];