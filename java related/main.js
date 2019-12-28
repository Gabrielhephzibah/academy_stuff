let entry = prompt("Who are you?",'');

if (entry == 'admin') {

  let pass = prompt('Password?',);

  if (pass == 'Themaster') {
    alert( 'Welcome!' );
  } else if (pass == '') {
    alert( 'Canceled.' );
  } else {
    alert( 'Wrong password' );
  }

} else if (entry == '') {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}



alert(5 > 4) 
alert("apple" > "pineapple") 
alert("2" > "12")
alert(undefined == null) 
alert (undefined === null)
alert(null == "\n0\n")
alert(null === +"\n0\n")


//value of a and x
let a=2;

let x= 1 +(a*=2);
console.log("a","x")







