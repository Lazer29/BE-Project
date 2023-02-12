// console.log('left hello');

const open_btn1 = document.querySelector('.open-btn1');
const close_btn1 = document.querySelector('.close-btn1');
const popup1 = document.querySelector('.popup1');
const main_popup1 = document.querySelector('.main-popup1');

open_btn1.addEventListener('click', () => {
	popup1.style.display = 'flex';
	main_popup1.style.cssText = 'animation:slide-in1 .5s ease; animation-fill-mode: forwards;';
});

close_btn1.addEventListener('click', () => {
	main_popup1.style.cssText = 'animation:slide-out1 .5s ease; animation-fill-mode: forwards;';
	setTimeout(() => {
		popup1.style.display = 'none';
	}, 500);
});

window.addEventListener('click', (e) => {
	if (e.target == document.querySelector('.popup-overlay1')) {
		main_popup1.style.cssText = 'animation:slide-out1 .5s ease; animation-fill-mode: forwards;';
		setTimeout(() => {
			popup1.style.display = 'none';
		}, 500);
	}
});

var latest = document.getElementById("latest_value");
var msg = new SpeechSynthesisUtterance();
const speaker = document.querySelector('#speak_left');
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


let imgs = document.getElementById('left-cam-box').innerHTML;
let text = "";
let cnt = 0;
function camopen(value) {
	if (value === 1) {
		imgs = document.getElementById('left-cam-box').innerHTML;
		document.getElementById('left-cam-box').innerHTML = `
			<div class="cam">
				<img  id="add-cam" src="video_feed" />
			</div>
		`;
	}
	else {
		document.getElementById('add-cam').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oCrjcPDStup3Kl3KH8VJtu65La7IgYq_tg&usqp=CAU";
		setTimeout(() => {
			document.getElementById('left-cam-box').innerHTML = imgs;
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
			<span class="spText" id="spText">A</span><img class="displayedImg" src='../static/img/left/a.png' alt='A'>
		`;
	}
	else if (value === 'B') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">B</span><img class="displayedImg" src='../static/img/left/b.png' alt='B'>
		`;
	}
	else if (value === 'C') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">C</span><img class="displayedImg" src='../static/img/left/c.png' alt='C'>
	`;
	}
	else if (value === 'D') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">D</span><img class="displayedImg" src='../static/img/left/d.png' alt='D'>
		`;
	}
	else if (value === 'E') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">E</span><img class="displayedImg" src='../static/img/left/e.png' alt='E'>
		`;
	}
	else if (value === 'F') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">F</span><img class="displayedImg" src='../static/img/left/f.png' alt='F'>
		`;
	}
	else if (value === 'G') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">G</span><img class="displayedImg" src='../static/img/left/g.png' alt='G'>
		`;
	}
	else if (value === 'H') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">H</span><img class="displayedImg" src='../static/img/left/h.png' alt='H'>
		`;
	}
	else if (value === 'I') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">I</span><img class="displayedImg" src='../static/img/left/i.png' alt='I'>
		`;
	}
	else if (value === 'J') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">J</span><img class="displayedImg" src='../static/img/left/j.png' alt='J'>
		`;
	}
	else if (value === 'K') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">K</span><img class="displayedImg" src='../static/img/left/k.png' alt='K'>
		`;
	}
	else if (value === 'L') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">L</span><img class="displayedImg" src='../static/img/left/l.png' alt='L'>
		`;
	}
	else if (value === 'M') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">M</span><img class="displayedImg" src='../static/img/left/m.png' alt='M'>
		`;
	}
	else if (value === 'N') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">N</span><img class="displayedImg" src='../static/img/left/n.png' alt='N'>
		`;
	}
	else if (value === 'O') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">O</span><img class="displayedImg" src='../static/img/left/o.png' alt='O'>
		`;
	}
	else if (value === 'P') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">P</span><img class="displayedImg" src='../static/img/left/p.png' alt='P'>
		`;
	}
	else if (value === 'Q') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Q</span><img class="displayedImg" src='../static/img/left/q.png' alt='Q'>
		`;
	}
	else if (value === 'R') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">R</span><img class="displayedImg" src='../static/img/left/r.png' alt='R'>
		`;
	}
	else if (value === 'S') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">S</span><img class="displayedImg" src='../static/img/left/s.png' alt='S'>
		`;
	}
	else if (value === 'T') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">T</span><img class="displayedImg" src='../static/img/left/t.png' alt='T'>
		`;
	}
	else if (value === 'U') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">U</span><img class="displayedImg" src='../static/img/left/u.png' alt='U'>
		`;
	}
	else if (value === 'V') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">V</span><img class="displayedImg" src='../static/img/left/v.png' alt='V'>
		`;
	}
	else if (value === 'W') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">W</span><img class="displayedImg" src='../static/img/left/w.png' alt='W'>
		`;
	}
	else if (value === 'X') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">X</span><img class="displayedImg" src='../static/img/left/x.png' alt='X'>
		`;
	}
	else if (value === 'Y') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Y</span><img class="displayedImg" src='../static/img/left/y.png' alt='Y'>
		`;
	}
	else if (value === 'Z') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Z</span><img class="displayedImg" src='../static/img/left/z.png' alt='Z'>
		`;
	}
	else if (value === 'Space') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Space</span><img class="displayedImg" src='../static/img/left/space.png' alt='Space'>
		`;
	}
	else if (value === 'Bs') {
		document.getElementById('learnImg').innerHTML += `
			<span class="spText" id="spText">Bs</span><img class="displayedImg" src='../static/img/left/bs.png' alt='Bs'>
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
			color: "green"
		},
		warning: {
			color: "black",
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
				<span style="color:white">0:</span>0${timeLeft}
				`;
			}
			else {
				document.getElementById("base-timer-label").innerHTML = `
				<span style="color:white">0:</span>${timeLeft}
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
