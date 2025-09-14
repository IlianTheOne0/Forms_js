import { getAgeFromDateString } from "./datesUtils.js";

export function ResetForm(form)
{
	const eventNameInput = document.getElementById("eventName");
	const div = document.getElementsByClassName("event-name-group")[0];

	if (div) { div.classList.remove("visible"); div.classList.add("hidden"); }
	if (eventNameInput) { eventNameInput.value = ""; eventNameInput.required = false; }

	form.reset();
}

export function ValidateForm(form)
{
	const formData = GetFormData(form);

	if (!formData.fullName || formData.fullName.length < 3) { alert("Full Name must be at least 3 characters long"); return false; }
	if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { alert("Invalid email format"); return false; }
	if (!formData.phoneNumber || !/^\+?[0-9]{7,15}$/.test(formData.phoneNumber)) { alert("Invalid phone number format"); return false; }

	const dateOfBirthStr = formData.dateOfBirth;
	const age = getAgeFromDateString(dateOfBirthStr);
	if (isNaN(age)) { alert("Please enter a valid date of birth"); return false; }
	if (age < 18) { alert("You must be at least 18 years old"); return false;
	}

	if (formData.attended === "yes" && !formData.eventName) { alert("Please specify the event you attended"); return false; }

	return form.checkValidity();
}

export function GetFormData(form)
{
	let formData = new FormData(form);
	let data = {};

	for (let [key, value] of formData.entries()) { data[key] = value; }
	
	return data;
}