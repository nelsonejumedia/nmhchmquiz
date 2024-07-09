const questions = [
    {
        question: "How do viruses exist outside the host?",
        answers: [
            { text: "As living organisms", correct: false },
            { text: "As non-living crystals", correct: true },
            { text: "As bacteria", correct: false },
            { text: "As fungi", correct: false },
        ]
    },
    {
        question: "What is the protein coat of a virus called?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Capsid", correct: true },
            { text: "Cell wall", correct: false },
            { text: "Membrane", correct: false },
        ]
    },
    {
        question: "Which type of nucleic acid can viruses have?",
        answers: [
            { text: "Only DNA", correct: false },
            { text: "Only RNA", correct: false },
            { text: "DNA or RNA", correct: true },
            { text: "Both DNA and RNA", correct: false },
        ]
    },
    {
        question: "What ensures that a virus causes infection in a specific manner?",
        answers: [
            { text: "Capsid", correct: true },
            { text: "Cell wall", correct: false },
            { text: "Nucleus", correct: false },
            { text: "Cytoplasm", correct: false },
        ]
    },
    {
        question: "What is the size range of viruses?",
        answers: [
            { text: "2nm to 300nm", correct: true },
            { text: "2nm to 200nm", correct: false },
            { text: "20nm to 300nm", correct: false },
            { text: "20nm to 200nm", correct: false },
        ]
    },
    {
        question: "What is TMV?",
        answers: [
            { text: "Tomato Mosaic Virus", correct: false },
            { text: "Tobacco Mosaic Virus", correct: true },
            { text: "Tomato Spotted Wilt Virus", correct: false },
            { text: "Tobacco Spotted Wilt Virus", correct: false },
        ]
    },
    {
        question: "What type of nucleic acid do most plant viruses have?",
        answers: [
            { text: "DNA", correct: false },
            { text: "RNA", correct: true },
            { text: "Both DNA and RNA", correct: false },
            { text: "Neither DNA nor RNA", correct: false },
        ]
    },
    {
        question: "Who started the study of viruses?",
        answers: [
            { text: "Louis Pasteur", correct: false },
            { text: "Alexander Fleming", correct: false },
            { text: "Dmitri Ivanovsky", correct: true },
            { text: "Robert Koch", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a type of virus?",
        answers: [
            { text: "Plant Virus", correct: false },
            { text: "Animal Virus", correct: false },
            { text: "Microphages", correct: false },
            { text: "Protozoa Virus", correct: true },
        ]
    },
    {
        question: "What is the purpose of viral vaccines?",
        answers: [
            { text: "To treat viral infections", correct: false },
            { text: "To utilize the immune response to prevent viral diseases", correct: true },
            { text: "To kill viruses in the body", correct: false },
            { text: "To provide nutrition", correct: false },
        ]
    },
    {
        question: "What is the main function of chloroplasts in plant cells?",
        answers: [
            { text: "Photosynthesis", correct: true },
            { text: "Respiration", correct: false },
            { text: "Protein synthesis", correct: false },
            { text: "DNA replication", correct: false },
        ]
    },
    {
        question: "Which kingdom do bacteria belong to?",
        answers: [
            { text: "Monera", correct: true },
            { text: "Protista", correct: false },
            { text: "Fungi", correct: false },
            { text: "Plantae", correct: false },
        ]
    },
    {
        question: "What shape are Bacilli bacteria?",
        answers: [
            { text: "Spherical", correct: false },
            { text: "Rod-like", correct: true },
            { text: "Spiral", correct: false },
            { text: "Comma-shaped", correct: false },
        ]
    },
    {
        question: "What type of reproduction involves the fusion of similar gametes?",
        answers: [
            { text: "Plasmogamy", correct: false },
            { text: "Karyogamy", correct: false },
            { text: "Isogamy", correct: true },
            { text: "Conjugation", correct: false },
        ]
    },
    {
        question: "What is the study of fungi called?",
        answers: [
            { text: "Mycology", correct: true },
            { text: "Virology", correct: false },
            { text: "Bacteriology", correct: false },
            { text: "Entomology", correct: false },
        ]
    },
    {
        question: "What type of symmetry do sponges exhibit?",
        answers: [
            { text: "Radial symmetry", correct: false },
            { text: "Bilateral symmetry", correct: false },
            { text: "Asymmetry", correct: true },
            { text: "Spherical symmetry", correct: false },
        ]
    },
    {
        question: "What phylum is known as sponges?",
        answers: [
            { text: "Coelenterata", correct: false },
            { text: "Mollusca", correct: false },
            { text: "Porifera", correct: true },
            { text: "Annelida", correct: false },
        ]
    },
    {
        question: "What is the common name for phylum Mollusca?",
        answers: [
            { text: "Sponges", correct: false },
            { text: "Segmented worms", correct: false },
            { text: "Jellyfish", correct: false },
            { text: "Snails and clams", correct: true },
        ]
    },
    {
        question: "Which of the following animals have a four-chambered heart?",
        answers: [
            { text: "Fish", correct: false },
            { text: "Amphibians", correct: false },
            { text: "Birds", correct: true },
            { text: "Reptiles", correct: false },
        ]
    },
    {
        question: "What is the function of chloragogen cells in animals?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Synthesis of glycogen and fat", correct: true },
            { text: "Photosynthesis", correct: false },
            { text: "Protein synthesis", correct: false },
        ]
    },
    
    
    
   
    {
        question: "What is the shape of Treponema Pallidum bacteria?",
        answers: [
            { text: "Rod-like", correct: false },
            { text: "Spherical", correct: false },
            { text: "Spiral", correct: true },
            { text: "Comma-shaped", correct: false },
        ]
    },
    {
        question: "Which type of bacteria is known for nitrogen fixation?",
        answers: [
            { text: "Eubacteria", correct: false },
            { text: "Chemoautotrophs", correct: true },
            { text: "Photoautotrophs", correct: false },
            { text: "Photoheterotrophs", correct: false },
        ]
    },
    {
        question: "Which of the following is a photoautotroph?",
        answers: [
            { text: "Nitrosomonas", correct: false },
            { text: "Nitrobacter", correct: false },
            { text: "Cyanobacteria", correct: true },
            { text: "Methanogens", correct: false },
        ]
    },
    {
        question: "What is a characteristic of ground positive bacteria?",
        answers: [
            { text: "They do not retain ground stain", correct: false },
            { text: "They retain ground stain", correct: true },
            { text: "They are salt-loving", correct: false },
            { text: "They exist in extreme conditions", correct: false },
        ]
    },
    {
        question: "What is the common name for bracket fungi?",
        answers: [
            { text: "Mushrooms", correct: false },
            { text: "Puffballs", correct: false },
            { text: "Toadstools", correct: false },
            { text: "Club fungi", correct: true },
        ]
    },
    {
        question: "What is the name of the mass of hyphae in fungi?",
        answers: [
            { text: "Spore", correct: false },
            { text: "Mycelium", correct: true },
            { text: "Capsid", correct: false },
            { text: "Basidium", correct: false },
        ]
    },
    {
        question: "What type of mycelium do Deuteromycetes have?",
        answers: [
            { text: "Septate and branched", correct: false},
            { text: "Aseptate and coenocytic", correct: false },
            { text: "Septate and acoenocytic", correct: false },
            { text: "Aseptate and branched", correct: true},
        ]
    },
    {
        question: "Which process involves karyogamy and meiosis in fungi?",
        answers: [
            { text: "Vegetative reproduction", correct: false },
            { text: "Asexual reproduction", correct: false },
            { text: "Sexual reproduction", correct: true },
            { text: "Sporulation", correct: false },
        ]
    },
    {
        question: "Which kingdom does the study of mycology focus on?",
        answers: [
            { text: "Animalia", correct: false },
            { text: "Plantae", correct: false },
            { text: "Fungi", correct: true },
            { text: "Protista", correct: false },
        ]
    },
    {
        question: "What is cephalization associated with?",
        answers: [
            { text: "Coelomates", correct: false },
            { text: "Radial symmetry", correct: false },
            { text: "Platyhelminthes", correct: true },
            { text: "Porifera", correct: false },
        ]
    },
    {
        question: "What is the term for the innermost germ layer?",
        answers: [
            { text: "Ectoderm", correct: false },
            { text: "Mesoderm", correct: false },
            { text: "Endoderm", correct: true },
            { text: "Periderm", correct: false },
        ]
    },
    {
        question: "Which organisms have a tracheal system for respiration?",
        answers: [
            { text: "Fish", correct: false },
            { text: "Mammals", correct: false },
            { text: "Insects", correct: true },
            { text: "Birds", correct: false },
        ]
    },
    {
        question: "Which animal group has a three-chambered heart?",
        answers: [
            { text: "Fish", correct: false },
            { text: "Amphibians", correct: true },
            { text: "Birds", correct: false },
            { text: "Mammals", correct: false },
        ]
    },
    {
        question: "What is the primary function of goblet cells in the stomach?",
        answers: [
            { text: "Secrete mucus", correct: true },
            { text: "Secrete pepsinogen", correct: false },
            { text: "Secrete hydrochloric acid", correct: false },
            { text: "Absorb nutrients", correct: false },
        ]
    },
    {
        question: "What is the function of incisor teeth?",
        answers: [
            { text: "Grinding and crushing", correct: false },
            { text: "Tearing and piercing", correct: false },
            { text: "Cutting and biting", correct: true },
            { text: "Seizing", correct: false },
        ]
    },
    {
        question: "Which region of the alimentary canal is responsible for grinding and early digestion?",
        answers: [
            { text: "Reception", correct: false },
            { text: "Conduction and storage", correct: false },
            { text: "Grinding and early digestion", correct: true },
            { text: "Terminal digestion and absorption", correct: false },
        ]
    },
    {
        question: "Which hormone provides a feeling of satiety and regulates appetite?",
        answers: [
            { text: "Gastrin", correct: false },
            { text: "Insulin", correct: false },
            { text: "Cholecystokinin (CCK)", correct: true },
            { text: "Glucagon", correct: false },
        ]
    },
    {
        question: "What type of structural adaptation do elephants have?",
        answers: [
            { text: "Long neck", correct: false },
            { text: "Large ears", correct: true },
            { text: "White fur", correct: false },
            { text: "Blubber", correct: false },
        ]
    },
    {
        question: "What physiological adaptation allows snakes to subdue their prey?",
        answers: [
            { text: "Chromatophores", correct: false },
            { text: "HCL Production", correct: false },
            { text: "Venom production", correct: true },
            { text: "Long neck", correct: false },
        ]
    },
    {
        question: "What is the color of ground stain used in bacterial classification?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: true },
            { text: "Green", correct: false },
            { text: "Yellow", correct: false },
        ]
    },

    
    
    
    
    
    
    
    {
        question: "Which type of virus infects bacteria?",
        answers: [
            { text: "Plant Virus", correct: false },
            { text: "Animal Virus", correct: false },
            { text: "Bacteriophages", correct: true },
            { text: "Cyanophages", correct: false },
        ]
    },
    {
        question: "What type of nucleic acid do T2, T4, and T6 bacteriophages contain?",
        answers: [
            { text: "RNA", correct: false },
            { text: "DNA", correct: true },
            { text: "Both DNA and RNA", correct: false },
            { text: "Neither DNA nor RNA", correct: false },
        ]
    },
    {
        question: "Which scientist is known for starting the study of viruses?",
        answers: [
            { text: "Irahowsky", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Robert Koch", correct: false },
            { text: "Alexander Fleming", correct: false },
        ]
    },
    {
        question: "Which virus is an exception among plant viruses for having DNA instead of RNA?",
        answers: [
            { text: "Tobacco Mosaic Virus", correct: false },
            { text: "Cauliflower Mosaic Virus", correct: true },
            { text: "Spotted Wilt of Tomato", correct: false },
            { text: "Entomo-poxvavirus", correct: false },
        ]
    },
    {
        question: "What are the three membrane-bound organelles found in plant cells?",
        answers: [
            { text: "Chloroplasts, Mitochondria, Nucleus", correct: true },
            { text: "Ribosomes, Mitochondria, Nucleus", correct: false },
            { text: "Chloroplasts, Ribosomes, Nucleus", correct: false },
            { text: "Chloroplasts, Mitochondria, Ribosomes", correct: false },
        ]
    },
    {
        question: "What is the primary characteristic of Archaebacteria?",
        answers: [
            { text: "They produce methanogens and exist in extreme conditions", correct: true },
            { text: "They are photoautotrophs", correct: false },
            { text: "They are known for nitrogen fixation", correct: false },
            { text: "They are decomposers", correct: false },
        ]
    },
    {
        question: "What shape are Cocci bacteria?",
        answers: [
            { text: "Rod-like", correct: false },
            { text: "Spherical", correct: true },
            { text: "Spiral", correct: false },
            { text: "Comma-shaped", correct: false },
        ]
    },
    {
        question: "Which kingdom does Aspergillus belong to?",
        answers: [
            { text: "Monera", correct: false },
            { text: "Protista", correct: false },
            { text: "Fungi", correct: true },
            { text: "Plantae", correct: false },
        ]
    },
    {
        question: "What type of reproduction is fragmentation in fungi?",
        answers: [
            { text: "Sexual reproduction", correct: false },
            { text: "Asexual reproduction", correct: false },
            { text: "Vegetative reproduction", correct: true },
            { text: "Sporulation", correct: false },
        ]
    },
    {
        question: "What type of spores do Basidiomycetes produce?",
        answers: [
            { text: "Conidiospores", correct: false },
            { text: "Sporangiospores", correct: false },
            { text: "Basidiospores", correct: true },
            { text: "Zygospores", correct: false },
        ]
    },
    {
        question: "What is the largest phylum in the animal kingdom in terms of species?",
        answers: [
            { text: "Chordata", correct: false },
            { text: "Mollusca", correct: false },
            { text: "Arthropoda", correct: true },
            { text: "Annelida", correct: false },
        ]
    },
    {
        question: "What type of symmetry do Echinodermata exhibit?",
        answers: [
            { text: "Bilateral symmetry", correct: false },
            { text: "Radial symmetry", correct: true },
            { text: "Asymmetry", correct: false },
            { text: "Spherical symmetry", correct: false },
        ]
    },
    {
        question: "What is another term for the coelom in animals?",
        answers: [
            { text: "Cavity", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Cytoplasm", correct: false },
            { text: "Membrane", correct: false },
        ]
    },
    {
        question: "What process in plants involves the alternation of haploid and diploid phases?",
        answers: [
            { text: "Photosynthesis", correct: false },
            { text: "Respiration", correct: false },
            { text: "Alternation of generation", correct: true },
            { text: "Transpiration", correct: false },
        ]
    },
    {
        question: "How many ATP molecules are produced from the oxidation of one glucose molecule?",
        answers: [
            { text: "32", correct: false },
            { text: "36", correct: true },
            { text: "38", correct: false },
            { text: "34", correct: false },
        ]
    },
    {
        question: "What is the primary function of the respiratory system in fish?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Gills", correct: true },
            { text: "Tracheal system", correct: false },
            { text: "Skin", correct: false },
        ]
    },
    {
        question: "What is the function of peristalsis in the digestive system?",
        answers: [
            { text: "To mix food", correct: false },
            { text: "To move food through the gut", correct: true },
            { text: "To digest food", correct: false },
            { text: "To absorb nutrients", correct: false },
        ]
    },
    {
        question: "What is the primary component of saliva that helps in the digestion of carbohydrates?",
        answers: [
            { text: "Pepsin", correct: false },
            { text: "Amylase", correct: true },
            { text: "Lipase", correct: false },
            { text: "Protease", correct: false },
        ]
    },
    {
        question: "Which hormone is similar to cholecystokinin (CCK) in function?",
        answers: [
            { text: "Insulin", correct: false },
            { text: "Glucagon", correct: false },
            { text: "Gastrin", correct: true },
            { text: "Thyroxine", correct: false },
        ]
    },
    {
        question: "Which structural adaptation allows chameleons to change color?",
        answers: [
            { text: "Long neck", correct: false },
            { text: "Large ears", correct: false },
            { text: "Chromatophores", correct: true },
            { text: "Blubber", correct: false },
        ]
    },
    
    
    
    
    
    
    
    
   
    {
        question: "Which kingdom does Mucor belong to?",
        answers: [
            { text: "Monera", correct: false },
            { text: "Protista", correct: false },
            { text: "Fungi", correct: true },
            { text: "Plantae", correct: false },
        ]
    },
    {
        question: "What is the common name for phylum Porifera?",
        answers: [
            { text: "Sponges", correct: true },
            { text: "Jellyfish", correct: false },
            { text: "Worms", correct: false },
            { text: "Mollusks", correct: false },
        ]
    },
    {
        question: "Which type of bacteria is known for producing methanogens?",
        answers: [
            { text: "Eubacteria", correct: false },
            { text: "Archaebacteria", correct: true },
            { text: "Cyanobacteria", correct: false },
            { text: "Proteobacteria", correct: false },
        ]
    },
    {
        question: "Which form of fungi reproduction involves plasmogamy?",
        answers: [
            { text: "Vegetative reproduction", correct: false },
            { text: "Asexual reproduction", correct: false },
            { text: "Sexual reproduction", correct: true },
            { text: "Sporulation", correct: false },
        ]
    },
    {
        question: "Which phylum includes segmented worms?",
        answers: [
            { text: "Nematoda", correct: false },
            { text: "Annelida", correct: true },
            { text: "Platyhelminthes", correct: false },
            { text: "Cnidaria", correct: false },
        ]
    },
    {
        question: "What is the purpose of viral vaccines?",
        answers: [
            { text: "To kill viruses directly", correct: false },
            { text: "To utilize the immune response of the host", correct: true },
            { text: "To alter viral DNA", correct: false },
            { text: "To increase the size of viruses", correct: false },
        ]
    },
    {
        question: "What are cyanophages known for infecting?",
        answers: [
            { text: "Bacteria", correct: false },
            { text: "Algae", correct: true },
            { text: "Fungi", correct: false },
            { text: "Plants", correct: false },
        ]
    },
    {
        question: "What is the role of chief cells in the stomach?",
        answers: [
            { text: "Secrete mucus", correct: false },
            { text: "Secrete pepsinogen", correct: true },
            { text: "Secrete hydrochloric acid", correct: false },
            { text: "Absorb nutrients", correct: false },
        ]
    },
    {
        question: "Which phylum is known as the most complex in the animal kingdom?",
        answers: [
            { text: "Arthropoda", correct: false },
            { text: "Mollusca", correct: false },
            { text: "Chordata", correct: true },
            { text: "Annelida", correct: false },
        ]
    },
    {
        question: "What is the shape of Bacillus Anthracis bacteria?",
        answers: [
            { text: "Rod-like", correct: true },
            { text: "Spherical", correct: false },
            { text: "Spiral", correct: false },
            { text: "Comma-shaped", correct: false },
        ]
    },
    {
        question: "Which type of fungi is also known as 'club fungi'?",
        answers: [
            { text: "Phycomycetes", correct: false },
            { text: "Ascomycetes", correct: false },
            { text: "Basidiomycetes", correct: true },
            { text: "Deuteromycetes", correct: false },
        ]
    },
    {
        question: "What is the primary function of the chloragogen cells in annelids?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Digestion", correct: false },
            { text: "Synthesis of glycogen and fat", correct: true },
            { text: "Reproduction", correct: false },
        ]
    },
    {
        question: "Which adaptation helps polar bears insulate against cold temperatures?",
        answers: [
            { text: "Blubber", correct: false },
            { text: "Chromatophores", correct: false },
            { text: "White fur", correct: true },
            { text: "Large ears", correct: false },
        ]
    },
    {
        question: "What type of teeth are used for grinding and crushing food?",
        answers: [
            { text: "Incisors", correct: false },
            { text: "Canines", correct: false },
            { text: "Premolars and molars", correct: true },
            { text: "Bicuspids", correct: false },
        ]
    },
    {
        question: "Which part of the alimentary canal is responsible for water absorption?",
        answers: [
            { text: "Reception", correct: false },
            { text: "Conduction and storage", correct: false },
            { text: "Grinding and early digestion", correct: false },
            { text: "Water absorption and concentration of solids", correct: true },
        ]
    },
    {
        question: "What type of bacteria does not retain the ground stain?",
        answers: [
            { text: "Ground positive bacteria", correct: false },
            { text: "Ground negative bacteria", correct: true },
            { text: "Methanogens", correct: false },
            { text: "Chemoautotrophs", correct: false },
        ]
    },
    {
        question: "What is the main role of the lungs in respiration?",
        answers: [
            { text: "To produce ATP", correct: false },
            { text: "To exchange gases", correct: true },
            { text: "To digest food", correct: false },
            { text: "To circulate blood", correct: false },
        ]
    },
    {
        question: "Which kingdom is divided based on their mode of nutrition?",
        answers: [
            { text: "Plantae", correct: false },
            { text: "Animalia", correct: false },
            { text: "Monera", correct: true },
            { text: "Protista", correct: false },
        ]
    },
    {
        question: "Which animal has bilateral symmetry?",
        answers: [
            { text: "Starfish", correct: false },
            { text: "Jellyfish", correct: false },
            { text: "Lion", correct: true },
            { text: "Sponge", correct: false },
        ]
    },
    {
        question: "What is the study of fungi called?",
        answers: [
            { text: "Botany", correct: false },
            { text: "Zoology", correct: false },
            { text: "Mycology", correct: true },
            { text: "Microbiology", correct: false },
        ]
    },







    {
        question: "What is the primary nucleic acid found in most plant viruses?",
        answers: [
            { text: "DNA", correct: false },
            { text: "RNA", correct: true },
            { text: "Both DNA and RNA", correct: false },
            { text: "Neither DNA nor RNA", correct: false },
        ]
    },
    {
        question: "What is the purpose of the protein coat (capsid) in a virus?",
        answers: [
            { text: "To store nutrients", correct: false },
            { text: "To protect the viral genome and ensure specific infection", correct: true },
            { text: "To assist in viral movement", correct: false },
            { text: "To enable photosynthesis", correct: false },
        ]
    },
    {
        question: "Which bacterium is rod-shaped?",
        answers: [
            { text: "Staphylococcus aureus", correct: false },
            { text: "Bacillus anthracis", correct: true },
            { text: "Treponema pallidum", correct: false },
            { text: "Vibrio cholerae", correct: false },
        ]
    },
    {
        question: "Which organism is known for nitrogen fixation in soil?",
        answers: [
            { text: "Nitrosomonas", correct: true },
            { text: "Escherichia coli", correct: false },
            { text: "Clostridium", correct: false },
            { text: "Lactobacillus", correct: false },
        ]
    },
    {
        question: "Which type of bacteria are photoautotrophs?",
        answers: [
            { text: "Cyanobacteria", correct: true },
            { text: "Nitrobacter", correct: false },
            { text: "Halobacteria", correct: false },
            { text: "Thermoacidophiles", correct: false },
        ]
    },
    {
        question: "What is the function of the nucleus in a cell?",
        answers: [
            { text: "Energy production", correct: false },
            { text: "Photosynthesis", correct: false },
            { text: "Housing genetic material and controlling cell activities", correct: true },
            { text: "Protein synthesis", correct: false },
        ]
    },
    {
        question: "What is the structural form of fungi that can be either septate or aseptate?",
        answers: [
            { text: "Mycelium", correct: true },
            { text: "Conidiosphore", correct: false },
            { text: "Basidiosphore", correct: false },
            { text: "Zygospore", correct: false },
        ]
    },
    {
        question: "Which fungi are known as 'fungi imperfecti'?",
        answers: [
            { text: "Ascomycetes", correct: false },
            { text: "Phycomycetes", correct: false },
            { text: "Deuteromycetes", correct: true },
            { text: "Basidiomycetes", correct: false },
        ]
    },
    {
        question: "Which class of fungi includes mushrooms?",
        answers: [
            { text: "Ascomycetes", correct: false },
            { text: "Phycomycetes", correct: false },
            { text: "Basidiomycetes", correct: true },
            { text: "Deuteromycetes", correct: false },
        ]
    },
    {
        question: "Which animal is an example of a chordate?",
        answers: [
            { text: "Earthworm", correct: false },
            { text: "Jellyfish", correct: false },
            { text: "Lion", correct: true },
            { text: "Starfish", correct: false },
        ]
    },
    {
        question: "Which organelles are involved in cellular respiration?",
        answers: [
            { text: "Chloroplasts", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosomes", correct: false },
            { text: "Nuclei", correct: false },
        ]
    },
    {
        question: "What is a unique feature of members of the phylum Echinodermata?",
        answers: [
            { text: "Radial symmetry", correct: true },
            { text: "Bilateral symmetry", correct: false },
            { text: "Asymmetry", correct: false },
            { text: "No symmetry", correct: false },
        ]
    },
    {
        question: "What is the primary function of the circulatory system?",
        answers: [
            { text: "Produce energy", correct: false },
            { text: "Transport nutrients, gases, and waste products", correct: true },
            { text: "Control growth", correct: false },
            { text: "Perform photosynthesis", correct: false },
        ]
    },
    {
        question: "What is the shape of Treponema pallidum bacteria?",
        answers: [
            { text: "Rod-like", correct: false },
            { text: "Spherical", correct: false },
            { text: "Spiral", correct: true },
            { text: "Comma-shaped", correct: false },
        ]
    },
    {
        question: "What is the function of the gills in fish?",
        answers: [
            { text: "To digest food", correct: false },
            { text: "To exchange gases", correct: true },
            { text: "To pump blood", correct: false },
            { text: "To store fat", correct: false },
        ]
    },
    {
        question: "Which bacteria do not retain the Gram stain?",
        answers: [
            { text: "Gram-positive bacteria", correct: false },
            { text: "Gram-negative bacteria", correct: true },
            { text: "Acid-fast bacteria", correct: false },
            { text: "Methanogens", correct: false },
        ]
    },
    {
        question: "What is the scientific study of viruses called?",
        answers: [
            { text: "Bacteriology", correct: false },
            { text: "Virology", correct: true },
            { text: "Mycology", correct: false },
            { text: "Parasitology", correct: false },
        ]
    },
    {
        question: "Which fungi form is macroscopic?",
        answers: [
            { text: "Candida", correct: false },
            { text: "Aspergillus", correct: false },
            { text: "Mushroom", correct: true },
            { text: "Rhizopus", correct: false },
        ]
    },
    {
        question: "Which organelle is known as the 'powerhouse of the cell'?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Endoplasmic reticulum", correct: false },
        ]
    },
    {
        question: "What type of organism is Aspergillus?",
        answers: [
            { text: "Bacterium", correct: false },
            { text: "Fungus", correct: true },
            { text: "Alga", correct: false },
            { text: "Plant", correct: false },
        ]
    }


    
];