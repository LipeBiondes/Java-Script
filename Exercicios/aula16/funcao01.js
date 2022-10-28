function parimp(n) {
    if (n%2 == 0) {
      return 'Par!'
    }
    else{
      return 'Ímpar!'
    }
  }
  //Podemos exibir o resultado da função atribuindo-o a uma variável e depois imprimindo ela:
  
  let res = parimp(11)
  console.log(res)
  
  //Ou imprimindo a chamada diretamente:
  
  console.log(parimp(4))
  