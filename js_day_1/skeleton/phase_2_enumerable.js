Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach((el) => result.push(callback(el)));
  return result;
};

Array.prototype.myReduce = function(callback, el = this[0]) {
  let array = this;
  let result = el;
  if (el === this[0]) {
    array = this.slice(1, this.length);
  }
  array.myEach((el) => result += callback(el));
  return result;
};