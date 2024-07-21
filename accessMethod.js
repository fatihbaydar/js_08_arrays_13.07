// ?==============================================
// ?            DIZI ERISIM METOTLARI
// ?==============================================

console.log("***** ACCESS ******")

const numbers = [3,5,2,"4","bes","dort",3,6,"bes",5]

//* includes()
//*-----------------------------------------------------------

console.log(numbers.includes(5));
console.log(numbers.includes("BES"));
console.log(numbers.includes("BES".toLowerCase()));
console.log(numbers.includes("bes",4)) //4.indisten sonra arar
console.log(numbers.includes(2,3)) //3.indisten sonra arar


//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf(5));
console.log(numbers.indexOf("bes"));
console.log(numbers.lastIndexOf(5));
console.log(numbers.lastIndexOf(9));

if(numbers.indexOf(5)<0){
    console.log("aranan sayı bulunamadı");
}
else{
    console.log(`aranan sayı ${numbers.indexOf(5)}. indisinde bulunmuştur.`);
}

console.log(numbers.includes(numbers[3],4));

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.
console.log(numbers)
// console.log(number.join())


console.log(numbers.join(" - "));

//* toString()
//*-----------------------------------------------------------//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(numbers.toString());

//* concat()
//*-----------------------------------------------------------

const message = ["Merhaba","İstanbul cok güzel","aile önemlidir"]
const time = new Date().toDateString()
console.log(time);
const birlesik = message.concat(time) //dizide birleştirdi.
console.log(birlesik);

const tamam = time.concat(message," hello")// stringte birleştirdi
console.log(tamam);

console.log(birlesik.reverse().join("-"));

//* slice(start, end) -- end exclusive değişkene atamalı.esas tanımlı değişekeni değiştirmez sadece okur
//*-----------------------------------------------------------

const arabalar = ["mercedes", "audi", "wolswagen", "bmw"]
arabalar.slice(2)
console.log(arabalar);
console.log(arabalar.slice(2));

///////////////
const ara = arabalar.reverse()
console.log(ara);
// console.log(arabalar.reverse()); 

const myArrt = ["1",2,"hello","world"]
const newArr = myArrt.reverse()
console.log(myArrt);
console.log(newArr);

const myArrrr = [1,2,5,6,7,3,4]
const newArrr =myArrrr
myArrrr.sort()
console.log(newArrr); 

const dizi = ["1",2,"hello","world"];
dizi.push("clarusway")
if(dizi.includes("clarusway")){
    for(let i = 0; i<dizi.length; i++){
        if(dizi[i]==="clarusway"){
            dizi[i]="clarusway FS"
        }
    }
}

console.log(dizi);

