///////////////////////////////////////////////////////////
/* Set current year*/
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEL.textContent = currentYear;
