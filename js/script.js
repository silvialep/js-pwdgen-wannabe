// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina la concatenazione delle variabili + un numero a caso scelto da voi
// (es: MarioRossiVerde21) (modificato) 

let userName = prompt(`Ciao, qual è il tuo nome?`);
let userSurname = prompt(`Ciao ${userName}, e qual è il tuo cognome?`);
let userColor = prompt(`Benvenuto/a ${userName} ${userSurname}, qual è il tuo colore preferito?`);
document.writeln(userName + userSurname + userColor + 88);