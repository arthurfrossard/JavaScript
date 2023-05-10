let menu = "Escolha pedra, papel ou tesoura:";

const respUsuario = prompt(menu).toLowerCase();
const ppt = ["pedra", "papel", "tesoura"];
    
let pptAleatorio = ppt[Math.floor(Math.random() * ppt.length)];
console.log(`O programa escolheu ${pptAleatorio}!`);
console.log(`Você escolheu ${respUsuario}!`);

 if (pptAleatorio == respUsuario) {
   console.log("Empatou!");
} else if ((pptAleatorio == "papel" && respUsuario == "tesoura") || (pptAleatorio == "pedra" && respUsuario == "papel") || (pptAleatorio == "tesoura" && respUsuario == "pedra")) {
   console.log("Parabêns, você ganhou!");
} else if ((pptAleatorio == "tesoura" && respUsuario == "papel") || (pptAleatorio == "papel" && respUsuario == "pedra") || (pptAleatorio == "pedra" && respUsuario == "tesoura")) {
   console.log("Infelizmente você perdeu!");
} else {
   console.log("Insira uma resposta válida!");
}