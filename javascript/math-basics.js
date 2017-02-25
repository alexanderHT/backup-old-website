// Tugas 1 math-basics : Pangkat
var angka = prompt("masukan sebuah angka yang inigin di pangkat?");
var pangkat = prompt("masukan pangkat?");

var pangkatAngka = function(angka, pangkat){
  var awal = angka;
  for(var i = 1; i < pangkat; i++){
    angka *= awal;
  }

  console.log(angka);
}

pangkatAngka(angka, pangkat);

// Tugas 2 math-basics : kuadrat
var angka = prompt("masukan angka yang ingin di kuadrat");

var akarKuadrat = function(angka){
  var akarKuadrat = Math.sqrt(angka);
  console.log(akarKuadrat);
}

akarKuadrat(angka);

// Tugas 3 math-basics : hipotenusa
var a = prompt("masukan panjang a?");
var b = prompt("masukan panjang b?");

var hipotenusa = function(a, b){
  var c = Math.sqrt((a*a) + (b*b));
  console.log(c);
}

hipotenusa(a, b);


// Tugas 4 math-basics : Luas lingkaran
var pi = prompt("masukan jari-jari sebuah lingkaran");

var luasLingkaran = function(pi){
  var luas = pi * Math.PI;
  console.log(luas);
}

luasLingkaran(pi);
