// memasukan inputan kedalam variable array
// var array = [];
//
// for(var i =0; i < 3; i++){
//   array[array.length] = i;
// }
//
// console.log(array);

// variable global
var myArray = [];
var max = Number(prompt("masukan berapa banyak angka yang akan di masukan kedalam array?"));

for(var j = 0; j < max; j++){
  var input = Number(prompt("masukan angka array ["+ j +"]? "));
  myArray[myArray.length] = input;
}

console.log("Inputan : " + myArray);

function array1(myArray){
  // varibale local
  myArray.sort(function(a,b){return a-b});
  var jumlah = 0;
  var terakhir = myArray[myArray.length - 1];

  // melakukan penjumlahan
  for(var x = 0; x < myArray.length - 1; x++){
    jumlah += myArray[x];
  }

  // cetak isi array, hasil jumlah sebelum array terakhir, dan array terakhir
  console.log("Hasil Jumlah : " + jumlah);
  console.log("Nilai dari Index terakhir :" + terakhir);

  if(jumlah <= terakhir){
    return true;
  }else{
    return false;
  }
}

array1(myArray);
