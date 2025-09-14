export function getAgeFromDateString(dateOfBirthStr)
{
	if (!dateOfBirthStr) { return NaN; }
	
	const dateOfBirth = new Date(dateOfBirthStr);
	if (isNaN(dateOfBirth)) { return NaN; }

	const today = new Date();
	let age = today.getFullYear() - dateOfBirth.getFullYear();
	const month = today.getMonth() - dateOfBirth.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) { age--; }

	return age;
}