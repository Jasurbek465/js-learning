// 1.misol
console.log("1 dan 10 gacha sonlar:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2.misol
console.log("10 dan 1 gacha sonlar:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3.misol
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("1 dan 100 gacha sonlar yig'indisi:", sum);


// 4.misol
console.log("1 dan 20 gacha juft sonlar:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 5.misol
console.log("1 dan 30 gacha toq sonlar:");
let sumOdd = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    sumOdd += i;
  }
}
console.log("Toq sonlar yig'indisi:", sumOdd);

// 6.misol
let n = prompt("Son kiriting:");

n = Number(n);

let faktorial = 1;
for (let i = 1; i <= n; i++) {
  faktorial *= i;
}
                                            // gpt dan olishga majbur bo'ldim !!!

console.log(`${n}! = ${faktorial}`);
alert(`${n}! = ${faktorial}`);



// 7.misol
let arr1 = [3, 7, 2, 9, 4];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log("Massiv elementlari yig'indisi:", sum); 

// 8.misol
let arr2 = [10, -5, 7, 22, 3];
let max = arr2[0];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) max = arr2[i];
  if (arr2[i] < min) min = arr2[i];
}
console.log("Eng katta son:", max); 
console.log("Eng kichik son:", min); 

// 9.misol
let str = "salom";
let reversed = str.split("").reverse().join("");
console.log("Teskari string:", reversed); 

// 10.misol
let text = "salom";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(`"${text}" ichidagi unli harflar soni:`, count);
