// var input1 = "aaawossrld".split("").sort();
// var input2 = "worldd".split("").sort();
var input1 = prompt("masukan kata pertama ? ").split("").sort();
var input2 = prompt("masukan kata kedua ? ").split("").sort();
// console.log(input1);
// console.log(input2);

var cekString = function(input1, input2){
  i = 0;
  var status = true;

  while(status){

    console.log("i: ",i)
    console.log("input1: ",input1)
    console.log("input2: ",input2[i])

    if(input2[i] === undefined ){
      return true;
    }else if(input1.indexOf(input2[i]) != -1 ){
      input1.splice(input1.indexOf(input2[i]), 1);
    }else{
      // console.log("tidak ketemu");
      status = false;
    }

    i++;
  }

  return status;
}

console.log(cekString(input1, input2));
