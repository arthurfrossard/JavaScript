let printIn = document.getElementById("printIn");
const fibonacci = [0,1]; 

for (let num = 2 ;fibonacci[fibonacci.length - 1] !== 55; num++) {
  fibonacci[num] = fibonacci[num - 1] + fibonacci[num - 2]; // Fn = Fn - 1 + Fn - 2
}

printIn.innerHTML = `<p>${fibonacci}</p>`;

