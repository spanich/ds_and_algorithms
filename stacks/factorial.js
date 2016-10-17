function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element){
  this.dataStore[this.top++] = element;
}
function pop(){
  return this.dataStore[--this.top];
}
function peek(){
  return this.dataStore[this.top-1];
}
function length(){
  return this.top;
}
function clear(){
  this.top = 0;
  this.dataStore.length = o;
}

function factorial(n){
  if (n==0){
    return 1;
  }
  else {
    return n*factorial(n-1);
  }
}

function fact(n){
  var z = new Stack();
  while (n>1){
    z.push(n--);
  }
  var product = 1;
  while (z.length()>0){
    product *= z.pop();
  }
  return product;
}
console.log(factorial(5));
console.log(fact(5));
