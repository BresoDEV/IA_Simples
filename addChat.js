function addChat(fotoLink = 'img/breso.png', nomeBot = 'BresoDEV Bot', tamanhoChat = 400, cor = 'rgb(45, 171, 106)') {



    if (localStorage.getItem('fotoLink')) {
        fotoLink = localStorage.getItem('fotoLink');
    }
    if (localStorage.getItem('nomeBot') ) {
        nomeBot = localStorage.getItem('nomeBot')
    }
    if (localStorage.getItem('topoBot')) {
        cor = localStorage.getItem('topoBot');
    }



    let altura = tamanhoChat;

    const chatBox = document.createElement('div')
    chatBox.id = 'chatBox'
    chatBox.style.fontFamily = 'Arial'
    chatBox.style.position = 'fixed'
    chatBox.style.width = '314px'
    chatBox.style.height = altura + 'px'
    chatBox.style.bottom = '50px'
    chatBox.style.right = '-4px'
    chatBox.style.backgroundColor = 'rgb(207, 207, 207)'
    chatBox.style.overflowY = 'scroll'
    chatBox.style.paddingBottom = '10px'


    const topo = document.createElement('div')
    topo.style.position = 'fixed'
    topo.style.width = '300px'
    topo.style.height = '50px'
    topo.style.bottom = (altura + 60) + 'px'
    topo.style.right = '10px'
    topo.style.backgroundColor = cor
    topo.style.borderRadius = '10px 10px 0px 0px'
    topo.id = 'topoBot'


    const foto = document.createElement('img')
    foto.style.position = 'relative'
    foto.style.width = '40px'
    foto.style.height = '40px'
    foto.style.bottom = '-4px'
    foto.style.left = '10px'
    foto.style.backgroundColor = 'rgb(45, 171, 106)'
    foto.style.borderRadius = '100%'
    foto.src = fotoLink
    foto.id = 'fotoLink'


    const nome = document.createElement('p')
    nome.style.position = 'relative'
    nome.style.height = '40px'
    nome.style.bottom = '50px'
    nome.style.left = '60px'
    nome.style.color = 'aliceblue'
    nome.style.fontSize = '16px'
    nome.style.fontWeight = 'bold'
    nome.innerHTML = nomeBot;
    nome.id = 'nomeBot';

    const online = document.createElement('p')
    online.style.position = 'relative'
    //online.style.width = '40px'
    online.style.height = '40px'
    online.style.bottom = '86px'
    online.style.left = '60px'
    online.style.color = 'aliceblue'
    online.style.fontSize = '12px'
    online.innerHTML = 'Online';
    online.id = 'online';



    const rodape = document.createElement('div')
    //rodape.style.fontFamily = 'Arial'
    rodape.style.position = 'fixed'
    rodape.style.width = '300px'
    rodape.style.height = '40px'
    rodape.style.bottom = '10px'
    rodape.style.right = '10px'
    rodape.style.backgroundColor = cor
    rodape.id = 'rodapeBot'

    const input = document.createElement('input')
    //input.style.fontFamily = 'Arial'
    input.style.position = 'relative'
    input.style.width = '229px'
    input.style.height = '25px'
    input.style.bottom = '-6px'
    input.style.right = '-6px'
    input.style.border = 'none'
    input.style.backgroundColor = 'rgb(207, 207, 207)'
    input.id = 'msg'
    input.placeholder = 'Faça uma pergunta....'


    const button = document.createElement('button')
    button.style.position = 'relative'
    button.style.width = '55px'
    button.style.height = '30px'
    button.style.bottom = '-6px'
    button.style.right = '-9px'
    button.style.backgroundColor = cor
    button.style.color = 'aliceblue'
    button.id = 'Enviar'
    button.innerHTML = 'Enviar'


    chatBox.append(topo)

    topo.append(foto)
    topo.append(nome)
    topo.append(online)

    rodape.append(input)
    rodape.append(button)

    chatBox.append(rodape)
    chatBox.append(rodape)

    document.body.append(chatBox)


    _5min();
    function _5min() {
        let now = new Date();
        now.setMinutes(now.getMinutes() - 5);
        let hooo = now.getHours().toString().padStart(2, '0');
        let mooo = now.getMinutes().toString().padStart(2, '0');
        document.getElementById('online').innerHTML = `Visto por Último: ${hooo}:${mooo}`
    }

    button.addEventListener('click', () => {


        var tt = Math.floor(tempoResposta / 4)

        let perg = input.value;
        input.value = '';
        criarMeuBalao(perg);
        chatBox.scrollTop = chatBox.scrollHeight

        var resposta = AI(perg);

        setTimeout(() => {
            online.innerHTML = 'Online';
            setTimeout(() => {
                online.innerHTML = 'Digitando...'
                setTimeout(() => {
                    var msg = criarBalaoBot(resposta, false);
                    //efeitoDigitar(msg,,tt/5)
                    online.innerHTML = 'Online';
                    chatBox.scrollTop = chatBox.scrollHeight
                }, tt);
            }, tt);
        }, tt);

    })

    function criarMeuBalao(txt) {
        let balao = document.createElement('div')
        balao.style.width = '250px'
        balao.style.backgroundColor = cor
        balao.style.color = 'aliceblue'
        balao.style.padding = '5px'
        balao.style.fontSize = 'small'
        balao.style.marginTop = '10px'
        balao.style.marginLeft = '10px'
        balao.style.borderRadius = '0px 15px 14px 15px'
        balao.style.wordBreak = 'break-all'
        balao.innerHTML = txt
        chatBox.append(balao)

    }
    function criarBalaoBot(txt) {
        let balao = document.createElement('div')
        balao.style.width = '250px'
        balao.style.backgroundColor = cor
        balao.style.color = 'aliceblue'
        balao.style.padding = '5px'
        balao.style.fontSize = 'small'
        balao.style.marginTop = '10px'
        balao.style.marginLeft = '30px'
        balao.style.borderRadius = '15px 0px 15px 15px'
        balao.style.wordBreak = 'break-all'
        balao.innerHTML = txt
        chatBox.append(balao)

        return balao;
    }

}
