const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }
    
    // function getCandy(candyStore, id){
    //     let result = candyStore.candies.filter(candy => {
    //         return candy.id.includes(id)
    //     })
    //     console.log(result);
    //     }; 
    //     getCandy(candyStore, 'as12f');


        // function getCandy(candyStore, id){
        //     let result = candyStore.candies.filter(candy =>{
        //        return candy.id.includes(id)
               
        //     });
        //     console.log(result);
        //     };
        //     getCandy(candyStore,'as12f');

        function getCandy2(candyStore, id){
            let result2 = candyStore.candies.find(candy =>{
               return candy.id.includes(id)
               
            });
            console.log(result2);
         };
         getCandy2(candyStore,'as12f');


        // function addCandy(candyStore, id, name, price){

        //     const result  = candyStore.candies.filter(()=>{
        //       candyStore.candies.push({name:name,id:id,price:1});
              
        //       //*  console.log(arr)
        //     });
        //     console.log(candyStore.candies) 
            
        };
        // addCandy(candyStore,'aa','kinder',2)
        
        // function buy(candyStore, id){
        //     const result  = candyStore.candies.find(candy=>{
        //        if(candy.id==id){
        //           candyStore.cashRegister += candy.price;
        //           candyStore.candies.amount=candy.amount-1;
        //        }
        //     });
        //     console.log(candyStore.cashRegister,candyStore.candies.amount);
        //  };
        //  buy(candyStore,'as12f')