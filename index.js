var kullanicilar =[
    {email:"edeweloper@gmail.com",sifre:"1234"},
    {email:"edeweloper2@gmail.com",sifre:"1234"},
    {email:"edeweloper3@gmail.com",sifre:"1234"}
]

var tivitler =[
    {email:"edeweloper@gmail.com",tivit:"Selam"},
    {email:"edeweloper2@gmail.com",tivit:"Selam nasılsın"},
    {email:"edeweloper3@gmail.com",tivit:"Selam canım"}
]
var email = prompt("email?")
var sifre = prompt("sifre?") 

function kullaniciVarmi(email, sifre){
    for(i=0;i<kullanicilar.length;i++){
    if((kullanicilar[i].email == email && kullanicilar[i].sifre == sifre)){
        return true;
    }
    else{
        return false;
    }
}
}
function giris(email,sifre){
    if(kullaniciVarmi(email,sifre)){
        console.log(tivitler)
    }
    else{
        console.log("Kullanıcı adı veya şifresi hatalı")
    }
}
giris(email,sifre)