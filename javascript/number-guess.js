// varibale global
var nyawa = 5;
var ronde = 1;

// function global
// function komputer untuk menghasilkan angka acak dari 1 sampai 10
var komputer = function(){
    return Math.floor((Math.random() * 10) + 1);
}

// program tebak
do{
  // varibale local
  var pilihanPengguna = Number(prompt("Masukan angka tebakan?"));
  var pilihanKomputer = komputer();

  // keterangan
  console.log("====== RONDE " + ronde + " ======");
  console.log("pilihan Pengguna : " + pilihanPengguna);
  console.log("pilihan Komputer : " + pilihanKomputer);

  if(pilihanPengguna === pilihanKomputer){
    console.log("Selamat Atas Kemenanganmu!");
    nyawa = 0;
  }else{
    if (pilihanPengguna > pilihanKomputer) {
      console.log("angka mu lebih besar");
    }else{
      console.log("angka mu lebih kecil");
    }
    ronde++;
    nyawa--;
    if (nyawa === 0) {
      console.log("Coba Lagi!");
    }
  }
}while(nyawa);
