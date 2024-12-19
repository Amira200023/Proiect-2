//1. Se dă un array de numere naturale, să se afișeze în consolă media aritmetică a numerelor prime din array.
// Definirea array-ului de numere naturale 
const numbers = [9, 6, 13, 23, 17, 18, 20, 22, 30, 97, 52]; 
// Funcția care verifică dacă un număr este prim function
function isPrime(num) {
    if (num <= 1) return false; // Numerele mai mici sau egale cu 1 nu sunt prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) return false; // Dacă numărul are un divizor diferit de 1 și el însuși, nu este prim
}
return true;
} 
function primeAverage(arr) { 
    const primeNumbers = arr.filter(isPrime); // Filtrarea numerelor prime
    const sum = primeNumbers.reduce((acc, val) => acc + val, 0); // Calcularea sumei numerelor prime 
    const average = primeNumbers.length ? sum / primeNumbers.length : 0; // Calcularea mediei aritmetice 
    return average; 
}
// Afișarea rezultatului în consolă 
console.log(primeAverage(numbers));

