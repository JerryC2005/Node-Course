// object property shorthand
// allows us to add values to objects with shorthand syntax under certain conditions

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'philadelphia'
}

console.log(user)

// object destructuring
// useful when you have an object and you are trying to access properties from it

const product = {
    label: 'red',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3
}

// const label = product.label
// const stock = product.stock

// // destructuring syntax
// const {label:productLabel, stock, rating = 5} = product
// // console.log(label) wont work becuz we are renaming variable
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)