// 1-misol
let matn = "Bunga kirishdan ehtiyot bo'ling !";
console.log(matn);

// 2chi misol
let name = "Sardor";
let lastName = "Qobilov";
let fullName = name + " " + lastName;
let malumot = prompt("Ism va Sharifingiz?")
alert("Ism Familya: " + fullName);

// 3-misol
let tugilganYil = prompt("Tug'ilgan yilingizni kiriting:");
let hozirgiYil = new Date().getFullYear();
let yosh = hozirgiYil - tugilganYil;

alert("Siz " + yosh + " yoshdasiz.");

// 5-misol
let a = 12;
let b = 34;
let c = 46;
let plus = a + b;
console.log(plus === c);

// 6-misol
console.log(plus / 2);

// 7-misol
a = 12;
b = 34;
c = 45;

let orta = (a + b + c) / 3;
console.log(orta);

// 5-topshiriq
const check = 4 > 3 && 10 < 12
console.log(check);

const num = 4 > 3 && 10 > 12
console.log(num);

const result1 = 4 > 3 || 10 < 12
console.log(result1);

const result2 = 4 > 3 || 10 > 12
console.log(result2);

const notCheck1 = !(4 > 3)
console.log(notCheck1);

const notCheck2 = !(4 < 3)
console.log(notCheck2);

const notFalse = !(false)
console.log(notFalse);

const notCheck3 = !(4 > 3 && 10 < 12)
console.log(notCheck3);

const notCheck4 = !(4 > 3 && 10 > 12)
console.log(notCheck4);

const notEqual = !(4 === "4")
console.log(notEqual);


// 2-topshiriq

// 1-misol
let ism = prompt("Ismingizni kiriting:");
if (ism.length > 7) {
    console.log("Ismingiz uzun");
} else {
    console.log("Ismingiz qisqa");
}

// 2-misol
let ism2 = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");

if (ism2.length > familiya.length) {
    console.log("Ismingiz uzun");
} else if (ism2.length < familiya.length) {
    console.log("Familiyangiz uzun");
} else {
    console.log("Ikkalasi teng");
}

// 3-misol
let raqam = parseInt(prompt("1 dan 7 gacha bo'lgan raqam kiriting:"));

if (raqam === 1) {
    console.log("Dushanba");
} else if (raqam === 2) {
    console.log("Seshanba");
} else if (raqam === 3) {
    console.log("Chorshanba");
} else if (raqam === 4) {
    console.log("Payshanba");
} else if (raqam === 5) {
    console.log("Juma");
} else if (raqam === 6) {
    console.log("Shanba");
} else if (raqam === 7) {
    console.log("Yakshanba");
} else {
    console.log("siz garangmisiz haftada faqat 7 kun bor!!!");
}

// begin10.
a = 2;
b = 4;

const qoshish = a + b;
const kopaytirish = a * b;
const aKvadrat = a ** 2;
const bKvadrat = b ** 2;

console.log("qo'shish:", qoshish);
console.log("Ko‘paytmasi:", kopaytirish);
console.log("a ning kvadrati:", aKvadrat);
console.log("b ning kvadrati:", bKvadrat);

// begin11.
a = 40;
b = 39;

const salom = a + b;
const hayir = a * b;

console.log("javobi", salom);
console.log("javobi", hayir);




