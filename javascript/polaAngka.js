// varibale global
var polaAngkaArr = [];
var batas = 4;
var input = 0;
var kurang = 0;
var tambah = 0;
var kali = 0;
var bagi = 0;

// keterangan cara memasukan angka yang sudah di tentukan
alert("masukan pola angka dengen ketentuan berikut: \n 1. [ 1, 2, 3, 4 ] tambah \n 2. [ 1, 2, 4, 8 ] kali \n 3. [ 27, 9, 3, 1 ] bagi \n 4. [ 12, 8, 4, 0 ] kurang ");

// validasi inputan
for(var i = 0; i < batas; i++){
  input = Number(prompt("masukan angka " +  (i + 1) + " ?"));
  if( isNaN(input) || input === 0 ){
    i--;
  }else{
    polaAngkaArr[i] = input;
  }
}
// function polaAngka
var polaAngka = function(polaAngkaArr){

  // jika angka pertama lebih kecil dari angka kedua maka jalankan fungsi yang
  // ada di blok code if bila tidak maka menjalankan blok code yang ada di else
  if(polaAngkaArr[0] < polaAngkaArr[1]){
    // simpan selisih dari angka pertama dan angka kedua
    tambah = polaAngkaArr[1] - polaAngkaArr[0];
    kali = polaAngkaArr[1] / polaAngkaArr[0];

    // mulai menentukan apakah selisih dari angka pertama dan kedua cocok
    // dengan pola pertambahan atau perkalian dengan membandingan angka ketiga dengan angka kedua
    if( (polaAngkaArr[1] + tambah) === polaAngkaArr[2]){
      console.log("polaAngka : ditambah " +  tambah);
    }else if( (polaAngkaArr[2] / polaAngkaArr[1]) === kali){
      console.log("polaAngka : dikali " + kali);
    }else{
      return false;
    }
  // blok code untuk pola pengurangan dan pembagain
  }else{
    // simpan selisih dari angka pertama dan angka kedua
    kurang = polaAngkaArr[0] - polaAngkaArr[1];
    bagi = polaAngkaArr[0] / polaAngkaArr[1];

    // mulai menentukan apakah selisih dari angka pertama dan kedua cocok
    // dengan pola pengurangan atau pembagain dengan membandingan angka ketiga dengan angka kedua
    if( (polaAngkaArr[1] - kurang) === polaAngkaArr[2]){
      console.log("polaAngka : dikurang " +  kurang);
    }else if( (polaAngkaArr[1] / bagi) === polaAngkaArr[2]){
      console.log("polaAngka : dipagi " + bagi);
    }else{
      return false;
    }

  }
}

// memanggil fungsi polaAngka
polaAngka(polaAngkaArr);
