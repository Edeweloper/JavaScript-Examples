var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}
selamFonksiyonu();

var selamFonksiyonu2 = ()=>{
    console.log("Merhaba 2");
    console.log("Birşey");
}
// var selamFonksiyonu2 = ()=>console.log("Merhaba 2");
selamFonksiyonu2();

var selamFonksiyonu3 = (mesaj)=> {
    console.log(mesaj);
   
}
selamFonksiyonu3("Merhaba dunya");

var topla =(sayi1,sayi2)=>{
    return sayi1+sayi2;
}
let toplam= topla(2,3);
console.log(toplam);