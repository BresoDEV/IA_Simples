
function RespostaBlacklist() {
    var r = [
        "Desculpe-nomeUsuario-, mas palavrões não são permitidos na nossa conversa &#128528",
        "Peço desculpas-nomeUsuario-, mas evite o uso de palavrões durante a nossa conversa &#128528",
        "Lamento-nomeUsuario-, mas por favor, evite palavrões na nossa interação.",
        "Desculpe-nomeUsuario-, mas é importante mantermos uma conversa respeitosa sem palavrões &#128528",
        "Por favor-nomeUsuario-, evite o uso de palavras ofensivas durante a nossa conversa.",
        "Peço desculpas-nomeUsuario-, mas não é apropriado usar palavrões na nossa interação &#128528",
        "Entendi-nomeUsuario-, por favor, mantenha a conversa livre de palavrões.",
        "Lamento-nomeUsuario-, mas palavrões não são bem-vindos na nossa conversa &#128528",
        "Desculpe-nomeUsuario-, mas é importante mantermos um diálogo respeitoso, sem palavras ofensivas.",
        "Peço que evite o uso de palavrões-nomeUsuario-, para mantermos uma conversa agradável &#128528"

    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsPalavrao);
}

function Obrigado() {
    var r = [
        "De nada-nomeUsuario-, fico feliz em ajudar &#128522",
        "Sem problemas-nomeUsuario-, estou contente em oferecer ajuda &#129392",
        "É um prazer ajudar-nomeUsuario-, fico feliz em ser útil &#128522",
        "Não mencione, estou aqui para ajudar-nomeUsuario-, e é um prazer &#129392",
        "Nada a agradecer-nomeUsuario-, estou feliz em poder ajudar &#128522",
        "Estou à disposição-nomeUsuario-, fico contente em fornecer assistência &#128522",
        "Sempre que precisar-nomeUsuario-, estou aqui para ajudar com prazer &#128522",
        "Não há de quê-nomeUsuario-, é um prazer poder ajudar &#128522",
        "Estou contente em ser útil-nomeUsuario-, não hesite em pedir ajuda novamente &#128522",
        "Fico feliz em ajudar-nomeUsuario-, qualquer coisa que precisar, estou aqui &#129392"

    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsFeliz);
}

function NEntendeu() {
    var r = [
        "Não entendi sua pergunta-nomeUsuario-",
        "Desculpe-nomeUsuario-, não compreendi o que você quis dizer ",
        "Pode me explicar novamente-nomeUsuario-?  Não entendi sua pergunta.",
        "Fiquei confuso-nomeUsuario-, poderia reformular sua pergunta, por favor?",
        "Preciso de mais detalhes-nomeUsuario-, pois não entendi completamente sua pergunta.",
        "Desculpe a confusão-nomeUsuario-, poderia esclarecer sua pergunta?",
        "Pode reformular? Não compreendi completamente sua pergunta-nomeUsuario-.",
        "Fiquei um pouco perdido-nomeUsuario-, pode me explicar de outra maneira?",
        "Desculpe se não ficou claro para mim-nomeUsuario-, pode reformular sua pergunta?",
        "Não consegui entender completamente-nomeUsuario-, Pode me explicar de outra forma?",

    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsTriste);
}


function NaoTemConhecimentoDoAssunto() {
    var r = [
        "Desculpe-nomeUsuario-, mas não tenho informações sobre esse assunto. Talvez você possa fornecer mais detalhes ou verificar em outra fonte.",
        "Infelizmente, não conheço detalhes sobre esse tópico-nomeUsuario-. Pode ser um assunto fora do meu banco de dados.",
        "Não consigo encontrar informações sobre esse tema-nomeUsuario-. você pode tentar me dar mais contexto ou fazer outra pergunta?",
        "Esse tópico não parece estar no meu banco de dados-nomeUsuario-. você poderia tentar procurar em uma fonte mais abrangente?",
        "Desculpe-nomeUsuario-, não tenho dados sobre esse assunto. Pode ser algo menos conhecido ou não registrado em minhas fontes.",
        "Não encontrei nada sobre esse tema-nomeUsuario-. Talvez seja util procurar em outras plataformas ou fornecer mais detalhes.",
        "Esse assunto não está no meu registro-nomeUsuario-. você pode verificar se está correto ou fornecer mais informações?",
        "Parece que não tenho informações sobre esse tema. Pode ser que não esteja no meu banco de dados ou seja algo menos conhecido.",
        "Lamento-nomeUsuario-, mas esse assunto não consta nas minhas referências. Pode ser util verificar em outra fonte ou dar mais detalhes.",
        "Não tenho informações sobre esse tópico no momento-nomeUsuario-. Talvez fornecer mais detalhes ou procurar em outra fonte possa ajudar."
    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsTriste);
}

function NaoConheceAPessoa() {
    var r = [
        "Desculpe-nomeUsuario-, mas não tenho informações sobre essa pessoa. Talvez você possa fornecer mais detalhes ou verificar em outra fonte.",
        "Infelizmente, não conheço essa pessoa-nomeUsuario-. Pode ser alguém menos conhecido ou fora do meu banco de dados.",
        "Não consigo encontrar informações sobre essa pessoa. você pode tentar me dar mais contexto ou fazer outra pergunta?",
        "Essa pessoa não parece estar no meu banco de dados. você poderia tentar procurar em uma fonte mais abrangente?",
        "Desculpe-nomeUsuario-, não tenho dados sobre essa pessoa. Pode ser que ela não seja muito conhecida ou não esteja registrada em minhas fontes.",
        "Não encontrei nada sobre essa pessoa-nomeUsuario-. Talvez seja util procurar em outras plataformas ou fornecer mais detalhes.",
        "Essa pessoa não está no meu registro-nomeUsuario-. você pode verificar se o nome está correto ou fornecer mais informações?",
        "Parece que não tenho informações sobre essa pessoa-nomeUsuario-. Pode ser que não esteja no meu banco de dados ou seja uma figura menos conhecida.",
        "Lamento-nomeUsuario-, mas essa pessoa não consta nas minhas referências. Pode ser util verificar em outra fonte ou dar mais detalhes.",
        "Não tenho informações sobre essa pessoa no momento. Talvez fornecer mais detalhes ou procurar em outra fonte possa ajudar."
    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsTriste);
}


function BemVindo() {
    let now = new Date();
    now.setMinutes(now.getMinutes() - 5);
    let hooo = now.getHours()
    switch(hooo){
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            var r = [
                "Boa noite-nomeUsuario-, em que posso te ajudar hoje?",
                "Boa noite-nomeUsuario-, oque você precisa hoje?",
                "Boa noite-nomeUsuario-! Bem-vindo! Como posso ajudar você hoje?",
                "Oi boa noite! Bem-vindo ao nosso chatbot-nomeUsuario-. Em que posso ser util?",
                "Seja bem-vindo-nomeUsuario-! Estou aqui para ajudar. O que você gostaria de saber?",
                "Boa noite-nomeUsuario-! é um prazer tê-lo aqui. Como posso assisti-lo hoje?",
                "Boa noite-nomeUsuario-! Estou aqui para ajudar com qualquer dúvida que você tenha.",
                "Oi Boa noite! Que bom que você está aqui-nomeUsuario-. Como posso ajudá-lo?",
                "Seja bem-vindo! Sinta-se a vontade para perguntar o que quiser.",
                "Boa noite-nomeUsuario-! Estou aqui para ajudar. Em que posso ser util hoje?",
                "Boa noite-nomeUsuario-! Estou a disposição para responder suas perguntas."
            ];
        break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            var r = [
                "Bom dia-nomeUsuario-, em que posso te ajudar hoje?",
                "Bom dia-nomeUsuario-, oque você precisa hoje?",
                "Bom dia-nomeUsuario-! Bem-vindo! Como posso ajudar você hoje?",
                "Oi bom dia! Bem-vindo ao nosso chatbot-nomeUsuario-. Em que posso ser util?",
                "Bom dia. Seja bem-vindo-nomeUsuario-! Estou aqui para ajudar. O que você gostaria de saber?",
                "Bom dia-nomeUsuario-! é um prazer tê-lo aqui. Como posso assisti-lo hoje?",
                "Bom dia-nomeUsuario-! Estou aqui para ajudar com qualquer dúvida que você tenha.",
                "Oi! Que bom que você está aqui-nomeUsuario-. Como posso ajudá-lo?",
                "Seja bem-vindo! Sinta-se a vontade para perguntar o que quiser.",
                "Bom dia-nomeUsuario-! Estou aqui para ajudar. Em que posso ser util hoje?",
                "Bom dia-nomeUsuario-! Estou a disposição para responder suas perguntas."
            ];
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            var r = [
                "Boa tarde-nomeUsuario-, em que posso te ajudar hoje?",
                "Boa tarde-nomeUsuario-, oque você precisa hoje?",
                "Boa tarde-nomeUsuario-! Bem-vindo! Como posso ajudar você hoje?",
                "Oi! Bem-vindo ao nosso chatbot-nomeUsuario-. Em que posso ser util?",
                "Seja bem-vindo-nomeUsuario-! Estou aqui para ajudar. O que você gostaria de saber?",
                "Boa tarde-nomeUsuario-! é um prazer tê-lo aqui. Como posso assisti-lo hoje?",
                "Bem-vindo-nomeUsuario-! Estou aqui para ajudar com qualquer dúvida que você tenha.",
                "Oi! Que bom que você está aqui-nomeUsuario-. Como posso ajudá-lo?",
                "Seja bem-vindo! Sinta-se a vontade para perguntar o que quiser.",
                "Olá-nomeUsuario- boa tarde! Estou aqui para ajudar. Em que posso ser util hoje?",
                "Boa tarde-nomeUsuario-! Estou a disposição para responder suas perguntas."
            ];
        break;
        default:
            var r = [
                "Olá-nomeUsuario-, em que posso te ajudar hoje?",
                "Oii-nomeUsuario-, oque você precisa hoje?",
                "Olá-nomeUsuario-! Bem-vindo! Como posso ajudar você hoje?",
                "Oi! Bem-vindo ao nosso chatbot-nomeUsuario-. Em que posso ser util?",
                "Seja bem-vindo-nomeUsuario-! Estou aqui para ajudar. O que você gostaria de saber?",
                "Olá-nomeUsuario-! é um prazer tê-lo aqui. Como posso assisti-lo hoje?",
                "Bem-vindo-nomeUsuario-! Estou aqui para ajudar com qualquer dúvida que você tenha.",
                "Oi! Que bom que você está aqui-nomeUsuario-. Como posso ajudá-lo?",
                "Seja bem-vindo! Sinta-se a vontade para perguntar o que quiser.",
                "Olá-nomeUsuario-! Estou aqui para ajudar. Em que posso ser util hoje?",
                "Bem-vindo-nomeUsuario-! Estou a disposição para responder suas perguntas."
            ];
            break;
    }
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsAleatorios);
}

function Tchau() {
    
    let now = new Date();
    now.setMinutes(now.getMinutes() - 5);
    let hooo = now.getHours()
    switch(hooo){
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            var r = [
                "Até logo-nomeUsuario-, fico feliz em ajudar e estou aqui quando precisar. Tenha uma ótima noite &#129392",
                "Adeus-nomeUsuario-, estou contente por ter sido útil. Conte comigo sempre que precisar. Tenha uma boa noite &#129392",
                "Até mais-nomeUsuario-, estou feliz em ter ajudado e estou à disposição quando precisar. Tenha uma ótima noite ",
                "Até logo-nomeUsuario-! Fico satisfeito em ter ajudado e estou disponível para suas próximas perguntas. Tenha uma boa noite &#129392",
                "Adeus por agora-nomeUsuario-, estou contente em ter contribuído. Estou aqui para ajudar quando necessário. Tenha uma ótima noite ",
                "Até mais tarde-nomeUsuario-, fico feliz em ser útil. Estou à disposição para futuras consultas. Tenha uma boa noite &#129392",
                "Até logo-nomeUsuario-! Estou feliz em ajudar e disponível para suas perguntas futuras. Tenha uma ótima noite &#129392"
        
            ];
        break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            var r = [
                "Até logo-nomeUsuario-, fico feliz em ajudar e estou aqui quando precisar. Tenha um ótimo dia &#129392",
                "Adeus-nomeUsuario-, estou contente por ter sido útil. Conte comigo sempre que precisar. Tenha um bom dia &#129392",
                "Até mais-nomeUsuario-, estou feliz em ter ajudado e estou à disposição quando precisar. Tenha um ótimo dia ",
                "Até logo-nomeUsuario-! Fico satisfeito em ter ajudado e estou disponível para suas próximas perguntas. Tenha um bom dia &#129392",
                "Adeus por agora-nomeUsuario-, estou contente em ter contribuído. Estou aqui para ajudar quando necessário. Tenha um ótimo dia ",
                "Até mais tarde-nomeUsuario-, fico feliz em ser útil. Estou à disposição para futuras consultas. Tenha um bom dia &#129392",
                "Até logo-nomeUsuario-! Estou feliz em ajudar e disponível para suas perguntas futuras. Tenha um ótimo dia &#129392"
        
            ];
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            var r = [
                "Até logo-nomeUsuario-, fico feliz em ajudar e estou aqui quando precisar. Tenha uma ótima tarde &#129392",
                "Adeus-nomeUsuario-, estou contente por ter sido útil. Conte comigo sempre que precisar. Tenha uma boa tarde &#129392",
                "Até mais-nomeUsuario-, estou feliz em ter ajudado e estou à disposição quando precisar. Tenha uma ótima tarde ",
                "Até logo-nomeUsuario-! Fico satisfeito em ter ajudado e estou disponível para suas próximas perguntas. Tenha uma ótima tarde &#129392",
                "Adeus por agora-nomeUsuario-, estou contente em ter contribuído. Estou aqui para ajudar quando necessário. Tenha uma boa tarde ",
                "Até mais tarde-nomeUsuario-, fico feliz em ser útil. Estou à disposição para futuras consultas. Tenha uma ótima tarde &#129392",
                "Até logo-nomeUsuario-! Estou feliz em ajudar e disponível para suas perguntas futuras. Tenha uma boa tarde &#129392"
        
            ];
        break;
        default:
            var r = [
                "Até logo-nomeUsuario-, fico feliz em ajudar e estou aqui quando precisar &#129392",
                "Adeus-nomeUsuario-, estou contente por ter sido útil. Conte comigo sempre que precisar &#129392",
                "Até mais-nomeUsuario-, estou feliz em ter ajudado e estou à disposição quando precisar.",
                "Até logo-nomeUsuario-! Fico satisfeito em ter ajudado e estou disponível para suas próximas perguntas &#129392",
                "Adeus por agora-nomeUsuario-, estou contente em ter contribuído. Estou aqui para ajudar quando necessário.",
                "Até mais tarde-nomeUsuario-, fico feliz em ser útil. Estou à disposição para futuras consultas &#129392",
                "Até logo-nomeUsuario-! Estou feliz em ajudar e disponível para suas perguntas futuras &#129392"
        
            ];
            break;
    }
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsAleatorios);
}







var emotionsFeliz = [
    '&#128512;',//😀
    '&#128513;',//😁
    '&#128515;',//😃
    '&#128516;',//😄
    '&#128518;',//😆
    '&#128522;',//😊
    '&#128525;',//😍
];
var emotionsTriste = [
    '&#128530;',//😒
    '&#128529;',//😑
    '&#128533;',//😕
    '&#128543;',//😟
    '&#128546;',//😢
];
var emotionsAnimais = [
    '&#128004;',
    '&#128012;',
    '&#128020;',
    '&#128030;',
    '&#128049;',
    '&#128056;',
];
var emotionsAleatorios = [
    '&#128077;',//👍
    '&#128123;',//👻
    '&#128126;',//👾
    '&#128142;',//💎
    '&#128151;',//💗
    '&#128161;',//💡
    '&#128165;',//💥
    '&#128175;',//💯
    '&#128293;',//🔥
    '&#128400;',//🖐
];
var emotionsTecnologia = [
    '&#128187;',//💻
    '&#128223;',//📟
    '&#128241;',//📱
    '&#128274;',//🔒
    '&#128295;',//🔧
];

var emotionsPalavrao = [
    '&#129324;',// 🤬
    '&#129326;',// 🤮
    '&#129314;',// 🤢
    '&#128286;',// 🔞
];
var emotionsVelocidade = [
    '&#128640;',// 🚀
    '&#128692;',// 🚴
    '&#127939;',// 🏃
];



function escolherEmotionAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function AudioFake(){
    var play = '&#9654; &#149; &#4170;&#4170;'

    var audio=[
        '&#4170;',
        '&#124;',
        '&#124;',
        '&#124;',
        '&#4171;',
    ]

    var f = play;
    for (let index = 0; index < 30; index++) {

        f += audio[Math.floor(Math.random()* audio.length)];
    }
    f += ' &#149; '+Math.floor(Math.random()* 2)+':'+(Math.floor(Math.random()* 30)+10);
    //var cd = '<br><br>Se quiser copiar e enviar pra alguem, aqui está o código:<br><br><textarea>'+f+'</textarea>';
    return f;


}