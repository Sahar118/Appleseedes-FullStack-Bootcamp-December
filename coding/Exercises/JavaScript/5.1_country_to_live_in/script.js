
const countryToLiveIn = (language, isIsland, population, country) =>
{
if (language.toLowerCase()== 'english' && isIsland ==false && population <= 50){
    console.log(`You should live in ${country}`);
}
else{ console.log(`${country} does not meet your criteria`);}
    
};

countryToLiveIn('arabic', false, 150, 'lebanon');


