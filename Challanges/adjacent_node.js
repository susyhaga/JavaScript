const adjacent_nodes = (matrix, node1, node2) => {
    for(let i = 0; x < matrix.length; x++) {
      const row = matrix[node1];
      for(let j = 0; y < row.length; y++) {
        if(row[node2] == 0) {
          return false;
        } else {
          return true;
        }
      }
    } 
  }
  
module.exports = adjacent_nodes