let reserve = document.getElementById('reserve-button');
let savory = document.getElementById('savory');

savory.style.display = 'none';

let reservatiion = function() {
    savory.style.display = 'block';
    reserve.style.display = 'none';
};


reserve.addEventListener('click', reservatiion);


