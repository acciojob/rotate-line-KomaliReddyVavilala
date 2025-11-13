//your JS code here. If required.
// Select the line element
const line = document.getElementById("line");

// Initialize rotation angle
let angle = 0;

// Continuously rotate the line
setInterval(() => {
  angle += 2; // Increase angle by 2 degrees
  line.style.transform = translate(-50%, -50%) rotate(${angle}deg);
}, 20);