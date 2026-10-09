```javascript
function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");

  if (pageNumber === 1) {
    resetSurprise();
  }
}

const memories = [
  {
    photo: "photo1.jpeg",
    caption: "One beautiful memory with you! 💜"
  },
  {
    photo: "photo2.jpeg",
    caption: "Your smile makes every moment special! 🥹"
  },
  {
    photo: "photo3.jpeg",
    caption: "So many memories, so much happiness! 💕"
  },
  {
    photo: "photo4.jpeg",
    caption: "Lucky to have you in my life! 🫂"
  },
  {
    photo: "photo5.jpeg",
    caption: "More memories and laughter to come! ✨"
  }
];

const openedHearts = new Set();

function openHeart(index) {
  const message = document.getElementById("heartMessage");

  if (!message) return;

  const memory = memories[index];

  if (!memory) return;

  openedHearts.add(index);

  message.innerHTML = `
    <img
      class="memory-photo"
      src="${memory.photo}"
      alt="Our memory ${index + 1}"
      onerror="this.alt='Photo not found. Check the filename.'"
    >
    <p class="memory-caption">${memory.caption}</p>
  `;

  document.querySelectorAll(".heart").forEach((heart, i) => {
    if (i === index) {
      heart.classList.add("opened");
    }
  });

  document.getElementById("heartCount").textContent =
    `${openedHearts.size} / 5 hearts opened`;

  document.getElementById("heartNext").disabled =
    openedHearts.size !== 5;
}

function blowCandles() {
  const flame = document.getElementById("flame");
  const reveal = document.getElementById("birthdayReveal");
  const startButton = document.getElementById("startBtn");

  flame.style.display = "none";
  reveal.style.display = "block";
  startButton.style.display = "none";
}

function resetSurprise() {
  openedHearts.clear();

  document.querySelectorAll(".heart").forEach(heart => {
    heart.classList.remove("opened");
  });

  document.getElementById("heartMessage").innerHTML =
    "Choose a heart! 💌";

  document.getElementById("heartCount").textContent =
    "0 / 5 hearts opened";

  document.getElementById("heartNext").disabled = true;

  document.getElementById("flame").style.display = "block";
  document.getElementById("birthdayReveal").style.display = "none";
  document.getElementById("startBtn").style.display = "inline-block";

  const video = document.querySelector("#page5 video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// NO button moves away when the pointer approaches it.
const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");

function moveNoButton() {
  if (!noBtn || !buttonArea) return;

  const area = buttonArea.getBoundingClientRect();

  const maxX = Math.max(0, area.width - noBtn.offsetWidth);
  const maxY = Math.max(0, area.height - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

if (noBtn) {
  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);

  noBtn.addEventListener("touchstart", event => {
    event.preventDefault();
    moveNoButton();
  }, { passive: false });
}
```
