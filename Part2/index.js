let colorInput = document.getElementById('colorInput');
let idInput = document.getElementById('idInput');

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}