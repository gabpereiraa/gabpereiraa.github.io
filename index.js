
const links = document.querySelectorAll('nav ul li a');
const checkbox = document.getElementById('check');

links.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false; 
    });
});
