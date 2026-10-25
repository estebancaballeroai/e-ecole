const fs=require('node:fs'); const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const js=fs.readFileSync('app.js','utf8');
const questions=JSON.parse(fs.readFileSync('questions.json','utf8'));
assert.ok(html.includes('src="app.js"'), 'JS entry missing');
assert.ok(html.includes('id="startBtn"'), 'Start button missing');
assert.ok(html.includes('id="kingdomGrid"'), 'Kingdom grid missing');
assert.ok(js.includes('fetch("questions.json")'), 'Questions path incorrect');
assert.ok(!js.includes('fetch("data/questions.json")'), 'Legacy path remains');
assert.ok(js.includes('async function init(){bindEvents();'), 'Events must be bound before data fetch');
assert.ok(questions.length>20, 'Too few questions');
const ids=new Set();
for(const q of questions){assert.ok(q.id&&!ids.has(q.id),'Duplicate/missing ID');ids.add(q.id);assert.ok(['CE1','CE2'].includes(q.level),'Invalid level');assert.ok(q.choices.includes(q.answer),'Unanswerable question: '+q.id)}
console.log('PASS: start element, data path, event binding, '+questions.length+' valid questions, unique IDs');
