
    function getSum(arr1, arr2){
        const sum = 0;
        for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
        }
        for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
        }
        }
        getSum([1,2,3][5,66,23]);
    
    
    // 1. First, find the line that contains the problem. Write it down.
    // line 10
    // line 4

    // 2. Which debug method did you use to find the bug?
        // breakpoints

    // 3. Explain the bug in your own words.
    // פסיק בין הargument
    // const sum => when we use const we cant change it

    // 4. Fix the code and submit it al
    
    function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3], [5,66,23])
