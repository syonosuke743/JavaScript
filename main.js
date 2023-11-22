let personTaro = {name : '山田太郎'};
let personJiro = {name : '山田次郎'};

function printBooks(books) {
  console.log('『JavaScript入門』' + personTaro.name);
  console.log('『JavaScriptの絵本』' + personJiro.name);
}

printBooks(personTaro,personJiro)
