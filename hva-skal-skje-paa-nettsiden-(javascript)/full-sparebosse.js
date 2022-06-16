//HVA SKAL SKJE HVIS SPAREBØSSEN ER FULL?

/*------------------------------------------------------------------------------------
Først lager vi en kobling til noen av HTML-elementene i hva-skal-nettsiden-inneholde.html, slik at vi kan
bruke dem i koden.

Se på id-en som står inni getElementById()-parentesen, og finn den samme id-en i hva-skal-nettsiden-inneholde.html-fila, 
så skjønner du hvilket html-element det er snakk om.
-----------------------------------⬇--------------------------------------------------*/

const bildeAvPenger = document.getElementById('penger');
const fullSparebosseVarsel = document.getElementById('full-sparebosse-varsel');
const tomSparebossenKnapp = document.getElementById('tom-sparebossen-knapp');

/*---------------------------------------------------------------------------------------------------------------
I putt-på-penger.js har du sagt hvor mye som kan puttes på sparebøssen før den blir full, gjennom "fullSparebosse".
Under ser du en funksjon som sjekker om sparebossen er full.

Hvis summen du har spart er større enn fullSparebosse-summen, returnerer funksjonen "true" ➡ sparebossen ER full. 
Hvis ikke returnerer den "false" ➡ sparebossen er ikke full

Du kan bruke denne funksjonen hvis du vil at det skal skje noe annet når sparebossen er full
enn det som skjer når den ikke er full. 

Hint: Du kan bruke funksjonen INNI en annen funksjon. Da kaller du den slik: erSparebossenFull();
-----------------------------------------------------------------------------------------------------------------*/

function erSparebossenFull() {
  //Finn ut hva som er den nåværende sparesummen fra HTML-elementet du har koblet deg til.
  //Når du henter summen på den måten, får du den tilbake som tekst.
  //Du kan ikke bruke slik tekst i et mattestykke - derfor må du gjøre den om til et nummer først. Det er det parseInt() gjør.
  const sparesum = parseInt(tekstMedSparesum.innerHTML);

  //Sjekk om sparesummen er større enn fullSparebosse-summen. (Tegnet i midten er en sånn krokodillegap man lærer om i matte).
  //Hvis sparesummen er større, skal funksjonen returnere "true". Hvis ikke skal den returnere "false"
  if (sparesum > fullSparebosse) {
    return true;
  } else {
    return false;
  }
}

/*---------------------------------------------------------------------------------------------------------------
Du kan også sjekke om sparebøssen BLIR full hvis du putter på et visst antall penger. 

Hvis beløpet som skal puttes på + beløpet som ligger der fra før er mer enn fullSparebosse-summen, 
returnerer funksjonen "true" ➡ sparebossen ER full. Hvis ikke returnerer den "false" ➡ sparebossen er ikke full

Du kan bruke denne funksjonen hvis du vil at det skal skje noe annet når sparebossen blir full
enn det som skjer når den ikke blir full. 

Hint: "belopSomSkalPuttesPå" er noe du må skrive inn når du kaller funksjonen. Hvis du for eksempel vil sjekke om sparebossen
blir full hvis du putter på 20 kroner til, kaller du den slik: blirSparebossenFull(20);
-----------------------------------------------------------------------------------------------------------------*/
function blirSparebossenFull(belopSomSkalPuttesPa) {
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
}

/*---------------------------------------------------------------------------------------------------------------
Kanskje du vil at det skal gå an å tømme sparebossen? Da kan du bruke denne funksjonen
-----------------------------------------------------------------------------------------------------------------*/
//Lag en kobling til HTML-elementet der tøm-sparebøsse-knappen ligger,
//og til selve knappen.

function tomSparebossen() {
  //Nullstill sparesummen
  sparesum = 0;

  //Vis den nye, nullstilte sparesummen i stedet for den gamle
  tekstMedSparesum.innerHTML = `${sparesum} kroner`;

  //Skjul boksen som sier at sparebøssen er full.
  fullSparebosseVarsel.style.display = 'none';
}

//Lag en lytter
tomSparebossenKnapp.addEventListener('click', tomSparebossen);

/*---------------------------------------------------------------------------------------------------------------
Du vil kanskje vise et varsel om at sparebøssen er full, og en knapp som gjør at brukeren kan tømme den. 
-----------------------------------------------------------------------------------------------------------------*/

function visFullSparebosseVarsel() {
  fullSparebosseVarsel.style.display = 'block';
}

/*---------------------------------------------------------------------------------------------------------------
Kanskje du vil vise at sparebøssen er full ved at det tyter ut penger av den. Da kan du bruke en funksjon til det.
-----------------------------------------------------------------------------------------------------------------*/

function visPenger() {
  //sett inn bildekoden du vil ha i HTML-elementet
  bildeAvPenger.innerHTML = bildeAvPengerSparegris;
}

const bildeAvPengerSparegris = `
<g data-name="Group 43">
  <g data-name="Group 42" clip-path="url(#b)">
    <path
      data-name="Rectangle 20"
      transform="translate(247.419 23.794)"
      fill="url(#c)"
      d="M0 0h15.768v26.672H0z"
    />
  </g>
</g>
<g data-name="Group 45">
  <g data-name="Group 44" clip-path="url(#a)">
    <path
      data-name="Path 187"
      d="M186.582 59.228V13.043l33.779 33.245 16.76-41.011 10.3 23.994 9.1 21.195-6.069 9.645c-21.245-1.326-42.56-1.519-63.865-.883"
      fill="#38b349"
    />
    <path
      data-name="Path 188"
      d="m325.983 60.447-15.063 6.808q-17.825-3.181-35.777-5.064l3.252-39.481Z"
      fill="#38b349"
    />
    <path
      data-name="Path 189"
      d="M263.187 39.864V10.65l12.264 9.725Z"
      fill="#38b349"
    />
    <path
      data-name="Path 190"
      d="m263.187 39.864 12.264-19.489 3.609-5.736-.665 8.07-3.252 39.482q-12.327-1.308-24.7-2.081l6.069-9.644Z"
      fill="#f27405"
    />
</g>
`;

const bildeAvPengerSparekatt = `    
<g data-name="Group 83">
  <g data-name="Group 82" clip-path="url(#b)">
    <path data-name="Rectangle 39" transform="translate(131.548 56.353)" fill="url(#c)" d="M0 0h15.768v26.672H0z"/>
  </g>
</g>
<g data-name="Group 85">
  <g data-name="Group 84" clip-path="url(#a)">
    <path data-name="Path 243" d="M70.711 91.788V45.6l33.779 33.247 16.76-41.01 10.3 23.993 9.1 21.195-6.068 9.645c-21.245-1.325-42.56-1.518-63.865-.882" fill="#38b349"/>
    <path data-name="Path 244" d="m210.112 93.006-15.063 6.808q-17.824-3.182-35.777-5.064l3.252-39.481Z" fill="#38b349"/>
    <path data-name="Path 245" d="M147.316 72.423V43.209l12.264 9.724Z" fill="#38b349"/>
    <path data-name="Path 246" d="m147.316 72.423 12.264-19.49 3.609-5.735-.665 8.07-3.252 39.482q-12.327-1.308-24.7-2.081l6.069-9.644Z" fill="#f27405"/>
  </g>
</g>
`;

const bildeAvPengerSparelama = `
<g data-name="Group 109">
  <g data-name="Group 108" clip-path="url(#b)">
    <path data-name="Rectangle 53" transform="translate(267.145 210.616)" fill="url(#c)" d="M0 0h15.768v26.672H0z"/>
  </g>
</g>
<g data-name="Group 111">
  <g data-name="Group 110" clip-path="url(#a)">
    <path data-name="Path 264" d="M206.309 246.05v-46.185l33.779 33.244 16.76-41.01 10.3 23.993 9.1 21.2-6.069 9.645c-21.245-1.325-42.56-1.518-63.865-.882" fill="#38b349"/>
    <path data-name="Path 265" d="m345.71 247.269-15.064 6.808q-17.824-3.182-35.777-5.064l3.252-39.481Z" fill="#38b349"/>
    <path data-name="Path 266" d="M282.913 226.686v-29.214l12.264 9.725Z" fill="#38b349"/>
    <path data-name="Path 267" d="m282.913 226.686 12.264-19.486 3.609-5.736-.665 8.07-3.252 39.482q-12.327-1.308-24.7-2.081l6.069-9.644Z" fill="#f27405"/>
  </g>
</g>
`;
