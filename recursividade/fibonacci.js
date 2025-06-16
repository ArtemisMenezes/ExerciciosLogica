// Crie uma função recursiva que calcule o n-ésimo número da sequência de Fibonacci.

function numerosFibonacci(n) {
  if (n < 0) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  return numerosFibonacci(n - 1) + numerosFibonacci(n - 2);
}
console.log(numerosFibonacci(10));


// Implemente uma função recursiva que inverta uma string
function inverte(string) {
if( string.length <=1){
return string
}
//Seleciona a ultima letra da string usando string.length -1
return string[string.length -1] +
inverte(string.slice(0,-1)) 
// ele soma com o restante da string sem a última letra e vai fazendo isso ate p length chegar a 1, é como se ele armazenasse a string na memória enquanto não termina
}
console.log(inverte("string"))


// Desenvolva uma função recursiva que calcule a soma dos dígitos de um número.

function numberSum(number) {
  if (number == 0) {
    return 0;
  }
  return number%10 + numberSum(parseInt(number/10));
}

console.log(numberSum(150))

// Desenvolva uma função que seja capaz de encontrar todos os anagramas de uma palavra, dado um vetor de strings


function anagrama(word) {
  if (word.length <= 1) {
    return [word];
  }

  let result = [];

  for (let i = 0; i < word.length; i++) {
    let cadaLetra = word[i];
    let sumIndex = word.slice(0, i) + word.slice(i + 1);

    let guardarIndex = anagrama(sumIndex);

    guardarIndex.forEach((element) => result.push(cadaLetra + element));

  }

  return result;
}

let word = prompt("digite uma palavra");

console.log(anagrama(word));

// Um sistema de arquivos pode ser representado como um objeto aninhado, onde cada pasta pode conter arquivos ou outras pastas. Crie uma função recursiva que conte o número total de arquivos em uma determinada estrutura de pastas. 

function contarArquivos(pasta) {
    let contador = 0;
    
    for (const key in pasta) {
        if (typeof pasta[key] === 'object') {
            contador += contarArquivos(pasta[key]);
        } else {
            contador++;
        }
    }
    
    return contador;
}

const sistemaDeArquivos = {
    'pasta1': {
        'arquivo1': 'conteudo',
        'arquivo2': 'conteudo',
        'subpasta1': {
            'arquivo3': 'conteudo'
        }
    },
    'pasta2': {
        'subpasta2': {
            'arquivo4': 'conteudo',
            'arquivo5': 'conteudo'
        }
    },
    'arquivo6': 'conteudo'
};

console.log(contarArquivos(sistemaDeArquivos));