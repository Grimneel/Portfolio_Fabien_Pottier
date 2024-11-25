const container = document.querySelector('.container');
const numberOfFireflies = 25;

function createFirefly() {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    const flame = document.createElement('div');
    flame.classList.add('flame');
    
    firefly.appendChild(flame);
    container.appendChild(firefly);

    // Positionner le feu-follet à une position aléatoire
    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.style.bottom = `${Math.random() * 100}vh`;

    // Appliquer une animation de clignotement aléatoire
    const flickerDuration = Math.random() * 2 + 0.5; // entre 1 et 2s
    flame.style.animationDuration = `${flickerDuration}s`;
}

// Créer plusieurs feu-follets
for (let i = 0; i < numberOfFireflies; i++) {
    createFirefly();
}