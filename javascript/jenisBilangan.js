var cekBilanganPrima = function(input){
  var bool;

    for ( var j = 2 ; j < input ; j++){
      if (input % j === 0) {
        bool = false;
        break;
      }else{
        bool = true;
      }
    }

  if (bool) {
    return true;
  }
  else {
    return false;
  }
}

var jenisBilangan = function(bilangan){
  if(cekBilanganPrima(bilangan)){
    return "Prima"
  }else if (bilangan % 2 === 0) {
    return "Genap";
  }else if (bilangan % 2 === 1) {
    return "Ganjil";
  }else{
  }
}

for (var i = 1; i <= 100; i++) {
  console.log(i + " adalah bilangan " + jenisBilangan(i));
}
