const tank = document.querySelector('.tank');
const damage = document.querySelector('.damage');
const healer = document.querySelector('.healer');
const heroToDisplay = document.querySelector('#hero-to-display');
const reset = document.querySelector('.reset');


// Button to choose tank
tank.addEventListener('click', () => {
    if (tank) {
        damage.style.display = 'none';
        healer.style.display = 'none';
        getRandomTank();
        
     } 
});
// Button to choose dps
damage.addEventListener('click', () => {
    if (damage) {
        tank.style.display = 'none';
        healer.style.display = 'none';
        getRandomDamage();
    }
});
// Button to choose healer
healer.addEventListener('click', () => {
    if (healer) {
        tank.style.display = 'none';
        damage.style.display = 'none';
        getRandomHealer();
    }
});
// Reset button to go back to default settings
reset.addEventListener('click', () => {
    tank.style.display = 'block';
    healer.style.display = 'block';
    damage.style.display = 'block';
    heroToDisplay.innerHTML = '';
});



// Function to generate random Tank hero
function getRandomTank () {
    const random = Math.floor(Math.random() * tankHeros.length);
        heroToDisplay.innerHTML = tankHeros[random];
        
}

// Function to generate random DPS hero
function getRandomDamage () {
    const random = Math.floor(Math.random() * damageHeros.length);
        heroToDisplay.innerHTML = damageHeros[random];
        
}

// Function to generate random healer hero
function getRandomHealer () {
    const random = Math.floor(Math.random() * healerHeros.length);
        heroToDisplay.innerHTML = healerHeros[random];
        
}


















