function getSumOfEven(arr){
    return arr[2] + arr[4] + arr[6] + arr[8] +
    arr[10];
    }
getSumOfEven([1,2,3,4,5,6,7,8,9,10]);


// ******************************
// What is wrong with this code?


// 1. First, find the line that contains the problem. Write it down.


// 2. Which debug method did you use to find the bug?
//breakpoints
// 3. Explain the bug in your own words.
// arr(10)  => the last arr its arr[9]
// the even number in arr [1] [3] [5]...

// 4. Fix the code and submit it all.
function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    }
getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

