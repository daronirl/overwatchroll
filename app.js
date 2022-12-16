const tank = document.querySelector('.tank');
const damage = document.querySelector('.damage');
const healer = document.querySelector('.healer');




tank.addEventListener('click', () => {
    if (tank) {
        damage.style.display = 'none';
        healer.style.display = 'none';
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



