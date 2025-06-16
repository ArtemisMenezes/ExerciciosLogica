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
