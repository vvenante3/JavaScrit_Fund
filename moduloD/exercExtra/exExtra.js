function verificar(){
    // pegar o id que representa a cor
    var cor = document.getElementById('cores')
    var corSelecionada = cor.value;

    var fundo = document.getElementById('fundo')
    
    var img = document.getElementById('img')

    // fazer if com base na cor selecionada, mudar o fundo e adicionar imagem
    switch(corSelecionada) {
        case ('amarelo'):
            fundo.style.background = 'yellow'
            img.src = 'img/amarelo.png'
        break
        case ('azul'):
            fundo.style.background = 'blue'
            img.src = 'img/azul.png'
        break
        case ('verde'):
            fundo.style.background = 'green'
            img.src = 'img/verde.png'
        break
        case ('vermelho'):
            fundo.style.background = 'red'
            img.src = 'img/vermelho.png'
        break
    }
}