const titles = [
  'a software engineer', 'a software engineer', 'a software engineer', 'a software engineer', 
  'undefined', 'NaN', 'a designer', 'a scientist', 'a neuroscientist', 'a computer (beep boop)',
  'a website', 'a performer', 'becoming self-aware', 'uhhhhhhh...', 'a musician', 'an oversharer',
  'zach! but you knew that...', 'a web developer', 'a developer', 'a programmer', 'a coder',
  'the world\'s #1 inside joke fan', 'a teacher', 'a mentor', 'a full-stack developer',
  'a back-end developer', 'a data scientist', 'a creeeeep, i\'m a weirdooooo',
  'your favorite developer\'s favorite developer', '🕺 dancing rn', // 'a particle', 'a wave', // both at once?
  'never gonna give you up', 'a lifelong learner',
]

let currId;
function chooseRandom() {
  let chosen = titles[Math.floor(Math.random() * titles.length)]
  while (titles.indexOf(chosen) === currId) {
    chosen = titles[Math.floor(Math.random() * titles.length)]
  }
  currId = titles.indexOf(chosen)
  return chosen
}

const typedText = document.getElementById("typed-text");
let currentPhrase = 'a software engineer';
let letterIndex = 0;
let deleting = false;

function typeLoop() {
  if (deleting) {
    typedText.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    typedText.textContent = currentPhrase.substring(0, letterIndex++);
  }

  if (!deleting && letterIndex === currentPhrase.length + 1) {
    deleting = true;
    setTimeout(typeLoop, 1000); // Pause before deleting
    return;
  } else if (deleting && letterIndex === 0) {
    deleting = false;
    currentPhrase = chooseRandom();
  }

  const speed = deleting ? 50 : 100;
  setTimeout(typeLoop, speed);
}

typeLoop();
