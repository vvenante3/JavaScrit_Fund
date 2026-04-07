function verificar() {

    var res = document.getElementById('res')

    var contador = 0
    res.innerHTML = ''

    while(contador <= 10) {
        res.innerHTML += `${contador} <br>`
        contador++
    }
  
}