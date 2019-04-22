const celcInput = document.querySelector('#celcius > input'),
	  fahrInput = document.querySelector('#fahrenheit > input'),
	  kelvInput = document.querySelector('#kelvin > input');

function roundNum(num) {
	return Math.round(num*100)/100;
}

function celcToFahrAndKelv () {
	let cTemp = parseFloat(celcInput.value),
	    fTemp = (cTemp* (9/5)) + 32,
	    ktemp = cTemp + 273.15;
	fahrInput.value = roundNum(fTemp);
	kelvInput.value = roundNum(ktemp);
}

function fahrToCelsAndKelv() {
	let fTemp = parseFloat(fahrInput.value),
		cTemp = (fTemp - 32) * (5/9),
		ktemp = (fTemp + 459.67) * (5/9);
	celcInput.value = roundNum(cTemp);
	kelvInpur.value = roundNum(ktemp);
}

function kelvToCelsAndFahr() {
	let kTemp = parseFloat(kelvInput.value),
		cTemp = kTemp - 273.15,
		fTemp = (9/5) * (kTemp - 273) + 32;
	celcInput.value = roundNum(cTemp);
	fahrInput.value = roundNum(fTemp);
}

function main() {
	celcInput.addEventListener('input', celcToFahrAndKelv);
	fahrInput.addEventListener('input', fahrToCelsAndKelv);
	kelvInput.addEventListener('input', kelvToCelsAndFahr);
}

main();


