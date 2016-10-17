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

function isPalindrome(word){
  var s = new Stack();
  for (var i=0; i<word.length; i++){
    s.push(word[i]);
  }
  var rword = "";
  while (s.length()>0){
    rword += s.pop();
  }
  if (word==rword){
    return true;
  }
  else{
    console.log(word+" is not a palindrome");
  }
}

var word = "racecar";
if (isPalindrome(word)){
  console.log(word+" is a palindrome");
}
else{
  console.log(word+" is not a palindrome");
}
