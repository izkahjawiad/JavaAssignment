// CHAPTER 1
// Q - 1

var a = "Welcome!";
alert(a);

// Q - 2

var a = "Error! Please enter valid password";
alert(a);

// Q - 3

var a = "Welcome to JS Land... ";
var b = "Happy Coding!";
alert(a + "\r\n" + b);

// Q - 4

var a = "Welcome to JS Land... ";
alert(a);

var b = "Prevent this page from creating additional dialogues ";
alert(b);

// Q - 5

var b = "Hello... I can run JS through my web browser's console";
alert(b);


// CHAPTER 2
// Q - 1

var username;

// Q - 2

var myName = "Syeda Izkah Atifa Jawaid";

// Q - 3
var message = "Hello World!";
alert(message);

// Q - 4
var name = "Izkah Jawaid";
var age = "21 year old";
var course = "Web and Mobile Hybrid Web Application Development";
alert(name);
alert(age);
alert(course);

// Q - 5

var a = "PIZZA";

alert(a + "\r\n" +a.slice(0,4) + "\r\n" + a.slice(0,3) + "\r\n" + a.slice(0,2) + "\r\n" + a.slice(0,1));


// Q - 6

var email = "example@gmail.com";
alert("My Email Address is "+email);

// Q - 7

var book = "A smarter way to learn JavaScript";
alert("I am tryning to learn from the Book "+book);

// Q - 8

var a = "Yah! I can write HTML content through JavaScript";
document.write(a);

// Q - 9

var des = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(des);
document.write("\r\n" +des);

// CHAPTER 3
// Q - 1

var age = "15";
alert("I am " +age+ " year old.")

// Q - 3

var birthYear = 1998;
document.write("My birth year is "+birthYear+"<br>");
document.write("Datatype of birthYear is Number");

// Q - 4

var name = prompt("Enter Your Name: ");
var product = prompt("Product Name: ");
var qty = prompt("Quantity: ");

document.write(name + " Ordered " + qty + " " + product + " on XYZ Clothing store");

// CHAPTER 4
// Q - 1

var name, place, animal;

// Q - 2
var name, $name, _name, userName, $age;
// var document, -alert, var, 1write, console;

// Q - 3

document.write("<h1>Rules for naming JS variables</h1>");
document.write("<br><br>");
document.write("Variable names can only contain number, $ and _ .For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
document.write("Variable names are case senstive<br>");
document.write("Variable names should not be JS keywords<br>");

// CHAPTER 5
// Q - 1

var a = prompt("Enter First Number: ");
var b = prompt("Enter Second Number: ");
var c = (+a)+(+b);
document.write("Sum of "+ a + " and " + b + " is " +c);

// Q - 2

var a = prompt("Enter First Number: ");
var b = prompt("Enter Second Number: ");
var c = (a)-(b);
document.write( a + " - " + b + " = " +c);

var a = prompt("Enter First Number: ");
var b = prompt("Enter Second Number: ");
var c = (a)*(b);
document.write( a + " x " + b + " = " +c);

var a = prompt("Enter First Number: ");
var b = prompt("Enter Second Number: ");
var c = (a)/(b);
document.write( a + " / " + b + " = " +c);

var a = prompt("Enter First Number: ");
var b = prompt("Enter Second Number: ");
var c = (a)%(b);
document.write( a + " mod " + b + " = " +c);


// Q - 3

var num ;
document.write("Value after variable declaration is: ??");
document.write("<br>");
num = 5;
document.write("Initial value: " + num);
document.write("<br>");

num++;
document.write("Value after increment is: " + num);
document.write("<br>");

num = num + 7;
document.write("Value after addition is: " + num);
document.write("<br>");

num--;
document.write("Value after decrement is: " + num);
document.write("<br>");

num = num%3;
document.write("The remainder is : " + num);
document.write("<br>");

// Q - 4

var price = 600;
var qty = prompt("Quantity of Movie Tickets: ");
var total = price * qty;
document.write("Total price of "+qty+" Movie Tickets is "+total);

// Q - 5

var num = prompt("Enter Number: ");
var b;
for(var i = 1; i <= 10; i++){
    b = num * i;
    document.write(num+" x "+i+" = "+b+"<br>");
}

// Q - 6

var cel = prompt("Enter Temparature in Celsius: ");
var feh1 = prompt("Enter Temparature in Fehrenheit: ");
var feh;
var cel1;
feh = (cel * (9/5)) + 32;
cel1 = (feh1 - 32)*(5/9);
document.write("Temparature in Fehreheit is: "+feh+"<sup>0</sup>C"+"<br>");
document.write("Temparature in Celcius is: "+cel1+"<sup>0</sup>F");


// Q - 7

var item1 = 650;
var item2 = 100;
var qty1 = prompt("Quantity of item 1: ");
var qty2 = prompt("Quantity of item 2: ");
var sub1 = item1 * qty1;
var sub2 = item2 * qty2;
var ship = 100;
var total = sub1 + sub2 + ship;
document.write("Price of item 1 is "+item1+"$"+"<br>");
document.write("Quantity of item 1 is "+qty1+"<br>");
document.write("Price of item 2 is "+item2+"$"+"<br>");
document.write("Quantity of item 2 is "+qty2+"<br>");
document.write("Shipping Charges: "+ship+"<br>");
document.write("Total cost of your order is "+total+"$"+"<br>");

// Q - 8

var maxMark = 980;
var obt = prompt("Obtained Marks: ");
var p = (obt/maxMark)*100;
document.write("Total Marks: "+maxMark+"<br>");
document.write("Obtained Marks: "+obt+"<br>");
document.write("Percentage: "+p+"<br>");

// Q - 9

var USn = 10;
var SAn = 25;
var US =  104.80;
var Riyal = 28;
var pakUS = USn * US;
var pakSA = SAn * Riyal;
var total = pakUS + pakSA;
document.write("<h1>Currency in PKR</h1>");
document.write("Dollar to PKR: ",pakUS+"<br>"); 
document.write("Riyal to PKR: ",pakSA+"<br>"); 
document.write("Total Currency in PKR: ",total+"<br>"); 

// Q - 10

var a = 10;
a = a + 5;
a = a * 10;
a = a / 2;
document.write(a);

// Q - 11

var current = 2020;
var birth = 1998;
var age = current - birth;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: "+current+"<br>");
document.write("Birth Year: "+birth+"<br>");
document.write("Your Age: "+age+"<br>");


// Q - 12

var radius = 20;
var pi = 22/7;
var circum = 2*pi*radius;
var area = pi * (radius**2);
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of Circle: "+radius+"<br>");
document.write("Circumference of Circle: "+circum+"<br>");
document.write("Area of Circle: "+area+"<br>");

// Q - 13

var snacks = "maggi";
var currentAge = 22;
var maxAge = 65;
var estAmount = 2;
var calc = (maxAge - currentAge) * estAmount;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: "+snacks+"<br>");
document.write("Current Age: "+currentAge+"<br>");
document.write("Maximum Age: "+maxAge+"<br>");
document.write("Amount of Snack per day: "+estAmount+"<br>");
document.write("You will need "+calc+ " " +snacks+ " to last you until the ripe old age of "+ maxAge+"<br>");


// CHAPTER 6 - 9
// Q - 1

var a = 10;

document.write("Result:"+"<br>"+"<br>");
document.write("The value of a is ",a+"<br>");
document.write("-----------------------------------"+"<br>"+"<br>");
++a;
document.write("The value of ++a is ",a+"<br>");
document.write("Now the value of a is ",a+"<br>"+"<br>");
document.write("The value of a++ is ",a+"<br>");
a++;
document.write("Now the value of a is ",a+"<br>"+"<br>");
--a;
document.write("The value of --a is ",a+"<br>");
document.write("Now the value of a is ",a+"<br>"+"<br>");
document.write("The value of a-- is ",a+"<br>");
a--;
document.write("Now the value of a is ",a+"<br>"+"<br>");

// Q - 2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Result: "+result+"<br>"+"<br>");

var a = 2, b = 1;
--a;
document.write("--a: "+a+"<br>");

--b;

var c = a - b;
document.write("--a - --b: "+c+"<br>");

++b;

c = c + b;
document.write("--a - --b + ++b: "+c+"<br>");


c = c + b--;
document.write("--a - --b + ++b + b++: "+c+"<br>");


// Q - 3

var a = prompt("Your Name: ");
document.write("Welcome "+a);


// Q - 5

var num = prompt("Enter Number: ");
var b;
if(num != ""){
    for(var i = 1; i <= 10; i++){
        b = num * i;
        document.write(num+" x "+i+" = "+b+"<br>");
    }
}
else{
    num = 5;
    for(var i = 1; i <= 10; i++){
        b = num * i;
        document.write(num+" x "+i+" = "+b+"<br>");
    }
}

// Q - 6

var sub1 = prompt("Subject 1: ");
var sub2 = prompt("Subject 2: ");
var sub3 = prompt("Subject 3: ");
var max = 100;
var obt1 = prompt("Obtained marks of Subject1: ");
var obt2 = prompt("Obtained marks of Subject2: ");
var obt3 = prompt("Obtained marks of Subject3: ");
var total = 300;
var total_obt = (+obt1) + (+obt2) + (+obt3);
var per1 = (obt1/max)*100;
var per2 = (obt2/max)*100;
var per3 = (obt3/max)*100;
var Percentage = (total_obt/total)*100;
document.write("<table>");

document.write("<tr>");
document.write("<td>");
document.write("<b>Subject</b>");
document.write("</td>");
document.write("<td>");
document.write("<b>Total Marks</b>");
document.write("</td>");
document.write("<td>");
document.write("<b>Obtained Marks</b>");
document.write("</td>");
document.write("<td>");
document.write("<b>Percentage</b>");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub1);
document.write("</td>");
document.write("<td>");
document.write(max);
document.write("</td>");
document.write("<td>");
document.write(obt1);
document.write("</td>");
document.write("<td>");
document.write(per1+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub2);
document.write("</td>");
document.write("<td>");
document.write(max);
document.write("</td>");
document.write("<td>");
document.write(obt2);
document.write("</td>");
document.write("<td>");
document.write(per2+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub3);
document.write("</td>");
document.write("<td>");
document.write(max);
document.write("</td>");
document.write("<td>");
document.write(obt3);
document.write("</td>");
document.write("<td>");
document.write(per3+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write("<b>Total</b>");
document.write("</td>");
document.write("<td>");
document.write(total);
document.write("</td>");
document.write("<td>");
document.write(total_obt);
document.write("</td>");
document.write("<td>");
document.write(Percentage+"%");
document.write("</td>");
document.write("</tr>");

document.write("</table>");


// CHAPTER 9 - 11
// Q - 1

var city = prompt("City: ");
if(city == "Karachi"){
    document.write("Welcome to the city of light!");

}
else{
    document.write("Welcome");
}

Q - 2

var gen = prompt("Gender: ");
if(gen == "male"){
    document.write("Good Morning Sir!");
}
else{
    document.write("Good Morning Ma'am!");
}

// Q - 3

var color = prompt("signal: ");
if(color == "Red"){
    document.write("Must Stop!");
}
else if(color == "Yellow"){
    document.write("Ready to Move");
}
else{
    document.write("Move Now");
}

// Q - 4

var fuel = prompt("Remaining fuel (in litre): ");
if(fuel < 0.25){
    document.write("Please refill the fuel in your car");

}
else{
    document.write("Enough fuel")
}

// Q - 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

// Q - 6

var sub1 = prompt("Subject 1: ");
var sub2 = prompt("Subject 2: ");
var sub3 = prompt("Subject 3: ");
var max = 100;
var obt1 = prompt("Obtained marks of Subject1: ");
var obt2 = prompt("Obtained marks of Subject2: ");
var obt3 = prompt("Obtained marks of Subject3: ");
var total = 300;
var total_obt = (+obt1) + (+obt2) + (+obt3);
var per1 = (obt1/max)*100;
var per2 = (obt2/max)*100;
var per3 = (obt3/max)*100;
var Percentage = (total_obt/total)*100;

document.write("<h1>Mark Sheet</h1>");

if(Percentage >= 80){
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: A+"+"<br>");
    document.write("Remarks: Excellent"+"<br>");
}
else if(Percentage >= 70){
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: A"+"<br>");
    document.write("Remarks: Good"+"<br>");
}
else if(Percentage >= 60){
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: B"+"<br>");
    document.write("Remarks: You Need To Improve"+"<br>");
}
else{
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: F"+"<br>");
    document.write("Remarks: Sorry"+"<br>");
}


// Q - 7

var ran = 7;
var guess = prompt("Guess Number: ");
if(guess == ran){
    document.write("Bingo! Correct answer");
}
else if((+guess)+1 == ran){
    document.write("Close enough to the correct answer");
}
else{
    document.write('Try again');
}

// Q - 8

var num = prompt("Number: ");
var div = num%3;
if(div == 0){
    document.write(num+" is divisible by 3");
}
else{
    document.write(num+" is not divisible by 3");
}

// Q - 9
var num = prompt("Number: ");
var div = num%2;
if(div == 0){
    document.write(num+" is EVEN");
}
else{
    document.write(num+" is ODD");
}

// Q - 10

var T = prompt("Temparature: ");

if(T > 40){
    document.write("It is too hot outside"+"<br>");
    
}
else if(T > 30){
    document.write("The Weather today is Normal."+"<br>");
    
}
else if(T > 20){
    document.write("Today’s Weather is cool"+"<br>");
    
}
else{
    document.write("OMG! Today’s weather is so Cool"+"<br>");
    
}


// Q - 11

var op1 = prompt("First Number: ");
var op2 = prompt("Second Number: ");
var sign = prompt("Operation (+,-,*,/,%): ");
var result;
if(sign == "+"){
    result = (+op1) + (+op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}
else if(sign == "-"){
    result = (op1) - (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}

else if(sign == "*"){
    result = (op1) * (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}
else if(sign == "/"){
    result = (op1) / (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}
else if(sign == "%"){
    result = (op1) % (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}

// CHAPTER 12 - 13
// Q - 1

var char = prompt("Character: ");
var count;
if(char >= 'A' && char <= 'Z'){
    document.write("UpperCase character");  
}
else if (char >= 'a' && char <= 'z')  {
    document.write("LowerCase character" );  

}


// Q - 2

var op1 = prompt("First Number: ");
var op2 = prompt("Second Number: ");
if ( op1 > op2){
    document.write(op1+" is Larger" );  
}
else if ( op1 < op2){
    document.write(op2+" is Larger" );  
}

else if ( op1 == op2){
    document.write("Equal" );  
}

// Q - 3

var op1 = prompt("Number: ");

if ( op1 > 0){
    document.write(op1+" is Positive" );  
}
else if ( (+op1) < 0){
    document.write(op1+" is Negative" );  
}

else if ( op1 == 0){
    document.write("Equal to Zero" );  
}

// Q - 4

var char = prompt("Character: ");
if(char == 'a' || char == 'e' || char == 'i' || char == 'o'|| char == 'u' || char == 'A'|| char == 'E' || char == 'I'|| char == 'O' || char == 'U'){
    document.write("Vowel Letter");  
}
else{
    document.write(" Not a Vowel Letter" );  

}

// Q - 5

var password = "1234";
var pass = prompt("Enter Your Password: ");
if(password == pass){
    document.write("Correct! The password you entered matches the original password" );
}
else if(pass == ""){
    document.write("Please enter your password" );
}
else{
    document.write("Incorrect password" );
}

// Q - 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else{
greeting = "Good evening";
document.write(greeting);
}

// Q - 7

var time = prompt("Time: ");
if(time>=0000 && time<1200){
    document.write("Good morning!");
}
else if(time>=1200 && time<1700){
    document.write("Good afternoon!");
}
else if(time>=1700 && time<2100){
    document.write("Good evening!");
}
else if(time>=2100 && time<2359){
    document.write("Good night!");
}


// CHAPTER 14 - 16
// Q - 1
var myList = [];

// Q - 2
var myList = Object();
// Q - 3

var arr = ['izkah','rooma'];

// Q - 4

var arr = [1,2,3,4,5,6,7];

// Q - 5

var arr = [true,false];

// Q - 6

var arr = ['izkah','rooma',1,2,3,true,false];

// Q - 7

var arr = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phill.','PhD'];
document.write("<h1>Qualification</h1>")
for(var i = 0; i<=arr.length-1;i++){
    document.write("("+(i+1)+") "+arr[i]+"<br>");
}

// Q - 8

var arr1 = ['Micheal','John','Tony'];
var arr2 = [320,230,480];
for(var i = 0; i<=arr1.length-1;i++){
        var per = (arr2[i]/500)*100;
        document.write("Score of "+arr1[i]+" is "+arr2[i]+".Percentage: "+per+"%"+"<br>");
    }

// Q - 9

var color = ['red','blue','green','pink'];
var a = prompt("Color: ");
color.unshift(a);
document.write(color);


color.push(a);
document.write(color);

color.unshift('green','orange');
document.write(color);

color.shift();
document.write(color);

color.pop();
document.write(color);

var a = prompt("Color: ");
var b = prompt("Index: ");
color.splice(b,1,a);
document.write(color);


var b = prompt("Index: ");
var c = prompt("Qty: ")
var upd_color = [];
for(var i = 1; i<=c; i++){
    var a = prompt("Color: ");
    upd_color.push(a);
}
for(var j=0; j<=upd_color.length-1;j++){
    color.splice(b,1,upd_color[j]);
    b = b+1;
}
document.write(color);



var b = prompt("Index: ");
var c = prompt("Qty: ")
color.splice(b,c);
    
document.write(color);

// Q - 10

var score = [320,230,480,120];
document.write("Score of Students: "+score+"<br>");
var sort = score.sort();
document.write("Ordered Score of Students: "+sort);

// Q -11

var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
var selectedCities = [];
selectedCities = cities.slice(2,4);
document.write("Cities:"+"<br>")
document.write(selectedCities+"<br>"+"<br>")
document.write("Selected Cities:"+"<br>")
document.write(selectedCities);


// Q - 12

var arr = ["This ", "is ", "my ", "cat. "];
var arr1 = arr.join("");
document.write(arr1);

// Q - 13

var newArr = ['keyboard','mouse','printer','monitor'];
document.write("Devices: <br>"+newArr+"<br>"+"<br>")
for(i=0;i<=newArr.length-1;i++){
    document.write("OUT: <br>");
    document.write(newArr[i]+"<br>")
}

// Q - 14

var newArr = ['keyboard','mouse','printer','monitor'];
document.write("Devices: <br>"+newArr+"<br>"+"<br>")
for(i=newArr.length-1;i>=0;i--){
    document.write("OUT: <br>");
    document.write(newArr[i]+"<br>")
}

// Q - 15

var arr = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];
document.write("<select>");
for(var i = 0 ; i<=arr.length-1 ; i++){
    document.write("<option>"+arr[i]+"</option>");
}
document.write("</select>");


// CHAPTER 17 - 20
// Q - 1

var multi_arr = [[],[],[]];

// Q - 2
var multi_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i = 0; i<=multi_arr.length-1;i++){
    for(var j = 0;j<multi_arr[i].length;j++){
        document.write("<b>"+multi_arr[i][j]+"</b>");
    }
    document.write("<br>");
}

// Q - 3

for(var i = 1; i <= 10 ; i++){
    document.write(i+"<br>")
}

// Q - 4

var num = prompt("Enter Number: ");
var l = prompt("Enter Length: ");
var b;

    for(var i = 1; i <= l; i++){
        b = num * i;
        document.write(num+" x "+i+" = "+b+"<br>");
    }

// Q - 5

var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var i = 0;i<=fruits.length-1;i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br>");

for(var i = 0;i<=fruits.length-1;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

// Q - 6
var i,j,k,l,m;
document.write("Counting:"+"<br>");
for(i = 1; i <= 15 ; i++){
        document.write(i+", ");
    }
    document.write("<br>");
document.write("Reverse Counting:"+"<br>");
for(j = 10; j >= 1 ; j--){
        document.write(j+", ");
    }
    document.write("<br>");
document.write("Even:"+"<br>");
for(k = 0; k <= 20 ; k=k+2){
        document.write(k+", ");
    }
    document.write("<br>");
document.write("Odd:"+"<br>");
for(l = 1; l <= 20 ; l=l+2){
        document.write(l+", ");
    }
    document.write("<br>");
document.write("Series:"+"<br>");
for(m = 2; m <= 20 ; m=m+2){
        document.write(m+"k, ");
    }
    document.write("<br>");

// Q - 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("What Do You Want? ");

for(var i = 0;i<=A.length-1;i++){
    if(A[i] == b){
        document.write(b+" is available at index "+A.indexOf(b)+" in our bakery");
    }
    else{
        document.write("We are sorry, "+b+" is not availbale in our bakery.");
        break;
    }
    
}


// Q - 8

var array = [24,53,78,91,12];
document.write("Array Items: ",array+"<br>")
var arr = array.sort();
var largest= array[array.length-1];


document.write("Largest Number: "+largest);

// Q - 9

var array = [24,53,78,91,12];
document.write("Array Items: ",array+"<br>")
var arr = array.sort();
var Small = arr[0];


document.write("Smallest Number: "+Small);


// Q - 10

for(var i = 5;i <= 100;i = i + 5 ){
    document.write(i+" ,");
}