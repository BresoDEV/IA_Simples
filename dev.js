function Dev(pergunta) {
    //muda a foto
    if (pergunta.includes('foto')) {
        if (document.getElementById('fotoLink')) {
            var foto = document.getElementById('fotoLink');
            foto.src = pergunta.replace('$dev foto ', '');
            localStorage.setItem('fotoLink',foto.src)
            return 'Gostei da foto nova!';
        }
        else {
            return 'Nao achei minha foto. Lembre-se, que se voce criou a interface de um chat do zero, precisa definir o ID da imagem como <b>fotoLink</b>';
        }
    }
    //muda o nome do usuario
    if (pergunta.includes('meunome')) {
        var np = pergunta.replace('$dev meunome ', '')
        localStorage.setItem('meunome',np)
       return 'Prazer '+localStorage.getItem('meunome')+', bom saber seu nome!<br>Agora lhe chamarei pelo nome';
    }
    //reseta td
    if (pergunta.includes('reset')) {
       localStorage.clear()
       return 'Pronto, tudo reiniado! Atualize a pagina para aplicar os efeitos...';
    }
    //toggle Efeito Digitando
    else if (pergunta.includes('nome')) {
        if (document.getElementById('nomeBot')) {
            var nomeBot = document.getElementById('nomeBot');
            nomeBot.innerHTML = pergunta.replace('$dev nome ', '');
            localStorage.setItem('nomeBot',nomeBot.innerHTML)
            return 'Gostei do nome novo!';
        }
        else {
            return 'Nao achei meu nome. Lembre-se, que se voce criou a interface de um chat do zero, precisa definir o ID do nome como <b>nomeBot</b>';
        }
    }
    //tempo de Resposta
    else if (pergunta.includes('tempo')) {
        var t = pergunta.replace('$dev tempo ', '');
        if (parseInt(t) >= 3) {
            tempoResposta = parseInt(t)
            localStorage.setItem('tempo',tempoResposta)
            return 'Tempo de resposta alterado para ' + tempoResposta + ' milisegundos';
        }
        else {
            return 'Tempo de resposta deve ser maior que 2 milisegundos';
        }


    }
    //tempo de Resposta
    else if (pergunta.includes('cor')) {

        if (document.getElementById('topoBot')) {
            if (document.getElementById('rodapeBot')) {

                var tt = pergunta.replace('$dev cor ', '');
                document.getElementById('topoBot').style.backgroundColor = tt
                document.getElementById('rodapeBot').style.backgroundColor = tt
                localStorage.setItem('topoBot',tt)
                return 'Pronto<br> Se tudo deu certo, a cor ja mudou';
            }
            else {
                return 'Nao achei o rodape. Lembre-se, que se voce criou a interface de um chat do zero, precisa definir o ID do rodape como <b>rodapeBot</b>';
            }
        }
        else {
            return 'Nao achei o topo. Lembre-se, que se voce criou a interface de um chat do zero, precisa definir o ID do topo como <b>topoBot</b>';
        }




    }








    //Comando invalido
    else if (pergunta.includes(' ')) {
        return 'Não consegui reconheçeu seu comando. Por favor, verifique a ortografia e tente novamente!';
    }

    //instrucoes menu dev
    return `
    Voce acaba de ativar o menu de desenvolvedor<br>
    Vou te mostrar os comandos que podem serem usados:<br>
    <br>

    <b>$dev foto</b><br>
    Usado para mudar a minha foto de perfil. <br>
    <b>Exemplo:</b><br>
    <i>$dev foto https://link_da_foto</i><br>
    <br>
    <hr>

    <b>$dev nome</b><br>
    Usado para mudar o meu nome.<br>
    <b>Exemplo:</b><br>
    <i>$dev nome Pica-Pau</i><br>
    <br>
    <hr>

    <b>$dev tempo</b><br>
    Usado para mudar o meu tempo de resposta (em milisegundos).<br>
    <b>Exemplo de 5 segundos:</b><br>
    <i>$dev tempo 5000</i><br>
    <br>
    <hr>

    
    <b>$dev cor</b><br>
    Usado para mudar a cor do chat.<br>
    Valor pode ser em HEX,RGB ou o nome da cor (em ingles)<br>
    <b>Exemplo em HEX:</b><br>
    <i>$dev cor #FF0000</i><br>
    <b>Exemplo em RGB:</b><br>
    <i>$dev cor rgb(255,0,0)</i><br>
    <b>Exemplo com o nome da cor:</b><br>
    <i>$dev cor red</i><br>
    <br>
    <hr>

    
    <b>$dev meunome</b><br>
    Usado para mudar seu nome, assim o bot irá lhe chamar pelo nome.<br>
    <b>Exemplo:</b><br>
    <i>$dev meunome Pica Pau</i><br>
    <br>
    <hr>


    <b>$dev reset</b><br>
    Restaura os padrões originais.<br>
    <b>Exemplo:</b><br>
    <i>$dev reset</i><br>
    <br>
    <hr>
    `
}
