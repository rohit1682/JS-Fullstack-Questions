// Closure Example:

function tempClosure() {
	let count = 0;
	return (type)=> {
		if(type === "Increment") {
			return count +1;
		}
		else if(type === "decrement") {
			return count -1;
		}
		else return count;
	}
}


// Function Currying:

function normal (a,b,c,d) {
	return a+b+c+d;
}

function curry (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return a+b+c+d;
			}
		}
	}
}

curry(a)(b)(c)(d);



// Function Composition:

multiply3(add2(x))