const navLinks = document.querySelectorAll(".nav-link");
const views = document.querySelectorAll(".view");
const clickableCards = document.querySelectorAll(".clickable-card");

function showView(targetId) {
  views.forEach((view) => {
    view.classList.remove("active");
  });

  const targetView = document.getElementById(targetId);
  if (targetView) {
    targetView.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach((link) => {
    if (link.dataset.target === targetId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (targetId === "home") {
    const brandButton = document.querySelector('.brand[data-target="home"]');
    if (brandButton) brandButton.classList.add("active");
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showView(link.dataset.target);
  });
});

clickableCards.forEach((card) => {
  card.addEventListener("click", () => {
    showView(card.dataset.target);
  });
});

/* Outil stéganographie */
const hideBtn = document.getElementById("hide-btn");
const revealBtn = document.getElementById("reveal-btn");
const messageInput = document.getElementById("messageInput");
const hiddenMessage = document.getElementById("hiddenMessage");
const revealedMessage = document.getElementById("revealedMessage");

if (hideBtn) {
  hideBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message === "") {
      revealedMessage.textContent = "Veuillez entrer un message.";
      return;
    }

    hiddenMessage.textContent = btoa(message);
    revealedMessage.textContent = "Message caché.";
  });
}

if (revealBtn) {
  revealBtn.addEventListener("click", () => {
    if (!hiddenMessage.textContent) {
      revealedMessage.textContent = "Aucun message caché";
      return;
    }

    revealedMessage.textContent = atob(hiddenMessage.textContent);
  });
}

/* QCM mots de passe */
const passwordBtn = document.getElementById("password-btn");
const passwordResult = document.getElementById("password-result");

if (passwordBtn) {
  passwordBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="password-q1"]:checked');

    if (!selected) {
      passwordResult.textContent = "Sélectionnez une réponse.";
      return;
    }

    if (selected.value === "b") {
      passwordResult.textContent = "Bonne réponse.";
      passwordBtn.style.backgroundColor = "green";
    } else {
      passwordResult.textContent = "Mauvaise réponse.";
      passwordBtn.style.backgroundColor = "red";
    }
  });
}

/* QCM crypto */
const cryptoBtn = document.getElementById("crypto-btn");
const cryptoResult = document.getElementById("crypto-result");

if (cryptoBtn) {
  cryptoBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="crypto-q1"]:checked');

    if (!selected) {
      cryptoResult.textContent = "Sélectionnez une réponse.";
      return;
    }

    if (selected.value === "c") {
      cryptoResult.textContent = "Bonne réponse.";
      cryptoBtn.style.backgroundColor = "green";
    } else {
      cryptoResult.textContent = "Mauvaise réponse.";
      cryptoBtn.style.backgroundColor = "red";
    }
  });
}

/* QCM stéganographie */
const stegBtn = document.getElementById("steg-btn");
const stegResult = document.getElementById("steg-result");

if (stegBtn) {
  stegBtn.addEventListener("click", () => {
    const q1 = document.querySelector('input[name="steg-q1"]:checked');
    const q2 = document.querySelector('input[name="steg-q2"]:checked');
    const q3 = document.querySelector('input[name="steg-q3"]:checked');

    if (!q1 || !q2 || !q3) {
      stegResult.textContent = "Veuillez répondre aux 3 questions.";
      return;
    }

    let score = 0;
    if (q1.value === "B") score++;
    if (q2.value === "B") score++;
    if (q3.value === "B") score++;

    stegResult.textContent = `Vous avez obtenu ${score} sur 3.`;
  });
}