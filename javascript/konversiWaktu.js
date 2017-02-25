var input = prompt("masukan menit?");

var konversiWaktu  = function(input){
  bool = true;
  var jam = 0;
  var menit = 0;
  while(bool){
      if(input >= 60){
        input -= 60;
        jam ++;
        bool = true;
      }else if(input === 0){
        menit = "00";
        bool = false;
      }else{
        menit = input;
        bool = false;
      }
  }
  console.log("Konversi Waktu : " + jam + ":" + menit );
}

konversiWaktu(input);
