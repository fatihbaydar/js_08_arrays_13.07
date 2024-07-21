// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

//! 1-Square bracket ( Array Literal) yöntemi ile dizi tanımlama
//! En çok tercih edilen yöntem

const names = ["yavuz","melih","burak","tolga",true,[1,2,3],8,"kagıt"]
console.log(names);
console.log("dizinin uzunluğu:", names.length);
console.log(typeof names); //js te her şey obje yansır

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------

//? OKUMA

console.log(names[2]);
console.log(names[5][1]);

const lastElement = names[names.length-1]
console.log(lastElement);
console.log(names[names.length-1]);

// YAZMA
names[4] = "dogru"
console.log(names);
names[6]++
console.log(names);

names[2] = names[2].toUpperCase()
console.log(names[2]);

// names = [1,2,3,4,5] -hata verir.Assignment to constant variable.

// ! 2.Yöntem (Object Constructor)

const programmingLangs = new Array("Go","JS","Pyhton")
console.log(programmingLangs);
const myArr = new Array(10)
console.log(myArr);
//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi(number) girilirse,
//! constructor bunu o sayida bir bellek alani acilacakmis gibi dusunur.

// ! 3.Yöntem (Array.of())
const sayilar = Array.of(5)
console.log(sayilar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = ["BMW", "Mercedes", "Audi", "Opel", "Mazda"]

cars[5] = "Toyota" // olmayan indisine eleman ekledik.
console.log(cars);

cars[cars.length] = "Mitsubishi" // burada da uzunluğu eleman sayısını gösterir. onun sonuna ekle dedik. 
console.log(cars);

// bu iki yöntem manuel

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const el = cars.push("Kia") 
console.log(el);
console.log(el, cars);

//** pop() son elemani siler ve sildigi elemani dondurur.
cars.pop()
console.log(cars.pop());
console.log(cars);

//* shift, dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
// cars.shift()
console.log(cars.shift());
console.log(cars);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.

// cars.unshift("Wolkswagen")
// console.log(cars);
const sonSayi =  cars.unshift("Wolkswagen")
console.log(cars, sonSayi);

// .splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri 
 
cars.splice(2,0,"Porsche")
console.log(cars);

cars.splice(4,0,"Seat","Lada")
console.log(cars);

// Reverse()
cars.reverse()
console.log(cars);

//sort
//! sort metodu diziyi iterasyona ugratir ve ascii karaktere göre sıralama yapar.
//! Dolayısıyla string'le doğru şekilde sıralama yapabilir.
cars.sort()
console.log(cars);
cars.sort().reverse()
console.log(cars);

const numbers = [ 2,4,1,8,11,9,22,3,7,]
numbers.sort()
console.log(numbers);

// sıralama:

numbers.sort((a,b)=> a-b) //Küçükten büyüğe
console.log(numbers);
numbers.sort((a,b)=> b-a) //Büyükten küçüğe
console.log(numbers);

//* fill()

const degerler = [2,4,6,7,9,11]
degerler.fill(7)

// for (let i = 0; i < degerler.length; i++) {
//     degerler[i] = 9    
// }
console.log(degerler);
degerler.fill(88,2) //?1.parmetere: deger, 2.start index
console.log(degerler);
degerler.fill(33,1,3) //?1.parmetere: deger, 2.start index, 3. end index (not inclusive)
console.log(degerler);