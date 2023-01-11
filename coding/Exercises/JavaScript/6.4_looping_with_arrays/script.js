const countryPopulations = [
    {
        country : 'Israel',
        population: 38
    },
    {
        country : 'Argentina',
        population: 58
    },
    {
        country : 'Brazil',
        population: 79
    },
    {
        country : 'Chile',
        population: 42
    },
] 

for (let i=0; i< countryPopulations.length; i++){
    let populationPercentages = countryPopulations[i];
    
    console.log(populationPercentages);
    const percentages= console.log((populationPercentages.population/7900)*100);
    
    countryPopulations = [percentages];
    console.log(countryPopulations);
}

