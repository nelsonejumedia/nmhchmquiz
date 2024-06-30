const questions = [
    {
        question: "Which process is used to extract pure sodium from NaCl?",
        answers: [
            { text: "Heating to a high temperature", correct: false },
            { text: "Electrolysis", correct: true },
            { text: "Chemical reduction", correct: false },
            { text: "Fractional distillation", correct: false },
        ]
    },
    
   
    {
        question: "Which element is known for forming an alkaline solution when it reacts with water?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Carbon", correct: false },
            { text: "Sodium", correct: true },
        ]
    },
    {
        question: "What is the primary chemical property of metalloids?",
        answers: [
            { text: "High reactivity with acids", correct: false },
            { text: "Formation of amphoteric oxides", correct: false },
            { text: "Behavior resembling both metals and non-metals", correct: true },
            { text: "Formation of basic oxides", correct: false },
        ]
    },
    {
        question: "Which process is used to extract pure calcium from its compounds?",
        answers: [
            { text: "Hall-Héroult process", correct: false },
            { text: "Fractional distillation", correct: false },
            { text: "Survey process", correct: true },
            { text: "Electrolysis", correct: false },
        ]
    },
    {
        question: "What type of compound is sodium hydroxide (NaOH)?",
        answers: [
            { text: "Acidic solution", correct: false },
            { text: "Neutral compound", correct: false },
            { text: "Alkaline solution", correct: true },
            { text: "Amphoteric compound", correct: false },
        ]
    },
    {
        question: "Which metal forms the oxide that is unstable and reacts vigorously with water?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Potassium", correct: true },
            { text: "Iron", correct: false },
        ]
    },
    {
        question: "What is the process of removing impurities from bauxite to obtain pure aluminum oxide?",
        answers: [
            { text: "Electrolysis", correct: false },
            { text: "Roasting", correct: true },
            { text: "Fractional distillation", correct: false },
            { text: "Chemical reduction", correct: false },
        ]
    },
    {
        question: "Which type of oxide is typically formed by non-metals?",
        answers: [
            { text: "Basic oxide", correct: false },
            { text: "Amphoteric oxide", correct: false },
            { text: "Neutral oxide", correct: false },
            { text: "Acidic oxide", correct: true },
        ]
    },
    {
        question: "What happens when carbon dioxide (CO2) dissolves in water?",
        answers: [
            { text: "It forms a neutral solution", correct: false },
            { text: "It forms a basic solution", correct: false },
            { text: "It forms a slightly acidic solution", correct: true },
            { text: "It does not dissolve in water", correct: false },
        ]
    },
    {
        question: "Which element is obtained from air by fractional distillation of liquefied air?",
        answers: [
            { text: "Hydrogen", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Carbon", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "Which type of hydride is formed when hydrogen reacts with metalloids?",
        answers: [
            { text: "Ionic hydride", correct: false },
            { text: "Covalent hydride", correct: true },
            { text: "Interstitial hydride", correct: false },
            { text: "Metallic hydride", correct: false },
        ]
    },
    
    
    
    {
        question: "Which element is extracted using the Survey process?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Calcium", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Potassium", correct: false },
        ]
    },
    {
        question: "What is the ore of aluminum?",
        answers: [
            { text: "Bauxite", correct: true },
            { text: "Hematite", correct: false },
            { text: "Magnetite", correct: false },
            { text: "Galena", correct: false },
        ]
    },
    {
        question: "Which type of oxide do non-metals typically form?",
        answers: [
            { text: "Basic oxides", correct: false },
            { text: "Acidic oxides", correct: true },
            { text: "Neutral oxides", correct: false },
            { text: "Amphoteric oxides", correct: false },
        ]
    },
    {
        question: "What happens when aluminum oxide reacts with an acid?",
        answers: [
            { text: "It reacts vigorously and releases hydrogen gas", correct: false },
            { text: "It reacts to form a neutral compound", correct: false },
            { text: "It does not react with acids", correct: false },
            { text: "It reacts to form a salt and water", correct: true },
        ]
    },
    {
        question: "Which of the following metals is amphoteric in nature?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Sodium", correct: false },
            { text: "Zinc", correct: true },
            { text: "Iron", correct: true },
        ]
    },
    {
        question: "What is the primary method for obtaining hydrogen?",
        answers: [
            { text: "Chemical reduction", correct: false },
            { text: "Electrolysis of water", correct: true },
            { text: "Heating metals in a vacuum", correct: false },
            { text: "Fractional distillation of air", correct: false },
        ]
    },
    {
        question: "Which group of elements forms acidic oxides?",
        answers: [
            { text: "Group 1 (Alkali metals)", correct: false },
            { text: "Group 2 (Alkaline earth metals)", correct: false },
            { text: "Group 16 (Chalcogens)", correct: true },
            { text: "Group 17 (Halogens)", correct: false },
        ]
    },
    {
        question: "What is the general trend in the reactivity of alkali metals (Group 1) as you move down the group?",
        answers: [
            { text: "Reactivity decreases", correct: false },
            { text: "Reactivity increases", correct: true },
            { text: "Reactivity remains constant", correct: false },
            { text: "Reactivity is unpredictable", correct: false },
        ]
    },
    {
        question: "Which metal is extracted using the Down's cell process?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Sodium", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Iron", correct: false },
        ]
    },
    {
        question: "What type of hydride is formed when hydrogen reacts with transition metals?",
        answers: [
            { text: "Ionic hydrides", correct: false },
            { text: "Covalent hydrides", correct: false },
            { text: "Interstitial hydrides", correct: true },
            { text: "Metallic hydrides", correct: false },
        ]
    },

    
    
    
    {
        question: "What type of oxide do Group 2 metals typically form?",
        answers: [
            { text: "Acidic oxides", correct: false },
            { text: "Basic oxides", correct: true },
            { text: "Neutral oxides", correct: false },
            { text: "Amphoteric oxides", correct: false },
        ]
    },
    {
        question: "Which metal is extracted using the Hall-Héroult process?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Aluminum", correct: true },
            { text: "Calcium", correct: false },
            { text: "Potassium", correct: false },
        ]
    },
    {
        question: "What happens when Group 1 metals react with water?",
        answers: [
            { text: "They release oxygen gas", correct: false },
            { text: "They form acidic solutions", correct: false },
            { text: "They displace hydrogen gas and form alkaline solutions", correct: true },
            { text: "They form neutral salts", correct: false },
        ]
    },
    {
        question: "Which element forms amphoteric oxides?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: false },
            { text: "Aluminum", correct: true },
        ]
    },
    {
        question: "What is the energy required to remove an electron from an atom called?",
        answers: [
            { text: "Atomic radius", correct: false },
            { text: "Electron affinity", correct: false },
            { text: "Ionization energy", correct: true },
            { text: "Electronegativity", correct: false },
        ]
    },
    {
        question: "Which process is used to separate oxygen from air?",
        answers: [
            { text: "Electrolysis", correct: false },
            { text: "Heating to high temperature", correct: false },
            { text: "Fractional distillation", correct: true },
            { text: "Chemical reduction", correct: false },
        ]
    },
    {
        question: "Which oxide is considered neutral?",
        answers: [
            { text: "Carbon monoxide (CO)", correct: true },
            { text: "Carbon dioxide (CO2)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
            { text: "Sodium oxide (Na2O)", correct: false },
        ]
    },
    {
        question: "What type of hydride is formed when hydrogen reacts with highly reactive metals?",
        answers: [
            { text: "Ionic hydrides", correct: true },
            { text: "Covalent hydrides", correct: false },
            { text: "Interstitial hydrides", correct: false },
            { text: "Metallic hydrides", correct: false },
        ]
    },
    
    

    {
        question: "Which process is used to obtain sodium from molten NaCl?",
        answers: [
            { text: "Electrolysis", correct: true },
            { text: "Chemical reduction", correct: false },
            { text: "Fractional distillation", correct: false },
            { text: "Roasting", correct: false },
        ]
    },
    {
        question: "What is brine?",
        answers: [
            { text: "Molten sodium chloride", correct: false },
            { text: "Concentrated solution of NaCl in water", correct: true },
            { text: "Sodium oxide dissolved in water", correct: false },
            { text: "Pure sodium metal", correct: false },
        ]
    },
    {
        question: "What type of oxide is carbon dioxide (CO2)?",
        answers: [
            { text: "Basic oxide", correct: false },
            { text: "Neutral oxide", correct: false },
            { text: "Acidic oxide", correct: true },
            { text: "Amphoteric oxide", correct: false },
        ]
    },
    {
        question: "Which element is known for its high ionization energy?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Calcium", correct: false },
            { text: "Fluorine", correct: true },
        ]
    },
    {
        question: "Which oxide is formed from the complete combustion of carbon?",
        answers: [
            { text: "Carbon monoxide (CO)", correct: false },
            { text: "Carbon dioxide (CO2)", correct: true },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    {
        question: "What is the oxidation state of hydrogen when it forms ionic hydrides?",
        answers: [
            { text: "0", correct: false },
            { text: "+1", correct: false },
            { text: "-1", correct: true },
            { text: "-2", correct: false },
        ]
    },
    {
        question: "What is the primary source of oxygen in the atmosphere?",
        answers: [
            { text: "Photosynthesis", correct: true },
            { text: "Electrolysis of water", correct: false },
            { text: "Fractional distillation of air", correct: false },
            { text: "Combustion reactions", correct: false },
        ]
    },
    {
        question: "Which element belongs to Group 4 and is essential for life?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: true },
            { text: "Sodium", correct: false },
            { text: "Aluminum", correct: false },
        ]
    },
    {
        question: "What type of compound is formed when hydrogen reacts with transition metals?",
        answers: [
            { text: "Ionic hydrides", correct: false },
            { text: "Covalent hydrides", correct: false },
            { text: "Interstitial hydrides", correct: true },
            { text: "Metallic hydrides", correct: false },
        ]
    },
    {
        question: "Which element forms a poisonous gas that competes with oxygen during respiration?",
        answers: [
            { text: "Carbon dioxide (CO2)", correct: false },
            { text: "Carbon monoxide (CO)", correct: true },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    {
        question: "Which process is used to extract aluminum from its ore?",
        answers: [
            { text: "Down's Cell", correct: false },
            { text: "Survey process", correct: false },
            { text: "Hall-Héroult process", correct: true },
            { text: "Fractional distillation", correct: false },
        ]
    },
    {
        question: "What is formed when Group 1 metals react with water?",
        answers: [
            { text: "Hydroxides", correct: true },
            { text: "Oxides", correct: false },
            { text: "Peroxides", correct: false },
            { text: "Carbonates", correct: false },
        ]
    },
    {
        question: "Which gas is produced when carbon monoxide is burned in oxygen?",
        answers: [
            { text: "Carbon dioxide", correct: true },
            { text: "Carbon monoxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Ozone", correct: false },
        ]
    },
    {
        question: "Which element is known for forming covalent hydrides?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Calcium", correct: false },
            { text: "Carbon", correct: true },
            { text: "Potassium", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of an ionic hydride?",
        answers: [
            { text: "Water (H2O)", correct: false },
            { text: "Methane (CH4)", correct: false },
            { text: "Sodium hydride (NaH)", correct: true },
            { text: "Ammonia (NH3)", correct: false },
        ]
    },
    
    
    
    {
        question: "Which element is always found in its combined state in nature?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Sodium", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Calcium", correct: false },
        ]
    },
    {
        question: "What is the molten form of sodium chloride called when it is heated to a liquid state?",
        answers: [
            { text: "Brine", correct: false },
            { text: "Molten sodium chloride", correct: true },
            { text: "Sodium hydroxide", correct: false },
            { text: "Sodium oxide", correct: false },
        ]
    },
    {
        question: "Which of the following is a base?",
        answers: [
            { text: "Sodium oxide", correct: true },
            { text: "Sodium hydroxide", correct: false },
            { text: "Aluminum oxide", correct: false },
            { text: "Carbon dioxide", correct: false },
        ]
    },
    {
        question: "What happens when pure calcium reacts with water?",
        answers: [
            { text: "It forms calcium hydroxide and hydrogen gas", correct: true },
            { text: "It forms calcium oxide and water", correct: false },
            { text: "It forms calcium carbonate", correct: false },
            { text: "It does not react with water", correct: false },
        ]
    },
    {
        question: "What is the main source of sodium chloride (NaCl)?",
        answers: [
            { text: "Earth's crust", correct: false },
            { text: "Seawater", correct: true },
            { text: "Air", correct: false },
            { text: "Volcanic rocks", correct: false },
        ]
    },
    
    {
        question: "What is the process called when impurities are removed from bauxite to obtain pure aluminum oxide?",
        answers: [
            { text: "Reduction", correct: false },
            { text: "Roasting", correct: true },
            { text: "Electrolysis", correct: false },
            { text: "Fractional distillation", correct: false },
        ]
    },
    {
        question: "Which oxide is formed from an incomplete combustion of carbon?",
        answers: [
            { text: "Carbon dioxide (CO2)", correct: false },
            { text: "Carbon monoxide (CO)", correct: true },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    {
        question: "Which group of elements forms basic oxides when combined with oxygen?",
        answers: [
            { text: "Group 1 (Alkali metals)", correct: true },
            { text: "Group 16 (Chalcogens)", correct: false },
            { text: "Group 14 (Carbon group)", correct: false },
            { text: "Group 17 (Halogens)", correct: false },
        ]
    },
    {
        question: "Which hydride type has no charge and is typically formed with metalloids?",
        answers: [
            { text: "Ionic hydrides", correct: false },
            { text: "Covalent hydrides", correct: true },
            { text: "Interstitial hydrides", correct: false },
            { text: "Metallic hydrides", correct: false },
        ]
    },
    {
        question: "What is the chemical formula of aluminum oxide?",
        answers: [
            { text: "Al2O3", correct: true },
            { text: "AlO", correct: false },
            { text: "AlO2", correct: false },
            { text: "Al3O2", correct: false },
        ]
    },
    {
        question: "What type of oxides do metalloids generally form?",
        answers: [
            { text: "Acidic oxides", correct: false },
            { text: "Basic oxides", correct: false },
            { text: "Amphoteric oxides", correct: true },
            { text: "Neutral oxides", correct: false },
        ]
    },
    {
        question: "Which gas is displaced when Group 1 metals react with water?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: false },
        ]
    },
    {
        question: "Which process is used to separate liquids with close boiling points?",
        answers: [
            { text: "Roasting", correct: false },
            { text: "Fractional distillation", correct: true },
            { text: "Electrolysis", correct: false },
            { text: "Chemical reduction", correct: false },
        ]
    },
    {
        question: "Which element is a Group 3 element found in the earth's crust?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Aluminum", correct: true },
            { text: "Calcium", correct: false },
            { text: "Carbon", correct: false },
        ]
    },

    
    {
        question: "What is brine?",
        answers: [
            { text: "Molten sodium chloride", correct: false },
            { text: "Concentrated solution of NaCl in water", correct: true },
            { text: "Sodium oxide dissolved in water", correct: false },
            { text: "Pure sodium metal", correct: false },
        ]
    },
    
    
    
    {
        question: "Which element is known for its high ionization energy?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Calcium", correct: false },
            { text: "Fluorine", correct: true },
        ]
    },
    
    {
        question: "Which oxide is formed from the complete combustion of carbon?",
        answers: [
            { text: "Carbon monoxide (CO)", correct: false },
            { text: "Carbon dioxide (CO2)", correct: true },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    
    
    {
        question: "What is the oxidation state of hydrogen when it forms ionic hydrides?",
        answers: [
            { text: "0", correct: false },
            { text: "+1", correct: false },
            { text: "-1", correct: true },
            { text: "-2", correct: false },
        ]
    },
    
    
   
    
    {
        question: "Which element forms a poisonous gas that competes with oxygen during respiration?",
        answers: [
            { text: "Carbon dioxide (CO2)", correct: false },
            { text: "Carbon monoxide (CO)", correct: true },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    
    {
        question: "Which process is used to extract aluminum from its ore?",
        answers: [
            { text: "Down's Cell", correct: false },
            { text: "Survey process", correct: false },
            { text: "Hall-Héroult process", correct: true },
            { text: "Fractional distillation", correct: false },
        ]
    },
    
    
    {
        question: "What is formed when Group 1 metals react with water?",
        answers: [
            { text: "Hydroxides", correct: true },
            { text: "Oxides", correct: false },
            { text: "Peroxides", correct: false },
            { text: "Carbonates", correct: false },
        ]
    },
    
    
    {
        question: "Which gas is produced when carbon monoxide is burned in oxygen?",
        answers: [
            { text: "Carbon dioxide", correct: true },
            { text: "Carbon monoxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Ozone", correct: false },
        ]
    },
    
    {
        question: "Which element is known for forming covalent hydrides?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Calcium", correct: false },
            { text: "Carbon", correct: true },
            { text: "Potassium", correct: false },
        ]
    },
    
    
    {
        question: "Which of the following is an example of an ionic hydride?",
        answers: [
            { text: "Water (H2O)", correct: false },
            { text: "Methane (CH4)", correct: false },
            { text: "Sodium hydride (NaH)", correct: true },
            { text: "Ammonia (NH3)", correct: false },
        ]
    },
    
    
    {
        question: "Which metal is extracted using the Hall-Héroult process?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Calcium", correct: false },
            { text: "Aluminum", correct: true },
            { text: "Potassium", correct: false },
        ]
    },
    
    
    {
        question: "Which of the following is a metalloid?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Silicon", correct: true },
            { text: "Calcium", correct: false },
            { text: "Carbon", correct: false },
        ]
    },
    
    {
        question: "Which gas is produced when aluminum reacts with hydrochloric acid?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: false },
        ]
    },
    
    {
        question: "Which metal forms a basic oxide when it reacts with oxygen?",
        answers: [
            { text: "Sulfur", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Calcium", correct: true },
            { text: "Chlorine", correct: false },
        ]
    },
    
    
    {
        question: "Which of the following is an example of an amphoteric oxide?",
        answers: [
            { text: "Sodium oxide", correct: false },
            { text: "Calcium oxide", correct: false },
            { text: "Aluminum oxide", correct: true },
            { text: "Carbon dioxide", correct: false },
        ]
    },
    
    
    {
        question: "Which element forms an acidic oxide when it reacts with oxygen?",
        answers: [
            { text: "Sodium", correct: false },
            { text: "Calcium", correct: false },
            { text: "Sulfur", correct: true },
            { text: "Potassium", correct: false },
        ]
    },
    
    
    {
        question: "Which type of oxide is formed by the combustion of sulfur?",
        answers: [
            { text: "Basic oxide", correct: false },
            { text: "Acidic oxide", correct: true },
            { text: "Neutral oxide", correct: false },
            { text: "Amphoteric oxide", correct: false },
        ]
    },
    
    
    {
        question: "Which metal reacts vigorously with water to produce hydrogen gas?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Sodium", correct: true },
            { text: "Iron", correct: false },
        ]
    },
    
    
    {
        question: "What is the primary impurity found in bauxite?",
        answers: [
            { text: "Silica", correct: true },
            { text: "Iron oxides", correct: false },
            { text: "Calcium carbonate", correct: false },
            { text: "Magnesium oxide", correct: false },
        ]
    },
    
    
    {
        question: "Which element forms a poisonous gas that competes with oxygen during respiration?",
        answers: [
            { text: "Carbon monoxide (CO)", correct: true },
            { text: "Carbon dioxide (CO2)", correct: false },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    
    {
        question: "Which of the following is an example of a neutral oxide?",
        answers: [
            { text: "Carbon monoxide (CO)", correct: true },
            { text: "Carbon dioxide (CO2)", correct: false },
            { text: "Sodium oxide (Na2O)", correct: false },
            { text: "Aluminum oxide (Al2O3)", correct: false },
        ]
    },
    
    {
        question: "Which group of elements includes those that are amphoteric in nature?",
        answers: [
            { text: "Group 1 (Alkali metals)", correct: false },
            { text: "Group 2 (Alkaline earth metals)", correct: false },
            { text: "Group 3 (Scandium group)", correct: false },
            { text: "Group 13 (Boron group)", correct: true },
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
