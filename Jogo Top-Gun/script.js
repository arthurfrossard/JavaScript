// Agilidade dos pilotos (%)
const slider = 75;
const jester = 89;
const stinger = 76;
const goose = 75;
const iceman = 98;
const maverick = 90;

// Continue daqui.
let menu = ("Escolha um dos seguintes pilotos:");
menu += ("slider;\n");
menu += ("jester;\n");
menu += ("stinger;\n");
menu += ("goose;\n");
menu += ("iceman;\n");
menu += ("maverick.");
const escolhaUsua = prompt(menu).toLowerCase();


const opcProg = ["slider", "jester", "stinger", "goose", "iceman", "maverick"];
const escolhaProg = opcProg[Math.floor(Math.random() * opcProg.length)];

console.log(`O programa escolheu o piloto ${escolhaProg} e o usuario escolheu o piloto ${escolhaUsua}!`);

function escolha(escolha) {
  switch (escolha) {
    case "slider": return escolhaAgil = slider;
    case "jester": return escolhaAgil = jester;
    case "stinger": return escolhaAgil = stinger;
    case "goose": return escolhaAgil = goose;
    case "iceman": return escolhaAgil = iceman;
    case "maverick": return escolhaAgil = maverick;
  }
}

let escolhaUsuaAgil = escolha(escolhaUsua);
let escolhaProgAgil = escolha(escolhaProg);

console.log(`O ${escolhaProg} tem agilidade de ${escolhaProgAgil} e o ${escolhaUsua} tem agilidade de ${escolhaUsuaAgil}!`);

if (escolhaProgAgil > escolhaUsuaAgil) {
  console.log(`O piloto ${escolhaProg} superou o seu piloto ${escolhaUsua} e infelizmente você foi derrotado!`);
} else if (escolhaUsuaAgil > escolhaProgAgil) {
  console.log(`O seu piloto ${escolhaUsua} superou o piloto adversário ${escolhaProg} e você foi o campeão!`);
} else if (escolhaUsuaAgil == escolhaProgAgil) {
  console.log(`O seu piloto ${escolhaUsua} e o piloto adversário ${escolhaProg} tiveram o mesmo desempenho, então houve um empate!`);
} else {
  console.log(`O piloto escolhido não está inscrito para a comparação da competição. Por favor, tente novamente!`);
}