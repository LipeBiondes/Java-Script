function vetor(){let n = [2,4,5]
n[3]=6
num.push(7) // Push coloca o número na última posição do vetor
console.log(`Nosso vetor contém: ${n}`)
}

function vetor2 (){let n = [5,3,2,4,1]
n[5]=6
n[6]=7
n.push(8)
n.push(9)
console.log(n)
n.sort()
console.log(`Nosso vetor contém: ${n} valores.`)
console.log(`Nosso vetor contém: ${n.length} posições`)
console.log(`${n[0]}`)
}

function vetor3(params) {
    let num = [8, 1, 7, 4, 2]
    for (let pos = 0; pos<num.length;pos++) {
        console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
    }

}

function vetor4(params) {
    let num = [3, 1, 2, 5, 4, 9, 8]
    num.sort()
    for(let pos in num){
      console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
    }
    
}

function vetor5(params) {
    let num = [3, 1, 2, 5, 4, 9, 8]
    num.sort()
    let pos = num.indexOf(8)
    console.log(pos)
    console.log(`${num[pos]}`)
}

function mariana(params) {  
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
}