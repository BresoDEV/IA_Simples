
function RespostaBlacklist() {
    var r = [
        "Desculpe-nomeUsuario-, mas palavrões não são permitidos na nossa conversa &#128528",
        "Peço desculpas-nomeUsuario-, mas evite o uso de palavrões durante a nossa conversa &#128528",
        "Lamento, mas por favor, evite palavrões na nossa interação.",
        "Desculpe, mas é importante mantermos uma conversa respeitosa sem palavrões &#128528",
        "Por favor-nomeUsuario-, evite o uso de palavras ofensivas durante a nossa conversa.",
        "Peço desculpas, mas não é apropriado usar palavrões na nossa interação &#128528",
        "Entendi-nomeUsuario-, por favor, mantenha a conversa livre de palavrões.",
        "Lamento-nomeUsuario-, mas palavrões não são bem-vindos na nossa conversa &#128528",
        "Desculpe, mas é importante mantermos um diálogo respeitoso, sem palavras ofensivas.",
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
        'Não tenho conhecimento sobre isso',
    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsTriste);
}

function NaoConheceAPessoa() {
    var r = [
        'Não sei quem é a pessoa em questão, ou não a conheço',
    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsTriste);
}


function BemVindo() {
    var r = [
        "Olá, em que posso te ajudar hoje?",
        "Oii, oque você precisa hoje?"
    ];
    return r[Math.floor(Math.random() * r.length)] + escolherEmotionAleatorio(emotionsAleatorios);
}

function Tchau() {
    var r = [
        "Até logo, fico feliz em ajudar e estou aqui quando precisar &#129392",
        "Despeço-me por agora, contente em ter ajudado. Estarei aqui quando precisar.",
        "Adeus, estou contente por ter sido útil. Conte comigo sempre que precisar &#129392",
        "Até mais, estou feliz em ter ajudado e estou à disposição quando precisar.",
        "Despeço-me com alegria, estarei aqui sempre que precisar de assistência &#129392",
        "Até logo! Fico satisfeito em ter ajudado e estou disponível para suas próximas perguntas &#129392",
        "Adeus por agora, estou contente em ter contribuído. Estou aqui para ajudar quando necessário.",
        "Até mais tarde, fico feliz em ser útil. Estou à disposição para futuras consultas &#129392",
        "Despeço-me com alegria, estou aqui sempre que precisar de assistência.",
        "Até logo! Estou feliz em ajudar e disponível para suas perguntas futuras &#129392"

    ];
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