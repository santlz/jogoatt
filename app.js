let listaNuemrosSorteados = [];
let numeroLimete = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
 let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsivevoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do bixo');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
mensagemInicial();
function verificarChute (){
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentaiva = tentativas > 1 ?'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentaiva}!`;
    exibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(chute > numeroSecreto){
        exibirTextoNaTela('p','o numero secreto é menor');
    }else{
        exibirTextoNaTela('p','o numero secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimete + 1);
    let quantidaddeDeElementos = listaNuemrosSorteados.length;

    if(quantidaddeDeElementos == numeroLimete){
      listaNuemrosSorteados = [];

    }
    if(listaNuemrosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
    }else{
      listaNuemrosSorteados.push(numeroEscolhido);
      console.log(listaNuemrosSorteados);
      return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}