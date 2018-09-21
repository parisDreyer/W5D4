function range(start, end) {
  let result = [];
  function rangeHelper(low, high) {
    if(low === high){
      return;
    }
    result.push(low);
    rangeHelper(low + 1, high);
  }
  rangeHelper(start, end + 1);
  return result;
}


function sumRec(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  arr[1] = arr[0] + arr[1];
  return sumRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  
  return base * exponent(base, exp - 1);
}


function fibonacci(n) {
  if (n < 2) {
    return undefined; 
  } else if (n === 2) {
    return [1, 1];
  }
  let last = fibonacci(n - 1);
  if (last !== undefined) {
    let final = last[last.length - 1] + last[last.length - 2];
    last.push(final);
  }
  
  return last;
}


function deepDup(array){
  let result = [];
  function deepHelp(array) {
    let temp = [];
    for(let i = 0; i < array.length; i++) {
      if(typeof array[i] === Array) {
        temp.push(deepHelp(array[i]));
      }
      else {
        temp.push(array[i]);
      }
    }
    result.push(temp);
    return;
  }
  deepHelp(array);
  return result;
}

function bsearch(arr, target) {
  if (arr.length === 1 && arr[0] === target) {
    return 0;
  } else if (arr.length === 1) {
    return -1;
  }
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target){
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid + 1), target);
  } else {
    let result =  bsearch(arr.slice(mid, arr.length), target);
    if (result !== -1) {
      return mid + result;
    }
  }
  return -1;
}

function bsearchIterative(arr, target) {
  let low = 0; 
  let high = arr.length - 1; 
  
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === target){
      return mid;
    } else if (arr[mid] > target) {
      high = mid; 
    } else {
      low = mid;
    }
  }
  return -1;
}

function mergeSort(arr) {
  if(arr.length > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    let leftSort = mergeSort(left); 
    let rightSort = mergeSort(right);
    return merge(leftSort, rightSort);
  } else {
    return arr;
  }
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if(left[0] < right[0]){
      
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result = result.concat(left);
  result = result.concat(right);
  return result;
}

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  // remember, we don't want to mutate the subsets without the first element
  // hence, the 'concat'
  const withFirst = withoutFirst.map(sub => [first].concat(sub) );

  return withoutFirst.concat(withFirst);
}


