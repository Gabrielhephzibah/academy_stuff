/*function checkSpam(str) {
	let lowerStr = str.toLowerCase();
	return lowerStr.includes('viagra') ||  lowerStr.includes('xxx');
}

alert ( checkSpam('buy ViAgRA now') );
alert ( checkSpam('free xxxxx now') );
alert (checkSpam('innocent rabbit') )

let samuel = {name: "samuel", age: 25};
let femi = {name: "femi", age: 30};
let ayo = {name: "ayo", age: 28};

let arr = [ samuel, femi, ayo ];

alert (arr[2].name);

function getAverageAge(users){
	return users.reduce((form, user) => form + user.age, 0) / users.length;
}

let john = { name: "John", age:25 };
let pete = { name: "Pete", age:30 };
let mary = { name: "Mary", age:29 };

let arr = [ john, pete, mary];

alert(getAverageAge(arr) );
*/

/*let number=[];
for(let n=1;n<4; n++){
	let user=prompt("pls enter a number")
	number.push(user);
}
 alert(user);

 let sum=0
 for(let s=0; s<number.length; w++)
 {
 	sum+=number[number.length];
 }
alert(sum);



 */
/*
 function getsumInput(user):{
 	return users.reduce((user,number)=> user + number,0);
 }
 let number={"1"}
 let number={"2"}
 let number={"3"}
 let number={"4"}

 let arr=["1,2,3,4"];

 console.log(getsumInput(arr));
 
*/

/*function sumInput() {
	let number=[];

do{
	let entry=prompt("insert a number pls",0);
	numbers.push(+entry);
}
while ( ( entry ==""));

let sum=0;
for (let number of numbers){
	sum+=number;
}
return sum;
}

alert(sumInput () );


*/

//QUESTION 1
/*let entry= prompt("insert a number pls",0)
let Input=[1, 2, 3, 4];
let sum= Input.reduce ( function( total,amount){
	return total+amount
});
alert (sum);
*/

	//QUESTION 2
/*function tellFortune(JT, GL, PN, CN ) {
	let fortune='You  will be a  ' + JT + ' in ' + GL + ' and  married  to ' + PN + '' + ' with ' +  CN  +' children ';
	alert(fortune);
}

tellFortune( 'Doctor', 'Germany',  'Omolola', '4');
tellFortune('Lecturer', 'England',  'Aisha', '2');
tellFortune('Pilot', 'Canada',  'Blessing',  '3');

*/

//QUESTION 7
/*let myColor=["Yellow","Blue","Green","Brown"];
alert(myColor.toString());*/

//QUESTION 6

/*let numbers=[6,7,-1,4,-7,3,2,5,-4,-2];
numbers.sort();
alert(numbers)*/

//QUESTION 8
/*let fruits=['mango', 'pineaple','orange','apple','orange','apple']
let items =[...new Set(fruits)];
alert(items);
*/
//QUESTION 5
let swapCase=letters=>{
	let result = "";
	for(let change of letters){
		result+= change === change.toUpperCase()? change.toLowerCase() : change.toUpperCase();
	}
	return result;
}

alert(swapCase('The Beautiful Red Bag'))












/*let swapCase = function(letters){
  let newLetters = "";
  for ( let i=0; i<letter.length; i++){
		if(letters[i]===letters[i].toLowerCase()){
		newLetters+=letters{i}.toUpperCase();
	   } else{
		newLetters+=letters[i].toLowerCase();
	   }
   }
 console.log(newLetters);
 return newLetters;
 }

let result ='The Red Beautiful Bag';
let swappedText = swapCase(result);

*/




//QUESTION 1-OBJECT
/*let person=function describe(name,age,sex){
	this.name= name;
	this.age= age;
	this.sex= male;

}
let teacher={
	this.teach=function(subject){
		console.log(this.name + "who is a" + this.sex + "teaches" + subject)
	}

}
teacher.prototype=new person();

teacher.describe("caroline",5,female);
teacher.teach("chemistry");


*/




//QUESTION2-object
/*function song(title,artist){
	this.title=title;
	this.artist=artist;
}
song.prototype.play=function(){
	console.log('playing:' + this.title);
};*/