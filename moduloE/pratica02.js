function verificar() {

    var res = document.getElementById('res')

    var num = 10

    res.innerHTML = ''

    do {
        res.innerHTML += `${num} <br>` 
        num--
    } while (num >= 1)     // condicao

}