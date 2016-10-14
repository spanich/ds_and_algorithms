var words= ["dog", "cat", "hat"];

function display(a){
	var word_string = a.join();
	console.log(word_string);
}

function reverse(b){
	var rev = b.reverse();
	var rev_string = rev.join();
	console.log(rev_string);

}
display(words);
reverse(words);
