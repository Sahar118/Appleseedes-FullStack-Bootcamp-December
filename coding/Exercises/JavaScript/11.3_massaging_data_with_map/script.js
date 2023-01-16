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


    // const returnsNames = data.forEach(function(data){
    //     console.log(data.name);
    // })

    // 2
  
    // const dataBirthday = data.find(function(data){
    //     const birthdata = data.birthday.split('-').join('[]');
    //     console.log(birthdata);
    //     return birthdata[2];
    // })

    const query = ' ';
    const dataBirthday = data.find(function(data){
        const birthdata = data.birthday.split('-').join(' ');
        const querybirth= birthdata.includes(query.'1995')
        console.log(birthdata);

    })

        // const bornBefore = data.filter(book =>{
        // })

    // console.log(dataBirthday);

    // 3

    // const allFood=data.map(function(foodPresent){
    //     const foodmeats = foodPresent.meats;
    //     const foodFiesh =
    // })

