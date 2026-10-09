
document.addEventListener("DOMContentLoaded", function () {

  // PAGE NAVIGATION
  window.goToPage = function (number) {
    document.querySelectorAll(".page").forEach(function (page) {
      page.classList.remove("active");
    });

    const nextPage = document.getElementById("page" + number);

    if (nextPage) {
      nextPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  };

  // NO BUTTON MOVEMENT
  const noBtn = document.getElementById("noBtn");
  const buttonArea = document.getElementById("buttonArea");

  function moveNoButton() {
    if (!noBtn || !buttonArea) return;

    const area = buttonArea.getBoundingClientRect();

    noBtn.style.position = "fixed";
    noBtn.style.left =
      Math.random() * Math.max(0, window.innerWidth - noBtn.offsetWidth) + "px";
    noBtn.style.top =
      Math.random() * Math.max(0, window.innerHeight - noBtn.offsetHeight) + "px";
    noBtn.style.zIndex = "1000";
  }

  if (noBtn) {
    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);
    noBtn.addEventListener("touchstart", function (event) {
      event.preventDefault();
      moveNoButton();
    }, { passive: false });
  }

  // FIVE HEART MESSAGES
  const heartMessages = [
    "You make ordinary days feel special! 💜",
    "Thank you for being a wonderful friend! 🧸",
    "May all your dreams come true! ✨",
    "You deserve happiness every single day! 💗",
    "You will always be a special person! 🫂"
  ];

  const openedHearts = new Set();

  window.openHeart = function (index) {
    const hearts = document.querySelectorAll(".heart");
    const messageBox = document.getElementById("heartMessage");

    if (!hearts[index] || !messageBox) return;

    messageBox.textContent = heartMessages[index];
    hearts[index].classList.add("opened");
    hearts[index].textContent = "💖";
    openedHearts.add(index);

    document.getElementById("heartCount").textContent =
      openedHearts.size + " / 5 hearts opened";

    if (openedHearts.size === 5) {
      document.getElementById("heartNext").disabled = false;
      messageBox.textContent =
        "You opened all five hearts! Your birthday surprise awaits! 🎉";
    }
  };

  // BIRTHDAY CANDLE
  window.blowCandles = function () {
    const flame = document.getElementById("flame");
    const startBtn = document.getElementById("startBtn");
    const reveal = document.getElementById("birthdayReveal");

    if (!flame || !startBtn || !reveal || startBtn.disabled) return;

    startBtn.disabled = true;
    startBtn.textContent = "Make a wish... 💫";
    flame.classList.add("off");

    setTimeout(function () {
      reveal.classList.add("show");
      startBtn.style.display = "none";
      reveal.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 900);
  };

});