const questions = [
    {
        question: "What did the Bohr theory explain about the arrangement of electrons in an atom?",
        answers: [
            { text: "Electrons are in elliptical orbits", correct: false },
            { text: "Electrons are in circular orbits", correct: true },
            { text: "Electrons are in random orbits", correct: false },
            { text: "Electrons are in spiral orbits", correct: false },
        ]
    },
    {
        question: "Which quantum number describes the energy level where electrons are located?",
        answers: [
            { text: "Azimuthal quantum number", correct: false },
            { text: "Spin quantum number", correct: false },
            { text: "Principal quantum number", correct: true },
            { text: "Magnetic quantum number", correct: false },
        ]
    },
    {
        question: "What principle states that no two electrons in the same orbital can have identical values for the four quantum numbers?",
        answers: [
            { text: "Hund's rule", correct: false },
            { text: "Pauli exclusion principle", correct: true },
            { text: "Aufbau principle", correct: false },
            { text: "Bohr principle", correct: false },
        ]
    },
    {
        question: "What shape is associated with the s orbital?",
        answers: [
            { text: "Double dumbbells", correct: false },
            { text: "Complex", correct: false },
            { text: "Dumbbells", correct: false },
            { text: "Spherical", correct: true },
        ]
    },
    {
        question: "Which theory was discarded because it ran contrary to the Heisenberg uncertainty principle?",
        answers: [
            { text: "Modern theory of electron management", correct: false },
            { text: "Bohr theory", correct: true },
            { text: "Aufbau principle", correct: false },
            { text: "Pauli exclusion principle", correct: false },
        ]
    },
    {
        question: "According to the Heisenberg uncertainty principle, if the position of an electron is known with great accuracy, what can be said about its velocity?",
        answers: [
            { text: "Its velocity is also known with great accuracy", correct: false },
            { text: "Its velocity is unknown", correct: false },
            { text: "Its velocity is known with moderate accuracy", correct: false },
            { text: "Its velocity is known with far less accuracy", correct: true },
        ]
    },
    {
        question: "Which quantum number describes the sub shell or sub energy level of the shell and the shape of orbitals?",
        answers: [
            { text: "Principal quantum number", correct: false },
            { text: "Magnetic quantum number", correct: false },
            { text: "Azimuthal quantum number", correct: true },
            { text: "Spin quantum number", correct: false },
        ]
    },
    {
        question: "What is the value of the speed of light (c) used in the energy difference formula?",
        answers: [
            { text: "3.0 × 10⁶ m/s", correct: false },
            { text: "3.0 × 10⁸ m/s", correct: true },
            { text: "3.0 × 10¹⁰ m/s", correct: false },
            { text: "3.0 × 10⁴ m/s", correct: false },
        ]
    },
    {
        question: "What is the value of Planck's constant (h) used in the energy difference formula?",
        answers: [
            { text: "6.625 × 10⁻³⁴", correct: true },
            { text: "6.625 × 10⁻³²", correct: false },
            { text: "6.625 × 10⁻³⁶", correct: false },
            { text: "6.625 × 10⁻³⁰", correct: false },
        ]
    },
    {
        question: "Which orbital shape is described as dumbbells?",
        answers: [
            { text: "s orbital", correct: false },
            { text: "p orbital", correct: true },
            { text: "d orbital", correct: false },
            { text: "f orbital", correct: false },
        ]
    },
    {
        question: "What is the principal quantum number when the azimuthal quantum number (L) is 2?",
        answers: [
            { text: "n = 1", correct: false },
            { text: "n = 2", correct: false },
            { text: "n = 3", correct: true },
            { text: "n = 4", correct: false },
        ]
    },
    {
        question: "What is another name for the azimuthal quantum number?",
        answers: [
            { text: "Principal quantum number", correct: false },
            { text: "Spin quantum number", correct: false },
            { text: "Magnetic quantum number", correct: false },
            { text: "Orbital quantum number", correct: true },
        ]
    },
    {
        question: "What describes the electrons in orbitals in terms of spin?",
        answers: [
            { text: "Principal quantum number", correct: false },
            { text: "Azimuthal quantum number", correct: false },
            { text: "Spin quantum number", correct: true },
            { text: "Magnetic quantum number", correct: false },
        ]
    },
    {
        question: "Which rule states that orbitals are filled singly before pairing in a degenerate orbital?",
        answers: [
            { text: "Pauli exclusion principle", correct: false },
            { text: "Aufbau principle", correct: false },
            { text: "Hund's rule", correct: true },
            { text: "Bohr principle", correct: false },
        ]
    },
    {
        question: "What is the shape of the f orbital?",
        answers: [
            { text: "Dumbbells", correct: false },
            { text: "Double dumbbells", correct: false },
            { text: "Complex", correct: true },
            { text: "Spherical", correct: false },
        ]
    },
    {
        question: "What is the nodal plane?",
        answers: [
            { text: "The region where the probability of finding an electron is maximum", correct: false },
            { text: "The region where the probability of finding an electron is zero", correct: true },
            { text: "The region where the probability of finding an electron is uncertain", correct: false },
            { text: "The region where the probability of finding an electron is minimum", correct: false },
        ]
    },
    {
        question: "Which quantum number describes the orbital where an electron resides?",
        answers: [
            { text: "Principal quantum number", correct: false },
            { text: "Azimuthal quantum number", correct: false },
            { text: "Magnetic quantum number", correct: true },
            { text: "Spin quantum number", correct: false },
        ]
    },
    {
        question: "What is the value of the azimuthal quantum number (L) when n = 4?",
        answers: [
            { text: "0, 1, 2", correct: false },
            { text: "0, 1, 2, 3", correct: true },
            { text: "0, 1, 2, 3, 4", correct: false },
            { text: "0, 1, 2, 3, 4, 5", correct: false },
        ]
    },
    {
        question: "Which principle states that orbitals of lower energy must be filled first before electrons will enter orbitals of higher energy?",
        answers: [
            { text: "Hund's rule", correct: false },
            { text: "Pauli exclusion principle", correct: false },
            { text: "Aufbau principle", correct: true },
            { text: "Bohr principle", correct: false },
        ]
    },
    {
        question: "What is hybridization?",
        answers: [
            { text: "Formation of new hybrid orbital from two or more orbitals having the same energy", correct: false },
            { text: "Formation of new hybrid orbital from two or more orbitals having different energy", correct: true },
            { text: "Formation of new hybrid orbital from two or more orbitals having the same shape", correct: false },
            { text: "Formation of new hybrid orbital from two or more orbitals having different shapes", correct: false },
        ]
    },
    {
        question: "What is the need for hybridization in carbon?",
        answers: [
            { text: "Due to its divalency", correct: false },
            { text: "Due to its tetravalency", correct: true },
            { text: "Due to its trivalency", correct: false },
            { text: "Due to its pentavalency", correct: false },
        ]
    },
    {
        question: "Which type of bond is formed by the overlapping of sp³ orbitals of carbon and 1s hydrogen?",
        answers: [
            { text: "Pi bond", correct: false },
            { text: "Sigma bond", correct: true },
            { text: "Delta bond", correct: false },
            { text: "Omega bond", correct: false },
        ]
    },
    
    
    {
        question: "What did Bohr's theory use to explain the energy difference when an electron moves between energy levels?",
        answers: [
            { text: "The mass of the electron", correct: false },
            { text: "The speed of light and Planck's constant", correct: true },
            { text: "The charge of the electron", correct: false },
            { text: "The volume of the nucleus", correct: false },
        ]
    },
    {
        question: "In the Bohr model, what happens when an electron leaves its excited state?",
        answers: [
            { text: "It absorbs energy", correct: false },
            { text: "It radiates energy as light", correct: true },
            { text: "It loses its charge", correct: false },
            { text: "It splits into two electrons", correct: false },
        ]
    },
    {
        question: "What is the modern theory's view on the nature of electrons?",
        answers: [
            { text: "Electrons are like particles only", correct: false },
            { text: "Electrons are like waves only", correct: false },
            { text: "Electrons are wave-like in character", correct: true },
            { text: "Electrons do not exist", correct: false },
        ]
    },
    {
        question: "According to the modern theory, electrons are housed in what?",
        answers: [
            { text: "Nuclei", correct: false },
            { text: "Shells", correct: false },
            { text: "Orbitals", correct: true },
            { text: "Atoms", correct: false },
        ]
    },
    {
        question: "How is the movement from one energy level to another described?",
        answers: [
            { text: "Continuous", correct: false },
            { text: "Random", correct: false },
            { text: "Quantized", correct: true },
            { text: "Erratic", correct: false },
        ]
    },
    {
        question: "Which quantum number describes the shape of orbitals?",
        answers: [
            { text: "Principal quantum number", correct: false },
            { text: "Azimuthal quantum number", correct: true },
            { text: "Magnetic quantum number", correct: false },
            { text: "Spin quantum number", correct: false },
        ]
    },
    {
        question: "What is the azimuthal quantum number for p orbitals?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ]
    },
    {
        question: "What is the shape of d orbitals?",
        answers: [
            { text: "Dumbbells", correct: false },
            { text: "Double dumbbells", correct: true },
            { text: "Complex", correct: false },
            { text: "Various shapes including cloverleaf", correct: false },
        ]
    },
    {
        question: "How are orbitals filled according to the n+L rule?",
        answers: [
            { text: "Orbitals with higher n values are filled first", correct: false },
            { text: "Orbitals with lower n+L values are filled first", correct: true },
            { text: "Orbitals are filled randomly", correct: false },
            { text: "All orbitals are filled simultaneously", correct: false },
        ]
    },
    {
        question: "What determines the order in which orbitals are filled if they have the same n+L value?",
        answers: [
            { text: "The orbital with the higher n value is filled first", correct: false },
            { text: "The orbital with the lower n value is filled first", correct: true },
            { text: "The orbital with the higher L value is filled first", correct: false },
            { text: "The orbital with the lower L value is filled first", correct: false },
        ]
    },
    {
        question: "What describes the region around the nucleus where an electron is likely to be found?",
        answers: [
            { text: "Shell", correct: true },
            { text: "Core", correct: false },
            { text: "Proton", correct: false },
            { text: "Photon", correct: false },
        ]
    },
    {
        question: "Which principle is also known as the Indeterminacy principle?",
        answers: [
            { text: "Pauli exclusion principle", correct: false },
            { text: "Hund's rule", correct: false },
            { text: "Heisenberg uncertainty principle", correct: true },
            { text: "Aufbau principle", correct: false },
        ]
    },
    {
        question: "Which type of hybrid orbitals are displayed at the edges of a tetrahedron?",
        answers: [
            { text: "sp", correct: false },
            { text: "sp²", correct: false },
            { text: "sp³", correct: true },
            { text: "sp³d", correct: false },
        ]
    },
    {
        question: "What bond is formed by end-to-end overlap?",
        answers: [
            { text: "Pi bond", correct: false },
            { text: "Sigma bond", correct: true },
            { text: "Delta bond", correct: false },
            { text: "Omega bond", correct: false },
        ]
    },
    {
        question: "What type of hybridization is present in alkenes?",
        answers: [
            { text: "sp", correct: false },
            { text: "sp²", correct: true },
            { text: "sp³", correct: false },
            { text: "sp³d", correct: false },
        ]
    },
    {
        question: "What is the bond angle in a trigonal planar structure?",
        answers: [
            { text: "109.5°", correct: false },
            { text: "120°", correct: true },
            { text: "180°", correct: false },
            { text: "90°", correct: false },
        ]
    },
    {
        question: "What is the bond angle in a tetrahedral structure?",
        answers: [
            { text: "90°", correct: false },
            { text: "120°", correct: false },
            { text: "109.5°", correct: true },
            { text: "180°", correct: false },
        ]
    },
    {
        question: "Which bond is formed by the side-to-side overlap of p orbitals?",
        answers: [
            { text: "Sigma bond", correct: false },
            { text: "Pi bond", correct: true },
            { text: "Delta bond", correct: false },
            { text: "Omega bond", correct: false },
        ]
    },
    
    
    {
        question: "Which hybridization is associated with a trigonal planar structure?",
        answers: [
            { text: "sp", correct: false },
            { text: "sp²", correct: true },
            { text: "sp³", correct: false },
            { text: "sp³d", correct: false },
        ]
    },
    
    
    
    
    {
        question: "Which principle states that no orbital can contain more than two electrons?",
        answers: [
            { text: "Hund's rule", correct: false },
            { text: "Pauli exclusion principle", correct: true },
            { text: "Aufbau principle", correct: false },
            { text: "Bohr principle", correct: false },
        ]
    },
    
    {
        question: "How many sigma bonds are there in ethene (C2H4)?",
        answers: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "7", correct: false },
        ]
    },
    
    {
        question: "Which principle is used to determine the order of filling electrons in orbitals?",
        answers: [
            { text: "Hund's rule", correct: false },
            { text: "Pauli exclusion principle", correct: false },
            { text: "Aufbau principle", correct: true },
            { text: "Bohr principle", correct: false },
        ]
    },
    
    {
        question: "Which molecular orbital has lower energy: bonding or anti-bonding?",
        answers: [
            { text: "Anti-bonding", correct: false },
            { text: "Bonding", correct: true },
            { text: "They have the same energy", correct: false },
            { text: "It depends on the atom", correct: false },
        ]
    },
    {
        question: "What type of electrons do free radicals contain?",
        answers: [
            { text: "Even number of valence electrons", correct: false },
            { text: "Odd number of valence electrons", correct: true },
            { text: "No valence electrons", correct: false },
            { text: "Paired valence electrons", correct: false },
        ]
    },
    {
        question: "Which principle states that orbitals of lower energy are filled first?",
        answers: [
            { text: "Hund's rule", correct: false },
            { text: "Pauli exclusion principle", correct: false },
            { text: "Aufbau principle", correct: true },
            { text: "Bohr principle", correct: false },
        ]
    },
    {
        question: "What describes the distribution of electrons in the orbitals of atoms?",
        answers: [
            { text: "Electron cloud", correct: false },
            { text: "Electron configuration", correct: true },
            { text: "Electron mass", correct: false },
            { text: "Electron charge", correct: false },
        ]
    },
    {
        question: "In ethene (C2H4), what types of bonds are present?",
        answers: [
            { text: "4 sigma C-H bonds, 1 sigma C-C bond, 1 pi C-C bond", correct: true },
            { text: "4 pi C-H bonds, 1 pi C-C bond, 1 sigma C-C bond", correct: false },
            { text: "4 sigma C-C bonds, 1 pi C-H bond", correct: false },
            { text: "4 pi C-C bonds, 1 sigma C-H bond", correct: false },
        ]
    },
    
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
