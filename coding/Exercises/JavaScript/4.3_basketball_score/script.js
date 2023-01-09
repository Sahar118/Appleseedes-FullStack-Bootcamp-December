
function teamWins (a ,b) {

    const JohnsTeam = (a, b, c) => (a+b+c)/JohnsTeam.length;
    JohnsTeam(89, 120, 103);

    const MikesTeam = (a, b, c) => (a+b+c)/MikesTeam.length;
    MikesTeam(116, 94, 123);


    if (JohnsTeam > MikesTeam) {
        console.log(' The Winner Is Johns Team 🎉');
    }
    else if (JohnsTeam < MikesTeam) {
        console.log(' The Winner Is Mikes Team 🎉');
    }
    else  {console.log(' Its DrawwWw !!!!! 🎉');}
}

teamWins();


// function teamWins (a ,b, c) {
    
//     const JohnsTeam = (a, b, c) => (a+b+c)/JohnsTeam.length;
//     JohnsTeam(89, 120, 103);
//     console.log(JohnsTeam(89, 120, 103));
    
//     const MikesTeam = (a, b, c) => (a+b+c)/MikesTeam.length;
//     MikesTeam(116, 94, 123);
//     console.log((MikesTeam(116, 94, 123)));
    
//     const MaryTeam = (a, b, c) => (a+b+c)/MaryTeam.length;
//     MaryTeam(97, 134, 105);

//     console.log(MaryTeam(97, 134, 105));

    // if ((JohnsTeam > MikesTeam) && (JohnsTeam > MaryTeam)) {
    //     console.log(' The Winner Is Johns Team 🎉');

    // }  else if ((MaryTeam > JohnsTeam ) && ( MikesTeam < MaryTeam)) {
    //     console.log(' The Winner Is Mary Team 🎉');
    // }
    // else if (( MikesTeam > JohnsTeam) && (MikesTeam> MaryTeam )) {
    //     console.log(' The Winner Is Mikes Team 🎉');
    // }
    // else if ((JohnsTeam == MaryTeam) && (MaryTeam == MikesTeam) && (JohnsTeam == MikesTeam)) {
    //     console.log(' Its TieEeE !!!!! 🎉');
    // } else  {console.log(' Not yet 💃');}

    // let average=Math.max
// }

// teamWins();