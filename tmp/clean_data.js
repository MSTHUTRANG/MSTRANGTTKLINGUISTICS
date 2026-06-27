const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

// Find the first FLASHCARD_DATA start
const flashcardStart = content.indexOf('export const FLASHCARD_DATA: Flashcard[]');
if (flashcardStart === -1) {
  console.error("FLASHCARD_DATA not found!");
  process.exit(1);
}

// Find 'id: \'fc63\'' after flashcardStart
const fc63Index = content.indexOf("id: 'fc63'", flashcardStart);
if (fc63Index === -1) {
  console.error("fc63 not found!");
  process.exit(1);
}

// Find the first '];' after fc63Index
const endIdx = content.indexOf('];', fc63Index);
if (endIdx === -1) {
  console.error("Closing array ]; not found after fc63!");
  process.exit(1);
}

// Truncate the file right after '];'
const cleanContent = content.slice(0, endIdx + 2) + '\n';
fs.writeFileSync('src/data.ts', cleanContent, 'utf8');
console.log("Cleanup successful! Truncated at index", endIdx);
