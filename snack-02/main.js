const soccerTeams = [
    {
        name: 'Milan',
        goal: 0,
        foulsWon: 0
    },
    {
        name: 'Inter',
        goal: 0,
        foulsWon: 0
    },
    {
        name: 'Juve',
        goal: 0,
        foulsWon: 0
    }
]



let newArray = []

for (let i = 0; i < soccerTeams.length; i++) {

    if (soccerTeams[i].goal === 0 & soccerTeams[i].foulsWon === 0) {
        soccerTeams[i].goal = Math.floor(Math.random() * 21);
        soccerTeams[i].foulsWon = Math.floor(Math.random() * 21);
        // console.log(soccerTeams[i]);  
    } 

    newArray.push({
        name : soccerTeams[i].name,
        foulsWon : soccerTeams[i].foulsWon
    })
    
}

console.log(newArray);



