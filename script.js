const quizData = [
  {
    question: "How are your people skills?",
    options: [
      { text: "Excellent", type: "Alpha" },
      { text: "Good", type: "Beta" },
      { text: "Average", type: "Sigma" },
      { text: "Poor", type: "Omega" },
      { text: "Great when needed", type: "Gamma" },
      { text: "Neutral", type: "Delta" },
      { text: "I avoid people", type: "Zeta" }
    ]
  },
  {
    question: "Are you a pushover?",
    options: [
      { text: "Yes, sometimes", type: "Alpha" },
      { text: "Not really", type: "Beta" },
      { text: "I don't think so", type: "Sigma" },
      { text: "I try to be, but not always", type: "Omega" },
      { text: "Not at all", type: "Gamma" },
      { text: "Occasionally", type: "Delta" },
      { text: "I avoid confrontation", type: "Zeta" }
    ]
  },
  {
    question: "There’s an attractive person of your preferred sex sitting alone at a bar you frequent. What do you do?",
    options: [
      { text: "I approach them confidently", type: "Alpha" },
      { text: "I wait for them to notice me", type: "Beta" },
      { text: "I observe from a distance", type: "Sigma" },
      { text: "I stay to myself and enjoy my drink", type: "Omega" },
      { text: "I think about it but don't act", type: "Gamma" },
      { text: "I leave the bar", type: "Delta" },
      { text: "I send a friend to talk to them", type: "Zeta" }
    ]
  },
  {
    question: "What were you like in school? (If you are still in school make everything present tense)",
    options: [
      { text: "Leader, always active", type: "Alpha" },
      { text: "Supportive, always helping others", type: "Beta" },
      { text: "Focused on my own work", type: "Sigma" },
      { text: "Quiet and reserved", type: "Omega" },
      { text: "Creative and free-spirited", type: "Gamma" },
      { text: "Organized and diligent", type: "Delta" },
      { text: "Independent, avoided groups", type: "Zeta" }
    ]
  },
  {
    question: "What is your MBTI type?",
    options: [
      { text: "ENTJ", type: "Alpha" },
      { text: "ISFJ", type: "Beta" },
      { text: "INTP", type: "Sigma" },
      { text: "INFP", type: "Omega" },
      { text: "ESTP", type: "Gamma" },
      { text: "ISTJ", type: "Delta" },
      { text: "ENFP", type: "Zeta" }
    ]
  },
  {
    question: "Are you an extrovert or introvert?",
    options: [
      { text: "Extrovert", type: "Alpha" },
      { text: "Introvert", type: "Beta" },
      { text: "A mix of both", type: "Sigma" },
      { text: "I prefer to stay alone", type: "Omega" },
      { text: "I enjoy groups but also need time alone", type: "Gamma" },
      { text: "Depends on the situation", type: "Delta" },
      { text: "I'm indifferent", type: "Zeta" }
    ]
  },
  {
    question: "Someone insults you in front of a group of people. Some people start laughing. What do you do?",
    options: [
      { text: "Defend myself and stand tall", type: "Alpha" },
      { text: "Laugh it off", type: "Beta" },
      { text: "Stay quiet and move away", type: "Sigma" },
      { text: "Get upset but stay composed", type: "Omega" },
      { text: "Try to talk to them calmly", type: "Gamma" },
      { text: "Ignore them", type: "Delta" },
      { text: "Pretend I didn’t hear it", type: "Zeta" }
    ]
  },
  {
    question: "Do you dream of labor?",
    options: [
      { text: "Yes, I find fulfillment in work", type: "Alpha" },
      { text: "I work to live, not live to work", type: "Beta" },
      { text: "Only if it's something I enjoy", type: "Sigma" },
      { text: "I prefer leisure over work", type: "Omega" },
      { text: "I work hard, but balance is key", type: "Gamma" },
      { text: "I avoid excessive work", type: "Delta" },
      { text: "I’m indifferent about it", type: "Zeta" }
    ]
  },
  {
    question: "Are you athletic?",
    options: [
      { text: "Yes, very athletic", type: "Alpha" },
      { text: "I stay active when possible", type: "Beta" },
      { text: "I enjoy some physical activities", type: "Sigma" },
      { text: "I prefer a more sedentary lifestyle", type: "Omega" },
      { text: "I engage in physical activities occasionally", type: "Gamma" },
      { text: "I don't care much for athletics", type: "Delta" },
      { text: "I'm not athletic", type: "Zeta" }
    ]
  },
  {
    question: "Pick one thing from this random list of things",
    options: [
      { text: "A book", type: "Alpha" },
      { text: "A painting", type: "Beta" },
      { text: "A video game", type: "Sigma" },
      { text: "A pet", type: "Omega" },
      { text: "A concert ticket", type: "Gamma" },
      { text: "A tool", type: "Delta" },
      { text: "A gadget", type: "Zeta" }
    ]
  },
  {
    question: "Pick a subject",
    options: [
      { text: "Leadership", type: "Alpha" },
      { text: "Psychology", type: "Beta" },
      { text: "Philosophy", type: "Sigma" },
      { text: "Art", type: "Omega" },
      { text: "Science", type: "Gamma" },
      { text: "History", type: "Delta" },
      { text: "Technology", type: "Zeta" }
    ]
  },
  {
    question: "Pick a video game",
    options: [
      { text: "Strategy game", type: "Alpha" },
      { text: "Puzzle game", type: "Beta" },
      { text: "Role-playing game", type: "Sigma" },
      { text: "Action game", type: "Omega" },
      { text: "Simulation game", type: "Gamma" },
      { text: "Adventure game", type: "Delta" },
      { text: "Fighting game", type: "Zeta" }
    ]
  },
  {
    question: "Pick an anime",
    options: [
      { text: "Attack on Titan", type: "Alpha" },
      { text: "My Hero Academia", type: "Beta" },
      { text: "Death Note", type: "Sigma" },
      { text: "Naruto", type: "Omega" },
      { text: "One Piece", type: "Gamma" },
      { text: "Hunter x Hunter", type: "Delta" },
      { text: "Sword Art Online", type: "Zeta" }
    ]
  },
  {
    question: "What do you think your best quality is?",
    options: [
      { text: "Leadership", type: "Alpha" },
      { text: "Empathy", type: "Beta" },
      { text: "Independence", type: "Sigma" },
      { text: "Creativity", type: "Omega" },
      { text: "Practicality", type: "Gamma" },
      { text: "Reliability", type: "Delta" },
      { text: "Calmness", type: "Zeta" }
    ]
  },
  {
    question: "What do you think your worst quality is?",
    options: [
      { text: "Stubbornness", type: "Alpha" },
      { text: "Insecurity", type: "Beta" },
      { text: "Isolation", type: "Sigma" },
      { text: "Pessimism", type: "Omega" },
      { text: "Impatience", type: "Gamma" },
      { text: "Laziness", type: "Delta" },
      { text: "Apathy", type: "Zeta" }
    ]
  },
  {
    question: "Pick an object in my room currently",
    options: [
      { text: "A lamp", type: "Alpha" },
      { text: "A chair", type: "Beta" },
      { text: "A laptop", type: "Sigma" },
      { text: "A book", type: "Omega" },
      { text: "A plant", type: "Gamma" },
      { text: "A mirror", type: "Delta" },
      { text: "A clock", type: "Zeta" }
    ]
  },
  {
    question: "Your waiter messes up your order. What do you do?",
    options: [
      { text: "Politely tell them", type: "Alpha" },
      { text: "Stay calm and wait", type: "Beta" },
      { text: "Get upset and express frustration", type: "Sigma" },
      { text: "Just deal with it", type: "Omega" },
      { text: "Ask for compensation", type: "Gamma" },
      { text: "Ignore it", type: "Delta" },
      { text: "Leave a complaint", type: "Zeta" }
    ]
  },
  {
    question: "Ideal date?",
    options: [
      { text: "Dinner and a movie", type: "Alpha" },
      { text: "A walk in the park", type: "Beta" },
      { text: "An adventure activity", type: "Sigma" },
      { text: "A quiet night in", type: "Omega" },
      { text: "Something creative, like painting", type: "Gamma" },
      { text: "Something spontaneous", type: "Delta" },
      { text: "A fun outing with friends", type: "Zeta" }
    ]
  },
  {
    question: "What do you think you’ll get?",
    options: [
      { text: "Surprise me!", type: "Alpha" },
      { text: "Something unexpected", type: "Beta" },
      { text: "The usual", type: "Sigma" },
      { text: "Nothing, I'm curious", type: "Omega" },
      { text: "Something exciting", type: "Gamma" },
      { text: "I don't know", type: "Delta" },
      { text: "A challenge", type: "Zeta" }
    ]
  },
  {
    question: "What do you think of this quiz? (This WILL affect your result. Choose wisely!)",
    options: [
      { text: "Fun and engaging", type: "Alpha" },
      { text: "Interesting", type: "Beta" },
      { text: "Informative", type: "Sigma" },
      { text: "Boring", type: "Omega" },
      { text: "Just okay", type: "Gamma" },
      { text: "Confusing", type: "Delta" },
      { text: "I have no opinion", type: "Zeta" }
    ]
  }
];

  
  // State Variables
  let currentQuestionIndex = 0;
  let counter=0;
let scores = { Alpha: 0, Beta: 0, Sigma: 0, Omega: 0, Gamma: 0, Delta: 0, Zeta: 0 };

// Select Elements
const landingSection = document.getElementById("landing");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const resultType = document.getElementById("result-type");
const resultDescription = document.getElementById("result-description");
const resultImg = document.getElementById("result-img");


// Start Quiz
function startQuiz() {
    counter=0;
    currentQuestionIndex = 0;
    scores = { Alpha: 0, Beta: 0, Sigma: 0, Omega: 0, Gamma: 0, Delta: 0, Zeta: 0 };
  landingSection.classList.add("hidden");
  landingSection.classList.remove("visible");
  quizSection.classList.add("visible");
  quizSection.classList.remove("hidden");
  loadQuestion();
}

// Load Current Question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
  
    optionsContainer.innerHTML = ""; // Clear previous options
    currentQuestion.options.forEach((option, index) => {
      // Create a div to wrap label and radio button for better styling
      const optionWrapper = document.createElement("div");
      optionWrapper.classList.add("option-wrapper");
  
      // Create a radio button
      const radioButton = document.createElement("input");
      radioButton.type = "radio"; // Change to radio button
      radioButton.name = "option"; // All radio buttons share the same name for grouping
      radioButton.value = option.type; // Store the type as value
      radioButton.id = `option-${index}`;
      radioButton.onclick = () => selectOption(option.type);
  
      // Create a label for the radio button
      const label = document.createElement("label");
      label.setAttribute("for", radioButton.id);
      label.innerText = option.text;
  
      // Append the radio button and label to the wrapper
      optionWrapper.appendChild(radioButton);
      optionWrapper.appendChild(label);
      
      // Append the wrapper to the container
      optionsContainer.appendChild(optionWrapper);
    });
  }

// Select Option
function selectOption(type) {
  scores[type]++;
  counter++;
  document.getElementById("next-btn").style.display = "block";
}

// Move to Next Question or Show Results
function nextQuestion() {
  currentQuestionIndex++;
  document.getElementById("next-btn").style.display = "block";
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// Show Results
function showResults() {
  quizSection.classList.add("hidden");
  quizSection.classList.remove("visible");
  resultSection.classList.add("visible");
  resultSection.classList.remove("hidden");
  if(counter){
    console.log(counter);
    const personality = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    resultType.innerText = personality;
    const descriptions = {
        Alpha: "You're a natural leader with confidence and charisma.",
        Beta: "You're a team player who values harmony and cooperation.",
        Sigma: "You're independent and value personal freedom above all else.",
        Omega: "You're introverted and introspective, preferring solitude.",
        Gamma: "You're balanced and adaptable, handling both work and play well.",
        Delta: "You're practical and reliable, with a grounded approach to life.",
        Zeta: "You're laid-back and indifferent, often detached from the mainstream."
      };
    
      resultDescription.innerText = descriptions[personality];
      
      resultImg.src = `assets/result-icons/${personality.toLowerCase()}.jpeg`;
      
  }
  else{
    
    resultType.innerText = "....";
    resultDescription.innerText = "No options selected Please try again.";
    resultImg.src = `assets/result-icons/default.png`

  }

  

 
}
function restartQuiz(){

    location.reload();
}
        
