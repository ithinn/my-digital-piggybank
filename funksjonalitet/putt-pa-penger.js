/*------------------------------------------------------------------------------------
Først lager vi en kobling til noen av HTML-elementene i innhold.html, slik at vi kan
bruke dem i koden.

Se på id-en som står inni getElementById()-parentesen, og finn den samme id-en i innhold.html-fila, 
så skjønner du hvilket html-element det er snakk om.
--------------------------------------------------------------------------------------*/

const knapp1 = document.getElementById('putt-på-penger-knapp-1');
const knapp2 = document.getElementById('putt-på-penger-knapp-2');
const knapp3 = document.getElementById('putt-på-penger-knapp-3');
const knapp4 = document.getElementById('putt-på-penger-knapp-4');

const tekstMedSparesum = document.getElementById('sparesum');

/*-----------------------------------------------------------------------------------
Så sier vi at sparesummen i utgangspunktet skal være 0 kroner, 
og bestemmer hvor mye penger det er plass til i sparebøssen.
-------------------------------------------------------------------------------------*/
let sparesum = 0;
const fullSparebosse = 100;

/*-----------------------------------------------------------------------------------
Så skriver vi funksjonene som legger penger til sparesummen.
Det eneste som skiller funksjonene er hvor mye penger som skal legges til, ellers gjør 
de akkurat det samme. 
-------------------------------------------------------------------------------------*/

const puttPå1Kr = () => {
  //⬇ Vi sier at sparesum skal være den summen som er der fra før, pluss 1.
  sparesum = sparesum + 1;

  //⬇ Så oppdaterer vi teksten i html-elementet som viser sparesum med den nye sparesummen.
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
};

const puttPå5Kr = () => {
  sparesum = sparesum + 5;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
};

const puttPå10Kr = () => {
  sparesum = sparesum + 10;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
};

const puttPå15Kr = () => {
  sparesum = sparesum + 15;
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;
};

/*------------------------------------------------------------------------------------------
Til slutt må vi koble funksjonene vi har skrevet til de riktige knappene.
Det gjør vi ved å legge til en "lytter" som følger med på om noen klikker på knappene.
Det vi egentlig sier er: "Hvis knapp1 blir klikket på skal du sette i gang puttPå1Kr-funksjonen"
---------------------------------------------------------------------------------------------*/

knapp1.addEventListener('click', puttPå1Kr);
knapp2.addEventListener('click', puttPå5Kr);
knapp3.addEventListener('click', puttPå10Kr);
knapp4.addEventListener('click', puttPå15Kr);

/*---------------------------------------------------------------------------------------------------------------
Ovenfor har du sagt hvor mye som kan puttes på sparebøssen før den blir full, gjennom "fullSparebosse".
Under ser du en funksjon som sjekker om sparegrisen er full når du prøver å putte på flere penger.

Hvis beløpet som skal puttes på + beløpet som ligger der fra før er mer enn fullSparebosse-summen, 
returnerer funksjonen "true" ➡ sparegrisen ER full. Hvis ikke returnerer den "false" ➡ sparegrisen er ikke full

Du kan bruke denne funksjonen hvis du vil at det skal skje noe annet når sparebossen er full
enn det som skjer når den ikke er full. 

Hint: Du kan bruke funksjonen INNI en annen funksjon. Da kaller du den for eksempel slik: erSparegrisenFull(20);
-----------------------------------------------------------------------------------------------------------------*/
const erSparegrisenFull = (belopSomSkalPuttesPa) => {
  //Finn ut hva som er den nåværende sparesummen fra HTML-elementet du har koblet deg til.
  const naavaerendeSparesum = tekstMedSparesum.innerHTML;

  //Finn ut hva summen vil bli etter at du har lagt til det ekstra beløpet.
  const nySparesumNarDuPutterPåMerPenger =
    parseInt(naavaerendeSparesum) + belopSomSkalPuttesPa;
  //⬆ parseInt() forvandler naavaerendeSparesum til et nummer i stedet for tekst, slik at du kan bruke det i et mattestykke

  //Hvis nySparesumNarDuPutterPaMerPenger er mer enn fullSparebossebeløpet returnerer funksjoen true. Hvis ikke returnerer den false.
  if (nySparesumNarDuPutterPåMerPenger > fullSparebosse) {
    return true;
  } else {
    return false;
  }
};

/*---------------------------------------------------------------------------------------------------------------
Kanskje du vil at det skal gå an å tømme sparegrisen? Da kan du gjøre dette:
-----------------------------------------------------------------------------------------------------------------*/
//Lag en kobling til HTML-elementet der tøm-sparebøsse-knappen ligger,
//og til selve knappen.
const fullSparebosseVarsel = document.getElementById('full-sparebosse-varsel');
const tomSparegrisenKnapp = document.getElementById('tom-sparebossen-knapp');

const tomSparegrisen = () => {
  //Nullstill sparesummen
  sparesum = 0;

  //Vis den nye, nullstilte sparesummen i stedet for den gamle
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;

  //Skjul boksen som sier at sparebøssen er full.
  fullSparebosseVarsel.style.display = 'none';
};

//Lag en lytter
tomSparegrisenKnapp.addEventListener('click', tomSparegrisen);
