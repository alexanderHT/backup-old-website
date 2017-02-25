var input = prompt("masukan sebuah kalimat?").split(" ");


// function variasi untuk menghasilkan / merubah dari inputan kalimat menjadi array yang berisi angka
// contoh: inputan indahnya matahari mejadi [2, 1] ,  dimana angka merupakan banyaknya variasi huruf yang terkadung di sebuah kata.
var variasi = function(input){

  var input = input.split("").sort();
  var max = input.length;
  var tampung = "";
  var count = 0;
  var tampung2 = [];
  var variasi = 0;

  // console.log(input);
  // console.log(max);

  // looping untuk menghasilan string yang di simpand di variable  tampung dengan isinya yaitu ("huruf" "angka" .....) contoh: a2b3c4,
  // dari array input yang sudah berisi huruf huruf yang sudah di sort berdasarkan alphabet conoth: aaaabc
  for(var i = 0; i < max; i++){

    if(input[i] === input[ i + 1 ]){
      count ++;
    }else if(input[ i + 1 ] === undefined ){
      tampung += input[i] + (count + 1);
    }else if(input[i] != input[ i + 1 ]){
      tampung += input[i] + (count + 1);
      count = 0;
    }

  }

  // variable tampung2 berfungsi untuk menampung array yang berisi contoh: ["a", "4", "b", 2]
  tampung2 = tampung.split("");
  max = tampung2.length;

  // console.log(tampung);
  // console.log(tampung2);
  // console.log(max);

  // loop untuk menghilangkan huruf yang dimana huruf tersebut hanya ada satu di dalam sebuah kata
  // conoth: indahnya akan menghasilkan sebuah array yang berisi ["a", "2", "d", "1", "n", "2", "h", "1", ....]
  // dari array tersebut dapat di simpulkan bahwa a ada 2 dan d hanya ada 1 maka d akan di hapus dari array tampung2
  for(var j = 0; j < max; j++){
    if(tampung2.indexOf("1") != -1){
      tampung2.splice( (tampung2.indexOf("1") - 1), 2 )
      console.log(tampung2);
    }else{
      break;
    }
  }

  // untuk mengetahui berapa banya variasi huruf didalam sebuah kata
  console.log(tampung2);
  variasi = tampung2.length / 2;
  console.log(variasi);
  // function variasi mengembalikan hasil / meriturn banyaknya variasi huruf yang ada didalam sebuah kata
  return variasi;

}

var repeatedLetter = function(input){
  var kalimat = input;
  var countVariasi = [];
  var array = [];
  var max = 0;

  for(var i = 0; i < input.length; i++){
    countVariasi[i] = variasi(input[i]);
  }

  // fungsi untuk mengetahui angka tertinggi yang terdapat didalam array
  max = Math.max.apply(Math, countVariasi);

  // cetak hasilnya
  console.log(countVariasi);
  console.log("max : " + max);
  console.log("index dari max : " + countVariasi.indexOf(max));
  console.log("kata yang palin banyak variasinya adalah : " + kalimat[countVariasi.indexOf(max)]);
}

repeatedLetter(input);

//repeatedLetter(input);
//console.log(kalimat);
//console.log(countVariasi);
