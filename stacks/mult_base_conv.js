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

function mulBase(num, base){
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num/=base);
  }while (num>0);
  var converted = "";
  while (s.length()>0){
    converted += s.pop();
  }
  console.log(converted);
}

mulBase(8,2);
