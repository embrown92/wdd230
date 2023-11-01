// copyright year
const currentYear = new Date().getFullYear();
document.querySelector('#year').textContent = `${currentYear}`;

// Last Modified
const changeMade = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${changeMade}`;