const btnMostrarProjetos = document.querySelector('.btn-mostrar-mais');
const projetosAntigos = document.querySelectorAll('.projeto:not(.recente)');

let projetosVisiveis = false;

btnMostrarProjetos.addEventListener('click', () => {
    projetosAntigos.forEach(projetoAntigo => {
        if (!projetosVisiveis) {
            projetoAntigo.classList.add('recente');
            btnMostrarProjetos.textContent = 'Mostrar menos';
        } else {
            projetoAntigo.classList.remove('recente');
            btnMostrarProjetos.textContent = 'Mostrar mais';
        }
    });

    projetosVisiveis = !projetosVisiveis;
});

/* document.addEventListener('DOMContentLoaded', function() {
    const pdfButtons = document.querySelectorAll('.pdf-view');
    
    pdfButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
}); */
