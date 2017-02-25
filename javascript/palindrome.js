var input = prompt("masukan kalimat palindrome?");

function palindrome(input) {
    var palindrome = '';
    var awal = input;
    for (var i = input.length - 1; i >= 0; i--){
      palindrome += input[i];
    }

    console.log("kata yang di inputkan : " + awal);
    console.log("palindrome yang di hasilkan : " + palindrome);

    if(awal === palindrome){
      return true;
    }else{
      return false;
    }

}

palindrome(input);
