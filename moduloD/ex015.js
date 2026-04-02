function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = document.getElementById('anoNascimento')
    

    var txt = document.getElementById('txtInformativo')
    
    if(anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
        window.alert('[Erro]: Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criancaM.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemM.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultoM.png')
            } else {
                img.setAttribute('src', 'img/velhoM.png')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/criancaF.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovemF.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adultoF.png')
            } else {
                img.setAttribute('src', 'img/velhaF.png')
            }
        }
        txt.innerHTML = `${genero} com ${idade} anos.`
        txt.appendChild(img)
    }
}