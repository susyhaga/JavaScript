var matrix = [
  [ 0, 1, 0, 0 ],
  [ 1, 0, 1, 1 ],
  [ 0, 1, 0, 1 ],
  [ 0, 1, 1, 0 ]
];

var node1 = 0;
var node2 = 1;


const adjacent_nodes = (matrix, node1, node2) => {
    for(let x = 0; x < matrix.length; x++) {
      const row = matrix[node1];
      for(let y = 0; y < row.length; y++) {
        if(row[node2] == 0) {
          return false;
        } else {
          return true;
        }
      }
    } 
  };
  
console.log(adjacent_nodes(matrix, node1, node2));
