alert("=== SELAMAT DATANG ===");
var bool = true;

// variable global
// variable DaftarKontak merupakan sebuah array untuk menampung objek
var DaftarKontak = [];

// function dasar

// fungsi untuk menambah kotak
var tambahKontak = function(nama, email, telepon){

    //  membuat objek secara literal
    var kontak = {
        nama: nama,
        email: email,
        telepon: telepon
    };

    return kontak;
}

// fungsi untuk melihat semua list kontak
var lihatSemua = function(){
  for (var i = 0; i < DaftarKontak.length; i++) {
    console.log(DaftarKontak[i]);
  }
}

// fungsi untuk mencari kotak seseorang berdasarkan nama
var cariKontak = function(nama){
  for (var i = 0; i < DaftarKontak.length; i++) {
    if(DaftarKontak[i].nama === nama){
          console.log(DaftarKontak[i]);
      }
  }
}

while(bool){
  // variable lokal
  var nama = "";
  var email= "";
  var telepon = "";

  // mengambil inputan dari user
  var pilih = prompt("masukan pilihan anda (1: Menambahkan daftar kotak, 2: Menampilkan semua daftar kotak, 3: Menampilkan daftar kotak yang di cari, 4: keluar) ");

  switch(pilih){
    // pilihan 1 untuk menambahkan daftar kotak
    case '1':
      nama = prompt("masukan nama?");
      email = prompt("masukan email?");
      telepon = prompt("masukan telepon?");
      DaftarKontak[DaftarKontak.length] = tambahKontak(nama, email, telepon);
      bool = true;
    break;
    // pilihan 2 untuk menampilkan semua daftar kotak
    case '2':
      lihatSemua();
      bool = true;
    break;
    // pilihan 3 untuk menampilkan daftar pelanggan kotak
    case '3':
      var cari = prompt("masukan nama yang mau di cari?");
      cariKontak(cari);
      bool = true;
    break;
    // pilihan 4 untuk
    case '4':
      bool = false;
    break;
    // kembali ke awal pertanyan
    default:
      bool = true;
    break;
  }

}

console.log("keluar dari program");
