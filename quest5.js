
function ascendingOrder(arr) {
    return arr.sort((a, b) => a - b);
}
  

function descendingOrder(arr) {
    return arr.sort((a, b) => b - a);
}

const array = [8, 2, 3, 6, 4, 9, 1, 5, 6];

const ascendingOrderArray = ascendingOrder(array);
console.log("Ascending Order:", ascendingOrderArray);
  
const descendingOrderArray = descendingOrder(array);
console.log("Descending Order:", descendingOrderArray);
  