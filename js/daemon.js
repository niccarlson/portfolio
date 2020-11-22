var spotlightDirectory = {
	title: ['sushi bar logo', 'fashion brand logo concepts', ' various personal illustrations', 'software development company logo', 'media production company logo', 'agricultural company logo', 'local band logo', 'media production company logo', 'various text designs', 'clothing resale company logo', 'candy bar packaging mockup', 'various iconography designs', 'clothing company design package', 'various video production work', '', '',],
	description: ['complete brand identity overhaul for local sushi bar. included 6 separate logo concepts.', 'original logo concepts and color schemes for a contemporary fashion startup.'],
	0: 8,
	1: 2,
	2: 4
}

// window.addEventListener('load', (event) => {
// 	setTimeout(() => {
document.getElementsByClassName('preloader-left')[0].classList.add('preloader-complete');
document.getElementsByClassName('preloader-middle')[0].classList.add('preloader-complete');
document.getElementsByClassName('preloader-right')[0].classList.add('preloader-complete');
document.getElementsByClassName('loading-square-middle-1')[0].classList.add('square-complete');
document.getElementsByClassName('loading-square-middle-2')[0].classList.add('square-complete');
document.getElementsByClassName('loading-square-left')[0].classList.add('bar-left');
document.getElementsByClassName('loading-square-right')[0].classList.add('bar-right');
document.getElementsByClassName('squares')[0].classList.add('squares-bar');
document.getElementsByClassName('marquee-text')[0].classList.add('animation-play');
document.body.classList.remove('no-scroll');
// 		window.scrollTo(0, 0);
// 		setTimeout(() => {
document.getElementsByClassName('preloader')[0].style.display = 'none';
// 		}, 1200)
// 	}, 2000);
// });

var scroll = new SmoothScroll('a[href*="#"]');

function closeProjectsSpotlight() {
	document.getElementsByClassName('projects-spotlight-container')[0].style.display = 'none';
}

function showSpotlight(i) {
	document.getElementById('projects-spotlight-title').innerHTML = spotlightDirectory.title[i]
	document.getElementById('projects-spotlight-description').innerHTML = spotlightDirectory.description[i]
	var imageElements = document.getElementsByClassName('projects-spotlight-image')
	for (var index = 0; index < 8; index++) {
		imageElements[index].src = '';
	}
	for (var index = 0; index < spotlightDirectory[i]; index++) {
		imageElements[index].src = `src/images/w-${i + 1}/s-${index + 1}.jpg`
	}
	document.getElementsByClassName('projects-spotlight-container')[0].style.display = 'block';
}



function submitForm() {
	// visual cues
	document.getElementsByClassName('checkmark-container')[0].style.opacity = 1;
	document.getElementsByClassName('contact-form-container')[0].style.opacity = 0.2;
	document.getElementsByClassName('contact-form-container')[0].style.pointerEvents = 'none';
	document.getElementById('contact-form-name.red').disabled = true;
	document.getElementById('contact-form-phone.blue').disabled = true;
	document.getElementById('contact-form-email.green').disabled = true;
	document.getElementById('contact-form-body.yellow').disabled = true;
	document.getElementById('submit-form').disabled = true;

	var nameValue = document.getElementById('contact-form-name.red').value
	var emailValue = document.getElementById('contact-form-email.green').value
	var phoneValue = document.getElementById('contact-form-phone.blue').value
	var messageValue = document.getElementById('contact-form-body.yellow').value
	var dateValue = new Date()
	dateValue = `${dateValue.getMonth() + 1}-${dateValue.getDate()}-${dateValue.getFullYear()}-${dateValue.getHours()}-${dateValue.getMinutes()}-${dateValue.getSeconds()}`
	firebase.database().ref(dateValue).set({
		name: nameValue,
		email: emailValue,
		phone: phoneValue,
		message: messageValue
	}, function (error) {
		if (error) {
			console.error(error)
		} else {
			console.log("Form submitted.")
			document.getElementsByClassName('checkmark-circle')[0].classList.add('animation-play');
			document.getElementsByClassName('checkmark')[0].classList.add('animation-play');
			document.getElementsByClassName('checkmark-check')[0].classList.add('animation-play');
		}
	});
}

var pupil = document.getElementsByClassName('pupil')[0]

window.addEventListener("mousemove", function (e) {
	var pupilX = window.innerWidth * 0.5
	var pupilY = window.innerWidth * 0.2165 - window.pageYOffset
	var rad = Math.atan2(e.clientX - pupilX, e.clientY - pupilY);
	var rot = (rad * (180 / Math.PI) * -1) + 50;
	pupil.style.transform = 'rotate(' + rot + 'deg)';
});





setInterval(() => {
	document.getElementsByClassName('eyelid')[0].classList.add('animation-play');
	setTimeout(() => {
		document.getElementsByClassName('eyelid')[0].classList.remove('animation-play');
	}, 500);
}, 5000);
