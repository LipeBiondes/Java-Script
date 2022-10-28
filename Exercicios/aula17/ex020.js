//objeto
let amigo ={nome:'José',
sexo:'M',
peso:85.5,
engordar(p){
  console.log('Ola Imundo!')
  this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)
