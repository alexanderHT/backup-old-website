var tampung = [];
var input1 = Number(prompt("masukan nilai awal")) + 1;
var input2 = Number(prompt("masukan nilai akhir"));

function rangeAngka(x , y){
  if(x === y ){
    return x
  }else{
    tampung.push(x);
    return x + rangeAngka(x + 1, y)
  }
}

console.log(rangeAngka(input1, input2));
console.log(tampung);
