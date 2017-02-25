// variable global
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var input = prompt("masukan sebuah kalimat?").split("");
var angka = Number(prompt("masukan angka pergeseran?"));
var kalimatGeser = "";

var cek = function(cek){
  if(cek >= alpha.length){
    return cek - alpha.length;
  }else{
    return cek;
  }
}

var geserHuruf = function(input, angka){
  // variable local
  var tampung = "";

  // proses pergeseran huruf
  for(var i = 0; i < input.length; i++){
    if(input[i] === " "){
      kalimatGeser += " ";
    }else if(input[i] === input[i].toUpperCase()){

      tampung = alpha[cek(alpha.indexOf(input[i].toLowerCase()) + angka)].toUpperCase();
      kalimatGeser += tampung;
    }else{
      tampung = alpha[cek(alpha.indexOf(input[i]) + angka)];
      kalimatGeser += tampung;
    }
  }
  // mengembalikan hasil
  return kalimatGeser;
}

// cetak hasil geserHuruf
console.log(geserHuruf(input, angka));
