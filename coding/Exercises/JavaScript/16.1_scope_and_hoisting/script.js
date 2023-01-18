// ----------------------------------------------------------------
// --------------------- Block 1  ---------------------------------
// ----------------------------------------------------------------

// what the result of each block of code will be and why 

// function funcA() {
// console.log(a);
// console.log(foo());
// var a = 1;
// function foo() {
// return 2;
// }
// }
// funcA();

//  ******** console.log(a); => undefined*********
// undefined not error becouse we used var if we used let / const its return error
// at first we have to declerate and assigment it and then print it.

// ******** console.log(foo()); => 2*********
// its function decleration, we can write the console.log before.

// how we can fix them:

// function funcA() {
//     console.log(foo());
//     var a = 1;
//     console.log(a);
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();



// ----------------------------------------------------------------
// --------------------- Block 2  ---------------------------------
// ----------------------------------------------------------------

// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// console.log(obj.prop.getFullName()); => Aurelio De Rosa

// var test = obj.prop.getFullName;
// console.log(test());
// var test = obj.prop.getFullName; => getFullName היא פונקציה צריך להוסיף את הסוגריים
// console.log(test()); => test היא משתנה ולא פונקציה הסוגרים הינם לפונקציות


// how we can fix them:
// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// its will not be exist outside the scope of the function / its visible only in the function
// var test = obj.prop.getFullName();
// console.log(test); 


// ----------------------------------------------------------------
// --------------------- Block 3  ---------------------------------
// ----------------------------------------------------------------
// function funcB() {
//     let b =0;
//     let a = 0;
    
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a);
//     console.log(typeof b);
    
    function funcB() {
        let a = 1;
        a++;
        return a;
        console.log(typeof a);
        console.log(typeof b);
    }
    funcB();
        

// ----------------------------------------------------------------
// --------------------- Block 4  ---------------------------------
// ----------------------------------------------------------------

// function funcC() {
// console.log("1");
// }
// funcC();
// function funcC() {
// console.log("2");
// }
// funcC();

// funcC(); => 2
// inner function and the outer function


// ----------------------------------------------------------------
// --------------------- Block 5  ---------------------------------
// ----------------------------------------------------------------

// function funcD1() {
//     d = 1;
//     }
//     funcD1();
//     console.log(d); 

//     function funcD2() {
//         var e = 1;
//     }
//     funcD2();
//     console.log(e); 
// funcD1(); => 1 כאשר מגדירים מתשנה כך ה סקופ שלו כל הדף ולא רק בתוך הפונקציה
// console.log(d); => 1


    // funcD2(); => 2
    // console.log(e); => error מחוץ ל scope 


// function funcD1() {
//     d = 1;
//     }
//     funcD1(); 
//     console.log(d); 

//     function funcD2() {
//         var e = 1;
//     console.log(e); 
//     }
//     funcD2();


// ----------------------------------------------------------------
// --------------------- Block 6  ---------------------------------
// ----------------------------------------------------------------


// function funcE() {
//     console.log("Value of f in local scope: ", f);
//     }
//     console.log("Value of f in global scope: ", f);
//     var f = 1;
//     funcE();

    // console.log("Value of f in local scope: ", f); => undefined;
    // console.log("Value of f in global scope: ", f); => 1;

    // return the inner value first
    


