// Task 3: Analyzing JavaScript Heap Memory
// * Create a program that continuously adds data to an array
//      to simulate a memory leak.
// * Monitor heap memory usage using Chrome DevTools or performance.memory.
// * Implement a cleanup mechanism to prevent memory issues.
// * Use Chrome DevTools to capture a memory snapshot
//     and analyze retained objects to observe the simulated memory leak.

document.addEventListener("DOMContentLoaded", () => {
  console.log("script loaded");
  const generateBtn = document.querySelector(".generate");
  const cleanupBtn = document.querySelector(".cleanup");

  let memoryLeak = [];

  function addData() {
    for (let i = 0; i < 1000; i++) {
      memoryLeak.push({
        data: new Array(1000).fill("*"),
      });
    }
    console.log(`Array size: ${memoryLeak.length}`);
  }
  let interval = null;
  generateBtn.addEventListener("click", () => {
    interval = setInterval(addData, 1500);
  });

  function cleanUp() {
    console.log(`Length of data to be cleaned: ${memoryLeak.length}`);
    clearInterval(interval);
    interval = null;
    memoryLeak = [];
    console.log("Memory cleared! New length:", memoryLeak.length);
  }
  cleanupBtn.addEventListener("click", () => {
    cleanUp();
  });
});
