function solve() {
    Array.from(document.getElementsByClassName('seat')).forEach(x => {
        x.addEventListener('click', seat);
    });
    document.querySelector('#summary button').addEventListener('click', summary);
}
let obj = {
    "Levski": {
        "A": 10,
        "B": 7,
        "C": 5
    },
    "Litex": {
        "A": 10,
        "B": 7,
        "C": 5
    },
    "VIP": {
        "A": 25,
        "B": 15,
        "C": 10
    }
}

let profit = 0;
let fans = 0;
function seat(event) {
    let a = event.target;
    let textarea = document.getElementById('output');
    let zone = a.parentElement.parentElement.parentElement.parentElement.parentElement.className;
    let currentIndex = event.target.parentElement.cellIndex;
    let sector = document.querySelectorAll('table thead th')[currentIndex].innerHTML;
   
    a.style.background = 'red';
    a.removeEventListener('click', seat);
    textarea.textContent += `Seat: ${a.parentElement.innerText} in zone:${zone}, Sector:${sector} was taken\n`;

    if(zone !== '') {
        profit += obj[zone][sector];
        
    }
    fans++;
}

function summary() {
    let spanResult = document.querySelector('#summary span');
    spanResult.textContent = `${profit} leva ${fans} fans`;
}
