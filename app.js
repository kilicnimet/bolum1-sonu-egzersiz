let counterDOM = document.querySelector("#counter") // counter idli h3 tanıtıldı
let increaseDOM = document.querySelector("#increase") // increase idli buton tanıtıldı
let decreaseDOM = document.querySelector("#decrease") // decrease idli buton tanıtıldı
let clearDOM = document.querySelector("#zero") // zero idli buton tanıtıldı
/* let counter = 0 // counter sıfıra eşitlendi -- sayaç sıfırdan başlayacak */
let counter = localStorage.getItem("SayacKey") ? Number(localStorage.getItem("SayacKey")) : 0

counterDOM.innerHTML = counter // htmldeki h3 etiketine counter içindeki sayı yazdırıldı - şu an 0

clearDOM.addEventListener("click", sifirla) // sıfırla butonuna basılınca sıfırla fonksiyonu çalıştırıldı - fonksiyon aşağıda
increaseDOM.addEventListener("click", arttir) // artır butonuna basılınca artır fonksiyonu çalıştırıldı - fonksiyon aşağıda
decreaseDOM.addEventListener("click", azalt) // azalt butonuna basılınca azalt fonksiyonu çalıştırıldı - fonksiyon aşağıda

function sifirla(){ // sifirla fonksiyonu yaratıldı
    counter = 0 // counter değeri her ne olursa olsun sıfırlandı
    localStorage.setItem("SayacKey", counter)
    counterDOM.innerHTML = counter // htmldeki h3 etiketine counterın son değeri yazıldı -- 0 yazar
    if (counter === 0) { // eğer counter 0a eşitse 
        clearDOM.classList.add("disabled") // htmldeki zero idli clearDOM elementine disabled classı eklendi -- böylece bootstrap class özellikleri ile buton pasif gözükecek
    } else clearDOM.classList.remove("disabled") // htmldeki zero idli clearDOM elementinden disabled classı kaldırıldı -- böylece bootstrap class özellikleri ile buton aktif gözükecek
        /* console.log(clearDOM.classList) */ 
}

function arttir(){ // artır fonksiyonu yaratıldı
    counter += 1 // counter değeri 1 artırıldı 
    localStorage.setItem("SayacKey", counter)
    counterDOM.innerHTML = counter // htmldeki h3 etiketine counterın son değeri yazıldı
    if (counter === 0) { // eğer counter 0a eşitse 
        clearDOM.classList.add("disabled") // htmldeki zero idli clearDOM elementine disabled classı eklendi -- böylece bootstrap class özellikleri ile buton pasif gözükecek
    } else clearDOM.classList.remove("disabled") // htmldeki zero idli clearDOM elementinden disabled classı kaldırıldı -- böylece bootstrap class özellikleri ile buton aktif gözükecek
      /*  console.log(clearDOM.classList) */
}

function azalt(){ // azalt fonksiyonu yaratıldı
    counter -= 1 // counter değeri 1 azaltıldı 
    localStorage.setItem("SayacKey", counter)
    counterDOM.innerHTML = counter // htmldeki h3 etiketine counterın son değeri yazıldı
    if (counter === 0) { // eğer counter 0a eşitse 
        clearDOM.classList.add("disabled") // htmldeki zero idli clearDOM elementine disabled classı eklendi -- böylece bootstrap class özellikleri ile buton pasif gözükecek
    } else clearDOM.classList.remove("disabled") // htmldeki zero idli clearDOM elementinden disabled classı kaldırıldı -- böylece bootstrap class özellikleri ile buton aktif gözükecek
        /*  console.log(clearDOM.classList) */
}





