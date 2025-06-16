// Algoritimos de Ordenação

// // 10) Uma escola tem a demanda de organizar as notas de seus alunos em ordem crescente. Dada a necessidade, contrataram você como um engenheiro de software para criar um programa que solucione o problema. Condição: sua implementação deve incluir o algoritmo Bubble Sort.

function bubbleSort(array){
let n = array.length; 

while (n > 1){ // enquanto houver elementos na array
lastSwap = 0; // guarda a posição a ser trocada

for(let j = 0; j < n -1; j++){ // itera sobre cada elemento da array excluindo o último número

if (array[j] > array[j + 1]){ // se o elemento atual for maior que o seguinte

[array[j], array[j + 1]] = [array[j + 1], array[j]] // Inverte

lastSwap = j + 1; // guarda o sucessor do elemento atual
}
}
n = lastSwap; // faz a recursão do elemento sucessor até acabar
}

return array // retorna a lista ordenada
}

let notas = [6, 10, 8, 7, 9, 10, 5];

console.log('Lista não ordenada', [...notas]);
console.log('lista ordenada', bubbleSort(notas))

// Questão 11 Um aplicativo de produtividade possui uma lista de tarefas com prioridades 
// diferentes, onde 1 é prioridade alta, 2 é média e 3 é baixa. Implemente o algoritmo 
// Quick Sort para ordenar as tarefas por prioridade.

let tarefas = [
  { tarefa: "Estudar", prioridade: 1 },
  { tarefa: "Arrumar o quarto", prioridade: 2 },
  { tarefa: "Passear com cachorro", prioridade: 3 },
  { tarefa: "Ir a padaria", prioridade: 3 },
  { tarefa: "Consertar a pia", prioridade: 1 }
];

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = partition(array, left, right); 
    quickSort(array, left, pivotIndex - 1); 
    quickSort(array, pivotIndex + 1, right); 
  }
  return array;
}

function partition(array, left, right) {
  const pivot = array[right].prioridade; 
  let i = left - 1; 
  for (let j = left; j < right; j++) {
    if (array[j].prioridade <= pivot) { 
      i++; 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1; // Retorna o índice do pivô
}

let tarefasOrdenadas = quickSort([...tarefas]);

console.table(tarefasOrdenadas);

// 12) O site de um e-commerce possui como opção de filtro a ordenação dos produtos em ordem crescente ou decrescente de preço. Implemente uma função utilizando oa algoritmo Merge Sort para ordenar um vetor de objetos que representam os produtos. A função deve ter como um dos parâmetros a direção de ordenação.


function merge(left, right) {
    const resultado = []; // Array para armazenar a fusão das duas partes
    let i = 0; // Índice para percorrer o array left
    let j = 0; // Índice para percorrer o array right

    // Enquanto houver elementos em ambos os arrays
    while (i < left.length && j < right.length) {
        // Comparando os valores da segunda posição de cada array (as notas)
        if (left[i].preco < right[j].preco) {
            resultado.push(left[i]); // Adiciona o menor ao resultado
            i++; // Avança no array left
        } else {
            resultado.push(right[j]); // Adiciona o menor ao resultado
            j++; // Avança no array right
        }
    }

    // Adiciona os elementos restantes do array left, caso existam
    while (i < left.length) {
        resultado.push(left[i]);
        i++;
    }

    // Adiciona os elementos restantes do array right, caso existam
    while (j < right.length) {
        resultado.push(right[j]); // Correção feita aqui
        j++;
    }

    return resultado; // Retorna o array ordenado resultante da fusão
}

function mergeSort(ecommerce) {
    // Caso base: se a lista tiver 0 ou 1 elemento, já está ordenada
    if (ecommerce.length <= 1) {
        return ecommerce;
    }

    // Encontra o meio do array para dividi-lo em duas partes
    const mid = Math.floor(ecommerce.length / 2);
    const left = ecommerce.slice(0, mid); // Pega a primeira metade
    const right = ecommerce.slice(mid); // Pega a segunda metade

    // Recursivamente ordena cada metade
    const sortLeft = mergeSort(left);
    const sortRight = mergeSort(right);

    // Mescla as duas metades ordenadas e retorna o resultado final
    return merge(sortLeft, sortRight);
}

// Array de arrays contendo nome e nota
let ecommerce = [
  {nome: 'Mouse', preco: 330},
  {nome: 'Teclado', preco: 220},
  {nome: 'Monitor', preco: 1350},
  {nome: 'Cabo', preco: 60},
  {nome: 'Mousepad', preco: 130},
  {nome: 'Gabinete', preco: 340},
];

console.log("Antes da ordenação:");
console.table(ecommerce);

const sortedecommerce = mergeSort(ecommerce);

console.log("Após a ordenação:");
console.table(sortedecommerce);
