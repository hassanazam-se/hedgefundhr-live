// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const fontSize = 14;
const columns = canvas.width/fontSize;
const drops = [];

for(let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i*fontSize, drops[i]*fontSize);
        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Crisis Simulation
const crisisDatabase = [
    { name: 'John Mackridge', score: 97, bio: 'Shorted MBS in Q2 2008 @ Goldman' },
    { name: 'Sarah Crimson', score: 99, bio: 'Predicted COVID crash in internal GS memo' },
    { name: 'Michael Burry II', score: 100, bio: 'SVB collapse profiteer' }
];

function initiateAtomicScan() {
    const input = document.getElementById('jobInput').value;
    const results = document.getElementById('resultsContainer');
    
    results.innerHTML = `
        <div class="scanning">
            ACCESSING FEDERAL RESERVE DATABASE...
            <div class="progress-bar"></div>
        </div>
    `;

    setTimeout(() => {
        results.innerHTML = crisisDatabase.map(candidate => `
            <div class="candidate">
                <h3>${candidate.name} | CRISIS SCORE ${candidate.score}/100</h3>
                <p>${candidate.bio}</p>
                <button onclick="lockCandidate('${candidate.name}')" 
                        class="cta-pulse">
                    LOCK CANDIDATE ($49,000 FEE)
                </button>
            </div>
        `).join('');
    }, 2800);
}

function lockCandidate(name) {
    alert(`BIOMETRIC LOCK INITIATED FOR ${name}. OUR AI WILL NEUTRALIZE COMPETING OFFERS.`);
}
