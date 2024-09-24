
// Selecionar todos os links do menu
const links = document.querySelectorAll('nav ul li a');
const checkbox = document.getElementById('check');

// Adicionar um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false; // Desmarcar o checkbox para recolher o menu
    });
});
