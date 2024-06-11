

//Includes adicionais
document.write('<script src="loads.js"></script>')
document.write('<script src="dev.js"></script>')
document.write('<script src="respostasProntas.js"></script>')
document.write('<script src="addChat.js"></script>')
document.write('<script src="voids.js"></script>')


var neuronio = []
var blacklist = []



var tempoResposta = 6000;
var quantCerebros = 0;

function loadJSON(arq) {
    return fetch(arq)
        .then(response => {
            if (!response.ok) {
                //throw new Error(arq + ' invalido');
            }
            return response.json();
        })
        .then(data => {
            neuronio = neuronio.concat(data);
            quantCerebros++
        })
}

function loadJSONblacklist() {
    return fetch('json/blacklist.json')
        .then(response => {
            if (!response.ok) {

            }
            ///return response.json();
        })
        .then(data => {
            blacklist = blacklist.concat(data);
            quantCerebros++
        })
}

loadJSONblacklist()
for (let i = 0; i < 10; i++) {
    Promise.all([
        loadJSON('json/' + i + '.json')
    ]).then(() => {
        //
    })
}







function AI(pergunta = '') {


    //calculadora
    if (EnviouUmaConta(pergunta)) {
        return Calcular(pergunta);
    }

    //gerar senha
    if (pergunta.toLowerCase().includes('senha')) {
        const temnumero = /\d+/.test(pergunta);
        if (temnumero) {
            const r = pergunta.match(/\d+/)
            return addPalavrasChave(gerarSenha(parseInt(r[0], 10)));
        }
        else {
            return addPalavrasChave(gerarSenha());
        }
        
    }

    //addLembrete
    if (pergunta.toLowerCase().includes('lembrete')) {
        if (pergunta.toLowerCase().includes('adicionar lembrete ')) {
            return addPalavrasChave(addLembrete(pergunta));
        }
        if (pergunta.toLowerCase().includes('remover') ||
            pergunta.toLowerCase().includes('apagar')||
            pergunta.toLowerCase().includes('excluir')) {
                return addPalavrasChave(apagarLembrete());
        }
        if (pergunta.toLowerCase().includes('exibir') ||
            pergunta.toLowerCase().includes('listar') ||
            pergunta.toLowerCase().includes('ver') ||
            pergunta.toLowerCase().includes('mostr')) {
                return addPalavrasChave(exibirLembrete());
        }
    }

    //gerador de lero
    if (pergunta.toLowerCase().includes('lero')) {
        const temnumero = /\d+/.test(pergunta);
        if (temnumero) {
            const r = pergunta.match(/\d+/)
            return lero(parseInt(r[0], 10));
        }
        else {
            return lero();
        }
    }

    //dark font converter
    if (pergunta.toLowerCase().includes('dark font ')) {
        pergunta = pergunta.replace('dark font ', '');
        return DarkFont(pergunta);
    }


    //mini font converter
    if (pergunta.toLowerCase().includes('mini font ')) {
        pergunta = pergunta.replace('mini font ', '');
        return MiniFont(pergunta);
    }

    //msgs automaticas
    if (pergunta.toLowerCase().includes('mensagem') || pergunta.toLowerCase().includes('msg')) {
        if (pergunta.toLowerCase().includes('bom dia')) {
            return 'Claro, aqui está:<br>' + geraMensagemBomDia() + ' &#127774;';
        }
        if (pergunta.toLowerCase().includes('gratid')) {
            return 'Claro, aqui está:<br>' + geraMensagemGratidao() + ' &#11088;';
        }
        if (pergunta.toLowerCase().includes('anivers')) {
            return 'Claro, aqui está:<br>' + geraMensagemAniversario() + ' &#127873;';
        }
        if (pergunta.toLowerCase().includes('pascoa') || pergunta.toLowerCase().includes('páscoa')) {
            return 'Claro, aqui está:<br>' + geraMensagemPascoa() + ' &#128007;';
        }
        if (pergunta.toLowerCase().includes('ano novo')) {
            return 'Claro, aqui está:<br>' + geraMensagemAnoNovo() + ' &#129346;';
        }
        if (pergunta.toLowerCase().includes('natal')) {
            return 'Claro, aqui está:<br>' + geraMensagemNatal() + ' &#127876;';
        }
        if (pergunta.toLowerCase().includes('boa noite')) {
            return 'Claro, aqui está:<br>' + geraMensagemBoaNoite() + ' &#127771;';
        }
        if (pergunta.toLowerCase().includes('boa tarde')) {
            return 'Claro, aqui está:<br>' + geraMensagemBoaTarde() + ' &#11088;';
        }
        if (pergunta.toLowerCase().includes('amig') || pergunta.toLowerCase().includes('amizade')) {
            return 'Claro, aqui está:<br>' + geraMensagemAmizade() + ' &#11088;';
        }
        if (pergunta.toLowerCase().includes('amor')) {
            return 'Claro, aqui está:<br>' + geraMensagemAmor() + ' &#10084;';
        }
        if (pergunta.toLowerCase().includes('motivacional') || pergunta.toLowerCase().includes('motiva')) {
            return 'Claro, aqui está:<br>' + geraFraseMotivacional() + ' &#128170;';
        }

    }

    if (pergunta.includes('$dev')) {
        return Dev(pergunta);
    }

    pergunta = processarPergunta(pergunta);
    var resposta = 'null';

    blacklist.forEach(palavrao => {
        if (pergunta.includes(palavrao)) {
            resposta = RespostaBlacklist();
        }
    });

    if (pergunta == '') {
        resposta = BemVindo();
    }

    if (pergunta.includes('obrigad')) {
        resposta = Obrigado();
    }
    if (pergunta.includes('tchau') || pergunta.includes('adeus') || pergunta.includes(' logo')) {
        resposta = Tchau();
    }


    if (resposta == 'null') {
        for (let i1 = 0; i1 < neuronio.length; i1++) {

            var checks = 0;


            for (let i2 = 0; i2 < neuronio[i1].palavras_1.length; i2++) {
                if (pergunta.includes(neuronio[i1].palavras_1[i2])) {
                    checks++

                }
                if (checks == neuronio[i1].palavras_1.length) {
                    resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                    console.log(resposta)
                    return addPalavrasChave(resposta)
                }
            }
            //====================
            if (neuronio[i1].palavras_2) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_2.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_2[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_2.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }

            //====================
            if (neuronio[i1].palavras_3) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_3.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_3[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_3.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }

            //====================
            if (neuronio[i1].palavras_4) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_4.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_4[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_4.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }

            //====================
            if (neuronio[i1].palavras_5) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_5.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_5[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_5.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }

            //====================
            if (neuronio[i1].palavras_6) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_6.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_6[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_6.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }



            //====================
            if (neuronio[i1].palavras_7) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_7.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_7[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_7.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }

            }

            //====================
            if (neuronio[i1].palavras_8) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_8.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_8[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_8.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }


            //====================
            if (neuronio[i1].palavras_9) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_9.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_9[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_9.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }

            //====================
            if (neuronio[i1].palavras_10) {
                checks = 0;
                for (let i2 = 0; i2 < neuronio[i1].palavras_10.length; i2++) {
                    if (pergunta.includes(neuronio[i1].palavras_10[i2])) {
                        checks++
                    }
                    if (checks == neuronio[i1].palavras_10.length) {
                        resposta = neuronio[i1].respostas[Math.floor(Math.random() * neuronio[i1].respostas.length)]
                        return addPalavrasChave(resposta)
                    }
                }
            }




        }

    }
    if (resposta == 'null') {
        if (pergunta.includes('?')) {
            resposta = NaoTemConhecimentoDoAssunto();
        }
        else if (pergunta.includes('quem ')) {
            resposta = NaoConheceAPessoa();
        }
        else {
            resposta = NEntendeu();
        }
    }





    console.log(resposta)
    return addPalavrasChave(resposta);
}













