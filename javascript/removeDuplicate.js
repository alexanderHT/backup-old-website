// variable global
var input = [];
var tampung = [];
var bool = true;

// pemberi tahuan cara input
alert("masukan inputan kata seberapa banyak yang di ingin kan,\n bila ingin berhenti memasukan inputan tinggal klik cancel");

// melakuakn inputan berulang ulang
while(bool){
  var kata = prompt("masukan sebuah kata?");
  if(kata != null ){
    input[input.length] = kata;
    bool = true;
  }else{
    bool = false;
  }
}

var removeDuplicate = function(input){
  // memindahkan dari array input ke array tampung namun bila kata
  // sudah ada maka tidak akan di masukan ke array tampung
  for(var i in input){
      if(tampung.indexOf(input[i]) === -1){
          tampung.push(input[i]);
      }
  }
  // cetak kata yang sudah di hilangakan duplikatnya
  console.log(tampung);
}

removeDuplicate(input);
