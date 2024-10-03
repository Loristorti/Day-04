document.addEventListener("DOMContentLoaded", function() {
 var descriptionElement = document.getElementById('description');
 var paragraph = document.createElement('p');
 paragraph.textContent = "Now featuring a headphone jack!";
 descriptionElement.appendChild(paragraph);
});