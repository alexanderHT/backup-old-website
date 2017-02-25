// variable global
var input = prompt("masukan sebuah kalimat?");

var palindromeCont = function(input){
  // variable local
  var awal = input.split(" ");
  var akhir = input.split(" ").sort();

  console.log(awal.join(" "));
  console.log(akhir.join(" "));

  if(awal.length = akhir.length){
    return true;
  }else{
    return false;
  }
}

palindromeCont(input);
