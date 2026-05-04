const quizQuestions = [
  {
    question: "Which sounds most interesting?",
    options: [
      { text: "Building websites and apps", major: "WebProgrammingDesign" },
      { text: "Designing user experiences", major: "UXDesign" },
      { text: "Analyzing data", major: "DATA" }
    ]
  },
  {
    question: "What kind of work do you enjoy more?",
    options: [
      { text: "Coding and security", major: "Cybersecurity" },
      { text: "Visual creativity", major: "GameDevelopment" },
      { text: "Networks and infrastructure", major: "CINET" }
    ]
  },
  {
    question: "Which environment sounds best?",
    options: [
      { text: "Games and simulations", major: "GameDevelopment" },
      { text: "Creative digital experiences", major: "ThemedEntertainmentDesign" },
      { text: "Software and IT systems", major: "CIT" }
    ]
  },
  {
    question: "What type of projects would you rather do?",
    options: [
      { text: "Front-end design and interactive websites", major: "WebProgrammingDesign" },
      { text: "3D visuals and motion work", major: "Animation" },
      { text: "User-centered product design", major: "UXDesign" }
    ]
  },
  {
    question: "What is more satisfying?",
    options: [
      { text: "Making something look great", major: "Animation" },
      { text: "Making something easy to use", major: "UXDesign" },
      { text: "Making something work reliably", major: "CIT" }
    ]
  },
  {
    question: "Which class sounds better?",
    options: [
      { text: "Web programming and databases", major: "WebProgrammingDesign" },
      { text: "3D modeling and rendering", major: "GameDevelopment" },
      { text: "Network setup and administration", major: "CINET" }
    ]
  },
  {
    question: "What do you prefer solving?",
    options: [
      { text: "User problems and interface issues", major: "UXDesign" },
      { text: "Security threats and vulnerabilities", major: "Cybersecurity" },
      { text: "Data patterns and trends", major: "DATA" }
    ]
  },
  {
    question: "Which project sounds coolest?",
    options: [
      { text: "Designing a game world", major: "GameDevelopment" },
      { text: "Creating an immersive themed exhibit", major: "ThemedEntertainmentDesign" },
      { text: "Building an analytics dashboard", major: "DATA" }
    ]
  },
  {
    question: "What work style fits you best?",
    options: [
      { text: "Visual and artistic", major: "Animation" },
      { text: "Logical and technical", major: "CIT" },
      { text: "Research-focused and user-centered", major: "UXDesign" }
    ]
  },
  {
    question: "Which final outcome sounds best?",
    options: [
      { text: "A polished website", major: "WebProgrammingDesign" },
      { text: "A secure system", major: "Cybersecurity" },
      { text: "A fun interactive experience", major: "ThemedEntertainmentDesign" }
    ]
  }
];

let currentQuestion = 0;
let selectedMajors = [];

document.addEventListener("DOMContentLoaded", () => {
  const quizModalEl = document.getElementById("quizModal");
  const dataModalEl = document.getElementById("dataModal");
  const questionEl = document.getElementById("quizQuestion");
  const optionsEl = document.getElementById("quizOptions");
  const prevBtn = document.getElementById("quizPrev");
  const nextBtn = document.getElementById("quizNext");

  const quizModal = bootstrap.Modal.getOrCreateInstance(quizModalEl);
  const dataModal = bootstrap.Modal.getOrCreateInstance(dataModalEl);

  function renderQuestion() {
    const q = quizQuestions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-outline-primary";
      btn.textContent = option.text;
      btn.setAttribute("aria-pressed", "false");

      if (selectedMajors[currentQuestion] === option.major) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      }

      btn.addEventListener("click", () => {
        selectedMajors[currentQuestion] = option.major;

        optionsEl.querySelectorAll("button").forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        nextBtn.disabled = false;
      });

      optionsEl.appendChild(btn);
    });

    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next";
    nextBtn.disabled = !selectedMajors[currentQuestion];
  }

  function getResultMajor() {
    const counts = {};
    for (const key of selectedMajors) {
      if (!key) continue;
      counts[key] = (counts[key] || 0) + 1;
    }

    const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return ranked[0]?.[0] || null;
  }

  function showResultMajor() {
    const bestMajorKey = getResultMajor();
    const major = bestMajorKey ? window.majorData?.[bestMajorKey] : null;

    quizModal.hide();

    setTimeout(() => {
      const titleEl = document.getElementById("dataModalLabel");
      const accordionEl = document.getElementById("accordionMajorInfo");

      if (!major) {
        titleEl.textContent = "Major";
        accordionEl.innerHTML = "<p>Course data not found for this major.</p>";
        dataModal.show();
        return;
      }

      titleEl.textContent = `Courses required for the ${major.title} are as follows:`;
      accordionEl.innerHTML = major.content;
      dataModal.show();
    }, 300);
  }

  prevBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestion < quizQuestions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      showResultMajor();
    }
  });

  quizModalEl.addEventListener("show.bs.modal", () => {
    currentQuestion = 0;
    selectedMajors = [];
    renderQuestion();
  });
});