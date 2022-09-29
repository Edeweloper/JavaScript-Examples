var sayi = 10;
var sehir = "Ankara";
sayi=11;
sehir="Adana";
var sehir = "Adana";
//let in vardan farkı bir daha tanımlama yapılamaması
let il = "Ankara";
il = "Bursa";
//let il = "İzmir";
// fuction nun içinde tanımlanan var fuunctionun dışında yazılamaz
function mesajVer(){
    var isim="Engin";
    console.log(isim);
    console.log(sehir);
}
//console.log(isim);
console.log(sayi);
console.log(sehir);
console.log(il);

mesajVer();
for(let i=1;i<10;i++){
    console.log(i)
}
//console.log(i)
// const degeri değişmeyecek sabit veriler için kullanılır
const soyad ="Demirog"
console.log(soyad);
// diziler ve nesneler referans tiptir bu yüzden const ta olsa değişiklik yapılabilir.Olay referansının değişmesidir.
const sehirler = ["Ankara","İstanbul","Adana"]
sehirler.push("İzmir");
console.log(sehirler)
 