# github-c4mucu-zldfrj
# Blocco Note in Angular
L'applicazione è scritta in Angular e Type Script.
Il codice è suddiviso in 4 componenti (si veda sotto per il componente principale):
1) "genera" specifica la generazione della chiave utile alla memorizzazione del testo. È l'unico app-component contenuto dalla view principale. "genera" contiene gli app-components di 2 e di 3. "genera" modella il contenuto di un bottone utile a chiedere una nuova chiave dal servizio keyvalue e uno spazio di alert necessario alla visualizzazione della chiave creata o inserita dal component principale.
2) "inserisci" modella un form utile alla compilazione di un nuovo postit. "inserisci" specifica l'aggiunta di un nuovo postit all'elenco contenuto in una chiave in utilizzo.
3) "testo" modella lo spazio in blocchi utile alla visualizzazione dei titoli dei postit salvati e un bottone per ogni singola rimozione. "testo" contiene l'app-component di 4. Le direttive utilizzate in "testo" specificano la modalità di visualizzazione del contenuto (una lista di componenti 4) e la condizione necessaria per la visualizzazione di un contenuto definito come importante. "testo" specifica se la visualizzazione dei postit solo importanti è attivata e l'eliminazione di un postit dall'elenco salvato nella chiave.
4) "tx" modella il contenuto testuale di un postit. "tx" specifica la visualizzazione del contenuto testuale di un singolo postit tramite l'uso di una variabile controllata dalla direttiva e dall'evento impostato sul bottone del titolo del postit.

Si è reso necessario suddividere l'applicazione in componenti specifici per controllare singolarmente la visualizzazione di ogni postit.

Il componente principale modella uno spazio di alert utile a chiedere all'utente l'inserimento di una chiave preesistente; specifica come deve essere trattato il comportamento dell'utente alla richiesta di inserimento di una chiave preesistente in modo da definire le variabili principali condivise tra i componenti; le variabili condivise tra i componenti sono: l'array dei postit da salvare come contenuto della chiave e la chiave in utilizzo. Si è reso qui necessario trasformare il contenuto vuoto {} di una nuova chiave del servizio keyvalue in un contenuto più ampio di array [] utile alla sua modifica per inserimento di un nuovo postit {}.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-c4mucu-zldfrj)
