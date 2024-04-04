document.addEventListener('DOMContentLoaded', function() {
    const pdfButtons = document.querySelectorAll('.pdf-view');
    
    pdfButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});
