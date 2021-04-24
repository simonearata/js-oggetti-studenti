// oggetto studenti
var studente = {
  nome : 'peppino',
  cognome : 'rosso',
  età : '27 anni'
}

// stampiamo le proprietà dell'oggetto
for (var key in studente){
  console.log(studente[key]);
}

// array di oggetti
var arrStudenti = [
  {
    nome : 'Peppino',
    cognome : 'Rosso',
    età : '27 anni'
  },
  {
    nome : 'Gino',
    cognome : 'Bianchi',
    età : '35 anni'
  },
  {
    nome : 'John',
    cognome : 'Chiesa',
    età : '25 anni'
  },
]

// ciclo su tutti gli studenti per stampare nome e cognome
for (var student of arrStudenti){
  console.log('Nome: ' + student.nome);
  console.log('Cognome: ' + student.cognome);
  console.log('-------------------');
}

// far aggiungere all'utente un nuovo studente
var newName = prompt('Nome studente');
var newLastname = prompt('Cognome studente');
var newAge = prompt('età studente');

arrStudenti.push({
  nome : newName,
  cognome : newLastname,
  età : newAge
})


console.log(arrStudenti)