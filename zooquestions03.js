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
    },
    
    
    
   
    {
        question: "Which order of flatworms is characterized by members that exhibit diverse lifestyles including free-living, ectoparasitic, and ectocommensal habits?",
        answers: [
            { text: "Polycladida", correct: false },
            { text: "Tricladida", correct: false },
            { text: "Rhabdocoela", correct: false },
            { text: "Alloecoela", correct: true },
        ]
    },
    
    
   
    {
        question: "Which class of Platyhelminthes are predominantly free-living?",
        answers: [
            { text: "Cestoda", correct: false },
            { text: "Trematoda", correct: false },
            { text: "Monogenea", correct: false },
            { text: "Turbellaria", correct: true }
        ]
    },
    {
        question: "Which order within Class Turbellaria lacks a muscular pharynx and intestines?",
        answers: [
            { text: "Rhabdocoela", correct: false },
            { text: "Tricladida", correct: false },
            { text: "Acoela", correct: true },
            { text: "Polycladida", correct: false }
        ]
    },
    {
        question: "What kind of sensory organs do turbellarians possess?",
        answers: [
            { text: "Tangoreceptors", correct: true },
            { text: "Ommatidia", correct: false },
            { text: "Statocysts", correct: false },
            { text: "Neuromasts", correct: false }
        ]
    },
    {
        question: "What is the primary role of flame cells in turbellarians?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Respiration", correct: false },
            { text: "Excretion", correct: true },
            { text: "Digestion", correct: false }
        ]
    },
    {
        question: "Which subclass of Cestoda has an unsegmented, leaf-like body?",
        answers: [
            { text: "Eucestoda", correct: false },
            { text: "Cestodaria", correct: true },
            { text: "Aspidocotylea", correct: false },
            { text: "Monogenea", correct: false }
        ]
    },
    {
        question: "Which class of Platyhelminthes includes tapeworms?",
        answers: [
            { text: "Trematoda", correct: false },
            { text: "Turbellaria", correct: false },
            { text: "Cestoda", correct: true },
            { text: "Monogenea", correct: false }
        ]
    },
    {
        question: "How do cestodes absorb nutrients?",
        answers: [
            { text: "Through their mouth", correct: false },
            { text: "Through their digestive tract", correct: false },
            { text: "Directly through their tegument", correct: true },
            { text: "Through their anus", correct: false }
        ]
    },
    {
        question: "What is the function of the scolex in cestodes?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Locomotion", correct: false },
            { text: "Attachment to the host", correct: true },
            { text: "Digestion", correct: false }
        ]
    },
    {
        question: "Which order of turbellarians inhabits exclusively marine environments?",
        answers: [
            { text: "Tricladida", correct: false },
            { text: "Rhabdocoela", correct: false },
            { text: "Acoela", correct: true },
            { text: "Polycladida", correct: false }
        ]
    },
    {
        question: "What is a unique feature of the order Aspidocotylea?",
        answers: [
            { text: "Presence of oral suckers", correct: false },
            { text: "Subdivided ventral suckers", correct: true },
            { text: "Multiple testes", correct: false },
            { text: "Complex reproductive system", correct: false }
        ]
    },
    {
        question: "Which class of Platyhelminthes has members that are predominantly ectoparasites?",
        answers: [
            { text: "Trematoda", correct: false },
            { text: "Monogenea", correct: true },
            { text: "Cestoda", correct: false },
            { text: "Turbellaria", correct: false }
        ]
    },
    {
        question: "What type of body structure do turbellarians have?",
        answers: [
            { text: "Segmented", correct: false },
            { text: "Unsegmented", correct: true },
            { text: "Radial", correct: false },
            { text: "Asymmetrical", correct: false }
        ]
    },
    {
        question: "Which subclass of Cestoda possesses a larva known as lycophore?",
        answers: [
            { text: "Eucestoda", correct: false },
            { text: "Cestodaria", correct: true },
            { text: "Aspidocotylea", correct: false },
            { text: "Monogenea", correct: false }
        ]
    },
    {
        question: "What is the reproductive system of monogeneans primarily characterized by?",
        answers: [
            { text: "Multiple testes and ovaries", correct: false },
            { text: "A single set of reproductive organs", correct: true },
            { text: "External fertilization", correct: false },
            { text: "Complex life cycles", correct: false }
        ]
    },
    {
        question: "What is the primary habitat of organisms in the order Tricladida?",
        answers: [
            { text: "Marine only", correct: false },
            { text: "Freshwater, marine, and terrestrial", correct: true },
            { text: "Terrestrial only", correct: false },
            { text: "Freshwater only", correct: false }
        ]
    },
    {
        question: "What is the characteristic feature of the digestive system in order Polycladida?",
        answers: [
            { text: "A simple sac-like intestine", correct: false },
            { text: "A branched intestine", correct: true },
            { text: "Absence of intestine", correct: false },
            { text: "A pharyngeal pouch", correct: false }
        ]
    },
    {
        question: "Which order within Class Trematoda primarily parasitizes fish and reptiles?",
        answers: [
            { text: "Monogenea", correct: false },
            { text: "Aspidocotylea", correct: true },
            { text: "Cestodaria", correct: false },
            { text: "Polycladida", correct: false }
        ]
    },
    {
        question: "What is a key characteristic of organisms in the order Lecithopora?",
        answers: [
            { text: "Presence of paired nephridia", correct: true },
            { text: "Absence of reproductive organs", correct: false },
            { text: "Exclusively marine habitat", correct: false },
            { text: "Lack of excretory system", correct: false }
        ]
    },
    {
        question: "Which class of Platyhelminthes exhibits a life cycle often involving multiple hosts?",
        answers: [
            { text: "Turbellaria", correct: false },
            { text: "Monogenea", correct: false },
            { text: "Cestoda", correct: true },
            { text: "Polycladida", correct: false }
        ]
    },
    {
        question: "What type of excretory system is common in turbellarians?",
        answers: [
            { text: "Protonephridia", correct: true },
            { text: "Metanephridia", correct: false },
            { text: "Malpighian tubules", correct: false },
            { text: "Nephridia", correct: false }
        ]
    },
    
    
    
  
    {
        question: "What is the main habitat of Acoela order?",
        answers: [
            { text: "Freshwater", correct: false },
            { text: "Marine", correct: true },
            { text: "Terrestrial", correct: false },
            { text: "Deserts", correct: false },
        ]
    },
    {
        question: "What characteristic is absent in Acoela order?",
        answers: [
            { text: "Intestines", correct: true },
            { text: "Pharynx", correct: false },
            { text: "Excretory system", correct: true },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "Which order includes species that have a bulbose pharynx and paired nephridia?",
        answers: [
            { text: "Acoela", correct: false },
            { text: "Rhabdocoela", correct: true },
            { text: "Tricladida", correct: false },
            { text: "Polycladida", correct: false },
        ]
    },
    {
        question: "Which subclass of Eucestoda features a scolex with four leaf-like bothria?",
        answers: [
            { text: "Diphyllidea", correct: false },
            { text: "Trypanorhyncha", correct: false },
            { text: "Tetraphyllidea", correct: true },
            { text: "Pseudophyllidea", correct: false },
        ]
    },
    {
        question: "What is the common habitat for Monogenea order?",
        answers: [
            { text: "Intestines of vertebrates", correct: false },
            { text: "Cold-blooded aquatic vertebrates", correct: true },
            { text: "Coeloms of fishes", correct: false },
            { text: "Reptiles", correct: false },
        ]
    },
    {
        question: "What is a characteristic feature of Trypanorhyncha order?",
        answers: [
            { text: "Four bothria and spiny proboscides", correct: true },
            { text: "Scolex with two bothria", correct: false },
            { text: "Armed cirri", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "In what environment do Paludicola suborder species typically live?",
        answers: [
            { text: "Marine", correct: false },
            { text: "Freshwater", correct: true },
            { text: "Terrestrial", correct: false },
            { text: "Deserts", correct: false },
        ]
    },
    {
        question: "Which order within the Turbellaria class includes species with a sac-like intestine?",
        answers: [
            { text: "Rhabdocoela", correct: true },
            { text: "Tricladida", correct: false },
            { text: "Polycladida", correct: false },
            { text: "Acoela", correct: false },
        ]
    },
    {
        question: "Which order within Eucestoda is characterized by parasitizing elasmobranch intestines with a scolex bearing four bothria?",
        answers: [
            { text: "Tetraphyllidea", correct: true },
            { text: "Diphyllidea", correct: false },
            { text: "Trypanorhyncha", correct: false },
            { text: "Pseudophyllidea", correct: false },
        ]
    },
    {
        question: "What type of body structure do species in the Monogenea order exhibit?",
        answers: [
            { text: "Segmented body", correct: false },
            { text: "Elongated and ribbon-like body", correct: false },
            { text: "Unsegmented, leaf-like body", correct: false },
            { text: "Both anterior and posterior adhesive structures", correct: true },
        ]
    },
    {
        question: "Which order features species with a protrusible proboscis and closely situated reproductive pores?",
        answers: [
            { text: "Tetraphyllidea", correct: false },
            { text: "Gyrocotylidea", correct: true },
            { text: "Trypanorhyncha", correct: false },
            { text: "Pseudophyllidea", correct: false },
        ]
    },
    {
        question: "What type of pharynx is found in Tricladida order species?",
        answers: [
            { text: "Bulbose pharynx", correct: false },
            { text: "Plicate pharynx", correct: true },
            { text: "Simple pharynx", correct: false },
            { text: "Muscular pharynx", correct: false },
        ]
    },
    {
        question: "Which class of Platyhelminthes is predominantly free-living?",
        answers: [
            { text: "Cestoda", correct: false },
            { text: "Trematoda", correct: false },
            { text: "Turbellaria", correct: true },
            { text: "Monogenea", correct: false },
        ]
    },
    {
        question: "What do cestodes use to absorb nutrients?",
        answers: [
            { text: "Mouth", correct: false },
            { text: "Intestines", correct: false },
            { text: "Tegument", correct: true },
            { text: "Gastrovascular cavity", correct: false },
        ]
    },
    {
        question: "Which flatworm class is known for having a gastrovascular cavity?",
        answers: [
            { text: "Turbellaria", correct: true },
            { text: "Trematoda", correct: false },
            { text: "Cestoda", correct: false },
            { text: "Monogenea", correct: false },
        ]
    },
    {
        question: "What do flame cells in flatworms primarily facilitate?",
        answers: [
            { text: "Nutrient absorption", correct: false },
            { text: "Excretion", correct: true },
            { text: "Reproduction", correct: false },
            { text: "Respiration", correct: false },
        ]
    },
    {
        question: "What characteristic is typical for Turbellaria species?",
        answers: [
            { text: "Segmented body", correct: false },
            { text: "Ciliated epidermis", correct: true },
            { text: "Proglottids", correct: false },
            { text: "Scolex with hooks", correct: false },
        ]
    },
    {
        question: "Which order of Eucestoda infects the intestines of reptiles, birds, and mammals?",
        answers: [
            { text: "Pseudophyllidea", correct: false },
            { text: "Tetraphyllidea", correct: false },
            { text: "Diphyllidea", correct: false },
            { text: "Taenioidea/Cyclophyllidea", correct: true },
        ]
    },
    {
        question: "What type of body do Amphilinidea subclass species have?",
        answers: [
            { text: "Segmented", correct: false },
            { text: "Flat and oval", correct: true },
            { text: "Ribbon-like", correct: false },
            { text: "Cylindrical", correct: false },
        ]
    },
    {
        question: "Which order includes species with a simple reproductive system featuring a dolii-form pharynx?",
        answers: [
            { text: "Notandropora", correct: false },
            { text: "Temnocephalida", correct: true },
            { text: "Opisthandropora", correct: false },
            { text: "Lecithopora", correct: false },
        ]
    },



    {
        question: "What type of organisms are Cestodes commonly known as?",
        answers: [
            { text: "Flatworms", correct: false },
            { text: "Tapeworms", correct: true },
            { text: "Roundworms", correct: false },
            { text: "Flukes", correct: false },
        ]
    },
    {
        question: "What is the body structure of Cestodes?",
        answers: [
            { text: "Segmented and ribbon-like", correct: true },
            { text: "Unsegmented and leaf-like", correct: false },
            { text: "Cylindrical and smooth", correct: false },
            { text: "Spherical and compact", correct: false },
        ]
    },
    {
        question: "How do Cestodes absorb nutrients?",
        answers: [
            { text: "Through a mouth", correct: false },
            { text: "Through their skin", correct: false },
            { text: "Directly through their tegument", correct: true },
            { text: "Through specialized digestive organs", correct: false },
        ]
    },
    {
        question: "Which feature is absent in Cestodes?",
        answers: [
            { text: "Mouth and digestive system", correct: true },
            { text: "Excretory system", correct: false },
            { text: "Nervous system", correct: false },
            { text: "Reproductive organs", correct: false },
        ]
    },
    {
        question: "What characterizes the body covering of Cestodes?",
        answers: [
            { text: "Presence of microvilli", correct: false },
            { text: "Covered with cilia", correct: false },
            { text: "Protective cuticle", correct: true },
            { text: "Thick epidermis", correct: false },
        ]
    },
    {
        question: "What are the adhesive structures in Cestodes known as?",
        answers: [
            { text: "Cilia", correct: false },
            { text: "Scolex", correct: true },
            { text: "Proglottids", correct: false },
            { text: "Hooks and Suckers", correct: false },
        ]
    },
    {
        question: "What is a unique feature of mature proglottids in Cestodes?",
        answers: [
            { text: "Separate sexes", correct: false },
            { text: "Hermaphroditic", correct: true },
            { text: "Asexual reproduction", correct: false },
            { text: "Lack of reproductive organs", correct: false },
        ]
    },
    {
        question: "What is the function of the tegument in Cestodes?",
        answers: [
            { text: "Protection", correct: true },
            { text: "Digestion", correct: false },
            { text: "Locomotion", correct: false },
            { text: "Respiration", correct: false },
        ]
    },
    {
        question: "Which system is typically rudimentary in Cestodes?",
        answers: [
            { text: "Reproductive system", correct: false },
            { text: "Digestive system", correct: false },
            { text: "Nervous system", correct: true },
            { text: "Excretory system", correct: false },
        ]
    },
    {
        question: "What is a characteristic of the excretory system in Cestodes?",
        answers: [
            { text: "Advanced filtration system", correct: false },
            { text: "Protonephridia with flame cells", correct: true },
            { text: "Complex circulatory system", correct: false },
            { text: "Absence of excretory system", correct: false },
        ]
    },
    {
        question: "What do mature proglottids of Cestodes contain?",
        answers: [
            { text: "Only male reproductive organs", correct: false },
            { text: "Only female reproductive organs", correct: false },
            { text: "Both male and female reproductive organs", correct: true },
            { text: "No reproductive organs", correct: false },
        ]
    },
    {
        question: "Which term refers to the reproductive strategy involving multiple hosts in Cestodes?",
        answers: [
            { text: "Asexual reproduction", correct: false },
            { text: "Direct life cycle", correct: false },
            { text: "Complex life cycle", correct: true },
            { text: "Parthenogenesis", correct: false },
        ]
    },
    {
        question: "What is a scolex?",
        answers: [
            { text: "Segment of a tapeworm", correct: false },
            { text: "Digestive organ", correct: false },
            { text: "Adhesive structure", correct: true },
            { text: "Reproductive organ", correct: false },
        ]
    },
    {
        question: "What distinguishes Cestodes from other flatworms?",
        answers: [
            { text: "Presence of cilia", correct: false },
            { text: "Segmented body structure", correct: true },
            { text: "Presence of microvilli", correct: false },
            { text: "Having an anus", correct: false },
        ]
    },
    {
        question: "What is the primary habitat of Cestodes?",
        answers: [
            { text: "Aquatic environments", correct: false },
            { text: "Host intestines", correct: true },
            { text: "Soil", correct: false },
            { text: "Leaf litter", correct: false },
        ]
    },
    {
        question: "What is a characteristic feature of Cestodes' tegument?",
        answers: [
            { text: "Presence of epidermis", correct: false },
            { text: "Protective cuticle", correct: true },
            { text: "Lack of microvilli", correct: true },
            { text: "Ciliated surface", correct: false },
        ]
    },
    {
        question: "Which feature is not found in Cestodes?",
        answers: [
            { text: "Hooks", correct: false },
            { text: "Suckers", correct: false },
            { text: "Digestive tract", correct: true },
            { text: "Proglottids", correct: false },
        ]
    },
    {
        question: "What system is typically absent in primitive Cestodes?",
        answers: [
            { text: "Excretory system", correct: true },
            { text: "Nervous system", correct: false },
            { text: "Reproductive system", correct: false },
            { text: "Digestive system", correct: false },
        ]
    },
    {
        question: "What type of cells are involved in the excretory system of Cestodes?",
        answers: [
            { text: "Ciliated cells", correct: false },
            { text: "Flame cells", correct: true },
            { text: "Microvilli cells", correct: false },
            { text: "Epidermal cells", correct: false },
        ]
    },
    {
        question: "Which term describes the anterior end of Cestodes?",
        answers: [
            { text: "Proglottid", correct: false },
            { text: "Scolex", correct: true },
            { text: "Strobila", correct: false },
            { text: "Tegument", correct: false },
        ]
    },
    
    
    
   
    {
        question: "What is the common name for organisms in the class Cestoda?",
        answers: [
            { text: "Flukes", correct: false },
            { text: "Tapeworms", correct: true },
            { text: "Roundworms", correct: false },
            { text: "Flatworms", correct: false },
        ]
    },
    {
        question: "What type of body structure do Cestodes have?",
        answers: [
            { text: "Segmented", correct: true },
            { text: "Unsegmented", correct: false },
            { text: "Spherical", correct: false },
            { text: "Cylindrical", correct: false },
        ]
    },
    {
        question: "What is the primary habitat of Cestodes?",
        answers: [
            { text: "Terrestrial environments", correct: false },
            { text: "Marine environments", correct: false },
            { text: "Intestines of vertebrates", correct: true },
            { text: "Freshwater environments", correct: false },
        ]
    },
    {
        question: "What is the function of the scolex in Cestodes?",
        answers: [
            { text: "Reproduction", correct: false },
            { text: "Digestion", correct: false },
            { text: "Attachment to host", correct: true },
            { text: "Movement", correct: false },
        ]
    },
    {
        question: "How do Cestodes absorb nutrients?",
        answers: [
            { text: "Through a mouth", correct: false },
            { text: "Through a digestive system", correct: false },
            { text: "Directly through their tegument", correct: true },
            { text: "Through cilia", correct: false },
        ]
    },
    {
        question: "What system do Cestodes lack entirely?",
        answers: [
            { text: "Nervous system", correct: false },
            { text: "Digestive system", correct: true },
            { text: "Reproductive system", correct: false },
            { text: "Excretory system", correct: false },
        ]
    },
    {
        question: "What type of reproductive system do Cestodes have?",
        answers: [
            { text: "Dioecious", correct: false },
            { text: "Hermaphroditic", correct: true },
            { text: "Parthenogenetic", correct: false },
            { text: "Gonochoristic", correct: false },
        ]
    },
    {
        question: "Which subclass within Cestoda is characterized by an unsegmented body?",
        answers: [
            { text: "Cestodaria", correct: true },
            { text: "Eucestoda", correct: false },
            { text: "Turbellaria", correct: false },
            { text: "Digenea", correct: false },
        ]
    },
    {
        question: "What is the larval form of Cestodarians known as?",
        answers: [
            { text: "Miracidium", correct: false },
            { text: "Cercaria", correct: false },
            { text: "Lycophore", correct: true },
            { text: "Oncosphere", correct: false },
        ]
    },
    {
        question: "Which class do Monogenea belong to?",
        answers: [
            { text: "Cestoda", correct: false },
            { text: "Turbellaria", correct: false },
            { text: "Trematoda", correct: true },
            { text: "Nematoda", correct: false },
        ]
    },
    {
        question: "Monogeneans are primarily parasitic on which type of hosts?",
        answers: [
            { text: "Warm-blooded vertebrates", correct: false },
            { text: "Cold-blooded aquatic vertebrates", correct: true },
            { text: "Invertebrates", correct: false },
            { text: "Mammals", correct: false },
        ]
    },
    {
        question: "What is a distinctive feature of the Monogenea order?",
        answers: [
            { text: "Two suckers", correct: false },
            { text: "Hooks and adhesive discs", correct: true },
            { text: "Segmented body", correct: false },
            { text: "Complete digestive system", correct: false },
        ]
    },
    {
        question: "How many hosts are involved in the life cycle of Monogeneans?",
        answers: [
            { text: "One", correct: true },
            { text: "Two", correct: false },
            { text: "Three", correct: false },
            { text: "Four", correct: false },
        ]
    },
    {
        question: "What type of parasitism do Trematodes exhibit?",
        answers: [
            { text: "Ectoparasitism", correct: false },
            { text: "Endoparasitism", correct: false },
            { text: "Both ectoparasitism and endoparasitism", correct: true },
            { text: "Free-living", correct: false },
        ]
    },
    {
        question: "What body shape is characteristic of Trematodes?",
        answers: [
            { text: "Spherical", correct: false },
            { text: "Cylindrical", correct: false },
            { text: "Leaf-like", correct: true },
            { text: "Segmented", correct: false },
        ]
    },
    {
        question: "Which order of Trematodes lacks oral suckers?",
        answers: [
            { text: "Digenea", correct: false },
            { text: "Aspidocotylea", correct: true },
            { text: "Monogenea", correct: false },
            { text: "Cestodaria", correct: false },
        ]
    },
    {
        question: "In what system do Trematodes have flame cells?",
        answers: [
            { text: "Reproductive system", correct: false },
            { text: "Nervous system", correct: false },
            { text: "Excretory system", correct: true },
            { text: "Digestive system", correct: false },
        ]
    },
    {
        question: "What type of eggs do Trematodes typically produce?",
        answers: [
            { text: "Ameboid", correct: false },
            { text: "Shelled eggs", correct: true },
            { text: "Free-swimming eggs", correct: false },
            { text: "Encysted eggs", correct: false },
        ]
    },
    {
        question: "What is the reproductive characteristic of most Trematodes?",
        answers: [
            { text: "Gonochoristic", correct: false },
            { text: "Hermaphroditic", correct: true },
            { text: "Dioecious", correct: false },
            { text: "Parthenogenetic", correct: false },
        ]
    },
    {
        question: "Which class do flatworms with ciliated epidermis belong to?",
        answers: [
            { text: "Cestoda", correct: false },
            { text: "Turbellaria", correct: true },
            { text: "Trematoda", correct: false },
            { text: "Nematoda", correct: false },
        ]
    },
    
    
    ];