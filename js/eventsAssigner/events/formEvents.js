import { ResetForm, ValidateForm, GetFormData } from "../../utils/formUtils.js";

export function assignFormEvents()
{
	const form = document.getElementById("form");
	
	const eventNameInput = document.getElementById("eventName");
	const eventNameGroup = document.getElementsByClassName("event-name-group")[0];

	form.addEventListener
	(
		"submit",
		function(event)
		{
			event.preventDefault();

			if (ValidateForm(event.target)) { const formData = GetFormData(event.target); console.log(formData); }
			else { console.log("Form is invalid"); }
		}
	)
	
	form.addEventListener
	(
		"reset",
		function(event) { ResetForm(event.target); }
	);

	form.addEventListener
	(
		"change",
		function(event)
		{
			if (event.target.name !== "attended") { return; }
			
			if (event.target.value === "yes")
			{
				if (eventNameGroup) { eventNameGroup.classList.remove("hidden"); eventNameGroup.classList.add("visible"); }
				if (eventNameInput) { eventNameInput.required = true; }
			}
			else {
				if (eventNameGroup) { eventNameGroup.classList.remove("visible"); eventNameGroup.classList.add("hidden"); }
				if (eventNameInput) { eventNameInput.value = ""; eventNameInput.required = false; }
			}
		}
	);
}