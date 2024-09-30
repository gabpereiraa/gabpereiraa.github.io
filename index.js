
const links = document.querySelectorAll('nav ul li a');
const checkbox = document.getElementById('check');

// Adicionar um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false; 
    });
});
