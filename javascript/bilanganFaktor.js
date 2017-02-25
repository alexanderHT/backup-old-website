var input = Number(prompt("masukan bilangan yang ingin di faktor?"));

var bilanganFaktor = function (bilangan){
    var hasil = [];
    for (var i=1; i <= bilangan; i++){
        if (bilangan % i == 0){
            hasil[hasil.length] = i;
        }
    }
    console.log(hasil);
}

bilanganFaktor(input);
