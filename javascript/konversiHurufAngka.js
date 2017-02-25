var kata = prompt("masukan sebuah kata kombinasi dari huruf dan angka?").toLowerCase();
// varibale global
var arr = kata.split("");
var arr2 = [];
// varibale alpha berisi array a sampai z
var alpha = " abcdefghijklmnopqrstuvwxyz".split("");
var convert = "";
var index = 0;

var konversiHurufAngka = function(kata){

  // arr2 untuk menamung array kombinasi angka dan huruf
  for(var i = 0; i < arr.length; i++){
    if(isNaN(Number(arr[i]))){
      arr2[i] = arr[i];
    }else{
      arr2[i] = Number(arr[i]);
    }

  }
  // untuk mengkonversi dari huruf ke angka dan angka ke huruf berdasarkan index alpha
  for(var j = 0; j < arr2.length; j++){
    if(isNaN(arr2[j])){
      index = alpha.indexOf( arr2[j] );
      convert += index;
    }else{
      convert += alpha[ arr2[j] ];
    }
  }

  // cetak hasil sesudah dan sebelum di konversi
  console.log( "Inputan kata : " + kata);
  console.log( "Output kata : " + convert);
}

// memanggil fungsi
konversiHurufAngka(kata);
