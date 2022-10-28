var idade = 12
console.log(`Sua idade é de : ${idade} anos.`)
if (idade < 16) {
  console.log('Você não pode votar ainda!')
}
else if(idade < 18 || idade > 65 ){
  console.log('Seu voto é opcional!')
}
else{
  console.log('Seu voto é obrigatório!')
}
