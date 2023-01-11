const myCountry = {

    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrow',
    population: 9,
    neighbors : ['Lebanon', 'Syria', 'Jordan', 'Egypt'],
    describe : function (){
        console.log(this.country + " " + 'has' + " " + this.population + " " + ' million people, their mother tongue is' + " " + this.language +" " + ',they have' +" "+ this.neighbors.length +" " + 'neighbouring countries and a capital called' +" "+ this.capital);
    }
}

myCountry.describe();