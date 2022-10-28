//Primeira vez tentando fazer esse código:

var v = 'Ana, viva Mariana, viva Mariana.'
for (var n = 1; n <= 10; n++) {
  console.log(`Mariana conta ${n}, Mariana conta ${n}.`)
  if (n == 1) {
    console.log(`é ${n}, é, ${v}`)
  }
  else if (n == 2) {
    console.log(`é 1, é ${n} é, ${v}`)
  }
  else if (n == 3) {
    console.log(`é 1 é 2 é ${n} é, ${v}`)
  }
  else if (n == 4) {
    console.log(`é 1, é 2, é 3, é ${n} é ${v}`)
  }
  else if (n == 5) {
    console.log(`é 1, é 2, é 3, é 4, é ${n} é, ${v}`)
  }
  else if (n == 6) {
    console.log(`é 1, é 2, é 3, é 4, é 5 é ${n} é, ${v}`)
  }
  else if (n == 7) {
    console.log(`é 1, é 2, é 3, é 4, é 5, é 6, é ${n} é ${v}`)
  }
  else if (n == 8) {
    console.log(`é 1, é 2, é 3, é 4, é 5, é 6, é 7, é ${n} é ${v}`)
  }
  else if (n == 9) {
    console.log(`é 1, é 2, é 3, é 4, é 5, é 6, é 7, é 8, é ${n} é ${v}`)
  }
  else {
    console.log(`é 1, é 2, é 3, é 4, é 5, é 6, é 7, é 8, é 9, é${n} é ${v}`)
  }
}
