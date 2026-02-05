const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const nextBtn = document.getElementById("next");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");
const music = document.getElementById("bgMusic");
const textEl = document.getElementById("typeText");

/* Typewriter */
const lines = [
  "I’ve been wanting to ask you something…",
  "You make things feel lighter.",
  "So I thought I’d just say it."
];
let l = 0, c = 0;

function typeText() {
  if (l < lines.length) {
    if (c < lines[l].length) {
      textEl.innerHTML += lines[l][c++];
      setTimeout(typeText, 45);
    } else {
      textEl.innerHTML += "<br>";
      l++; c = 0;
      setTimeout(typeText, 500);
    }
  }
}
typeText();

/* Page switch */
nextBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

/* NO panic */
let shrink = 1;
noBtn.addEventListener("mouseover", () => {
  shrink -= 0.08;
  noBtn.style.transform = `scale(${shrink})`;
  noBtn.innerText = ["Wait 😳","Hey 😭","No no 😤","Pls 🥺"][Math.floor(Math.random()*4)];
  noBtn.style.left = Math.random()*(window.innerWidth-140)+"px";
  noBtn.style.top = Math.random()*(window.innerHeight-140)+"px";
});

/* YES click */
yesBtn.addEventListener("click", () => {
  music.volume = 0.35;
  music.play();

  card.innerHTML = `
    <h1>Okay… this is cute 🥹💖</h1>

    <img src="kitty.png" class="kitty">

    <p>
      I was really hoping you’d say yes.<br><br>
      <strong>You look very good as my Valentine.</strong> 😌
    </p>

    <p style="font-size:14px;">
      Screenshot this… I might need proof 💕
    </p>

    <p style="font-size:12px; opacity:0.7;">
      (something else is coming 👀)
    </p>
  `;

  burst();
  confetti();
  stickers();
  secret();

  setTimeout(() => {
    const m = document.createElement("div");
    m.innerHTML = `
      <img src="mogambo.png" class="mogambo">
      <strong>Mogambo approves 😄</strong>
    `;
    card.appendChild(m);
  }, 1200);
});

/* Effects */
function burst() {
  const e=["💖","✨","💕","🌸","😍"];
  for(let i=0;i<40;i++){
    const d=document.createElement("div");
    d.innerText=e[Math.floor(Math.random()*e.length)];
    d.style.position="fixed";
    d.style.left=Math.random()*100+"vw";
    d.style.top="100vh";
    d.style.fontSize="26px";
    document.body.appendChild(d);
    d.animate([{transform:"translateY(0)"},{transform:"translateY(-120vh)"}],
      {duration:2600,easing:"ease-out"});
    setTimeout(()=>d.remove(),2600);
  }
}

function confetti() {
  const e=["🎉","💖","✨","💕","🌸"];
  for(let i=0;i<50;i++){
    const c=document.createElement("div");
    c.innerText=e[Math.floor(Math.random()*e.length)];
    c.style.position="fixed";
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    c.style.fontSize="22px";
    document.body.appendChild(c);
    c.animate([{transform:"translateY(0)"},{transform:"translateY(110vh)"}],
      {duration:2600,easing:"ease-in"});
    setTimeout(()=>c.remove(),2600);
  }
}

function stickers() {
  const icons=["💋","💌","💖","🌸","✨"];
  setInterval(()=>{
    const s=document.createElement("div");
    s.className="sticker";
    s.innerText=icons[Math.floor(Math.random()*icons.length)];
    s.style.left=Math.random()*100+"vw";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),6000);
  },800);
}

function secret() {
  document.body.ondblclick = () => {
    alert("Okay fine… you’re officially my favourite person 💕😌");
  };
}
