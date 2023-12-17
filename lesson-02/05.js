let passport = {
	name: "Petr",
	surname: "Petrov",
};

let passport2 = JSON.parse(JSON.stringify(passport))
passport2.name = 'Ivan'

console.log(passport);
console.log(passport2);