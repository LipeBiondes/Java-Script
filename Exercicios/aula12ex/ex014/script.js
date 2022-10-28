function carregar(params) {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'images/manhaok.png'
        document.body.style.background ='#dba463'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'images/tardeok.png'
        document.body.style.background ='#ffde25'
    }
    else{
        img.src = 'images/noiteok.png'
        document.body.style.background ='#4c3d5e'
    }
}
