const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

const validDomains = [".es", ".com", ".org", ".net"]; // Dominios permitidos

form.addEventListener("submit", function (event) {
	event.preventDefault();
	// Reset errors
	nameError.textContent = "";
	emailError.textContent = "";
	messageError.textContent = "";
	// Validate form fields
	let isValid = true;
	if (
		!nameInput.value.trim() ||
		nameInput.value.trim().length < 4 ||
		!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())
	) {
		nameError.textContent =
			"Por favor ingrese un nombre válido (al menos 4 caracteres y solo letras).";
		isValid = false;
	}
	if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
		emailError.textContent = "Por favor ingrese un correo electrónico válido.";
		isValid = false;
	} else {
		const domain = emailInput.value
			.trim()
			.substring(emailInput.value.trim().lastIndexOf("."));
		if (!validDomains.includes(domain)) {
			emailError.textContent =
				"Por favor ingrese un correo electrónico con un dominio válido (.es, .com, .org, .net).";
			isValid = false;
		}
	}
	if (
		!messageInput.value.trim() ||
		messageInput.value.trim().length < 8 ||
		messageInput.value.trim().length > 255
	) {
		messageError.textContent =
			"Por favor ingrese un mensaje válido (entre 8 y 255 caracteres).";
		isValid = false;
	}
	// If form is valid, submit
	if (isValid) {
		successMessage.style.display = "block";
		setTimeout(function () {
			form.reset();
			successMessage.style.display = "none";
			window.location.href = "/../../index.html"; // Redirigir al index después de 3 segundos
		}, 3000);
	}
});

// Función para validar un correo electrónico
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
