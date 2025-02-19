// Exercise 1: Doubling a number
const double = (a, b) => {
    return a * b;
}

// Exercise 2: Dividing two numbers
const divide = (a, b) => {
    return a / b;
}

// Exercise 3: Welcome message
const welcomeMessage = (name) => {
    return `Welcome, ${name}!`;
}

// Exercise 5: Applying a 10% discount to an array of prices
const prices = [100, 200, 300, 400];
const discountedPrices = prices.map(price => price * 0.9);

// Exercise 4: Higher-order function to perform an operation
const performOperation = (a, b, operation) => operation(a, b);

// Exercise 6: Filtering ages under 18
const ages = [12, 22, 17, 14];
const underage = ages.filter(age => age < 18);

// Exercise 7: Calculating the product of an array of numbers
const numbers = [2, 3, 4, 5];
const product = numbers.reduce((total, num) => total * num, 1);

// Testing the functions
console.log(double(4, 2), "Doubling"); // Output: 8 "Doubling"
console.log(divide(4, 2), "Dividing"); // Output: 2 "Dividing"
console.log(welcomeMessage("Hede")); // Output: "Welcome, Hede!"
console.log(performOperation(6, 3, (a, b) => a - b)); // Output: 3
console.log(discountedPrices, "Discounted Prices"); // Output: [90, 180, 270, 360] "Discounted Prices"
console.log(underage, "Underage"); // Output: [12, 17, 14] "Underage"
console.log(product, "Product"); // Output: 120 "Product"