function percentageOfWorld1 (country, population){
let countryName = country;
let num = population;
let repPopulation =Math.round((num / 7900)*100);
return ` ${countryName} has ${num} million people,  so it's about ${repPopulation}% of the world population.`;
}
percentageOfWorld1('Argantina', 141);
percentageOfWorld1('israel', 10);
percentageOfWorld1('China', 1441);



const percentageOfWorld1 = (country, population) =>

` ${country} has ${population} million people,  so it's about ${Math.round((population/7900)*100)}% of the world population.`;
percentageOfWorld1('China', 1441);
percentageOfWorld1('Argantina', 141);
percentageOfWorld1('israel', 10);