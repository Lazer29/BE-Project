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
speaker.addEventListener('click',()=>{
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