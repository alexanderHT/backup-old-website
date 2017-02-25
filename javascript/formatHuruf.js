var input = prompt("masukan sebuah kalimat huruf besar dan huruf kecil?");

var formatHuruf = function(input){
  var kalimatAwal = input;
  var kalimatAkhir = "";
  
  for(i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase() ){
      kalimatAkhir += input[i].toLowerCase();
    }else{
      kalimatAkhir += input[i].toUpperCase();
    }
  }

  console.log(kalimatAwal);
  console.log(kalimatAkhir);

}

formatHuruf(input);
