alert('Ciao! Questo è un generatore di password.');

var myname = prompt('Scrivi il tuo nome.');
var surname = prompt('Ora scrivi il tuo cognome.');
var color = prompt('Infine... Il tuo colore preferito.');
var number = Math.floor(Math.random()*100);

document.getElementById('password').innerHTML = (myname + surname + color + number);

alert('Perfetto... Adesso assicurati di essere da solo e muovi il puntatore del tuo mouse sul lucchetto della card per visualizzare la tua password.')