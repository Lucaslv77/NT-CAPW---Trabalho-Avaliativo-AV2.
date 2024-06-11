document.getElementById('botao').addEventListener('click', function() {
    var texto = document.getElementById('texto');
    var seta = document.getElementById('seta');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        seta.classList.remove('direita');
        seta.classList.add('baixo');
    } else {
        texto.style.display = 'none';
        seta.classList.remove('baixo');
        seta.classList.add('direita');
    }
});