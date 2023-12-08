
// VALIDATION QUIZ ENVIRONNEMENT
const recup = [...JSON.parse(localStorage.unlockedItems)];
recup[0].environnement = true;
localStorage.setItem("unlockedItems", JSON.stringify(recup));

// VALIDATION QUIZ ALIMENTATION
const recup = [...JSON.parse(localStorage.unlockedItems)];
recup[1].alimentation = true;
localStorage.setItem("unlockedItems", JSON.stringify(recup));

// VALIDATION QUIZ ENERGIE
const recup = [...JSON.parse(localStorage.unlockedItems)];
recup[2].energie = true;
localStorage.setItem("unlockedItems", JSON.stringify(recup));

// VALIDATION QUIZ QUOTIDIEN
const recup = [...JSON.parse(localStorage.unlockedItems)];
recup[3].quotidien = true;
localStorage.setItem("unlockedItems", JSON.stringify(recup));

// VALIDATION QUIZ TRANSPORTS
const recup = [...JSON.parse(localStorage.unlockedItems)];
recup[4].transports = true;
localStorage.setItem("unlockedItems", JSON.stringify(recup));