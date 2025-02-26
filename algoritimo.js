const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vetor = [];

function perguntarTamanhoDoVetor() {
  rl.question('Quantos números o vetor deve ter? ', (tamanho) => {
    const tamanhoNumerico = parseInt(tamanho, 10);

    if (isNaN(tamanhoNumerico) || tamanhoNumerico <= 0) {
      console.log('Por favor, insira um número válido maior que zero.');
      perguntarTamanhoDoVetor();
    } else {
      criarVetor(tamanhoNumerico);
    }
  });
}

function criarVetor(tamanho) {
  console.log(`O vetor terá ${tamanho} números.`);
  rl.question(`Digite os ${tamanho} números do vetor separados por vírgula: `, (input) => {
    const numeros = input.split(',').map(Number);

    if (numeros.length !== tamanho || numeros.some(isNaN)) {
      console.log('Entrada inválida. Certifique-se de digitar exatamente os números solicitados.');
      criarVetor(tamanho);
    } else {
      vetor = numeros;
      console.log('Vetor criado:', vetor);
      mostrarOpcoes();
    }
  });
}

function mostrarOpcoes() {
  console.log('\nO que deseja fazer?');
  console.log('1. Soma');
  console.log('2. Média');
  console.log('3. Ordenar em ordem crescente');
  console.log('4. Ordenar em ordem decrescente');
  console.log('5. Sair');

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        calcularSoma();
        break;
      case '2':
        calcularMedia();
        break;
      case '3':
        ordenarCrescente();
        break;
      case '4':
        ordenarDecrescente();
        break;
      case '5':
        rl.close();
        return;
      default:
        console.log('Opção inválida.');
        mostrarOpcoes();
    }
  });
}

function calcularSoma() {
  const soma = vetor.reduce((acc, curr) => acc + curr, 0);
  console.log('A soma dos elementos é:', soma);
  mostrarOpcoes();
}

function calcularMedia() {
  const soma = vetor.reduce((acc, curr) => acc + curr, 0);
  const media = soma / vetor.length;
  console.log('A média dos elementos é:', media);
  mostrarOpcoes();
}

function ordenarCrescente() {
  const ordenadoCrescente = [...vetor].sort((a, b) => a - b); // Cria uma cópia para não modificar o original
  console.log('Vetor em ordem crescente:', ordenadoCrescente);
  mostrarOpcoes();
}

function ordenarDecrescente() {
  const ordenadoDecrescente = [...vetor].sort((a, b) => b - a); // Cria uma cópia para não modificar o original
  console.log('Vetor em ordem decrescente:', ordenadoDecrescente);                  
  mostrarOpcoes();
}

console.log('Bem-vindo ao programa de operações com vetores!');
perguntarTamanhoDoVetor();
