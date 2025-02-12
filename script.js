// Pre-cooked Crisis Reports  
const crisisData = [  
  { name: "John Crimson", score: 94, detail: "Survived 3 hedge fund collapses" },  
  { name: "Sarah Valkyrie", score: 99, detail: "Shorted Lehman Bros in Q2 2008" }  
];  

function simulateCrisisScan() {  
  document.getElementById('crisisScore').innerHTML = `  
    <div class="scanning">SCANNING 2008 DATABASES...</div>  
    ${crisisData.map(c => `  
      <div class="candidate">  
        ${c.name} | CRISIS SCORE: ${c.score}/100  
        <button onclick="showDetails('${c.detail}')">TERMINATE RECRUITERS</button>  
      </div>  
    `).join('')}  
  `;  
}  

// Matrix Rain (Pure JS Canvas)  
const canvas = document.createElement('canvas');  
canvas.id = 'matrix';  
document.body.appendChild(canvas);  
// ... matrix code injected here (see appendix) ...
