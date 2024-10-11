let campoIdade;//espasso de idade
let campoFantasia;//gosta de fantasia
let campoAventura;//gost d aventura

function setup() {//configuração e função
  createCanvas(800, 400);//tamanho de tela
  createElement("h2", "Recomendador de filmes");//recomendador de filme
  createSpan("Sua idade:");//sua idade
  campoIdade = createInput("5");//idade
  campoFantasia = createCheckbox("Gosta de fantasia?");//perguntas dali
  campoAventura = createCheckbox("Gosta de aventura?");//perguntas dali
}

function draw() {//função de empate
  background("pink");//cor de fundo ali
  let idade = campoIdade.value();//campo d idade
  let gostaDeFantasia = campoFantasia.checked();//gota de fantasia
  let gostaDeAventura = campoAventura.checked();//gosta de aventura
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);//onde ali das perguntas

  fill(color(70, 0, 155));//coer das letras
  textAlign(CENTER, CENTER);//para a escrita ficar no centro
  textSize(38);//tamanho da fonte
  text(recomendacao, width / 2, height / 2);//recomendado da autura e largura
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {//recomendador do filme
  if (idade >= 10) {//resposta de idade
    if (idade >= 14) {//resposta de idade
      return "O menino que descobriu o vento";//o filme ali se deu de acordo com a idade
    } else {//falso
      if (idade >= 12) {//resposta dai se for mior e tal filme
        if(gostaDeFantasia || gostaDeAventura) {//gosta dos dois ou so de um
          return "Homem aranha: no aranhaverso";//filme ali          
        } else{
         return "Ladrões de bicicleta";//filme ali de acordo com a resposta
        }
      } else {
        if (gostaDeFantasia) {//so gosta de fntasia
          return "As aventuras de pi";//filme de acordo com a idade
        } else {
          return "Depois da chuva";//filme de acordo com a idade
        }
      }
    }
  } else {
    if (gostaDeFantasia) {//so gosta de aventura
      return "A viagem de chihiro";//filme de acordo com a idade
    } else {
      return "O feitiço do tempo";//filme de acordo com a idade
    }
  }
}
