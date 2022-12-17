const tank = document.querySelector('.tank');
const damage = document.querySelector('.damage');
const healer = document.querySelector('.healer');
const heroToDisplay = document.querySelector('#hero-to-display');


function getRandomHero () {
    const random = Math.floor(Math.random() * tankHeros.length);
        heroToDisplay.innerHTML = tankHeros[random];
        
}

tank.addEventListener('click', () => {
    if (tank) {
        damage.style.display = 'none';
        healer.style.display = 'none';
        getRandomHero();
        
     } 
});

damage.addEventListener('click', () => {
    if (damage) {
        tank.style.display = 'none';
        healer.style.display = 'none';
    }
});

healer.addEventListener('click', () => {
    if (healer) {
        tank.style.display = 'none';
        damage.style.display = 'none';
    }
});







