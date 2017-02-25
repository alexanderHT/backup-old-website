// varibale global
var input = prompt("masukan sebuah kalimat").split("").sort();
var max = input.length;
var tampung = "";
var count = 0;

// function stringCompression
var stringCompression = function(input){

  for(var i = 0; i < max; i++){

    if(input[i] === " "){
      // jika ketemu spasi maka tidak memasukan apa apa kedalam variable tampung
    }else if(input[i] === input[ i + 1 ]){
      // ketika ketemu huruf yang sejenis maka mejumlahkanya ke count
      count ++;

    }else if(input[ i + 1 ] === undefined ){
      // bila huruf sebelum dan sesudahnya sudah habis maka langsung masukan huruf dan banyaknya berapa tanpa koma
      tampung += input[i] + (count + 1);

    }else if(input[i] != input[ i + 1 ]){
      // bila huruf sebelum dan sesudahnya berbeda ma akan memasukan huruf dan count kedalam variable tampung
      tampung += input[i] + (count + 1) + ", ";
      count = 0;

    }

  }
  // cetak hasil input dan output
  console.log(input);
  console.log(tampung);
}

// memangil fungsi stringCompression
stringCompression(input);
