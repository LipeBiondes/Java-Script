var agora = new Date
var hora = agora.getHours()
if(hora < 25){
  console.log(`Agora são exatamente ${hora} horas!`)
}
if(hora >= 0 && hora <= 6) {
  console.log('Boa madrugada otaku fidido!')
}
else if(hora > 6 && hora <= 12) {
  console.log('Bom dia Cambada!!')
}
else if(hora > 12 && hora <= 18){
  console.log('Boa tarde mísera!')
}
else if (hora > 18 && hora <= 24){
  console.log('Boa noite cacete!')
}
else{
  console.log('Formato de hora inválido!')
}
