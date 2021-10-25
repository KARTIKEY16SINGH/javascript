const country = "India";
const continent = "Asia";
const population = 1_398_074_615;
console.log(country);
console.log(continent);
console.log(population);

const massMark = 95; //78;
const massJohn = 85; //92;
const heightMark = 1.88; //1.69;
const heightJohn = 1.76; //1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);
console.log("String with \nmultiple line");

if (markHigherBMI) {
	console.log("Mark's BMI is higher than John's!");
	console.log(`Mark's BMI (${bmiMark}) is higher than Johm's (${bmiJohn})`);
} else {
	console.log("John's BMI is higher than Mark's!");
	console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}
