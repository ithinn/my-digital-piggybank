VARSLE OM AT SPAREBØSSEN BLIR FULL HVIS DU LEGGER PÅ DETTE BELØPET
(Dette er ikke blant de enkleste oppgavene, så det kan være lurt å begynne med en av de andre hvis du ikke har kodet så mye før. 
Du må løse tøm-sparebøssen-oppgaven før du begynner på denne.)

Brukeren får nå beskjed om at sparebossen ER full hvis sparesummen er større enn fullSparebosse-summen.
Nå skal du endre dette varselet. Brukeren skal få beskjed om at sparebossen BLIR full hvis de legger på den summen de forsøker å legge på. 
I beskjeden skal det også stå hvor mye det er plass til i sparebøssen før den blir full. 

Beskjeden kan for eksempel se slik ut:

"Du forsøker å legge på 50 kroner, men det er bare plass til 35 kroner til i sparebøssen."

Etter beskjeden skal det ligge en knapp som fjerner beskjeden når den blir klikket på. 

Hint:
* Vi har skrevet en funksjon som sjekker om sparebøssen BLIR full hvis brukeren legger på et visst beløp. Den ligger i full-spabøssen.js.

* Denne funksjonen returnerer enten "true" eller "false"; enten blir sparebøssen full, eller så blir den ikke det. 
  Bruk den til å si hva du vil skal skje hvis den er true, og hva du vil skal skje hvis den er false. (tips: bruk en if-setning).'

* Du må skrive en ny funksjon som:
   1. Vet hvor mye penger brukeren forsøker å legge på. (tips: dette kan du "sende inn" som et argument når du kaller funksjonen)
   2. Sjekker hvor mye det er plass til før sparebossen er full, og lagrer dette i en variabel
   3. Endrer teksten i beskjeden.

* Du må skrive en funksjon som tar bort beskjeden igjen hvis brukeren klikker på knappen.

Nyttige begreper:
argument    = noe man skriver inni parentesen til en funksjon når man kaller den. Du kan bytte ut tallet inni parentesen, og bruke det i utregninger inne i funksjonen. 
              Det kan se slik ut: hvorMyePenger(32). 
                Her kaller du funksjonen ⬆       ⬆ Dette er argumentet.                 

if-setning  = brukes inni funksjoner i javascript for å velge at noe skal skje HVIS en betingelse er oppfylt. Du si "hvis (det jeg skriver i parentesen stemmer) skal dette skje, hvis ikke skal dette skje."
              Det kan for eksempel se slik ut:

              if (sparesum > fullSparebosseSum) {       ⬅ hvis verdien i sparesum er større enn verdien i fullSparebosseSum...
                return true;                            ⬅ ...skal dette skje.
              } else {                                  ⬅ hvis ikke...
                return false;                           ⬅ ...skal dette skje
              }

variabel    = Brukes i javascript. En "boks" som du kan lagre en verdi i - for eksempel et tall eller en tekst. Så kan du bruke variablen hver gang du vil bruke den verdien rundt omkring i koden.
              Begynner med "const" eller "let", så navnet på variabelen, og så selve verdien. 
              For eksempel "const sparesum = 20;"                                                                       
                Type variabel ⬆      ⬆ navn   ⬆ verdi

Ressurser:
Slik skriver du en funksjon: https://www.youtube.com/watch?v=19C7Xmsn18I 
If-setninger: https://www.w3schools.com/js/js_if_else.asp 






