const qntdVotosRoboRat = +prompt('Qual a quantidade de votos do RoboRat?');
const qntdVotosSuperKeyboard = +prompt('Qual a quantidade de votos do SuperKeyboard?');
const qntdVotosInvalidos = +prompt('Qual a quantidade de votos inválidos?');
const totalDeVotos = qntdVotosRoboRat + qntdVotosSuperKeyboard + qntdVotosInvalidos;
const totalDeVotosValidos = qntdVotosRoboRat + qntdVotosSuperKeyboard;


function calculaPorcentagem(votos,totalVotos) {
  return (votos * 100) / totalVotos;
}

const porcentagemRobo = calculaPorcentagem(qntdVotosRoboRat, totalDeVotos);
const porcentagemSuper = calculaPorcentagem(qntdVotosSuperKeyboard, totalDeVotos);
const porcentagemInvalido = calculaPorcentagem(qntdVotosInvalidos, totalDeVotos);


const porcentagemRoboValidos = (qntdVotosRoboRat * 100) / totalDeVotosValidos; //calculaPorcentagem(qntdVotosRoboRat, totalDeVotosValidos);
const porcentagemSuperValidos = (qntdVotosSuperKeyboard * 100) / totalDeVotosValidos; //calculaPorcentagem(qntdVotosSuperKeyboard, totalDeVotosValidos);

console.log(`O RoboRat recebeu ${(porcentagemRobo).toFixed(2)}% dos votos.`);
console.log(`O SuperKeyboard recebeu  ${(porcentagemSuper).toFixed(2)}% dos votos.`);
console.log(`A porcentagem de votos inválidos foi de ${(porcentagemInvalido).toFixed(2)}%.`);

console.log(`Considerando apenas os votos válidos, o RoboRat recebeu ${(porcentagemRoboValidos).toFixed(2)}% dos votos, enquanto o SuperKeyboard recebeu ${(porcentagemSuperValidos).toFixed(2)}%.`);

if (porcentagemRoboValidos > porcentagemSuperValidos) {
  console.log(`O vencerdor foi o RoboRat, com ${(porcentagemRoboValidos).toFixed(2)}% dos votos.`);
} else if (porcentagemSuperValidos == porcentagemRoboValidos) {
  console.log(`Houve um empate.`);
} else {
  console.log(`O vencerdor foi o SuperKeyboard, com ${(porcentagemSuperValidos).toFixed(2)}% dos votos.`);
}