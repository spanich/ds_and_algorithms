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

var s = new Stack();
s.push("David");
s.push("Brenda");
s.push("Sarah");
console.log("length: "+ s.length());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cindy");
console.log(s.peek());
// s.clear();
console.log("length: "+ s.length);
console.log(s.peek());
s.push("Marvin");
console.log(s.peek());
