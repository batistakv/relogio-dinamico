function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msi = window.document.getElementById('msi')
    var mej = window.document.getElementById('dia')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var dia = data.getDay()
    data.toLocaleTimeString()
    switch (dia) {
        case 0: 
        dia = `Domingo`
        break
        case 1: 
        dia = `Segunda-Feira`
        break
        case 2: 
        dia = `Terça-Feira`
        break
        case 3:
        dia = `Quarta-Feira`
        break
        case 4: 
        dia = `Quinta-Feira`
        break
        case 5: 
        dia = `Sexta-Feira`
        break
        case 6: 
        dia = `Sabado`
        break
    }
    if (min < 10){
        min = "0" + min
  }
    if (seg < 10){
        seg = "0" + seg
    }
    msg.innerHTML = `Hoje é ${dia} as ${hora}:${min}:${seg}.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fdc33e'
        msi.innerHTML('Bom dia!')
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        img.src = 'fototarde.png'
        document.body.style.background = '#a06664'
        msi.innerHTML = `Boa tarde!!`
    } else {
        //BOA NOITE!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#0f3741'
        msi.innerHTML (`Tenha uma boa noite`)
    }
}
setInterval (carregar, 1000);
