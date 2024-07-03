 const questions = [
    {
        question: "What cannot be split into smaller substances?",
        answers: [
            { text: "Compounds", correct: false },
            { text: "Elements", correct: true },
            { text: "Molecules", correct: false },
            { text: "Mixtures", correct: false },
        ]
    },
    {
        question: "What forms the major weight of an element?",
        answers: [
            { text: "Electrons", correct: false },
            { text: "Protons", correct: true },
            { text: "Neutrons", correct: false },
            { text: "Nucleus", correct: false },
        ]
    },
    {
        question: "According to the modern periodic law, the properties of an element depend on its:",
        answers: [
            { text: "Atomic weight", correct: false },
            { text: "Mass number", correct: false },
            { text: "Atomic number", correct: true },
            { text: "Valence electrons", correct: false },
        ]
    },
    {
        question: "What is the smallest unit of matter?",
        answers: [
            { text: "Molecule", correct: false },
            { text: "Atom", correct: true },
            { text: "Proton", correct: false },
            { text: "Electron", correct: false },
        ]
    },
    {
        question: "Special sections where electrons can be found are called:",
        answers: [
            { text: "Cells", correct: false },
            { text: "Orbitals", correct: true },
            { text: "Nodes", correct: false },
            { text: "Shells", correct: false },
        ]
    },
    {
        question: "An orbital can accommodate how many electrons?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
        ]
    },
    {
        question: "How many orbitals are in the p block?",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false },
        ]
    },
    {
        question: "What is the electronic configuration of Na using stable gases?",
        answers: [
            { text: "[He] 2s² 2p⁶ 3s¹", correct: true },
            { text: "[Ne] 3s¹", correct: false },
            { text: "[Ar] 4s¹", correct: false },
            { text: "[Kr] 5s¹", correct: false },
        ]
    },
    {
        question: "What is the periodic table based on?",
        answers: [
            { text: "Atomic mass", correct: false },
            { text: "Valence electrons", correct: true },
            { text: "Electron configuration", correct: false },
            { text: "Neutrons", correct: false },
        ]
    },
    {
        question: "Which group is known as Alkali Metals?",
        answers: [
            { text: "Group 2", correct: false },
            { text: "Group 1", correct: true },
            { text: "Group 3", correct: false },
            { text: "Group 7", correct: false },
        ]
    },
    {
        question: "What characteristic is associated with Group 1 elements?",
        answers: [
            { text: "Strong electronegativity", correct: false },
            { text: "Strong electropositive metals", correct: true },
            { text: "Form acidic solutions with water", correct: false },
            { text: "Form covalent bonds", correct: false },
        ]
    },
    {
        question: "Halogens form what type of bonds with other non-metals?",
        answers: [
            { text: "Ionic", correct: false },
            { text: "Covalent", correct: true },
            { text: "Metallic", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "Which oxidation number range do all Halogens exhibit except for fluorine?",
        answers: [
            { text: "+1 to -1", correct: false },
            { text: "+3 to -3", correct: false },
            { text: "+7 to -1", correct: true },
            { text: "+5 to -2", correct: false },
        ]
    },
    {
        question: "Which pair of elements shows a diagonal relationship in the periodic table?",
        answers: [
            { text: "Lithium and Sodium", correct: false },
            { text: "Magnesium and Calcium", correct: false },
            { text: "Lithium and Magnesium", correct: true },
            { text: "Beryllium and Boron", correct: false },
        ]
    },
    {
        question: "Which elements are classified as transition metals?",
        answers: [
            { text: "Alkali metals", correct: false },
            { text: "Noble gases", correct: false },
            { text: "Halogens", correct: false },
            { text: "Transition elements", correct: true },
        ]
    },
    {
        question: "What is the density threshold for heavy metals?",
        answers: [
            { text: "Above 4g/cm³", correct: false },
            { text: "Above 5g/cm³", correct: true },
            { text: "Above 6g/cm³", correct: false },
            { text: "Above 7g/cm³", correct: false },
        ]
    },
    {
        question: "Which transition metals exhibit magnetic properties?",
        answers: [
            { text: "Iron and Copper", correct: false },
            { text: "Zinc and Chromium", correct: false },
            { text: "Cobalt and Nickel", correct: true },
            { text: "Silver and Gold", correct: false },
        ]
    },
    {
        question: "What is an alloy?",
        answers: [
            { text: "A liquid mixture of metals", correct: false },
            { text: "A solid mixture of elements with specific characteristics", correct: true },
            { text: "A pure metal", correct: false },
            { text: "A gas mixture", correct: false },
        ]
    },
    {
        question: "Which hybridization types can transition metals undergo?",
        answers: [
            { text: "sp³", correct: false },
            { text: "d²sp³", correct: true },
            { text: "sp²", correct: false },
            { text: "sp", correct: false },
        ]
    },
    {
        question: "Steel is an alloy of which elements?",
        answers: [
            { text: "Iron and Nickel", correct: false },
            { text: "Iron and Carbon", correct: true },
            { text: "Iron and Chromium", correct: false },
            { text: "Iron and Copper", correct: false },
        ]
    },
    

    {
        question: "Which block has 5 orbitals?",
        answers: [
            { text: "s block", correct: false },
            { text: "p block", correct: false },
            { text: "d block", correct: true },
            { text: "f block", correct: false },
        ]
    },
    {
        question: "How many electrons can the f block accommodate?",
        answers: [
            { text: "7", correct: false },
            { text: "14", correct: true },
            { text: "21", correct: false },
            { text: "28", correct: false },
        ]
    },
    {
        question: "Group 2 elements are known as:",
        answers: [
            { text: "Alkali Metals", correct: false },
            { text: "Earth Alkaline Metals", correct: true },
            { text: "Transition Metals", correct: false },
            { text: "Halogens", correct: false },
        ]
    },
    {
        question: "What is the group name for Nitrogen in the periodic table?",
        answers: [
            { text: "Group 1", correct: false },
            { text: "Group 3", correct: false },
            { text: "Group 5", correct: true },
            { text: "Group 7", correct: false },
        ]
    },
    {
        question: "Which group is known for forming alkaline solutions on reacting with water?",
        answers: [
            { text: "Group 1", correct: true },
            { text: "Group 2", correct: false },
            { text: "Group 3", correct: false },
            { text: "Group 4", correct: false },
        ]
    },
    {
        question: "Which group forms hydrides in their reaction with hydrogen?",
        answers: [
            { text: "Group 1", correct: true },
            { text: "Group 2", correct: false },
            { text: "Group 3", correct: false },
            { text: "Group 4", correct: false },
        ]
    },
    {
        question: "Which group contains elements that are very strong electronegative elements?",
        answers: [
            { text: "Group 1", correct: false },
            { text: "Group 2", correct: false },
            { text: "Group 7", correct: true },
            { text: "Group 8", correct: false },
        ]
    },
    {
        question: "Halogens exist as what type of molecules?",
        answers: [
            { text: "Monovalent", correct: false },
            { text: "Divalent", correct: true },
            { text: "Trivalent", correct: false },
            { text: "Tetravalent", correct: false },
        ]
    },
    {
        question: "Which pair of elements can form normal oxides?",
        answers: [
            { text: "Sodium and Potassium", correct: false },
            { text: "Calcium and Strontium", correct: false },
            { text: "Lithium and Magnesium", correct: true },
            { text: "Beryllium and Aluminum", correct: false },
        ]
    },
    {
        question: "Which element pair can form organometallic compounds?",
        answers: [
            { text: "Sodium and Potassium", correct: false },
            { text: "Lithium and Magnesium", correct: true },
            { text: "Calcium and Strontium", correct: false },
            { text: "Boron and Silicon", correct: false },
        ]
    },
    {
        question: "What is the characteristic of the chlorides of Beryllium and Aluminum?",
        answers: [
            { text: "Lewis bases", correct: false },
            { text: "Lewis acids", correct: true },
            { text: "Neutral", correct: false },
            { text: "Basic", correct: false },
        ]
    },
    {
        question: "What property is shared by both Boron and Silicon?",
        answers: [
            { text: "Both are metals", correct: false },
            { text: "Both are non-metals", correct: false },
            { text: "Both are semi-conductors", correct: true },
            { text: "Both are noble gases", correct: false },
        ]
    },
    {
        question: "Which pair of elements forms halides that can be hydrolyzed in water?",
        answers: [
            { text: "Lithium and Sodium", correct: false },
            { text: "Boron and Silicon", correct: true },
            { text: "Magnesium and Calcium", correct: false },
            { text: "Beryllium and Aluminum", correct: false },
        ]
    },
    {
        question: "What series do transition metals belong to?",
        answers: [
            { text: "1st series", correct: false },
            { text: "2nd series", correct: false },
            { text: "3rd series", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "What behavior is common among members of the family with lone pair of electrons?",
        answers: [
            { text: "Diamagnetism", correct: false },
            { text: "Paramagnetism", correct: true },
            { text: "Ferromagnetism", correct: false },
            { text: "Antiferromagnetism", correct: false },
        ]
    },
    {
        question: "What is the general characteristic of transition elements?",
        answers: [
            { text: "Non-metals", correct: false },
            { text: "Metalloids", correct: false },
            { text: "Metals", correct: true },
            { text: "Noble gases", correct: false },
        ]
    },
    {
        question: "Which hybridization involves transition metals?",
        answers: [
            { text: "sp³", correct: false },
            { text: "d²sp³", correct: true },
            { text: "sp²", correct: false },
            { text: "sp", correct: false },
        ]
    },
    {
        question: "What are transition metals also referred to as?",
        answers: [
            { text: "Light metals", correct: false },
            { text: "Heavy metals", correct: true },
            { text: "Noble metals", correct: false },
            { text: "Alkali metals", correct: false },
        ]
    },
    {
        question: "What is the electronic configuration of elements used to determine?",
        answers: [
            { text: "Chemical reactivity", correct: true },
            { text: "Physical state", correct: false },
            { text: "Atomic mass", correct: false },
            { text: "Molecular weight", correct: false },
        ]
    },
    {
        question: "What is the role of alloys in construction?",
        answers: [
            { text: "Decoration", correct: false },
            { text: "Structural integrity", correct: true },
            { text: "Heat insulation", correct: false },
            { text: "Electric conduction", correct: false },
        ]
    },
    
    
    

    {
        question: "What are the elements in Group 6 of the periodic table known as?",
        answers: [
            { text: "Alkali Metals", correct: false },
            { text: "Earth Alkaline Metals", correct: false },
            { text: "Oxygen Group", correct: true },
            { text: "Halogens", correct: false },
        ]
    },
    {
        question: "What is a common property of elements in Group 1?",
        answers: [
            { text: "Strong electropositive metals", correct: true },
            { text: "Weak electropositive metals", correct: false },
            { text: "Strong electronegative metals", correct: false },
            { text: "Weak electronegative metals", correct: false },
        ]
    },
    {
        question: "Which pair of elements can form organometallic compounds?",
        answers: [
            { text: "Lithium and Magnesium", correct: true },
            { text: "Boron and Silicon", correct: false },
            { text: "Calcium and Strontium", correct: false },
            { text: "Sodium and Potassium", correct: false },
        ]
    },
    {
        question: "What type of compounds do Halogens form with themselves or other non-metals?",
        answers: [
            { text: "Ionic", correct: false },
            { text: "Covalent", correct: true },
            { text: "Metallic", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "Which group in the periodic table is known as Halogens?",
        answers: [
            { text: "Group 5", correct: false },
            { text: "Group 6", correct: false },
            { text: "Group 7", correct: true },
            { text: "Group 8", correct: false },
        ]
    },
    {
        question: "What property do Beryllium and Aluminum share?",
        answers: [
            { text: "Both have amphoteric oxides", correct: true },
            { text: "Both are non-metals", correct: false },
            { text: "Both are noble gases", correct: false },
            { text: "Both are alkali metals", correct: false },
        ]
    },
    {
        question: "What type of catalysts are Beryllium and Aluminum chlorides used as?",
        answers: [
            { text: "Lewis bases", correct: false },
            { text: "Friedel-Crafts catalysts", correct: true },
            { text: "Oxidizing agents", correct: false },
            { text: "Reducing agents", correct: false },
        ]
    },
    {
        question: "Which of the following elements form oxides that are very unstable and decompose easily?",
        answers: [
            { text: "Sodium and Potassium", correct: false },
            { text: "Lithium and Magnesium", correct: true },
            { text: "Calcium and Strontium", correct: false },
            { text: "Beryllium and Boron", correct: false },
        ]
    },
    {
        question: "What is the characteristic property of heavy metals?",
        answers: [
            { text: "Low density", correct: false },
            { text: "High density", correct: true },
            { text: "Non-metallic nature", correct: false },
            { text: "High reactivity", correct: false },
        ]
    },
    {
        question: "What is an orbital?",
        answers: [
            { text: "A section where electrons can be found", correct: true },
            { text: "The smallest unit of matter", correct: false },
            { text: "The nucleus of an atom", correct: false },
            { text: "A type of chemical bond", correct: false },
        ]
    },
    
    
   
    {
        question: "Which of the following is a characteristic of transition metals?",
        answers: [
            { text: "High electronegativity", correct: false },
            { text: "Low density", correct: false },
            { text: "Variable oxidation states", correct: true },
            { text: "Lack of conductivity", correct: false },
        ]
    },
    {
        question: "Which series does Iron belong to?",
        answers: [
            { text: "3d - 1st series", correct: true },
            { text: "4d - 2nd series", correct: false },
            { text: "5d - 3rd series", correct: false },
            { text: "6d - 4th series", correct: false },
        ]
    },
    {
        question: "What property makes transition metals suitable for construction?",
        answers: [
            { text: "Low melting point", correct: false },
            { text: "Great strength", correct: true },
            { text: "Brittleness", correct: false },
            { text: "High reactivity", correct: false },
        ]
    },
    {
        question: "Which of the following transition metals exhibits magnetic properties?",
        answers: [
            { text: "Zinc", correct: false },
            { text: "Cobalt", correct: true },
            { text: "Copper", correct: false },
            { text: "Aluminum", correct: false },
        ]
    },
    {
        question: "What is paramagnetism?",
        answers: [
            { text: "The ability to conduct electricity", correct: false },
            { text: "The ability to become magnetic when placed in a magnetic field", correct: true },
            { text: "Resistance to corrosion", correct: false },
            { text: "The ability to form alloys", correct: false },
        ]
    },
    {
        question: "Transition metals are typically:",
        answers: [
            { text: "Weak reducing agents", correct: false },
            { text: "Reducing agents", correct: true },
            { text: "Oxidizing agents", correct: false },
            { text: "Non-reactive", correct: false },
        ]
    },
    {
        question: "Which hybridization can be seen in transition metals?",
        answers: [
            { text: "sp³", correct: false },
            { text: "d³s", correct: true },
            { text: "sp²", correct: false },
            { text: "sp", correct: false },
        ]
    },
    {
        question: "What characteristic is common to all heavy metals?",
        answers: [
            { text: "Low density", correct: false },
            { text: "High density", correct: true },
            { text: "Non-magnetic properties", correct: false },
            { text: "Lack of reactivity", correct: false },
        ]
    },
    {
        question: "What is a notable use of steel, an alloy of iron and carbon?",
        answers: [
            { text: "Jewelry making", correct: false },
            { text: "Construction", correct: true },
            { text: "Cooking utensils", correct: false },
            { text: "Electrical wiring", correct: false },
        ]
    },
    {
        question: "Transition metals can form alloys. An example of an alloy is:",
        answers: [
            { text: "Brass", correct: true },
            { text: "Pure copper", correct: false },
            { text: "Pure iron", correct: false },
            { text: "Diamond", correct: false },
        ]
    }

    
];
 
 
        


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Retake Quiz";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
