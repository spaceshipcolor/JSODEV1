let userName = prompt ("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")
/* Kullanıcıdan veriyi çekip HTML döküman içine id kullanarak 
yazdırıyoruz.*/
userName ? (myName.innerHTML = userName.toUpperCase()) : // gelen bilgiyi büyük harfle yazdır.
(myName.innerHTML = "Yabancı"); // alan boş bırakılırsa "Yabancı" ile doldur. 
 

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}

const d = new Date();
const days = 
["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDay").innerHTML = days[d.getDay()];


setInterval(tarihSaat, 1000); 