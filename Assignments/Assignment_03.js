// Print Table

function table(multiplier)
{
    for (let start = 1; start <= 10; start++)
    {
        console.log(multiplier + "*" + start + "=" + start * multiplier);
    }
}
table(5);

// Check Prime Number

function prime(number)
{
    if (number <= 1) 
    {
        console.log("It is not a prime number");
    }
    else if (number % 2 == 0)
    {
        console.log("It is not a prime number");
    }
    else
    {
        console.log("It is prime number");
    }  
}
prime(14);

// Find Factorial of Number

function factorial(factorialNumber)
{
    if (factorialNumber > 1)
    {
        return factorialNumber * factorial(factorialNumber - 1)
    }
    else
    {
        return 1;
    }
}
console.log(factorial(5));

// Calculate sum of numbers from 1 to parameter number

function add(number)
{
    let sum = 0;

    for (let i = 1; i <= number; i++)
    {
        sum = sum + i;
    }
    console.log(sum);
}
add(20);

let numbers = [21, 9 , 10 , 11 , 190 , 20];

// Find minimum number in Array

let minNumber = numbers[0];

for (let number = 0; number < numbers.length; number++)
{
    if (numbers[number] < minNumber)
    {
        minNumber = numbers[number];
    }
}
console.log(minNumber = Math.min(... numbers));
console.log(minNumber);

// Find maximum number in Array

let maxNumber = numbers[0];

for (let number = 0; number < numbers.length; number++)
{
    if (numbers[number] > maxNumber)
    {
        maxNumber = numbers[number];
    }
}
console.log(minNumber = Math.max(... numbers));
console.log(maxNumber);