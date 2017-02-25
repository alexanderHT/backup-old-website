var input = prompt("inputkan sebuah kata");

var orderString = function(input){

  // variable
  var urut = [];
  var kataAwal = input;
  var kataUrut = "";

  // looping untuk merubah dari string menjadi array
   for (var i = input.length - 1, j = 0; i >= 0; i--, j++){
     urut[j] = input[i];
   }

  // fungsi untuk mengurutkan array
  urut.sort();

  // loopin untuk merubah dari array mejadi string
  for(var i = 0; i <= urut.length -1 ; i++){
    kataUrut += urut[i];
  }

  // cetak
  console.log(kataAwal);
  console.log(kataUrut);

}

orderString(input);
