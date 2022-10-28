//Segunda vez:
let f1 = []
let val = []
let f2 = 'é Ana, viva Mariana, viva Mariana.'
for (let n = 1, pos = 0; n <= 10; n++, pos++) {
  f1[pos] = `Mariana conta ${n}, Mariana conta ${n}.`
  val[pos] = `é ${n} `
}
for(let n1 = 1, n2 = 0, n3 = 1; n2 <=9; n1++, n2++, n3++){
  val[n1]= val[n2] + val[n3]
  console.log(`${f1[n2]} ${val[n2]}${f2}`)
}