var input = prompt("masukan bilangan prima?");

var cekBilanganPrima = function(input){
  var x = Number(input);
  var bool;

  // kondisi khusus, karena 2 merupakan bilangan prima
  if ( x === 2) {
    bool = true;
  // bila angka yang masukan bukan 2 maka jalan kan steatment ini
  }else {
    // angka yang di masukan di moduls dimulai dari 2 sampai bilangan sebelum bilangan tersebut.
    // conothnya 7 maka bilangan sebelum terakhir adalah 6
    // bila bilangan yang dimasukan ternyata bisa mengasilkan 0 maka angka tersebut bukan bilangan prima
    // jadi setting bool jadi false lalu di break fungsinya agar kelar dari steatment if dan for
    for (i = 2 ; i < x ; i++){
      if (x % i === 0) {
        bool = false;
        break;
      }else{
        bool = true;
      }
    }

  }

  // setelah steatment di atas di jalan kan akan mengasilkan bool yang berisi boolean lalu mencetak di konsol
  if (bool) {
    //console.log("Bilangan prima");
    return true;
  }
  else {
    //console.log('bukan bilangan prima');
    return false;
  }

}

cekBilanganPrima(input);

//steatment di bawah ini membuktikan bawah bilangan prima bila di modulus dari 2 sampai bilangan sebelum angka akhir hasil modulusnya tidak sama dengan 0

// var angka = prompt("masukan angka?");
// for(var i = 2; i <= angka; i++){
//   console.log(angka + " % " + i + " = " + angka % i );
// }
