class Personel {
    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }
    kaydet () {
        console.log("Personel Kaydedildi  " + this.ad);
    }
}

 const personel  = new Personel("Engin","Demirog");
 personel.kaydet();
 personel.ad="Engin";
 personel.soyad="Demirog"
 console.log(personel.ad);
//yani this olunca asıl property oluyor üstteki sahte property
//yani güvensiz bir işlem  