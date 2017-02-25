var input = prompt("masukan sebuah angka?");

var separateNumber = function(input){
  var angkaAwal = input;
  var angkaAkhir = "";

  for(var i = 0; i < input.length; i++){

    if(i === input.length - 1){
      angkaAkhir += input[i];
    }else if(input[i] === 0){
      angkaAkhir += input[i];
    }else if(input[i] % 2 != 0 && input[i + 1] % 2 != 0){
      angkaAkhir += input[i];
      angkaAkhir += "-";
    }else{
      angkaAkhir += input[i];
    }
  }
  console.log(angkaAwal);
  console.log(angkaAkhir);
}

separateNumber(input);
