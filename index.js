const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = batteryBatches.reduce((total, element)=> {
    return total += element 
})

const totalBatteries = reducer