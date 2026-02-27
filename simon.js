let gamesqu = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// Start game when any key is pressed
document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranind = Math.floor(Math.random() * 4);
    let rancolor = btns[ranind];
    let randbtn = document.querySelector(`#${rancolor}`); // FIXED: use ID selector

    gamesqu.push(rancolor);
    console.log("Game sequence:", gamesqu);

    gameflash(randbtn);
}


function checkans(idx) {
  if (userseq[idx] === gamesqu[idx]) {
    if (userseq.length === gamesqu.length) {
      // Only level up when full sequence is matched
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!! Your scorce was <b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="orange";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    
    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);

  let usercolor = btn.getAttribute("id"); // fixed with let
  userseq.push(usercolor);

  checkans(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gamesqu = [];
  userseq = [];
  level = 0;
}
