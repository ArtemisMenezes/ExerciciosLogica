function merge(left, right){
const resultado = [];
let i = 0;
let j = 0;

while(i < left.length && j < right.length){
 if(left[i] < right[j]){
  resultado.push(left[i])
  i++
} else {
  resultado.push(right[j])
  j++
}
}

while(left.length > i){
resultado.push(left[i])
  i++
}
while(right.length > j){
resultado.push(right[j])
  j++
}
return resultado;
}

function mergeSort(array){
if(array.length <= 1){
return array
}
const mid = Math.floor(array.length/2);
const left = array.slice(0, mid)
const right = array.slice(mid)

const sortedLeft = mergeSort(left);
const sortedRight = mergeSort(right);

return merge(sortedLeft, sortedRight)
}

const trip = [3, 4, 1, 5, 6, 2, 9];
console.log(mergeSort(trip))


