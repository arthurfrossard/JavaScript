let printIn = document.getElementById("printIn");

for (let primMult = 1; primMult <= 10; primMult++) {
  for (let segMult = 1; segMult <= 10; segMult++) {
    let multiplicação = primMult * segMult;
    printIn.innerHTML += `<p>${primMult} x ${segMult} = ${multiplicação}</p>`
  }
}