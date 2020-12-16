function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML =`Agora são ${hora} horas.`
    if(hora >=0 && hora <12){
        //Bom Dia
        document.body.style.background = '#bdc5c9'
        img.src = 'Img/tmanha.png'
    }else if(hora >=12 && hora <= 18){
        //Boa Tarde
        document.body.style.background ='#83533b'
        img.src = 'Img/ftarde.png'
    }else{
        //Boa Noite
        document.body.style.background ='#15232a'
        img.src ='Img/fnoite.png'
    }
}