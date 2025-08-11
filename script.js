// // 1-misol
// let matn = "Bunga kirishdan ehtiyot bo'ling !";
// console.log(matn);

// // 2chi misol
// let name = "Sardor";
// let lastName = "Qobilov";
// let fullName = name + " " + lastName;
// let malumot = prompt("Ism va Sharifingiz?")
// alert("Ism Familya: " + fullName);

// // 3-misol
// let tugilganYil = prompt("Tug'ilgan yilingizni kiriting:");
// let hozirgiYil = new Date().getFullYear();
// let yosh = hozirgiYil - tugilganYil;

// alert("Siz " + yosh + " yoshdasiz.");

// // 4-misol
// let time = 60;
// let min = time * 60;
// let sec = time * 3600;
// let milsec = time * 3600000;

// console.log("soat", time);
// console.log("minut", min);
// console.log("sekund", sec);
// console.log("millisekund", milsec);




// // 5-misol
// let a = 12;
// let b = 34;
// let c = 46;
// let plus = a + b;
// console.log(plus === c);

// // 6-misol
// console.log(plus / 2);

// // 7-misol
// a = 12;
// b = 34;
// c = 45;

// let orta = (a + b + c) / 3;
// console.log(orta);

// // 5-topshiriq
// const check = 4 > 3 && 10 < 12
// console.log(check);

// const num = 4 > 3 && 10 > 12
// console.log(num);

// const result1 = 4 > 3 || 10 < 12
// console.log(result1);

// const result2 = 4 > 3 || 10 > 12
// console.log(result2);

// const notCheck1 = !(4 > 3)
// console.log(notCheck1);

// const notCheck2 = !(4 < 3)
// console.log(notCheck2);

// const notFalse = !(false)
// console.log(notFalse);

// const notCheck3 = !(4 > 3 && 10 < 12)
// console.log(notCheck3);

// const notCheck4 = !(4 > 3 && 10 > 12)
// console.log(notCheck4);

// const notEqual = !(4 === "4")
// console.log(notEqual);


// // 2-topshiriq

// // 1-misol
// let ism = prompt("Ismingizni kiriting:");
// if (ism.length >= 7) {
//     console.log("Ismingiz uzun");
// } else {
//     console.log("Ismingiz qisqa");
// }

// // 2-misol
// let ism2 = prompt("Ismingizni kiriting:");
// let familiya = prompt("Familiyangizni kiriting:");

// if (ism2.length > familiya.length) {
//     console.log("Ismingiz uzun");
// } else if (ism2.length < familiya.length) {
//     console.log("Familiyangiz uzun");
// } else {
//     console.log("Ikkalasi teng");
// }

// // 3-misol
// let raqam = parseInt(prompt("1 dan 7 gacha bo'lgan raqam kiriting:"));

// if (raqam === 1) {
//     console.log("Dushanba");
// } else if (raqam === 2) {
//     console.log("Seshanba");
// } else if (raqam === 3) {
//     console.log("Chorshanba");
// } else if (raqam === 4) {
//     console.log("Payshanba");
// } else if (raqam === 5) {
//     console.log("Juma");
// } else if (raqam === 6) {
//     console.log("Shanba");
// } else if (raqam === 7) {
//     console.log("Yakshanba");
// } else {
//     console.log("siz garangmisiz haftada faqat 7 kun bor!!!");
// }
// // begin1.2.
// a = 3;
// let perimetr = 4 * a;
// let yuzi = a ** 2;
// console.log("perimetri: ", Number(perimetr));
// console.log("Yuzi: ", Number(yuzi));

// // begin3.
// a = 4;
// b = 6;
// let perimetri = 2 * (a + b);
// let yuzi = a * b;
// console.log("perimetri: " + perimetri + ", Yuzi" + yuzi);

// // begin10.
// a = 2;
// b = 4;

// const qoshish = a + b;
// const kopaytirish = a * b;
// const aKvadrat = a ** 2;
// const bKvadrat = b ** 2;

// console.log("qo'shish:", qoshish);
// console.log("Ko‘paytmasi:", kopaytirish);
// console.log("a ning kvadrati:", aKvadrat);
// console.log("b ning kvadrati:", bKvadrat);

// // begin11.
// a = 40;
// b = 39;

// const salom = a + b;
// const hayir = a * b;

// console.log("javobi", salom);
// console.log("javobi", hayir);




//majburiy fan: matematika, ona tili, ingliz tili  yarim final max ball har biridan: 20ball
// tarix 60 dan 45 kirsa o'tadi
// ism familya 
// majburiy block matematika fani


// Ism Sharif qismi
let ism = prompt("Isim familyani kiriting");
let familya = prompt("Familyani kiriting");
alert("Salom " + ism + " " + familya + "!");
// 1-test ball lari   
let youBall = prompt("Balni kiriting: (*^▽^*)/");
const jami = 60;

if (youBall <= 30) {
    alert("Siz sharmanda qildiz!!! Kira olmadiz 🤣🤣🤣")
} else if (youBall <= jami) {
    alert("Sizga qoyil 1-testdan o'tdingiz. Keyingisiga omad!!! 😁😁😁")

    // 2-test fan ballari
    tarixBallari = +prompt("Tarixdan ballni kiriting: (0-20)");
    bilogiyaBallari = +prompt("biologiyadan ballni kiriting: (0-20)");
    onatiliBallari = +prompt("onatili ballni kiriting: (0-20)");

    barchaFandanBallar = onatiliBallari + bilogiyaBallari + tarixBallari;
    if (barchaFandanBallar <= 20) {
        alert("Siz bizni universitetga kira olmadiz!")
    } else if (barchaFandanBallar <= 40) {
        alert("sizni kontraktga kirganiz bilan tabriklaymiz yoki keyingi yil o'qishni qayta topshiring!")

        alert("Sizni" + "Ona tili va Tarix: " + (tarixBallari + onatiliBallari) + "ballari ko'p ekan. Sizni Adabiy tarix shinoslik fanlariga qo'shamiz!")
    } else if (barchaFandanBallar <= jami) {
        alert("Sizni budjetga kirganiz bilan tabriklaymiz. siz juda ham ilimga chanqoq ekansiz!!!")
        alert("Sizni" + "Ona tili va Tarix: " + (tarixBallari + onatiliBallari) + "ballari ko'p ekan. Sizni Adabiy tarix shinoslik fanlariga qo'shamiz!")
    }
}




