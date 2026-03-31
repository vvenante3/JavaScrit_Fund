// Gerar cumprimento com base no horário

// var hora_atual = 11
var agora = new Date()
var hora_atual = agora.getHours()
console.log(`Agora são exatamente ${hora_atual} horas.`)

if (hora_atual < 12) {
    console.log(`Bom dia macaquito!`)
} else if (hora_atual < 19){
    console.log(`Bataaardee`)
} else {
    console.log(`Lá vem o homem macaco correndo atrás dimiiim`)
}