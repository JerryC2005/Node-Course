setTimeout(() => {
    console.log('two seconds are up')
})

const names = ['jerry', 'kevin', 'bruh']

const shortNames = names.filter((name) => {
    return name.length <= 4;
})

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data)
    }, 2000)
}

geoCode('charlotte', (data) => {
    console.log(data)
})


// Goal: Mess around with the callback pattern

// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})


