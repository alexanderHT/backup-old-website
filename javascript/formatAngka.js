alert("angka pertama harus lebih besar dari agngka ke dua!");
var input1 = prompt("Masukan angka pertama?");
var input2 = prompt("Masukan angka kedua?");

var formatAngka = function(input1, input2){
  var a = Number(input1);
  var b = Number(input2);
  var hasil = 0;s
  if(a < b){
    console.log("ERROR! angka pertama harus lebih besar dari angka kedua");
  }else{
    hasil = input1 / input2;
  }

  console.log(Intl.NumberFormat().format(hasil));
}

formatAngka(input1, input2);
