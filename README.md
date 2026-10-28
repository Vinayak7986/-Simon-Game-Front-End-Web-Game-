<div align="center">

# 🎮 Simon Memory Game · Front-End Web Application
### *Interactive Algorithmic Memory Game Built with Pure HTML5, CSS3 & Event-Driven JavaScript*

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-6366F1?style=for-the-badge&logo=github&logoColor=white)](https://vinayak7986.github.io/-Simon-Game-Front-End-Web-Game-/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic_Markup-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Keyframes_%26_Transitions-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Event_Driven_DOM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Overview
An interactive browser-based replication of the classic electronic **Simon Memory Game**. Engineered in pure **Vanilla JavaScript**, this project demonstrates fundamental computer science and web engineering principles including **finite state machine (FSM) modeling**, asynchronous timing events (`setTimeout`), dynamic DOM manipulation, and user input validation algorithms.

---

## ✨ Key Architectural Features

- **Algorithmic Sequence Generation:** Uses pseudo-random index selection across a 4-color quadrant array (`["yellow", "red", "green", "purple"]`) to incrementally generate an expanding sequence with each passing level.
- **Asynchronous Visual Feedback Engine:** Discrete CSS flash states (`.flash` for game generation vs `.userflash` for user interaction) decoupled using asynchronous timer queues to avoid UI thread blocking.
- **Strict Real-Time Index Verification:** Validates each user click in $O(1)$ constant time against the active step in the game sequence array, preventing cumulative memory lag.
- **Game Over & Reset Mechanics:** Triggers visual screen shock alerts (orange strobe warning), displays final score in the DOM, and resets game buffers upon any sequence mismatch.
- **Zero External Dependencies:** Built entirely with standard Web APIs (DOM Level 2 Events, HTML5 Semantic Elements, CSS3 Grid/Flexbox), ensuring sub-second load times and 100% cross-browser compatibility.

---

## 🏗️ Finite State Machine (FSM) Architecture

```
   ┌────────────────────────────────────────────────────────┐
   │                        IDLE                            │
   │            (Waiting for keypress to start)             │
   └──────────────────────────┬─────────────────────────────┘
                              │ document.addEventListener("keypress")
                              ▼
   ┌────────────────────────────────────────────────────────┐
   │                      LEVEL UP                          │
   │  • Increment level counter                             │
   │  • Push random color to gamesqu[]                      │
   │  • Trigger gameflash(randbtn)                          │
   └──────────────────────────┬─────────────────────────────┘
                              │
                              ▼
   ┌────────────────────────────────────────────────────────┐
   │                    AWAIT USER INPUT                    │
   │  • User clicks colored button                          │
   │  • Trigger userflash(btn)                              │
   │  • Push user color to userseq[]                        │
   └──────────────────────────┬─────────────────────────────┘
                              │ checkans(idx)
               ┌──────────────┴──────────────┐
               │                             │
    [Matches Sequence]              [Mismatches Sequence]
               │                             │
    {userseq.length === gamesqu.length}      │
               │                             ▼
               ▼            ┌────────────────────────────────┐
      (setTimeout 1000ms)   │           GAME OVER            │
               │            │ • Display Score (${level})     │
               ▼            │ • Screen Flash Warning         │
          (LEVEL UP)        │ • reset() buffers to Level 0   │
                            └────────────────────────────────┘
```

---

## 📁 Repository Structure

```
-Simon-Game-Front-End-Web-Game-/
├── simon.html                   # Semantic markup (Game board quadrants, score heading)
├── simon.css                    # Responsive styling, color quadrants, flash keyframes
├── simon.js                     # Core game logic, state arrays, and event handlers
└── README.md                    # Project documentation & architectural specification
```

---

## ⚙️ Core Logic Functions Reference

| Function | Scope | Purpose |
| :--- | :--- | :--- |
| `levelup()` | State Transition | Resets `userseq[]`, increments `level`, selects random color, and triggers visual prompt. |
| `gameflash(btn)` | Animation Engine | Adds `.flash` class for `250ms` to indicate the game's newly added sequence step. |
| `userflash(btn)` | Interaction Feedback | Adds `.userflash` class for `250ms` upon physical user click. |
| `checkans(idx)` | Validation Algorithm | Compares `userseq[idx]` with `gamesqu[idx]`; routes to either `levelup()` or `reset()`. |
| `reset()` | State Purge | Restores `started = false`, flushes `gamesqu[]` & `userseq[]`, and resets `level = 0`. |

---

## 🚀 Getting Started & Local Execution

### Prerequisites
- Any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge).

---

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vinayak7986/-Simon-Game-Front-End-Web-Game-.git
   cd -Simon-Game-Front-End-Web-Game-
   ```

2. **Launch the game:**
   - Simply double-click `simon.html` in your file explorer to open it in your browser.
   - Or serve with Python:
     ```bash
     python -m http.server 8000
     ```
     Navigate to `http://localhost:8000/simon.html`.

3. **How to Play:**
   - Press **any key** on your keyboard to start the game.
   - Watch the computer flash a colored tile.
   - Click the tiles in the exact sequence shown.
   - Each level adds one additional tile to memorize. See how high you can score!

---

## 🌐 Live Demonstration
Play the game live directly in your browser on **GitHub Pages**:  
👉 **[https://vinayak7986.github.io/-Simon-Game-Front-End-Web-Game-/](https://vinayak7986.github.io/-Simon-Game-Front-End-Web-Game-/)**

---

## 👨‍💻 Author
**Vinayak More**  
Software Engineer & Full-Stack Developer  
- **GitHub:** [@Vinayak7986](https://github.com/Vinayak7986)  
- **LinkedIn:** [vinayak-more-b37309264](https://www.linkedin.com/in/vinayak-more-b37309264/)  
- **Portfolio:** [vinayakmore.netlify.app](https://vinayakmore.netlify.app/)  

---

## 🛡️ License
This project is open-source and licensed under the MIT License.