console.log('left hello');

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
	msg.text = latest.textContent;
	window.speechSynthesis.speak(msg);
});

