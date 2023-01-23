
// 1.   Ways  to print in java Script.
//      console.log("Hello world");
//      alert("me");
//      document.write("This is my Document");

// 2.  Javascript console Api
//       console.warn("This is my Warning");
//       console.error("This is my error");
//       console.clear("This is for clear the console");

// 3.  Javascript variables.
//        What are the variables? - Is a container to store data .    

// 4.  Data types in javascript.
//  At a very high level data type,There are two  types of data types in javascript.
//  1. Primitive data types = numbers, string , booleans , null , undefined , symbol .
//  2. Referance data types = Arrays and Objects .

//  //  1. Primitive data types = numbers, string , booleans , null , undefined , symbol . 

//       a) Numbers.
//        var number1 = 45;
//        var number2 = 75.23;
//        console.log(number1 + number2);

//      b) String. 
//        var Str1  ="This is a String";
//        var str2  ='This is also a string';
//        console.log(Str1);  
//        console.log(str2);

//      c) object.
//         var marks ={
//         Yash : 75,
//         Isha : 35,
//         kundan:55,
//         Pritam:68.23,
//         }       
//         console.log(marks);

//      d) Booleans.
//         var a = true  ;
//         var b = false ;
//         console.log(a);

//      e) Undefined.
//          var und 
//          console.log(und);

//      f) Null.
//          var n = null;
//          console.log(n);           


//  2. Referance data types = Arrays and Objects .

//     g) Arrays.
//       var arr = [1 , 2 , "Yogesh" , 3 , 'Ladu' ];
//       console.log(arr[0]);
//       console.log(arr[2]);
//       console.log(arr[4]);


////     Operators in javascript.
//        1. Arithmetic operation.
//             var a = 20 ;
//             var b = 10 ;
//             console.log("The value of a + b is",a+b);
//             console.log("The value of a - b is",a-b);
//             console.log("The value of a * b is",a*b);
//             console.log("The value of a / b is",a/b);

//         2. Assignment operator .
//              var c = a ;
//              c += 2 ;
//              c = c - 2 ;
//              console.log(c);

//         3. comparison operator .
//             var x = 72 ;
//             var y = 55 ;
//             console.log( x == y ) ;
//             console.log( x >= y ) ;
//             console.log( x <= y ) ;

//          4. Logical operator .
//              Logoical and .
//                console.log(true && true);
//                console.log(true && false);
//                console.log(false && true);
//                console.log(false && false)//;

//               Logoical or .
//                   console.log(true || true);
//                   console.log(true || false);
//                   console.log(false || true);
//                   console.log(false || false);

//               Logical not .
//                  console.log(!true);
//                  console.log(!false);

//           Functions in javascript .
//              DRY - Do not repeat yourself .
//              function avg(a , b ){
//                return (a + b)/2;
//              }
//
//              c1 = avg(20 , 10);
//              c2 = avg(5 , 6 ); 
//             console.log(c1 , c2);

//         Conditionals in javascript.

//             var age = 22 ;
//             if (age < 20){
//                console.log("You cannot drink alcohol") ; 
//             }
//             else {
//                console.log("You can drink alchol");
//             }

//        If-else Ladder.
//           var age = 35 ;
//             if(age > 32){
//                console.log("You are not a kid");
//             }
//             else if (age > 26){
//                console.log("you are also not a kid");
//             }
//             else if(age > 21){
//                console.log("Kids not allowed");
//             }
//             else if(age < 18){
//                console.log("you are a kid");
//             }
//             else{
//                console.log("kids allowed");
//             }
//             console.log("End of ladder");


//            Loops in javascript .

// var arr = [1, 2, 3, 4, 5, 6, 7];
//                  console.log(arr);
//                  for(var i = 0 ; i < arr.length ; i++ ){
//                  console.log(arr[i]);
//                 }

//             For each loop .
//  arr.forEach(function(element){
//   console.log(element);
//  });

//               While loop .




let myArr = ["fan", "camera", 34, null, true];
console.log(myArr.length);
// myArr.pop();
// myArr.push("jeet");
myArr.shift();
myArr.unshift("jeet");
console.log(myArr);



//  String methods in javascript .
// let myString = " Have a good day yogesh";
// console.log(myString.length);
// myString.pop();
// console.log(myString)
//     console.log(myString.indexOf("good"));
//      console.log(myString.lastIndexOf("a"));
//      console.log(myString.slice(0,4));

//   Replace methods in string javascript .
//    console.log( myString.replace( " yogesh " , " omkar " ));




//             Dates in javascript .

//                 let myDate = new Date ();
//                 console.log( myDate.getSeconds());
//                 console.log( myDate.getTime ()) ;
//                 console.log( myDate.getHours());
//                console.log( myDate.getDay () );
//                console.log( myDate.getMonth());
//                 console.log( myDate.getFullYear());



//             DOM manipulation .

// letem = document.getElementById('click');
// console.log(elem);
// el












