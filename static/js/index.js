console.log('Hello');

const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
	popup.style.display = 'flex';
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

close_btn.addEventListener('click', () => {
	main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup.style.display = 'none';
	}, 500);
});

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay')) {
		main_popup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 500);
	}
});

// const open_btn1 = document.querySelector('.open-btn1');
// const close_btn1 = document.querySelector('.close-btn1');
// const popup1 = document.querySelector('.popup1');
// const main_popup1 = document.querySelector('.main-popup1');

// open_btn1.addEventListener('click', () => {
// 	popup.style.display = 'flex';
// 	main_popup.style.cssText = 'animation:slide-in1 .5s ease; animation-fill-mode: forwards;';
// });

// close_btn1.addEventListener('click', () => {
// 	main_popup1.style.cssText = 'animation:slide-out1 .5s ease; animation-fill-mode: forwards;';
// 	setTimeout(() => {
// 		popup1.style.display = 'none';
// 	}, 500);
// });

// window.addEventListener('click', (e) => {
// 	if (e.target == document.querySelector('.popup-overlay1')) {
// 		main_popup1.style.cssText = 'animation:slide-out1 .5s ease; animation-fill-mode: forwards;';
// 		setTimeout(() => {
// 			popup1.style.display = 'none';
// 		}, 500);
// 	}
// });




var latest = document.getElementById("latest_value");
var msg = new SpeechSynthesisUtterance();
const speaker = document.querySelector('#speak');
speaker.addEventListener('click', () => {
	msg.text = latest.textContent;
	window.speechSynthesis.speak(msg);
});



// const api_key = "9ff800dbd3msh33c2555e9d61efep18060ejsn0510dae021e2";
// document.getElementById('check').addEventListener('click', ()=> {
// 	let latest = document.getElementById("latest_value");
// 	latest = latest.textContent;
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			'content-type': 'application/json',
// 			'X-RapidAPI-Key': '9ff800dbd3msh33c2555e9d61efep18060ejsn0510dae021e2',
// 			'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
// 		},
// 		body: `{"language":"enUS","fieldvalues":"${latest}","config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}`
// 	};

// 	fetch('https://jspell-checker.p.rapidapi.com/check', options)
// 		.then((response) => response.json())
// 		.then(response => {
// 			console.log(response);
// 			console.log(response.elements[0]);
// 			console.log(response.elements[0].errors[0].suggestions);
// 		})
// 		.catch((err) => console.error(err));
// });


function change() {
	document.getElementById('visible').style.top = "0";
	document.getElementById('visible-block').style.top = "0";
}
function rrr() {
	document.getElementById('visible').style.top = "-100%";
	document.getElementById('visible-block').style.top = "-100%";
}


function clicked(val) {
	// 1==create
	if (val === 1) {
		if (document.getElementById('pricing').checked) {
			document.getElementById('pricing').click();
			document.getElementById('generate').value = "";
		}
	}
	else {
		if (!(document.getElementById('pricing').checked)) {
			document.getElementById('pricing').click();
			document.getElementById('generate').value = "";
		}
	}
}

function generateRoomId() {
	document.getElementById('generate').value = Math.random().toString(36).slice(2);
}

function unhover() {
	let arr = document.getElementsByClassName('path');
	for (let i = 0; i < arr.length; i++) {
		arr[i].style.fill = "white";
	}
}

function hover() {
	let arr = document.getElementsByClassName('path');
	for (let i = 0; i < arr.length; i++) {
		arr[i].style.fill = "#683aff";
	}
}




function create() {
	let a = document.getElementById('username-create');
	let b = document.getElementById('generate');
	let c = document.getElementById('incam').value;
	if (a.value === "" || b.value === "") {
		document.getElementById('alert').style.display = "block";
		setTimeout(() => {
			document.getElementById('alert').style.display = "none";
		}, 2000);
	}
	else {
		if (c === "1") {
			var v = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCrjcPDStup3Kl3KH8VJtu65La7IgYq_tg&usqp=CAU';
			document.getElementById('black').src = v;
		}
		setTimeout(() => {
			document.getElementById('create-video').click();
		}, 2000);
	}
}

function join() {
	let a = document.getElementById('username-join');
	let b = document.getElementById('rid');
	let c = document.getElementById('incam1').value;
	if (a.value === "" || b.value === "") {
		document.getElementById('alert').style.display = "block";
		setTimeout(() => {
			document.getElementById('alert').style.display = "none";
		}, 2000);
	}
	else {
		if (c === "1") {
			var v = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCrjcPDStup3Kl3KH8VJtu65La7IgYq_tg&usqp=CAU';
			document.getElementById('black1').src = v;
		}
		setTimeout(() => {
			document.getElementById('join-video').click();
		}, 2000);
	}
}


function parameter_cam(val) {
	var v = 'video_feed';
	var v1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCrjcPDStup3Kl3KH8VJtu65La7IgYq_tg&usqp=CAU';
	if (val === 1) {
		let cam = document.getElementById('came').innerHTML;
		cam = `
		<svg id="camon" onclick="parameter_cam(0)" style="height:1.5rem; width:1.5rem;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
		</svg>
		`;
		document.getElementById('came').innerHTML = cam;
		document.getElementById('incam').value = "0";
		document.getElementById('black').src = v1;
	}
	else {
		let cam = document.getElementById('came').innerHTML;
		cam = `
		<svg id="camoff" onclick="parameter_cam(1)" style="height:1.5rem; width:1.5rem;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">
			<path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
		</svg>
		`;
		document.getElementById('came').innerHTML = cam;
		document.getElementById('incam').value = "1";
		document.getElementById('black').src = v;
	}
}



function parameter_mic(val) {
	if (val === 1) {
		let mic = document.getElementById('mic').innerHTML;
		mic = `
		<svg fill="currentcolor" onclick="parameter_mic(0)" style="height:1.5rem; width:1.5rem;cursor:pointer;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 98.54 122.88" style="enable-background:new 0 0 98.54 122.88"  xml:space="preserve"><g><path d="M49.02,95.45v24.11c0,1.85-1.5,3.32-3.32,3.32c-1.85,0-3.32-1.5-3.32-3.32V95.45c-10.17-0.8-19.33-5.29-26.15-12.12 C8.67,75.78,3.99,65.35,3.99,53.87c0-1.85,1.5-3.32,3.32-3.32c1.85,0,3.32,1.5,3.32,3.32c0,9.63,3.95,18.4,10.3,24.78 c6.35,6.35,15.12,10.3,24.78,10.3c9.63,0,18.4-3.95,24.78-10.3c0.12-0.12,0.24-0.24,0.36-0.36l-8.59-8.59 c-4.2,4.17-9.98,6.75-16.32,6.75c-6.38,0-12.18-2.62-16.39-6.82c-4.21-4.21-6.82-10.01-6.82-16.39V30.15L1,8.45 c-1.34-1.34-1.34-3.5,0-4.84c1.34-1.34,3.5-1.34,4.84,0l91.71,91.71c1.34,1.34,1.34,3.5,0,4.84c-1.34,1.34-3.5,1.34-4.84,0 L75.53,82.97c-0.12,0.12-0.24,0.24-0.36,0.36C68.34,90.16,59.19,94.66,49.02,95.45L49.02,95.45z M57.51,64.95L29.4,36.85V53.2 c0,4.56,1.85,8.67,4.85,11.67c3,3,7.14,4.85,11.67,4.85C50.44,69.72,54.52,67.9,57.51,64.95L57.51,64.95z M80.38,59.16 c0.26-1.73,0.4-3.49,0.4-5.29c0-1.85,1.5-3.32,3.32-3.32c1.85,0,3.32,1.5,3.32,3.32c0,3.76-0.5,7.41-1.45,10.88L80.38,59.16 L80.38,59.16z M45.92,0c6.38,0,12.18,2.62,16.39,6.82c4.21,4.21,6.82,10.01,6.82,16.39v24.7l-6.7-6.7V23.19 c0-4.56-1.85-8.67-4.85-11.67l0,0c-3-3-7.14-4.85-11.67-4.85c-4.56,0-8.67,1.85-11.67,4.85c-0.25,0.25-0.5,0.51-0.73,0.78 l-4.71-4.71c0.24-0.26,0.48-0.51,0.73-0.76C33.74,2.62,39.55,0,45.92,0L45.92,0z"/></g></svg>
		`;
		document.getElementById('mic').innerHTML = mic;
		document.getElementById('inmic').value = "0";
	}
	else {
		let mic = document.getElementById('mic').innerHTML;
		mic = `
		<svg onclick="parameter_mic(1)" id="micoff" style="height:1.5rem; width:1.5rem;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
		</svg>
		`;
		document.getElementById('mic').innerHTML = mic;
		document.getElementById('inmic').value = "1";
	}
}

function parameter_cam1(val) {
	var v = 'video_feed';
	var v1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCrjcPDStup3Kl3KH8VJtu65La7IgYq_tg&usqp=CAU';
	if (val === 1) {
		let cam = document.getElementById('came1').innerHTML;
		cam = `
		<svg id="camon1" onclick="parameter_cam1(0)" style="height:1.5rem; width:1.5rem;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
		</svg>
		`;
		document.getElementById('came1').innerHTML = cam;
		document.getElementById('incam1').value = "0";
		document.getElementById('black1').src = v1;
	}
	else {
		let cam = document.getElementById('came1').innerHTML;
		cam = `
		<svg id="camoff1" onclick="parameter_cam1(1)" style="height:1.5rem; width:1.5rem;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">
			<path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
		</svg>
		`;
		document.getElementById('came1').innerHTML = cam;
		document.getElementById('incam1').value = "1";
		document.getElementById('black1').src = v;
	}
}

function parameter_mic1(val) {
	if (val === 1) {
		let mic = document.getElementById('mic1').innerHTML;
		mic = `
		<svg fill="currentcolor" onclick="parameter_mic1(0)" style="height:1.5rem; width:1.5rem;cursor:pointer;" version="1.1" id="Layer_11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 98.54 122.88" style="enable-background:new 0 0 98.54 122.88"  xml:space="preserve"><g><path d="M49.02,95.45v24.11c0,1.85-1.5,3.32-3.32,3.32c-1.85,0-3.32-1.5-3.32-3.32V95.45c-10.17-0.8-19.33-5.29-26.15-12.12 C8.67,75.78,3.99,65.35,3.99,53.87c0-1.85,1.5-3.32,3.32-3.32c1.85,0,3.32,1.5,3.32,3.32c0,9.63,3.95,18.4,10.3,24.78 c6.35,6.35,15.12,10.3,24.78,10.3c9.63,0,18.4-3.95,24.78-10.3c0.12-0.12,0.24-0.24,0.36-0.36l-8.59-8.59 c-4.2,4.17-9.98,6.75-16.32,6.75c-6.38,0-12.18-2.62-16.39-6.82c-4.21-4.21-6.82-10.01-6.82-16.39V30.15L1,8.45 c-1.34-1.34-1.34-3.5,0-4.84c1.34-1.34,3.5-1.34,4.84,0l91.71,91.71c1.34,1.34,1.34,3.5,0,4.84c-1.34,1.34-3.5,1.34-4.84,0 L75.53,82.97c-0.12,0.12-0.24,0.24-0.36,0.36C68.34,90.16,59.19,94.66,49.02,95.45L49.02,95.45z M57.51,64.95L29.4,36.85V53.2 c0,4.56,1.85,8.67,4.85,11.67c3,3,7.14,4.85,11.67,4.85C50.44,69.72,54.52,67.9,57.51,64.95L57.51,64.95z M80.38,59.16 c0.26-1.73,0.4-3.49,0.4-5.29c0-1.85,1.5-3.32,3.32-3.32c1.85,0,3.32,1.5,3.32,3.32c0,3.76-0.5,7.41-1.45,10.88L80.38,59.16 L80.38,59.16z M45.92,0c6.38,0,12.18,2.62,16.39,6.82c4.21,4.21,6.82,10.01,6.82,16.39v24.7l-6.7-6.7V23.19 c0-4.56-1.85-8.67-4.85-11.67l0,0c-3-3-7.14-4.85-11.67-4.85c-4.56,0-8.67,1.85-11.67,4.85c-0.25,0.25-0.5,0.51-0.73,0.78 l-4.71-4.71c0.24-0.26,0.48-0.51,0.73-0.76C33.74,2.62,39.55,0,45.92,0L45.92,0z"/></g></svg>
		`;
		document.getElementById('mic1').innerHTML = mic;
		document.getElementById('inmic1').value = "0";
	}
	else {
		let mic = document.getElementById('mic').innerHTML;
		mic = `
		<svg onclick="parameter_mic1(1)" id="micoff1" style="height:1.5rem; width:1.5rem;cursor:pointer;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
		</svg>
		`;
		document.getElementById('mic1').innerHTML = mic;
		document.getElementById('inmic1').value = "1";
	}
}

function camopen() {
	document.getElementById('left-cam-box').innerHTML = `
		<div class="cam" id="add-cam" style="margin-top: 3.5rem;">
			<img src="video_feed" />
		</div>
	`;
}