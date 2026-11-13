const fs = require('fs');
const path = require('path');

const sequenceDir = path.join(__dirname, '..', 'public', 'sequence');
if (!fs.existsSync(sequenceDir)) {
  fs.mkdirSync(sequenceDir, { recursive: true });
}

// Copy the two reference keyframes to public/
const artifactDir = 'C:\\Users\\elmeh\\.gemini\\antigravity-ide\\brain\\40bf606c-504b-4140-8ae5-b1abf9402308';
const assembledSrc = path.join(artifactDir, 'ai_core_assembled_1788429603919.jpg');
const explodedSrc = path.join(artifactDir, 'ai_core_exploded_1788429617394.jpg');

const assembledDest = path.join(__dirname, '..', 'public', 'ai-core-assembled.jpg');
const explodedDest = path.join(__dirname, '..', 'public', 'ai-core-exploded.jpg');

if (fs.existsSync(assembledSrc)) {
  fs.copyFileSync(assembledSrc, assembledDest);
}
if (fs.existsSync(explodedSrc)) {
  fs.copyFileSync(explodedSrc, explodedDest);
}

console.log('Sequence reference frames saved to public directory.');
