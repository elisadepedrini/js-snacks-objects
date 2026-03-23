
const bikes = [
    {
        name : 'Scott Addict RC Ultimate',
        weight : 5.9,
    },
    {
        name : 'Giant TCR Advanced SL 0',
        weight : 6.4,
    },
    {
        name : 'Specialized S-Works Tarmac SL8',
        weight : 6.8,
    }
]


let bikeMin = bikes[0]

for (let i = 1; i < bikes.length; i++) {
    
    if (bikes[i].weight < bikeMin.weight) {
        bikeMin = bikes[i]
    }

}

console.log(bikeMin);


const bikeBox = document.getElementById('boxBike')

bikeBox.innerHTML = 'La bici con peso minore è: ' + bikeMin.name + '; con peso: ' + bikeMin.weight
