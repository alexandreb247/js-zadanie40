

var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var telefon = document.getElementById("telefon");

var paragrafName = document.getElementById("name");
var paragrafSurname = document.getElementById("surname");
var paragrafPhone = document.getElementById("phone");

var button = document.querySelector('button');
button.onclick = function () {
    console.log(imie.value);
    console.log(nazwisko.value);
    console.log(telefon.value);
    paragrafName.textContent = imie.value;
    paragrafSurname.textContent = nazwisko.value;
    paragrafPhone.textContent = telefon.value;
}
