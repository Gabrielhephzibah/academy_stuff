function submit() {
		let m = document.getElementById('ainfo').value;
		let w = document.getElementById('info').value;
		if(w != '' && m != '') {
			document.getElementById('btnSubmit').innerHTML = 'successful';
			document.getElementById('btnSubmit').style.backgroundColor = 'green';

		}
		else if (w == '' && m != '') {
			document.getElementById('fillEmptyBoxes').innerHTML = '***Fill this in***';
			document.getElementById('info').style.backgroundColor = 'red';
		}
		else if( m == '' && w != ''){
			document.getElementById('afillEmptyBoxes').innerHTML = '***Fill this in***';
			document.getElementById('ainfo').style.backgroundColor = 'red';
		}
		else if( m == '' && w == ''){
			document.getElementById('afillEmptyBoxes').innerHTML = '***Fill this in***';
			document.getElementById('ainfo').style.backgroundColor = 'red';
			document.getElementById('fillEmptyBoxes').innerHTML = '***Fill this in***';
			document.getElementById('info').style.backgroundColor = 'red';
		}

	function edit(){
		let para = document.getElementById('bedit');
		//let editBtn = document.getElementById('aedit');
		function getTime(){
			let date = new Date();
			let seconds = date.getSeconds() + '';
			let minutes = date.getMinutes() + '';
			let clock = minutes + ':' + seconds;
			para.innerHTML = `you edited this page ${clock} ago`;
	}
	 
	getTime();
	setInterval(getTime, 1000);
			
	}

}


