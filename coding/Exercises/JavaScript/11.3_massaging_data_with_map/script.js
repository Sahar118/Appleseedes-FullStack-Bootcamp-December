const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

    // 1
    const returnsNames = data.forEach(function(data){
        console.log(data.name);
    })

    // 2
    const funcBirthday=(array1)=>{
        let array2=[];
        array1.forEach(e=>{
            if(parseInt(e.birthday.split('-')[2])<1990){
                array2.push(e);
            }
            });
            console.log(array2);
        };
        
        funcBirthday(data);


    // 3

      
    const funcObj = (array) =>{
        let count = {} ;
        array.map(e => {
           let meatArray = e.favoriteFoods.meats;
           let fishArray = e.favoriteFoods.fish;
           let meatAndFishArray = meatArray.concat(fishArray);
           meatAndFishArray.map(el=>{
              if(count[el]){
                 count[el]++;
              }
              else{
                 count[el]=1;
              }
           });
        });
        console.log(count);
     };
     funcObj(data);
