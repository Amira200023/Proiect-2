//2. Se dă un număr natural n, să se calculeze suma cifrelor care sunt pătrat perfect.
//Exemplu: 489574, rezultatul va fi 4+9+4 = 17 

// Definiţia functiei numită is perfect care verifică dacă un anumit număr este un număr perfect
function is_perfect(number) {
    // Inițializarea o suma pentru a stoca suma divizorilor
    var temp = 0;
  
    // Iterate through numbers from 1 to half of the input number to find factors
    for (var i = 1; i <= number / 2; i++) {
      // Check if i is a factor of the input number
      if (number % i === 0) {
        // If i is a factor, add it to the sum
        temp += i;
      }
    }
  
    // Check if the sum of factors is equal to the original number and not zero
    if (temp === number && temp !== 0) {
      // If true, log that it is a perfect number
      console.log("It is a perfect number.");
    } else {
      // If false, log that it is not a perfect number
      console.log("It is not a perfect number.");
    }
  }
  
  // Apelarea functiei  is_perfect cu numărul de intrare 28 și 30
  is_perfect(28); 
  is_perfect(30); 
