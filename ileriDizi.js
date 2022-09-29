const dizi= [1,2,3,4]
const karesiDizisi=[]
dizi.forEach(sayi =>{
    karesiDizisi.push(sayi*sayi);
})
console.log(karesiDizisi);
//map
const mapDizi = dizi.map(sayi => sayi*3)
console.log(mapDizi);

//filter
const filtreliDzi = dizi.filter(sayi => sayi>2)
console.log(filtreliDzi);

//reduce
//acc default değer 0 dan başlar
const toplam = dizi.reduce((acc,sayi)=>{
    return acc+sayi;
},10)
console.log(toplam);