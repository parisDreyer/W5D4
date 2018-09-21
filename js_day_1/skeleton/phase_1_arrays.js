Array.prototype.clone = function() {
	return this.slice(0);
};

Array.prototype.uniq = function() {
  arr = this.clone();
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(!result.includes(arr[i])){
      result.push(arr[i]);
    }
    
  }
  return result;
};

Array.prototype.twoSum = function() {
  let array = this.clone();
  let positions = [];
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        positions.push([i, j]);
      }  
    }
  }
  return positions;
};

Array.prototype.transpose = function() {
  let transpose = [];
  for(let i = 0; i < this.length; i++) {
    transpose.push([]);
    for(let j = 0; j < this[i].length; j++) {  
      transpose[i][j] = this[j][i];
    }
  }
  return transpose;
};




