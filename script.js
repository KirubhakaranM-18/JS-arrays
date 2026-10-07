//Array Higher-Order Methods

//1
let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(num) {
    console.log(num);
});

//2
let name = ["krish","prince"];
name.forEach(function(names){
      console.log("hello,"+names)
});

//3
let numbers1=[1,2,3,4,5,6];

let result = numbers1.map(function(num1){
    return num1 * 2
})
console.log(result);

//4
let price = [225,300,450,700];
let prices = price.map(function(pri){
    return pri +100;
})
console.log(prices);

//5
let even =[2,3,4,8,9,10,13,17,18,20];
let evennumber = even.filter(function(evn){
    return evn % 2===0
})
console.log(evennumber)

//6
let age =[16,18,28,24,21,15,17];
let ages = age.filter(function(sag){
    return sag>=18;
})
console.log(ages)

//7
let greater =[59,45,49,60,43,70];
let great = greater.find(function(grt){
    return grt >50
})
console.log(great);

//8
let students = [
    { name:"thina",mark:92 },
    { name:"krish",mark:98 },
    { name:"prince",mark:88 }, 
    { name:"barath",mark:80 }
]
let std = students.find(function(std1){
    return std1.mark > 80
})
console.log(std)

//9
let numbers2 = [2,4,6,8,10];
let num2 = numbers2.reduce(function(sum,arnum){
    return sum+arnum
},0)
console.log(num2);

//10
let prices1 = [225,305,550,678,992];
let price1 = prices1.reduce(function(sum,num){
    return sum+num
},0)
console.log(price1);

//11
//true
let higher = [99,98,101,97,96,95];
let high = higher.some(function(sum){
    return sum >100
})
console.log(high);

//false
let higher1 = [99,98,100,97,96,95];
let high1 = higher1.some(function(sum){
    return sum >100
})
console.log(high1);

//12
//true
let passmark = [36,50,78,89,90,39];
let pass = passmark.every(function(sum){
    return sum >35
})
console.log(pass);

//false
let passmark1 = [34,50,78,89,90,35];
let pass1 = passmark1.every(function(sum){
    return sum >35
})
console.log(pass1);


//Sort / Join / Array Conversion

//13
let assnum = [8,5,6,4,7,2,3,1];
let assnum1 = assnum.sort(function(a,b){
    return a-b
})
console.log(assnum1);

//14
let assnum2 = [8,5,6,4,7,2,3,1];
let assnum3 = assnum2.sort(function(a,b){
    return b-a
})
console.log(assnum3);

//15
let nam = ["krish "," prince "," kirubha "];
let nam1 = nam.toString();
console.log(nam1)

//16
let nam2 = ["krish "," prince "," kirubha "];
let nam3 = nam2.join("-");
console.log(nam3)

//17
let nam4 = ["naruto "," luffy "," zoro "," eren "];
let nam5 = nam4.join(",");
console.log(nam5)

//String Methods

//18
let text = "JavaScript";

console.log(text.charAt(4));

//19
let text1 = "JavaScript"
console.log(text1.charCodeAt(0));

//20
let text2 = "hello JavaScript"
console.log(text2.length);

//21
let text3 = "JavaScript developer"
let textres = text3.slice(0,10)
console.log(textres);

//22
let text4 = "JAvASCRIPT";
let textres1 = text4.toUpperCase();
console.log(textres1);

//23
let text5 = "jAvA Script"
console.log(text5.toLowerCase());

//24
let text6 = " hello spaces "
console.log(text6.trim());

//25
let sentence = prompt("enter here:");

console.log(sentence.includes("your thoughts"));
console.log(sentence.indexOf("your thoughts"));
console.log(sentence.startsWith("hello"));
console.log(sentence.endsWith("!"));

// Date Methods

//26
let date0 = new Date();
console.log(date0.getFullYear());
console.log(date0.getMonth());
console.log(date0.getDate());
console.log(date0.getDay());

//27
let date1 =new Date();
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());

//28
let date3 = new Date();
date3.setFullYear(2000);
console.log(date3);

//29
let date4 = new Date();
date4.setMonth(0);
date4.setDate(18);
console.log(date4);

//30
let dob = prompt("Enter your date of birth:");
let date = new Date(dob);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(days[date.getDay()]);