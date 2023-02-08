let k_adi=prompt("kullanıcı adınızı girin: ");
let a1=document.querySelector('#kadi');
a1.innerHTML=`${k_adi}`;

var zaman;
function tarih(){
    zaman=new Date();
    let saat=document.querySelector("h3#saat").innerHTML=zaman.toLocaleString('tr-TR');
}
setInterval(tarih, 1000); 

