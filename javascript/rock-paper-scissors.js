var Pengguna = prompt("pilih gunting, kertas, batu?");

// fungsi untuk komputer memilih kertas, gunting, atau batu
var Pilihanlawan = function(){
  // variable acak untuk menampung bilangan 0 - 1 (contoh: 0,5)
  var acak = Math.random();
  // menentukan pilihan dari variable acak
  if (acak < 0.34) {
    return "batu";
  } else if(acak > 0.33  || acak < 0.67) {
  	return "kertas";
  } else {
  	return "gunting";
  }
}

var lawan  = Pilihanlawan();

console.log("pilihanPengguna : " + Pengguna);
console.log("Pilihanlawan : " + lawan);

var bertarung = function(Pengguna, lawan){
    if(Pengguna === lawan){
        return "Seri!";

    }else if(Pengguna === "batu"){

        if(lawan === "gunting"){
            return "Batu menang! (Pengguna Menang!)";
        }else{
            return "kertas menang! (Lawan Menang!)";
        }

    }else if(Pengguna === "kertas"){

        if(lawan === "batu"){
            return "Kertas menang! (Pengguna Menang!)";
        }else{
            return "Gunting menang! (Lawan Menang!)";
        }

    }else if(Pengguna === "gunting"){

        if(lawan === "batu"){
            return "batu menang! (Lawan Menang!)";
        }else{
            return "Kertas menang! (Pengguna Menang!)";
        }

    }else{
      location.reload();
    }

}

// bertarung
console.log(bertarung(Pengguna, lawan));
