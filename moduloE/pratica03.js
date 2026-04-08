function verificar(){

    var res = document.getElementById('res')
    
    res.innerHTML = ''

    for(contador = 0; contador <= 20; contador++) {
        if(contador % 2 == 0){
            res.innerHTML += `${contador} <br>`
        }
    }
}