// ================== Masala 1 (Harorat hisoblagich)
let temperature = +prompt("Bugun havo harorati necha daraja?");

let weatherDB = {
    today: temperature,
    isCold: temperature < 15,
    isHot: temperature > 30,
    tomorrow: +prompt("Ertaga havo haroratini taxmin qiling")
};

console.log(weatherDB);


// ================== Masala 2 (Do‘kon narxlari)
let productCount = +prompt("Nechta mahsulot sotib oldingiz?");

let shopDB = {
    count: productCount,
    items: [],
    totalPrice: 0
};

for (let i = 0; i < 2; i++) {
    let name = prompt("Mahsulot nomini yozing:");
    let price = +prompt("Narxini yozing:");
    shopDB.items.push({ name: name, price: price });
    shopDB.totalPrice += price;
}

console.log(shopDB);


// ================== Masala 3 (Sonlar ustida amallar)
let num1 = +prompt("Birinchi sonni kiriting:");
let num2 = +prompt("Ikkinchi sonni kiriting:");

let numbers = [num1, num2];

let result = {
    sum: num1 + num2,
    difference: num1 - num2,
    product: num1 * num2,
    quotient: num1 / num2
};

console.log(numbers);
console.log(result);


// ================== Masala 4 (Toq va juft sonlar)
let n = +prompt("Nechta son kiritmoqchisiz?");
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt((i+1) + "-sonni kiriting:"));
}

let result2 = {
    even: arr.filter(x => x % 2 === 0),
    odd: arr.filter(x => x % 2 !== 0),
    evenCount: arr.filter(x => x % 2 === 0).length,
    oddCount: arr.filter(x => x % 2 !== 0).length
};

console.log(arr);
console.log(result2);


// ================== Masala 5 (Matn ustida ishlash)
let text = prompt("Biror gap yozing:");

let textDB = {
    original: text,
    length: text.length,
    wordCount: text.split(" ").length,
    upper: text.toUpperCase(),
    lower: text.toLowerCase()
};

console.log(textDB);
