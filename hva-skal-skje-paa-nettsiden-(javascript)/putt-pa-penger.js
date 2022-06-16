//PUTTE PÅ PENGER PÅ SPAREBØSSEN

/*------------------------------------------------------------------------------------
Først lager vi en kobling til noen av HTML-elementene i hva-skal-nettsiden-inneholde.html, slik at vi kan
bruke dem i koden.

Se på id-en som står inni getElementById()-parentesen, og finn den samme id-en i hva-skal-nettsiden-inneholde.html-fila, 
så skjønner du hvilket html-element det er snakk om.
-----------------------------------⬇--------------------------------------------------*/

const knapp1 = document.getElementById('putt-på-penger-knapp-1');
const knapp2 = document.getElementById('putt-på-penger-knapp-2');
const knapp3 = document.getElementById('putt-på-penger-knapp-3');
const knapp4 = document.getElementById('putt-på-penger-knapp-4');

const tekstMedSparesum = document.getElementById('sparesum');

/*----------------------------------------------------------------------------------
Så sier vi at sparesummen i utgangspunktet skal være 0 kroner, 
og bestemmer hvor mye penger det er plass til i sparebøssen.
-----------------------------------⬇-------------------------------------------------*/
let sparesum = 0;
let fullSparebosse = 100;
/*-----------------------------------------------------------------------------------
Så skriver vi funksjonene som legger penger til sparesummen.
Det eneste som skiller funksjonene er hvor mye penger som skal legges til, ellers gjør 
de akkurat det samme. 
------------------------------------⬇-----------------------------------------------*/

function puttPå1Kr() {
  //⬇ Vi sier at sparesum skal være den summen som er der fra før, pluss 1.
  sparesum = sparesum + 1;

  //⬇ Så oppdaterer vi teksten i html-elementet som viser sparesum med den nye sparesummen.
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}

function puttPå5Kr() {
  sparesum = sparesum + 5;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}

function puttPå10Kr() {
  sparesum = sparesum + 10;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}

function puttPå15Kr() {
  sparesum = sparesum + 15;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
}

/*------------------------------------------------------------------------------------------
Til slutt må vi koble funksjonene vi har skrevet til de riktige knappene.
Det gjør vi ved å legge til en "lytter" som følger med på om noen klikker på knappene.
Det vi egentlig sier er: "Hvis knapp1 blir klikket på skal du sette i gang puttPå1Kr-funksjonen"
-------------------------------------⬇--------------------------------------------------------*/

knapp1.addEventListener('click', puttPå1Kr);
knapp2.addEventListener('click', puttPå5Kr);
knapp3.addEventListener('click', puttPå10Kr);
knapp4.addEventListener('click', puttPå15Kr);
