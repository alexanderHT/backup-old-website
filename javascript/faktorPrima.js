var input = Number(prompt("masukan angka"));
var output = [];

var faktor_prima = function(input){
  var pangkat = 1;
  // looping untuk memasukan faktor bilangan prima kedalam varibale output,
  // dimana variable output menyimpan array yang berisi faktor prima dari angka yang di inputkan
  for(var i = 2; i <= input; i++){
    while(input % i === 0 ){
      input = input / i;
      output[output.length] = i;
    }
  }

  // print hasil bilangan faktor prima ( variable output )
  console.log(output);

  // looping untuk menghitung pangkat
  for(var j = 0; j < output.length; j++){
    // membandingkan jika output dengan index ke 0 dan seterusnya dicek / di bandingkan dengan index berikutnya,
    // jika sama maka setiap pangkat di tambah
    if(output[j] === output[j+1]){
      pangkat ++;
    }else{
      // jika hasil dari index sebelum dan sesudahnya berbeda maka cetak hasilnya berserta pangkatnya
      console.log(output[j] + " pangkat : " + pangkat);
      // reset pangkat menjadi satu kembali
      pangkat = 1;
    }
  }

}

// panggil fungsi faktor_prima
faktor_prima(input);
