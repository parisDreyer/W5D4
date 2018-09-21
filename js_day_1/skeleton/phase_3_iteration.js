Array.prototype.bubbleSort = function() {
  let sorted = false; 
  let result = this.slice(0);
  
  while (!sorted ){
    sorted = true; 
    for (let i = 0; i < result.length - 1; i++) {
      let second = result[i];
      let first = result[i + 1];
      
      if (second > first) {
        result[i] = first; 
        result[i + 1] = second;
        sorted = false;
      }
    }
  }
  return result;
};

String.prototype.substrings = function () {
  let subs = [this];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      subs.push(this.slice(i, j + 1));
      
    }
  }
  return subs;
};





