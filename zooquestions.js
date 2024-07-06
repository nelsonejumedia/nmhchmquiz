const questions = [
    {
        question: "What distinguishes unicellular eukaryotes from other organisms?",
        answers: [
            { text: "They have multiple cells", correct: false },
            { text: "All life’s activities occur within a single plasma membrane", correct: true },
            { text: "They lack a nucleus", correct: false },
            { text: "They are multicellular", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a type of symbiotic relationship?",
        answers: [
            { text: "Mutualistic", correct: false },
            { text: "Commensalistic", correct: false },
            { text: "Parasitic", correct: false },
            { text: "Autotrophic", correct: true },
        ]
    },
    {
        question: "What mode of nutrition involves synthesizing organic constituents from inorganic substrates?",
        answers: [
            { text: "Heterotrophic", correct: false },
            { text: "Autotrophic", correct: true },
            { text: "Phagotrophic", correct: false },
            { text: "Osmotrophic", correct: false },
        ]
    },
    {
        question: "What do phagotrophs feed on?",
        answers: [
            { text: "Soluble food", correct: false },
            { text: "Visible food particles", correct: true },
            { text: "Inorganic substrates", correct: false },
            { text: "Symbiotic organisms", correct: false },
        ]
    },
    {
        question: "What is the characteristic locomotion of ciliates?",
        answers: [
            { text: "Flagella", correct: false },
            { text: "Cilia", correct: true },
            { text: "Pseudopodia", correct: false },
            { text: "Sessile", correct: false },
        ]
    },
    {
        question: "Which type of pseudopodia is blunt-tipped?",
        answers: [
            { text: "Lobopodia", correct: true },
            { text: "Filopodia", correct: false },
            { text: "Rhizopodia", correct: false },
            { text: "Axopodia", correct: false },
        ]
    },
    {
        question: "What are naked amebas called?",
        answers: [
            { text: "Testate amebas", correct: false },
            { text: "Naked amebas", correct: true },
            { text: "Foraminiferans", correct: false },
            { text: "Radiolarians", correct: false },
        ]
    },
    {
        question: "Which phylum includes organisms with an apical complex of organelles?",
        answers: [
            { text: "Ciliophora", correct: false },
            { text: "Apicomplexa", correct: true },
            { text: "Euglenozoa", correct: false },
            { text: "Dinoflagellata", correct: false },
        ]
    },
    {
        question: "Which class has large-sized mature gamonts typically extracellular?",
        answers: [
            { text: "Gregarinea", correct: true },
            { text: "Coccidea", correct: false },
            { text: "Diplomonada", correct: false },
            { text: "Euglenoidea", correct: false },
        ]
    },
    {
        question: "Which phylum includes shelled amebas with slender pseudopodia?",
        answers: [
            { text: "Amoebozoa", correct: false },
            { text: "Radiolaria", correct: false },
            { text: "Foraminifera", correct: true },
            { text: "Centrohelida", correct: false },
        ]
    },
    {
        question: "Which group does Plasmodium belong to?",
        answers: [
            { text: "Class Gregarinea", correct: false },
            { text: "Class Coccidea", correct: true },
            { text: "Phylum Ciliophora", correct: false },
            { text: "Phylum Apicomplexa", correct: false },
        ]
    },
    {
        question: "Which phylum includes flagellates with paraxial rods?",
        answers: [
            { text: "Euglenozoa", correct: true },
            { text: "Diplomonada", correct: false },
            { text: "Parabasala", correct: false },
            { text: "Dinoflagellata", correct: false },
        ]
    },
    {
        question: "Which group includes organisms that form beautiful tests of silica?",
        answers: [
            { text: "Radiolaria", correct: true },
            { text: "Foraminifera", correct: false },
            { text: "Centrohelida", correct: false },
            { text: "Amoebozoa", correct: false },
        ]
    },
    {
        question: "What is the mode of locomotion for amoebas?",
        answers: [
            { text: "Flagella", correct: false },
            { text: "Cilia", correct: false },
            { text: "Pseudopodia", correct: true },
            { text: "Sessile", correct: false },
        ]
    },
    {
        question: "Which phylum includes organisms with two different flagella?",
        answers: [
            { text: "Diplomonada", correct: false },
            { text: "Euglenozoa", correct: false },
            { text: "Stramenopiles", correct: true },
            { text: "Opisthokonta", correct: false },
        ]
    },
    {
        question: "What type of symmetry do unicellular eukaryotes have?",
        answers: [
            { text: "Only radial symmetry", correct: false },
            { text: "Only bilateral symmetry", correct: false },
            { text: "All types of symmetries", correct: true },
            { text: "No symmetry", correct: false },
        ]
    },
    {
        question: "Which type of nutrition involves ingestion of dissolved nutrients?",
        answers: [
            { text: "Autotrophic", correct: false },
            { text: "Heterotrophic", correct: false },
            { text: "Saprozoic", correct: true },
            { text: "Phagotrophic", correct: false },
        ]
    },
    {
        question: "Which group includes shelled amebas with netlike pseudopodia?",
        answers: [
            { text: "Radiolaria", correct: false },
            { text: "Centrohelida", correct: false },
            { text: "Foraminifera", correct: true },
            { text: "Amoebozoa", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a characteristic of sponges?",
        answers: [
            { text: "Sessile", correct: false },
            { text: "Move to search for food", correct: true },
            { text: "Filter feeders", correct: false },
            { text: "Aquatic", correct: false },
        ]
    },
    {
        question: "What are the flagellated cells in sponges called?",
        answers: [
            { text: "Amoebocytes", correct: false },
            { text: "Choanocytes", correct: true },
            { text: "Spongocytes", correct: false },
            { text: "Pinacocytes", correct: false },
        ]
    },
    
    {
        question: "What is the primary function of choanocytes in sponges?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Digestion", correct: false },
            { text: "Water circulation and feeding", correct: true },
            { text: "Support structure", correct: false },
        ]
    },
    {
        question: "Which class of sponges includes those with siliceous spicules?",
        answers: [
            { text: "Calcarea", correct: false },
            { text: "Hexactinellida", correct: true },
            { text: "Demospongiae", correct: false },
            { text: "Homorhaphidae", correct: false },
        ]
    },
    {
        question: "What do porocytes in sponges do?",
        answers: [
            { text: "Generate water flow", correct: false },
            { text: "Form the outer layer", correct: false },
            { text: "Allow water to enter", correct: true },
            { text: "Secrete spicules", correct: false },
        ]
    },
    {
        question: "What is the large central cavity of a sponge called?",
        answers: [
            { text: "Spongocoel", correct: true },
            { text: "Osculum", correct: false },
            { text: "Mesohyl", correct: false },
            { text: "Atrium", correct: false },
        ]
    },
    {
        question: "Which cells in sponges are responsible for reproduction?",
        answers: [
            { text: "Choanocytes", correct: false },
            { text: "Archaeocytes", correct: true },
            { text: "Pinacocytes", correct: false },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "What structural protein is found in the skeleton of demosponges?",
        answers: [
            { text: "Keratin", correct: false },
            { text: "Collagen", correct: false },
            { text: "Spongin", correct: true },
            { text: "Chitin", correct: false },
        ]
    },
    {
        question: "Which of the following is a characteristic of Hexactinellida?",
        answers: [
            { text: "Spicules made of calcium carbonate", correct: false },
            { text: "Spicules made of silica", correct: true },
            { text: "Lack of spicules", correct: false },
            { text: "Presence of spongin", correct: false },
        ]
    },
    {
        question: "What is the role of pinacocytes in sponges?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Creating water flow", correct: false },
            { text: "Forming the outer surface", correct: true },
            { text: "Digestion", correct: false },
        ]
    },
    {
        question: "Which part of a sponge is responsible for filtering food from water?",
        answers: [
            { text: "Porocytes", correct: false },
            { text: "Spongocoel", correct: false },
            { text: "Osculum", correct: false },
            { text: "Choanocytes", correct: true },
        ]
    },
    {
        question: "Which class of sponges has spicules made of calcium carbonate?",
        answers: [
            { text: "Hexactinellida", correct: false },
            { text: "Demospongiae", correct: false },
            { text: "Calcarea", correct: true },
            { text: "Homorhaphidae", correct: false },
        ]
    },
    {
        question: "What is the outer layer of cells in a sponge called?",
        answers: [
            { text: "Choanoderm", correct: false },
            { text: "Pinacoderm", correct: true },
            { text: "Mesohyl", correct: false },
            { text: "Spongocoel", correct: false },
        ]
    },
    {
        question: "How do sponges primarily reproduce?",
        answers: [
            { text: "Only asexually", correct: false },
            { text: "Only sexually", correct: false },
            { text: "Both asexually and sexually", correct: true },
            { text: "By budding only", correct: false },
        ]
    },
    {
        question: "What type of canal system is found in simple sponges?",
        answers: [
            { text: "Asconoid", correct: true },
            { text: "Syconoid", correct: false },
            { text: "Leuconoid", correct: false },
            { text: "Rhabdoid", correct: false },
        ]
    },
    {
        question: "Which type of sponge canal system is the most complex?",
        answers: [
            { text: "Asconoid", correct: false },
            { text: "Syconoid", correct: false },
            { text: "Leuconoid", correct: true },
            { text: "Rhabdoid", correct: false },
        ]
    },
    {
        question: "Which class of sponges includes the largest number of species?",
        answers: [
            { text: "Calcarea", correct: false },
            { text: "Hexactinellida", correct: false },
            { text: "Demospongiae", correct: true },
            { text: "Homorhaphidae", correct: false },
        ]
    },
    {
        question: "What is the name of the large opening at the top of a sponge where water exits?",
        answers: [
            { text: "Osculum", correct: true },
            { text: "Spongocoel", correct: false },
            { text: "Porocyte", correct: false },
            { text: "Ostium", correct: false },
        ]
    },
    {
        question: "Which cell type in sponges is totipotent, meaning it can transform into other cell types?",
        answers: [
            { text: "Choanocytes", correct: false },
            { text: "Pinacocytes", correct: false },
            { text: "Archaeocytes", correct: true },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "What is the gelatinous matrix within a sponge called?",
        answers: [
            { text: "Choanoderm", correct: false },
            { text: "Pinacoderm", correct: false },
            { text: "Mesohyl", correct: true },
            { text: "Spongocoel", correct: false },
        ]
    },
    {
        question: "Which structural feature do all sponges have in common?",
        answers: [
            { text: "Nervous system", correct: false },
            { text: "Digestive tract", correct: false },
            { text: "Spicules", correct: true },
            { text: "True tissues", correct: false },
        ]
    },
    {
        question: "How do sponges obtain their food?",
        answers: [
            { text: "Photosynthesis", correct: false },
            { text: "Parasitism", correct: false },
            { text: "Filter feeding", correct: true },
            { text: "Predation", correct: false },
        ]
    },
    
    
    

    {
        question: "What type of cells in sponges are involved in secretion of the skeleton?",
        answers: [
            { text: "Choanocytes", correct: false },
            { text: "Pinacocytes", correct: false },
            { text: "Archaeocytes", correct: true },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "What characteristic feature is shared by all members of the phylum Porifera?",
        answers: [
            { text: "Presence of a nerve net", correct: false },
            { text: "Presence of spicules", correct: true },
            { text: "True tissues", correct: false },
            { text: "Gastrovascular cavity", correct: false },
        ]
    },
    {
        question: "Which sponge body type has a folded body wall forming canals?",
        answers: [
            { text: "Asconoid", correct: false },
            { text: "Syconoid", correct: true },
            { text: "Leuconoid", correct: false },
            { text: "Rhabdoid", correct: false },
        ]
    },
    {
        question: "Which of the following is a class of the phylum Porifera?",
        answers: [
            { text: "Anthozoa", correct: false },
            { text: "Calcarea", correct: true },
            { text: "Hydrozoa", correct: false },
            { text: "Scyphozoa", correct: false },
        ]
    },
    {
        question: "What substance forms the main component of the skeleton in demosponges?",
        answers: [
            { text: "Calcium carbonate", correct: false },
            { text: "Silica", correct: false },
            { text: "Spongin", correct: true },
            { text: "Chitin", correct: false },
        ]
    },
    {
        question: "Which class of sponges is characterized by six-rayed siliceous spicules?",
        answers: [
            { text: "Calcarea", correct: false },
            { text: "Hexactinellida", correct: true },
            { text: "Demospongiae", correct: false },
            { text: "Homorhaphidae", correct: false },
        ]
    },
    {
        question: "What is the role of amoebocytes in sponges?",
        answers: [
            { text: "Creating water flow", correct: false },
            { text: "Forming the outer layer", correct: false },
            { text: "Transporting nutrients and producing spicules", correct: true },
            { text: "Reproduction", correct: false },
        ]
    },
    {
        question: "What is the inner layer of cells in a sponge called?",
        answers: [
            { text: "Pinacoderm", correct: false },
            { text: "Mesohyl", correct: false },
            { text: "Choanoderm", correct: true },
            { text: "Spongocoel", correct: false },
        ]
    },
    {
        question: "How do sponges reproduce asexually?",
        answers: [
            { text: "Fission", correct: false },
            { text: "Budding and gemmules", correct: true },
            { text: "Spore formation", correct: false },
            { text: "Fragmentation", correct: false },
        ]
    },
    {
        question: "Which type of sponge body structure has multiple oscula?",
        answers: [
            { text: "Asconoid", correct: false },
            { text: "Syconoid", correct: false },
            { text: "Leuconoid", correct: true },
            { text: "Rhabdoid", correct: false },
        ]
    },
    {
        question: "What do sponges primarily feed on?",
        answers: [
            { text: "Large prey", correct: false },
            { text: "Bacteria and organic particles", correct: true },
            { text: "Photosynthetic algae", correct: false },
            { text: "Detritus", correct: false },
        ]
    },
    {
        question: "What is the main method of gas exchange in sponges?",
        answers: [
            { text: "Diffusion through choanocytes", correct: true },
            { text: "Respiratory organs", correct: false },
            { text: "Specialized respiratory cells", correct: false },
            { text: "Through pores", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a feature of Porifera?",
        answers: [
            { text: "Multicellular", correct: false },
            { text: "Lack true tissues", correct: false },
            { text: "Radial symmetry", correct: true },
            { text: "Sessile adults", correct: false },
        ]
    },
    {
        question: "How do sponges expel water?",
        answers: [
            { text: "Through porocytes", correct: false },
            { text: "Through the osculum", correct: true },
            { text: "Through ostia", correct: false },
            { text: "Through choanocytes", correct: false },
        ]
    },
    {
        question: "What are the needle-like structures in sponges called?",
        answers: [
            { text: "Spongin", correct: false },
            { text: "Spicules", correct: true },
            { text: "Chitin", correct: false },
            { text: "Silica", correct: false },
        ]
    },
    {
        question: "Which type of cells line the inner chambers of sponges?",
        answers: [
            { text: "Pinacocytes", correct: false },
            { text: "Choanocytes", correct: true },
            { text: "Amoebocytes", correct: false },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "Which phylum includes organisms with a simple body plan lacking tissues and organs?",
        answers: [
            { text: "Cnidaria", correct: false },
            { text: "Porifera", correct: true },
            { text: "Platyhelminthes", correct: false },
            { text: "Annelida", correct: false },
        ]
    },
    {
        question: "What is the process called when a sponge can reassemble itself from dissociated cells?",
        answers: [
            { text: "Regeneration", correct: true },
            { text: "Budding", correct: false },
            { text: "Fragmentation", correct: false },
            { text: "Fission", correct: false },
        ]
    },
    {
        question: "Which structure in sponges is used for sexual reproduction?",
        answers: [
            { text: "Gemmules", correct: false },
            { text: "Choanocytes", correct: false },
            { text: "Sperm and eggs", correct: true },
            { text: "Archaeocytes", correct: false },
        ]
    },
    {
        question: "How do sponges contribute to marine ecosystems?",
        answers: [
            { text: "By competing with corals for space", correct: false },
            { text: "By filtering water and providing habitat", correct: true },
            { text: "By preying on small fish", correct: false },
            { text: "By producing oxygen through photosynthesis", correct: false },
        ]
    },
    
    
  
    {
        question: "Which type of sponge cells are primarily involved in digestion?",
        answers: [
            { text: "Choanocytes", correct: false },
            { text: "Pinacocytes", correct: false },
            { text: "Amoebocytes", correct: true },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "Which class of sponges has species that are predominantly marine?",
        answers: [
            { text: "Calcarea", correct: true },
            { text: "Hexactinellida", correct: false },
            { text: "Demospongiae", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "What is the main characteristic of the Asconoid body plan in sponges?",
        answers: [
            { text: "Complex canal system", correct: false },
            { text: "Simplest structure with a single large cavity", correct: true },
            { text: "Folded body wall", correct: false },
            { text: "Presence of multiple oscula", correct: false },
        ]
    },
    {
        question: "Which feature distinguishes sponges from other animals?",
        answers: [
            { text: "They are autotrophic", correct: false },
            { text: "They lack a nervous system", correct: true },
            { text: "They have true tissues", correct: false },
            { text: "They are unicellular", correct: false },
        ]
    },
    {
        question: "What is the main function of spicules in sponges?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Digestion", correct: false },
            { text: "Providing structural support", correct: true },
            { text: "Photosynthesis", correct: false },
        ]
    },
    {
        question: "Which type of canal system in sponges allows the largest body size?",
        answers: [
            { text: "Asconoid", correct: false },
            { text: "Syconoid", correct: false },
            { text: "Leuconoid", correct: true },
            { text: "Rhabdoid", correct: false },
        ]
    },
    {
        question: "What type of symmetry do most sponges exhibit?",
        answers: [
            { text: "Radial symmetry", correct: true },
            { text: "Bilateral symmetry", correct: false },
            { text: "Asymmetry", correct: false },
            { text: "Pentamerous symmetry", correct: false },
        ]
    },
    {
        question: "Which cell type in sponges is responsible for capturing and digesting food particles?",
        answers: [
            { text: "Porocytes", correct: false },
            { text: "Choanocytes", correct: true },
            { text: "Archaeocytes", correct: false },
            { text: "Pinacocytes", correct: false },
        ]
    },
    {
        question: "What is the purpose of gemmules in sponges?",
        answers: [
            { text: "Asexual reproduction and survival during harsh conditions", correct: true },
            { text: "Sexual reproduction", correct: false },
            { text: "Structural support", correct: false },
            { text: "Creating water flow", correct: false },
        ]
    },
    {
        question: "What material are the spicules of Hexactinellida sponges primarily made of?",
        answers: [
            { text: "Calcium carbonate", correct: false },
            { text: "Silica", correct: true },
            { text: "Spongin", correct: false },
            { text: "Chitin", correct: false },
        ]
    },
    {
        question: "What is the function of the osculum in sponges?",
        answers: [
            { text: "To intake food particles", correct: false },
            { text: "To expel filtered water", correct: true },
            { text: "To secrete digestive enzymes", correct: false },
            { text: "To anchor the sponge", correct: false },
        ]
    },
    {
        question: "How do sponges avoid predation?",
        answers: [
            { text: "Camouflage", correct: false },
            { text: "Chemical defenses", correct: true },
            { text: "Fast movement", correct: false },
            { text: "Hiding in burrows", correct: false },
        ]
    },
    {
        question: "Which class of sponges is known for having spicules with a star-like appearance?",
        answers: [
            { text: "Hexactinellida", correct: false },
            { text: "Calcarea", correct: false },
            { text: "Demospongiae", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which cells in sponges are responsible for producing gametes?",
        answers: [
            { text: "Choanocytes", correct: false },
            { text: "Amoebocytes", correct: true },
            { text: "Pinacocytes", correct: false },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "Which environment is least likely to contain sponges?",
        answers: [
            { text: "Freshwater lakes", correct: false },
            { text: "Marine reefs", correct: false },
            { text: "Deep sea floors", correct: false },
            { text: "Deserts", correct: true },
        ]
    },
    {
        question: "What kind of feeders are sponges primarily?",
        answers: [
            { text: "Filter feeders", correct: true },
            { text: "Predators", correct: false },
            { text: "Parasitic feeders", correct: false },
            { text: "Scavengers", correct: false },
        ]
    },
    {
        question: "Which sponge class includes species used commercially as bath sponges?",
        answers: [
            { text: "Calcarea", correct: false },
            { text: "Hexactinellida", correct: false },
            { text: "Demospongiae", correct: true },
            { text: "Homorhaphidae", correct: false },
        ]
    },
    {
        question: "What distinguishes sponges from other invertebrates?",
        answers: [
            { text: "They are motile", correct: false },
            { text: "They lack true tissues and organs", correct: true },
            { text: "They have a complex nervous system", correct: false },
            { text: "They possess a notochord", correct: false },
        ]
    },
    {
        question: "Which of the following statements is true about sponges?",
        answers: [
            { text: "They have a digestive tract", correct: false },
            { text: "They are hermaphrodites", correct: true },
            { text: "They have a closed circulatory system", correct: false },
            { text: "They are photosynthetic", correct: false },
        ]
    },
    {
        question: "What is the role of ostia in sponges?",
        answers: [
            { text: "Expelling water", correct: false },
            { text: "Intaking water", correct: true },
            { text: "Secreting enzymes", correct: false },
            { text: "Producing spicules", correct: false },
        ]
    },
    
    
 
    {
        question: "What is the main feature of the Syconoid body plan in sponges?",
        answers: [
            { text: "Simplest structure with a single large cavity", correct: false },
            { text: "Folded body wall forming canals", correct: true },
            { text: "Complex canal system", correct: false },
            { text: "Presence of multiple oscula", correct: false },
        ]
    },
    {
        question: "Which class of sponges is characterized by the absence of spicules?",
        answers: [
            { text: "Calcarea", correct: false },
            { text: "Hexactinellida", correct: false },
            { text: "Demospongiae", correct: true },
            { text: "Homorhaphidae", correct: false },
        ]
    },
    {
        question: "What is the central cavity of a sponge called?",
        answers: [
            { text: "Spongocoel", correct: true },
            { text: "Osculum", correct: false },
            { text: "Ostia", correct: false },
            { text: "Choanoderm", correct: false },
        ]
    },
    {
        question: "Which type of reproduction involves the formation of larvae in sponges?",
        answers: [
            { text: "Asexual reproduction", correct: false },
            { text: "Sexual reproduction", correct: true },
            { text: "Budding", correct: false },
            { text: "Fragmentation", correct: false },
        ]
    },
    {
        question: "How do choanocytes assist in sponge feeding?",
        answers: [
            { text: "By secreting enzymes", correct: false },
            { text: "By capturing and digesting food particles", correct: true },
            { text: "By providing structural support", correct: false },
            { text: "By creating water flow", correct: false },
        ]
    },
    {
        question: "What is the composition of spicules in the class Calcarea?",
        answers: [
            { text: "Calcium carbonate", correct: true },
            { text: "Silica", correct: false },
            { text: "Spongin", correct: false },
            { text: "Chitin", correct: false },
        ]
    },
    {
        question: "What distinguishes Hexactinellida sponges from other classes?",
        answers: [
            { text: "Presence of spongin", correct: false },
            { text: "Six-rayed siliceous spicules", correct: true },
            { text: "Absence of spicules", correct: false },
            { text: "Presence of calcium carbonate spicules", correct: false },
        ]
    },
    {
        question: "Which structure in sponges is used for filtering food from water?",
        answers: [
            { text: "Osculum", correct: false },
            { text: "Ostia", correct: false },
            { text: "Choanocytes", correct: true },
            { text: "Amoebocytes", correct: false },
        ]
    },
    {
        question: "Which sponge cells have the ability to transform into other cell types?",
        answers: [
            { text: "Pinacocytes", correct: false },
            { text: "Choanocytes", correct: false },
            { text: "Archaeocytes", correct: true },
            { text: "Porocytes", correct: false },
        ]
    },
    {
        question: "What is the function of the mesohyl in sponges?",
        answers: [
            { text: "Capturing food particles", correct: false },
            { text: "Providing a gelatinous matrix", correct: true },
            { text: "Expelling water", correct: false },
            { text: "Secreting digestive enzymes", correct: false },
        ]
    },
    {
        question: "What is the main advantage of the Leuconoid body plan in sponges?",
        answers: [
            { text: "Increased surface area for filter feeding", correct: true },
            { text: "Simpler structure", correct: false },
            { text: "More efficient water flow", correct: false },
            { text: "Presence of a single osculum", correct: false },
        ]
    },
    {
        question: "What type of skeletal elements do Demospongiae sponges have?",
        answers: [
            { text: "Calcium carbonate spicules", correct: false },
            { text: "Siliceous spicules and spongin fibers", correct: true },
            { text: "Only spongin fibers", correct: false },
            { text: "Only siliceous spicules", correct: false },
        ]
    },
    {
        question: "Which layer of cells forms the outer covering of a sponge?",
        answers: [
            { text: "Pinacoderm", correct: true },
            { text: "Choanoderm", correct: false },
            { text: "Mesohyl", correct: false },
            { text: "Spongocoel", correct: false },
        ]
    },
    {
        question: "What term describes sponges' ability to absorb large amounts of water?",
        answers: [
            { text: "Permeability", correct: false },
            { text: "Porosity", correct: true },
            { text: "Absorbency", correct: false },
            { text: "Hydrostatic capacity", correct: false },
        ]
    },
    {
        question: "How do sponges contribute to nutrient cycles in marine ecosystems?",
        answers: [
            { text: "By fixing nitrogen", correct: false },
            { text: "By filtering and recycling organic matter", correct: true },
            { text: "By photosynthesis", correct: false },
            { text: "By preying on fish", correct: false },
        ]
    },
    {
        question: "What type of symmetry is most common in Porifera?",
        answers: [
            { text: "Bilateral symmetry", correct: false },
            { text: "Radial symmetry", correct: false },
            { text: "No symmetry (asymmetrical)", correct: true },
            { text: "Pentamerous symmetry", correct: false },
        ]
    },
    {
        question: "Which sponge structure allows water to enter the body?",
        answers: [
            { text: "Osculum", correct: false },
            { text: "Ostia", correct: true },
            { text: "Spongocoel", correct: false },
            { text: "Mesohyl", correct: false },
        ]
    },
    {
        question: "What process allows sponges to regenerate lost parts?",
        answers: [
            { text: "Fission", correct: false },
            { text: "Fragmentation", correct: true },
            { text: "Budding", correct: false },
            { text: "Spore formation", correct: false },
        ]
    },
    {
        question: "What feature is unique to Hexactinellid sponges compared to other sponges?",
        answers: [
            { text: "Spicules made of calcium carbonate", correct: false },
            { text: "Glass-like silica spicules", correct: true },
            { text: "Lack of a skeleton", correct: false },
            { text: "Presence of spongin", correct: false },
        ]
    },
    {
        question: "Which type of cells in sponges create water currents for feeding and respiration?",
        answers: [
            { text: "Pinacocytes", correct: false },
            { text: "Choanocytes", correct: true },
            { text: "Amoebocytes", correct: false },
            { text: "Porocytes", correct: false },
        ]
    }
];