const questions = [
    {
        question: "What is the body shape of nematodes?",
        answers: [
            { text: "Segmented and cylindrical", correct: false },
            { text: "Vermiform, round, and cylindrical", correct: true },
            { text: "Flat and segmented", correct: false },
            { text: "Spherical and segmented", correct: false },
        ]
    },
    {
        question: "What kind of body symmetry do nematodes have?",
        answers: [
            { text: "Radial", correct: false },
            { text: "Bilateral", correct: true },
            { text: "Asymmetrical", correct: false },
            { text: "Spiral", correct: false },
        ]
    },
    {
        question: "How many germ layers do nematodes possess?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: false },
            { text: "Three", correct: true },
            { text: "Four", correct: false },
        ]
    },
    {
        question: "What type of body plan do nematodes exhibit?",
        answers: [
            { text: "Tube-within-a-tube", correct: true },
            { text: "Coelomate", correct: false },
            { text: "Acoelomate", correct: false },
            { text: "Radial symmetry", correct: false },
        ]
    },
    {
        question: "How do nematodes move?",
        answers: [
            { text: "By means of longitudinal and circular muscles", correct: false },
            { text: "By means of longitudinal muscles only", correct: true },
            { text: "By means of cilia", correct: false },
            { text: "By means of flagella", correct: false },
        ]
    },
    {
        question: "What kind of cuticle covers the body of nematodes?",
        answers: [
            { text: "A thin, flexible cuticle", correct: false },
            { text: "A thickened cuticle", correct: true },
            { text: "A segmented cuticle", correct: false },
            { text: "A spiny cuticle", correct: false },
        ]
    },
    {
        question: "What type of digestive system do nematodes have?",
        answers: [
            { text: "Incomplete", correct: false },
            { text: "Simple but complete", correct: true },
            { text: "Complex and segmented", correct: false },
            { text: "Rudimentary", correct: false },
        ]
    },
    {
        question: "What constitutes the nervous system of nematodes?",
        answers: [
            { text: "A dorsal nerve cord only", correct: false },
            { text: "A ring of nerve tissue around the pharynx and two nerve cords", correct: true },
            { text: "A ventral nerve cord only", correct: false },
            { text: "A brain and a spinal cord", correct: false },
        ]
    },
    {
        question: "How is excretion carried out in nematodes?",
        answers: [
            { text: "Through nephridia", correct: false },
            { text: "Through two canals located in a lateral line", correct: true },
            { text: "Through Malpighian tubules", correct: false },
            { text: "Through flame cells", correct: false },
        ]
    },
    {
        question: "What type of circulatory system do nematodes have?",
        answers: [
            { text: "Open circulatory system", correct: false },
            { text: "Closed circulatory system", correct: false },
            { text: "No circulatory system", correct: true },
            { text: "Partial circulatory system", correct: false },
        ]
    },
    {
        question: "What is the mode of respiration in nematodes?",
        answers: [
            { text: "Through gills", correct: false },
            { text: "Through lungs", correct: false },
            { text: "Through skin", correct: false },
            { text: "No respiratory organs", correct: true },
        ]
    },
    {
        question: "What is the characteristic feature of nematode reproduction?",
        answers: [
            { text: "Hermaphroditic with internal fertilization", correct: false },
            { text: "Separate sexes with internal fertilization", correct: true },
            { text: "Asexual reproduction", correct: false },
            { text: "External fertilization", correct: false },
        ]
    },
    {
        question: "What type of body cavity do nematodes possess?",
        answers: [
            { text: "Acoelom", correct: false },
            { text: "Coelom", correct: false },
            { text: "Pseudocoel", correct: true },
            { text: "Haemocoel", correct: false },
        ]
    },
    {
        question: "Which feature is NOT unique to the phylum Nematoda?",
        answers: [
            { text: "Amphids and phasmids", correct: false },
            { text: "Pseudocoel", correct: false },
            { text: "No segmentation", correct: true },
            { text: "Thick cuticle", correct: false },
        ]
    },
    {
        question: "What type of segmentation is found in annelids?",
        answers: [
            { text: "No segmentation", correct: false },
            { text: "Metameric segmentation", correct: true },
            { text: "Radial segmentation", correct: false },
            { text: "Spiral segmentation", correct: false },
        ]
    },
    {
        question: "What type of coelom do annelids have?",
        answers: [
            { text: "Acoelom", correct: false },
            { text: "Pseudocoel", correct: false },
            { text: "True coelom", correct: true },
            { text: "Haemocoel", correct: false },
        ]
    },
    {
        question: "What is the role of setae in annelids?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Locomotion in burrows", correct: true },
            { text: "Feeding", correct: false },
            { text: "Respiration", correct: false },
        ]
    },
    {
        question: "Which class of annelids includes earthworms?",
        answers: [
            { text: "Polychaeta", correct: false },
            { text: "Oligochaeta", correct: true },
            { text: "Hirudinea", correct: false },
            { text: "Errantia", correct: false },
        ]
    },
    {
        question: "What kind of circulatory system is found in annelids?",
        answers: [
            { text: "Open circulatory system", correct: false },
            { text: "Closed circulatory system", correct: true },
            { text: "No circulatory system", correct: false },
            { text: "Partial circulatory system", correct: false },
        ]
    },
    {
        question: "What is tagmatization in annelids?",
        answers: [
            { text: "The presence of setae", correct: false },
            { text: "Grouping of segments for specific functions", correct: true },
            { text: "Development of a true coelom", correct: false },
            { text: "Having a primitive segmentation", correct: false },
        ]
    },
    
    
    
  
    {
        question: "Which of the following is not a characteristic of nematodes?",
        answers: [
            { text: "Complete digestive system", correct: false },
            { text: "Lack of circular muscles", correct: false },
            { text: "Presence of respiratory organs", correct: true },
            { text: "Pseudocoel body cavity", correct: false },
        ]
    },
    {
        question: "What type of nervous system do annelids have?",
        answers: [
            { text: "Diffuse nerve net", correct: false },
            { text: "Centralized nerve ring", correct: false },
            { text: "Ventral nerve cord with segmental ganglia", correct: true },
            { text: "Dorsal nerve cord with no ganglia", correct: false },
        ]
    },
    {
        question: "Which order of nematodes lacks lips?",
        answers: [
            { text: "Rhabditida", correct: false },
            { text: "Strongylida", correct: true },
            { text: "Oxyurida", correct: false },
            { text: "Ascaridida", correct: false },
        ]
    },
    {
        question: "What type of reproduction is found in most annelids?",
        answers: [
            { text: "Asexual reproduction", correct: false },
            { text: "Hermaphroditism", correct: true },
            { text: "Parthenogenesis", correct: false },
            { text: "External fertilization", correct: false },
        ]
    },
    {
        question: "Which of the following is a characteristic feature of nematodes?",
        answers: [
            { text: "Segmented body", correct: false },
            { text: "Schizocoelous coelom", correct: false },
            { text: "Presence of amphids and phasmids", correct: true },
            { text: "Closed circulatory system", correct: false },
        ]
    },
    {
        question: "Which class of nematodes is characterized by the presence of phasmids?",
        answers: [
            { text: "Aphasmdia", correct: false },
            { text: "Phasmidia", correct: true },
            { text: "Monohysterida", correct: false },
            { text: "Camallanida", correct: false },
        ]
    },
    {
        question: "What is the function of setae in annelids?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Locomotion", correct: true },
            { text: "Reproduction", correct: false },
            { text: "Excretion", correct: false },
        ]
    },
    {
        question: "Which type of cleavage is found in annelids?",
        answers: [
            { text: "Radial and indeterminate", correct: false },
            { text: "Spiral and determinate", correct: true },
            { text: "Bilateral and determinate", correct: false },
            { text: "Asymmetric and indeterminate", correct: false },
        ]
    },
    {
        question: "How do nematodes move?",
        answers: [
            { text: "Using longitudinal and circular muscles", correct: false },
            { text: "Using longitudinal muscles only", correct: true },
            { text: "Using circular muscles only", correct: false },
            { text: "Using cilia", correct: false },
        ]
    },
    {
        question: "What is the body plan of annelids?",
        answers: [
            { text: "Tube-within-a-tube", correct: true },
            { text: "Solid body", correct: false },
            { text: "Segmented appendages", correct: false },
            { text: "Exoskeleton-covered", correct: false },
        ]
    },
    {
        question: "What type of circulatory system do annelids possess?",
        answers: [
            { text: "Open circulatory system", correct: false },
            { text: "Closed circulatory system", correct: true },
            { text: "No circulatory system", correct: false },
            { text: "Partially open circulatory system", correct: false },
        ]
    },
    {
        question: "Which of the following annelid groups is primarily marine?",
        answers: [
            { text: "Oligochaeta", correct: false },
            { text: "Hirudinea", correct: false },
            { text: "Polychaeta", correct: true },
            { text: "Nematoda", correct: false },
        ]
    },
    {
        question: "How do nematodes reproduce?",
        answers: [
            { text: "Asexually by budding", correct: false },
            { text: "Sexually with internal fertilization", correct: true },
            { text: "Sexually with external fertilization", correct: false },
            { text: "Parthenogenesis", correct: false },
        ]
    },
    {
        question: "What is the primary habitat for most Polychaeta?",
        answers: [
            { text: "Terrestrial", correct: false },
            { text: "Freshwater", correct: false },
            { text: "Marine", correct: true },
            { text: "Arboreal", correct: false },
        ]
    },
    {
        question: "What is the unique feature of nematode excretory system?",
        answers: [
            { text: "Malpighian tubules", correct: false },
            { text: "Nephridia", correct: false },
            { text: "Lateral excretory canals", correct: true },
            { text: "Flame cells", correct: false },
        ]
    },
    {
        question: "What type of development is common in nematodes?",
        answers: [
            { text: "Direct development", correct: false },
            { text: "Indirect development with larval stages", correct: true },
            { text: "Metamorphosis", correct: false },
            { text: "Asexual budding", correct: false },
        ]
    },
    {
        question: "Which organ system is absent in nematodes?",
        answers: [
            { text: "Digestive system", correct: false },
            { text: "Circulatory system", correct: true },
            { text: "Nervous system", correct: false },
            { text: "Excretory system", correct: false },
        ]
    },
    {
        question: "What is the main mode of nutrition in free-living nematodes?",
        answers: [
            { text: "Ingesting digested food", correct: false },
            { text: "Intra-intestinal digestion", correct: true },
            { text: "Absorbing nutrients through skin", correct: false },
            { text: "Photosynthesis", correct: false },
        ]
    },
    {
        question: "Which structure is used by annelids for gas exchange?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Gills or parapodia", correct: true },
            { text: "Tracheae", correct: false },
            { text: "Book lungs", correct: false },
        ]
    },
    {
        question: "Which class of nematodes has a spiral or disc-shaped amphid?",
        answers: [
            { text: "Phasmidia", correct: false },
            { text: "Aphasmdia", correct: true },
            { text: "Rhabditida", correct: false },
            { text: "Oxyurida", correct: false },
        ]
    },
    
    
    
  
    {
        question: "What type of body cavity do nematodes possess?",
        answers: [
            { text: "Coelom", correct: false },
            { text: "Pseudocoel", correct: true },
            { text: "Acoelom", correct: false },
            { text: "Schizocoel", correct: false },
        ]
    },
    {
        question: "What is a unique feature of nematodes?",
        answers: [
            { text: "Nephridia", correct: false },
            { text: "Amphids and phasmids", correct: true },
            { text: "Parapodia", correct: false },
            { text: "Gills", correct: false },
        ]
    },
    {
        question: "What is the level of organization in nematodes?",
        answers: [
            { text: "Cellular", correct: false },
            { text: "Tissue", correct: false },
            { text: "Organ", correct: true },
            { text: "System", correct: false },
        ]
    },
    {
        question: "Which system is absent in nematodes?",
        answers: [
            { text: "Respiratory system", correct: true },
            { text: "Digestive system", correct: false },
            { text: "Nervous system", correct: false },
            { text: "Excretory system", correct: false },
        ]
    },
    {
        question: "How do nematodes reproduce?",
        answers: [
            { text: "External fertilization", correct: false },
            { text: "Internal fertilization", correct: true },
            { text: "Asexual reproduction", correct: false },
            { text: "Budding", correct: false },
        ]
    },
    {
        question: "What kind of muscles do nematodes have?",
        answers: [
            { text: "Circular muscles", correct: false },
            { text: "Longitudinal muscles", correct: true },
            { text: "Diagonal muscles", correct: false },
            { text: "Radial muscles", correct: false },
        ]
    },
    {
        question: "What type of circulatory system do annelids possess?",
        answers: [
            { text: "Open circulatory system", correct: false },
            { text: "Closed circulatory system", correct: true },
            { text: "No circulatory system", correct: false },
            { text: "Mixed circulatory system", correct: false },
        ]
    },
    {
        question: "What is a common habitat for polychaetes?",
        answers: [
            { text: "Freshwater", correct: false },
            { text: "Marine environments", correct: true },
            { text: "Terrestrial soil", correct: false },
            { text: "Arid deserts", correct: false },
        ]
    },
    {
        question: "Which annelid class includes earthworms?",
        answers: [
            { text: "Polychaeta", correct: false },
            { text: "Hirudinea", correct: false },
            { text: "Oligochaeta", correct: true },
            { text: "Aphasmidia", correct: false },
        ]
    },
    {
        question: "What characteristic is typical of annelid locomotion?",
        answers: [
            { text: "Setae", correct: true },
            { text: "Cilia", correct: false },
            { text: "Flagella", correct: false },
            { text: "Pseudopodia", correct: false },
        ]
    },
    {
        question: "What type of nervous system do annelids have?",
        answers: [
            { text: "Diffused nerve net", correct: false },
            { text: "Ganglionated nerve cord", correct: true },
            { text: "Single nerve cord", correct: false },
            { text: "No nervous system", correct: false },
        ]
    },
    {
        question: "What is the primary function of the nephridia in annelids?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Circulation", correct: false },
            { text: "Excretion", correct: true },
            { text: "Reproduction", correct: false },
        ]
    },
    {
        question: "Which feature is characteristic of annelid body segmentation?",
        answers: [
            { text: "Tagmatization", correct: true },
            { text: "Metamorphosis", correct: false },
            { text: "Exoskeleton", correct: false },
            { text: "Spiral cleavage", correct: false },
        ]
    },
    {
        question: "What is the common mode of living for annelids?",
        answers: [
            { text: "Parasitic", correct: false },
            { text: "Free-living", correct: true },
            { text: "Commensal", correct: false },
            { text: "Symbiotic", correct: false },
        ]
    },
    {
        question: "How do annelids achieve respiration?",
        answers: [
            { text: "Through gills", correct: false },
            { text: "Through the skin", correct: true },
            { text: "Through lungs", correct: false },
            { text: "Through spiracles", correct: false },
        ]
    },
    {
        question: "Which is a unique feature for annelids?",
        answers: [
            { text: "Amphids", correct: false },
            { text: "Setae", correct: true },
            { text: "Phasmids", correct: false },
            { text: "Cuticle", correct: false },
        ]
    },
    {
        question: "What type of symmetry do nematodes exhibit?",
        answers: [
            { text: "Radial symmetry", correct: false },
            { text: "Bilateral symmetry", correct: true },
            { text: "Asymmetry", correct: false },
            { text: "Spiral symmetry", correct: false },
        ]
    },
    {
        question: "What is the mode of digestion in free-living nematodes?",
        answers: [
            { text: "Extracellular digestion", correct: false },
            { text: "Intra-intestinal digestion", correct: true },
            { text: "Intracellular digestion", correct: false },
            { text: "Absorptive digestion", correct: false },
        ]
    },
    {
        question: "How do nematodes transport dissolved substances?",
        answers: [
            { text: "Through a closed circulatory system", correct: false },
            { text: "By means of fluids in the pseudocoel", correct: true },
            { text: "Through open blood vessels", correct: false },
            { text: "By diffusion through the skin", correct: false },
        ]
    },
    {
        question: "What type of cleavage do annelids exhibit?",
        answers: [
            { text: "Radial and determinate", correct: false },
            { text: "Spiral and indeterminate", correct: false },
            { text: "Spiral and determinate", correct: true },
            { text: "Radial and indeterminate", correct: false },
        ]
    },




    {
        question: "How do nematodes achieve locomotion?",
        answers: [
            { text: "Peristaltic movement", correct: false },
            { text: "Longitudinal muscles only", correct: true },
            { text: "Circular muscles", correct: false },
            { text: "Setae", correct: false },
        ]
    },
    {
        question: "Which class of Nematoda has minute sensory pouches called phasmids?",
        answers: [
            { text: "Aphasmdia", correct: false },
            { text: "Phasmidia", correct: true },
            { text: "Enoplida", correct: false },
            { text: "Dorylaimida", correct: false },
        ]
    },
    {
        question: "What is the unique body plan of Annelida?",
        answers: [
            { text: "Bilateral symmetry", correct: false },
            { text: "Tube-within-a-tube", correct: true },
            { text: "Radial symmetry", correct: false },
            { text: "Asymmetrical body", correct: false },
        ]
    },
    {
        question: "How do Annelids perform respiration?",
        answers: [
            { text: "Through lungs", correct: false },
            { text: "Gaseous exchange through skin, gills or paraodia", correct: true },
            { text: "Through spiracles", correct: false },
            { text: "Tracheal system", correct: false },
        ]
    },
    {
        question: "Which class of Nematoda includes species like Ascaris and Trichuris?",
        answers: [
            { text: "Phasmidia", correct: true },
            { text: "Aphasmdia", correct: false },
            { text: "Enoplida", correct: false },
            { text: "Dorylaimida", correct: false },
        ]
    },
    {
        question: "What is the role of setae in Annelida?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Reproduction", correct: false },
            { text: "Anchoring during movement", correct: true },
            { text: "Nutrition", correct: false },
        ]
    },
    {
        question: "What type of body cavity do Annelids have?",
        answers: [
            { text: "Pseudocoel", correct: false },
            { text: "Acoelomate", correct: false },
            { text: "Coelom", correct: true },
            { text: "Hemocoel", correct: false },
        ]
    },
    {
        question: "What is the function of nephridia in Annelida?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Circulation", correct: false },
            { text: "Excretion", correct: true },
            { text: "Digestion", correct: false },
        ]
    },
    {
        question: "Which organ system is absent in nematodes?",
        answers: [
            { text: "Nervous system", correct: false },
            { text: "Digestive system", correct: false },
            { text: "Circulatory system", correct: true },
            { text: "Reproductive system", correct: false },
        ]
    },
    {
        question: "What type of symmetry do nematodes exhibit?",
        answers: [
            { text: "Radial symmetry", correct: false },
            { text: "Bilateral symmetry", correct: true },
            { text: "Asymmetry", correct: false },
            { text: "Spiral symmetry", correct: false },
        ]
    },
    {
        question: "Which order of Nematoda lacks lips and has a true copulatory bursa?",
        answers: [
            { text: "Rhabditida", correct: false },
            { text: "Strongylida", correct: true },
            { text: "Oxyurida", correct: false },
            { text: "Ascaridida", correct: false },
        ]
    },
    {
        question: "What is the main characteristic of the digestive system in nematodes?",
        answers: [
            { text: "Complete digestive system with mouth, enteron, and anus", correct: true },
            { text: "Incomplete digestive system", correct: false },
            { text: "No digestive system", correct: false },
            { text: "Gastrovascular cavity", correct: false },
        ]
    },
    {
        question: "Which organ is involved in the excretory system of nematodes?",
        answers: [
            { text: "Malpighian tubules", correct: false },
            { text: "Nephridia", correct: false },
            { text: "Lateral excretory canals", correct: true },
            { text: "Kidneys", correct: false },
        ]
    },
    {
        question: "Which class of Nematoda includes thread-like parasites of vertebrates?",
        answers: [
            { text: "Aphasmdia", correct: false },
            { text: "Camallanida", correct: true },
            { text: "Phasmidia", correct: false },
            { text: "Dorylaimida", correct: false },
        ]
    },
    {
        question: "What type of nervous system do nematodes have?",
        answers: [
            { text: "Centralized nervous system", correct: false },
            { text: "Nerve ring and nerve cords", correct: true },
            { text: "Nerve net", correct: false },
            { text: "Spinal cord", correct: false },
        ]
    },
    {
        question: "What is the main body covering in nematodes?",
        answers: [
            { text: "Chitinous exoskeleton", correct: false },
            { text: "Thick cuticle", correct: true },
            { text: "Feathers", correct: false },
            { text: "Scales", correct: false },
        ]
    },
    {
        question: "How do annelids achieve movement?",
        answers: [
            { text: "Side to side movement", correct: false },
            { text: "Peristaltic movement", correct: true },
            { text: "Flagella", correct: false },
            { text: "Jet propulsion", correct: false },
        ]
    },
    {
        question: "Which order of Nematoda includes pinworms?",
        answers: [
            { text: "Rhabditida", correct: false },
            { text: "Strongylida", correct: false },
            { text: "Oxyurida", correct: true },
            { text: "Ascaridida", correct: false },
        ]
    },
    {
        question: "Which feature is unique to nematodes?",
        answers: [
            { text: "Phasmids", correct: true },
            { text: "Setae", correct: false },
            { text: "Parapodia", correct: false },
            { text: "Notochord", correct: false },
        ]
    },
    {
        question: "What type of reproductive system do annelids have?",
        answers: [
            { text: "Only hermaphroditic", correct: false },
            { text: "Separate sexes or hermaphroditic", correct: true },
            { text: "Only asexual reproduction", correct: false },
            { text: "Only external fertilization", correct: false },
        ]
    },




    {
        question: "What kind of symmetry do Nematodes exhibit?",
        answers: [
            { text: "Radial", correct: false },
            { text: "Bilateral", correct: true },
            { text: "Asymmetrical", correct: false },
            { text: "None", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a general characteristic of Nematoda?",
        answers: [
            { text: "Segmentation", correct: true },
            { text: "Thick cuticle", correct: false },
            { text: "Pseudocoelom", correct: false },
            { text: "Simple digestive system", correct: false },
        ]
    },
    {
        question: "What is the function of the thick cuticle in Nematodes?",
        answers: [
            { text: "Protection", correct: true },
            { text: "Locomotion", correct: false },
            { text: "Digestion", correct: false },
            { text: "Circulation", correct: false },
        ]
    },
    {
        question: "How many germ layers do Nematodes have?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: false },
            { text: "Three", correct: true },
            { text: "Four", correct: false },
        ]
    },
    {
        question: "Nematodes move using which type of muscles?",
        answers: [
            { text: "Circular", correct: false },
            { text: "Longitudinal", correct: true },
            { text: "Oblique", correct: false },
            { text: "None", correct: false },
        ]
    },
    {
        question: "What is the main form of reproduction in Nematodes?",
        answers: [
            { text: "Asexual", correct: false },
            { text: "Budding", correct: false },
            { text: "Sexual", correct: true },
            { text: "Fragmentation", correct: false },
        ]
    },
    {
        question: "The digestive tract of Nematodes starts at the mouth and ends at the:",
        answers: [
            { text: "Stomach", correct: false },
            { text: "Intestine", correct: false },
            { text: "Anus", correct: true },
            { text: "Cloaca", correct: false },
        ]
    },
    {
        question: "Which organ system is NOT present in Nematodes?",
        answers: [
            { text: "Digestive", correct: false },
            { text: "Nervous", correct: false },
            { text: "Respiratory", correct: true },
            { text: "Excretory", correct: false },
        ]
    },
    {
        question: "Nematodes' nervous system includes a ring of nerve tissue around the:",
        answers: [
            { text: "Anus", correct: false },
            { text: "Mouth", correct: false },
            { text: "Pharynx", correct: true },
            { text: "Intestine", correct: false },
        ]
    },
    {
        question: "Annelids are known for having a body plan described as:",
        answers: [
            { text: "Tube-within-a-tube", correct: true },
            { text: "Solid", correct: false },
            { text: "Hollow", correct: false },
            { text: "Layered", correct: false },
        ]
    },
    {
        question: "Which feature is characteristic of most Annelids and used for locomotion?",
        answers: [
            { text: "Setae", correct: true },
            { text: "Fins", correct: false },
            { text: "Wings", correct: false },
            { text: "Tentacles", correct: false },
        ]
    },
    {
        question: "Annelids show a primitive form of:",
        answers: [
            { text: "Cephalization", correct: false },
            { text: "Tagmatization", correct: true },
            { text: "Metamorphosis", correct: false },
            { text: "Regeneration", correct: false },
        ]
    },
    {
        question: "The coelom in Annelids is lined by:",
        answers: [
            { text: "Epidermis", correct: false },
            { text: "Peritoneum", correct: true },
            { text: "Cuticle", correct: false },
            { text: "Cartilage", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a biological contribution of Annelida?",
        answers: [
            { text: "Metamerism", correct: false },
            { text: "Coelomic cavity", correct: false },
            { text: "Nephridia", correct: false },
            { text: "Open circulatory system", correct: true },
        ]
    },
    {
        question: "Annelids typically have which type of circulatory system?",
        answers: [
            { text: "Open", correct: false },
            { text: "Closed", correct: true },
            { text: "None", correct: false },
            { text: "Mixed", correct: false },
        ]
    },
    {
        question: "In Annelids, gaseous exchange occurs through:",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Gills", correct: true },
            { text: "Skin", correct: true },
            { text: "Tracheae", correct: false },
        ]
    },
    {
        question: "The body of an Annelid is divided by:",
        answers: [
            { text: "Cuticle", correct: false },
            { text: "Septa", correct: true },
            { text: "Segments", correct: false },
            { text: "Valves", correct: false },
        ]
    },
    {
        question: "Which of the following Annelids is most commonly known?",
        answers: [
            { text: "Leeches", correct: false },
            { text: "Polychaeta", correct: false },
            { text: "Earthworms", correct: true },
            { text: "Marine worms", correct: false },
        ]
    },
    {
        question: "What role do setae play in Annelids?",
        answers: [
            { text: "Digestion", correct: false },
            { text: "Respiration", correct: false },
            { text: "Locomotion", correct: true },
            { text: "Circulation", correct: false },
        ]
    },
    {
        question: "How do Annelids typically reproduce?",
        answers: [
            { text: "Sexually", correct: true },
            { text: "Asexually", correct: false },
            { text: "By budding", correct: false },
            { text: "By fragmentation", correct: false },
        ]
    },

];