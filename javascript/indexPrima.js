var input = Number(prompt("masukan index array ?"));

// function untuk cek bilangan perima atau bukan
function cekBilanganPrima(number){
  for (var i=2 ; i< number; i++){
    if (number%i ===0 ){
      return false;
    }
  }
  return true;
}

function indexPrima(max) {
  var arrayPrima = [];
  var start = 2;
  while(arrayPrima.length < max) {
    if(cekBilanganPrima(start)) {
      arrayPrima.push(start);
    }
    start += 1;
  }
  return arrayPrima[arrayPrima.length - 1];
}

console.log( "index " + input + " bilangan primanya adalah : " + indexPrima(input));
