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
	let toSpeak = "";
	if (document.getElementById('infoLearning') != null) {
		toSpeak = "You're Welcome in this learning section. Hear you'll going to learn the gestures letter by letter with your left hand.";
		msg.text = toSpeak;
		window.speechSynthesis.speak(msg);
	}
	else if (document.getElementById('spText') != null) {
		toSpeak = document.getElementById('spText').textContent;
		msg.text = toSpeak;
		window.speechSynthesis.speak(msg);
	}
	else if (document.getElementById('yourWord') != null) {
		toSpeak = document.getElementById('yourWord').textContent;
		msg.text = toSpeak;
		window.speechSynthesis.speak(msg);
	}
	else {
		text = ""
		msg.text = toSpeak;
		window.speechSynthesis.speak(msg);
	}
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




// right.html
let imgs = document.getElementById('right-cam-box').innerHTML;
let text = "";
let cnt = 0;
function camopen(value) {
	if (value === 1) {
		imgs = document.getElementById('right-cam-box').innerHTML;
		document.getElementById('right-cam-box').innerHTML = `
			<div class="cam">
				<img  id="add-cam" src="video_feed" />
			</div>
		`;
	}
	else {
		document.getElementById('add-cam').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCrjcPDStup3Kl3KH8VJtu65La7IgYq_tg&usqp=CAU";
		setTimeout(() => {
			document.getElementById('right-cam-box').innerHTML = imgs;
		}, 100);
	}
}
let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
	steps.push(e);
	e.addEventListener('click', (x) => {
		progress(x.target.id);
	});
});

function progress(stepNum) {
	let p = stepNum * 30;
	document.getElementsByClassName('percent')[0].style.width = `${p}%`;
	steps.forEach((e) => {
		if (e.id === stepNum) {
			e.classList.add('selected');
			e.classList.remove('completed');
		}
		if (e.id < stepNum) {
			e.classList.add('completed');
		}
		if (e.id > stepNum) {
			e.classList.remove('selected', 'completed');
		}
	});
}

function checkAccuracy(value) {
	if (value === "Bs") {
		value = "Backspace";
		document.getElementById('learnImg').innerHTML = `
		<div class="learningAnalyzer">
			<h1 class="yourWord">You're Learning the letter ${value}</h1>
			<h1 class="yourWord">Your Word: <span id="yourWord"></span></h1>
			<h2 class="yourWord">Score: <span id="score"></span>
			<div class="pgBar">
				<div id="progressBar" class="score" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:0"></div>
			</div>
			</h2>
			<h2 class="accuracy yourWord">Learning Accuracy: <span id="accuracy"></span></h2>
			<h3 class="suggestion yourWord"><span id="suggestion"></span></h3>
		</div>
		`;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/static/word.txt', true);
		xhr.onload = function () {
			document.getElementById('yourWord').textContent = xhr.responseText;
			text = xhr.responseText;
			let perc;
			if (text.length > 0) {
				cnt = text.length;
				perc = ((cnt * 100) / (10));

				document.getElementById('score').textContent = perc;
				document.getElementById('score').textContent += "%";
				document.getElementById('progressBar').style = `--value:${parseInt(perc, 10)}`;
				document.getElementById('accuracy').textContent = `${(perc / 10)}/10`;
				document.getElementById('suggestion').textContent = "You required more practice!";
			}
			else {
				perc = 100;
				document.getElementById('score').textContent = perc;
				document.getElementById('score').textContent += "%";
				document.getElementById('progressBar').style = `--value:${perc}`;
				document.getElementById('accuracy').textContent = `${(perc / 10)}/10`;
				document.getElementById('suggestion').textContent = "You're good to go!";
			}
		}
		xhr.send();
		return;
	}

	if (value === "Space") {
		value = "_";
	}

	document.getElementById('learnImg').innerHTML = `
	<div class="learningAnalyzer">
		<h1 class="yourWord">You're Learning the letter ${value}</h1>
		<h1 class="yourWord">Your Word: <span id="yourWord"></span></h1>
		<h2 class="yourWord">Score: <span id="score"></span>
		<div class="pgBar">
			<div id="progressBar" class="score" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:0"></div>
		</div>
		</h2>
		<h2 class="accuracy yourWord">Learning Accuracy: <span id="accuracy"></span></h2>
		<h3 class="suggestion yourWord"><span id="suggestion"></span></h3>
	</div>
	`;
	if (value === "Space") {
		value = " ";
	}
	value = value.toLowerCase();
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/static/word.txt', true);
	xhr.onload = function () {
		document.getElementById('yourWord').textContent = xhr.responseText;
		text = xhr.responseText;
		cnt = 0;
		for (let i = 0; i < text.length; i++) {
			if (text[i] === value) {
				cnt += 1;
			}
		}
		let perc;
		if (text.length === 0) {
			perc = 0;
		}
		else {
			perc = ((cnt * 100) / (text.length));
		}
		document.getElementById('score').textContent = perc;
		document.getElementById('score').textContent += "%";
		document.getElementById('progressBar').style = `--value:${parseInt(perc, 10)}`;
		document.getElementById('accuracy').textContent = `${(perc / 10)}/10`;
		if (perc <= 50) {
			document.getElementById('suggestion').textContent = "You required more practice!";
		}
		else if (perc <= 75) {
			document.getElementById('suggestion').textContent = "You can do better!";
		}
		else if (perc <= 90) {
			document.getElementById('suggestion').textContent = "You're almost there!";
		}
		else {
			document.getElementById('suggestion').textContent = "You're good to go!";
		}
	}
	xhr.send();
}


function learnImg(value) {
	document.getElementById('learnImg').innerHTML = `
		<h1 class="makeGesture">Make a gesture like this.</h1>
	`;
	if (value === 'A') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">A</span><img class="displayedImg" src='../static/img/right/a.png' alt='A'>
		`;
	}
	else if (value === 'B') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">B</span><img class="displayedImg" src='../static/img/right/b.png' alt='B'>
		`;
	}
	else if (value === 'C') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">C</span><img class="displayedImg" src='../static/img/right/c.png' alt='C'>
	`;
	}
	else if (value === 'D') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">D</span><img class="displayedImg" src='../static/img/right/d.png' alt='D'>
		`;
	}
	else if (value === 'E') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">E</span><img class="displayedImg" src='../static/img/right/e.png' alt='E'>
		`;
	}
	else if (value === 'F') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">F</span><img class="displayedImg" src='../static/img/right/f.png' alt='F'>
		`;
	}
	else if (value === 'G') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">G</span><img class="displayedImg" src='../static/img/right/g.png' alt='G'>
		`;
	}
	else if (value === 'H') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">H</span><img class="displayedImg" src='../static/img/right/h.png' alt='H'>
		`;
	}
	else if (value === 'I') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">I</span><img class="displayedImg" src='../static/img/right/i.png' alt='I'>
		`;
	}
	else if (value === 'J') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">J</span><img class="displayedImg" src='../static/img/right/j.png' alt='J'>
		`;
	}
	else if (value === 'K') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">K</span><img class="displayedImg" src='../static/img/right/k.png' alt='K'>
		`;
	}
	else if (value === 'L') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">L</span><img class="displayedImg" src='../static/img/right/l.png' alt='L'>
		`;
	}
	else if (value === 'M') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">M</span><img class="displayedImg" src='../static/img/right/m.png' alt='M'>
		`;
	}
	else if (value === 'N') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">N</span><img class="displayedImg" src='../static/img/right/n.png' alt='N'>
		`;
	}
	else if (value === 'O') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">O</span><img class="displayedImg" src='../static/img/right/o.png' alt='O'>
		`;
	}
	else if (value === 'P') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">P</span><img class="displayedImg" src='../static/img/right/p.png' alt='P'>
		`;
	}
	else if (value === 'Q') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Q</span><img class="displayedImg" src='../static/img/right/q.png' alt='Q'>
		`;
	}
	else if (value === 'R') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">R</span><img class="displayedImg" src='../static/img/right/r.png' alt='R'>
		`;
	}
	else if (value === 'S') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">S</span><img class="displayedImg" src='../static/img/right/s.png' alt='S'>
		`;
	}
	else if (value === 'T') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">T</span><img class="displayedImg" src='../static/img/right/t.png' alt='T'>
		`;
	}
	else if (value === 'U') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">U</span><img class="displayedImg" src='../static/img/right/u.png' alt='U'>
		`;
	}
	else if (value === 'V') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">V</span><img class="displayedImg" src='../static/img/right/v.png' alt='V'>
		`;
	}
	else if (value === 'W') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">W</span><img class="displayedImg" src='../static/img/right/w.png' alt='W'>
		`;
	}
	else if (value === 'X') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">X</span><img class="displayedImg" src='../static/img/right/x.png' alt='X'>
		`;
	}
	else if (value === 'Y') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Y</span><img class="displayedImg" src='../static/img/right/y.png' alt='Y'>
		`;
	}
	else if (value === 'Z') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Z</span><img class="displayedImg" src='../static/img/right/z.png' alt='Z'>
		`;
	}
	else if (value === 'Space') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Space</span><img class="displayedImg" src='../static/img/right/space.png' alt='Space'>
		`;
	}
	else if (value === 'Bs') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Bs</span><img class="displayedImg" src='../static/img/right/bs.png' alt='Bs'>
		`;
	}
	camopen(1);
	fifteenSec(1);
	setTimeout(() => {
		camopen(0);
		fifteenSec(0);
		setTimeout(() => { checkAccuracy(value); }, 100);
	}, 15000);
}



function fifteenSec(value) {
	if (value === 0) {
		document.getElementById("timer").innerHTML = ``;
		return;
	}
	const FULL_DASH_ARRAY = 283;
	const WARNING_THRESHOLD = 10;
	const ALERT_THRESHOLD = 5;

	const COLOR_CODES = {
		info: {
			color: "black"
		},
		warning: {
			color: "orange",
			threshold: WARNING_THRESHOLD
		},
		alert: {
			color: "red",
			threshold: ALERT_THRESHOLD
		}
	};



	const TIME_LIMIT = 34;
	let timePassed = 19;
	let timeLeft = TIME_LIMIT;
	let timerInterval = null;
	let remainingPathColor = COLOR_CODES.info.color;


	
	document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="20"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -20, 0
          a 20,20 0 1,0 40,0
          a 20,20 0 1,0 -40,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label"><span style="color:white;">0:</span>15</span>
</div>
`;

	startTimer();

	function onTimesUp() {
		clearInterval(timerInterval);
	}

	function startTimer() {
		timerInterval = setInterval(() => {
			timePassed = timePassed += 1;
			timeLeft = TIME_LIMIT - timePassed;
			// document.getElementById("base-timer-label").innerHTML = formatTime(
			// 	timeLeft
			// );
			if(timeLeft<10){
				document.getElementById("base-timer-label").innerHTML = `
				0:<span style="color:white">0${timeLeft}</span>
				`;
			}
			else {
				document.getElementById("base-timer-label").innerHTML = `
				0:<span style="color:white">${timeLeft}</span>
				`;
			}
			setCircleDasharray();
			setRemainingPathColor(timeLeft);

			if (timeLeft === 0) {
				onTimesUp();
			}
		}, 1000);
	}

	function formatTime(time) {
		const minutes = Math.floor(time / 60);
		let seconds = time % 60;

		if (seconds < 10) {
			seconds = `0${seconds}`;
		}

		return `${minutes}:${seconds}`;
	}

	function setRemainingPathColor(timeLeft) {
		const { alert, warning, info } = COLOR_CODES;
		if (timeLeft <= alert.threshold) {
			document
				.getElementById("base-timer-path-remaining")
				.classList.remove(warning.color);
			document
				.getElementById("base-timer-path-remaining")
				.classList.add(alert.color);
		} else if (timeLeft <= warning.threshold) {
			document
				.getElementById("base-timer-path-remaining")
				.classList.remove(info.color);
			document
				.getElementById("base-timer-path-remaining")
				.classList.add(warning.color);
		}
	}

	function calculateTimeFraction() {
		const rawTimeFraction = timeLeft / TIME_LIMIT;
		return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
	}

	function setCircleDasharray() {
		const circleDasharray = `${(
			calculateTimeFraction() * FULL_DASH_ARRAY
		).toFixed(0)} 283`;
		document
			.getElementById("base-timer-path-remaining")
			.setAttribute("stroke-dasharray", circleDasharray);
	}
}
