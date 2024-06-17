function efeitoDigitar(elementoDoTexto, texto, velocidade = 50) {

    var indexxxxxxxxxxxxxxxxxxxx = 0
    function digitar() {
        elementoDoTexto.innerHTML = texto.substring(0, indexxxxxxxxxxxxxxxxxxxx);
        indexxxxxxxxxxxxxxxxxxxx++;
        if (indexxxxxxxxxxxxxxxxxxxx <= texto.length) {
            setTimeout(digitar, velocidade);
        }
    }
    digitar()
}




function showCerebro() {
    setTimeout(() => {
        document.write(JSON.stringify(neuronio))
    }, 500);
}





function _GET(nomeDoParametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nomeDoParametro);
}



function processarPergunta(p) {
    p = p.toLowerCase();
    p = p.replace('é', 'e'); p = p.replace('è', 'e');
    p = p.replace('ê', 'e'); p = p.replace('ü', 'u');
    p = p.replace('í', 'i'); p = p.replace('ì', 'i');
    p = p.replace('î', 'i'); p = p.replace('ó', 'o');
    p = p.replace('ò', 'o'); p = p.replace('õ', 'o');
    p = p.replace('ô', 'o'); p = p.replace('á', 'a');
    p = p.replace('à', 'a'); p = p.replace('ã', 'a');
    p = p.replace('â', 'a'); p = p.replace('ç', 'c');
    p = p.replace('ú', 'u'); p = p.replace('ù', 'u');
    p = p.replace('û', 'u');
    return p;
}


function addPalavrasChave(r) {
    if (r.includes('-nomeUsuario-')) {
        if (localStorage.getItem('meunome')) {
            r = r.replace('-nomeUsuario-', ' ' + localStorage.getItem('meunome'))
        }
        else {
            r = r.replace('-nomeUsuario-', '')
        }
    }

    return r;
}

function EnviouUmaConta(r) {
    const cs = /[+\-*/^=]/.test(r);
    const temnumero = /\d+/.test(r);
    if (cs && temnumero)
        return true;
    return false
}
function Calcular(r) {
    var ns = '';
    try {
        ns = 'Entendi-nomeUsuario-, vamos calcular:<br><i>' + r + '</i> <br> Resultado: <b>' + eval(r) + '</b> ' + escolherEmotionAleatorio(emotionsAleatorios)

    } catch (error) {
        ns = 'Nao entendi sua conta-nomeUsuario- e não consegui calcular.<br>Por favor, reveja se digitou corretamente ' + escolherEmotionAleatorio(emotionsTriste)

    }


    return ns;
}

function lero(numf = 3) {
    var f1 = [
        "Caros amigos, ",
        "Por outro lado, ",
        "Assim mesmo, ",
        "No entanto, não podemos esquecer que ",
        "Do mesmo modo, ",
        "A prática cotidiana prova que ",
        "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que ",
        "Como Deleuze eloquentemente mostrou, ",
        "Acabei de provar que ",
        "Se estivesse vivo, Foucault diria que ",
        "Pretendo demonstrar que  ",
        "Neste sentido, existem duas tendências que coexistem de modo heterogêneo, revelando ",
        "Segundo Heidegger, ",
        "É lícito um filósofo restringir suas investigações ao mundo fenomênico, mas ",
        "Este pensamento está vinculado à desconstrução da metafísica, pois ",
        "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se ",
        "Pode-se argumentar, como Bachelard fizera, que ",
        "Efetuando uma ruptura com Descartes, ",
        "Sob a perspectiva de Schopenhauer, ",
        "Segundo Nietzsche, ",
        "A situação parece particularmente favorável quando ",
        "Seguindo o fluxo da corrente analítica anglo-saxônica, ",
        "Em um dos seus momentos mais iluminados Heidegger afirmou que ",
        "O movimento inverso da proaíresis, que avança -pro-, como a pro-lépsis, demonstra que ",
        "Acima de tudo, é fundamental ressaltar que ",
        "O incentivo ao avanço tecnológico, assim como ",
        "Não obstante, ",
        "Pensando mais a longo prazo, ",
        "O que temos que ter sempre em mente é que ",
        "Ainda assim, existem dúvidas a respeito de como ",
        "Gostaria de enfatizar que ",
        "Todavia, ",
        "Correlativamente, por meio de suas teoria das pulsões, Freud mostra que ",
        "O empenho em analisar ",
        "Percebemos, cada vez mais, que ",
        "No mundo atual, ",
        "É importante questionar o quanto ",
        "Neste sentido, ",
        "Evidentemente, ",
        "Por conseguinte, ",
        "É claro que ",
        "Podemos já vislumbrar o modo pelo qual ",
        "Desta maneira, ",
        "O cuidado em identificar pontos críticos n",
        "A certificação de metodologias que nos auxiliam a lidar com ",
        "Antes de mais nada, ",
        "Poderia ser sugerido, entretanto, que ",
        "Estas considerações deixam claro que ",
        "Com base nesses argumentos, ",
        "Ora, ",
        "Se, todavia, ",
        "Se uma das premissas é assertórica e a outra, problemática, ",
        "Mas, à primeira vista, quiçá pareça que ",
        "Numa palavra, pois, com efeito, ",
        "Neste momento o leitor deve reconhecer que acabei de demolir as bases da metafísica de Heidegger, pois  ",
        "Uma posição análoga, embora um tanto foucaultiana, defende que ",
        "Segundo a tese da eliminabilidade, ",
        "A proposta de Quine para este impasse se restringe a questionar ",
        "Entretanto, uma reflexão ulterior torna claro que ",
        "Deste modo, acabei de refutar a tese segundo a qual ",
        "Um teórico da redundância negaria que ",
        "Especificamente neste caso, a estratégia de Kant consiste em argumentar que ",
        "Baseando-se  nos ensinamentos de Dewey, ",
        "Inevitavelmente, há muitas questões intrigantes sobre se ",
        "Deve-se produzir um conceito que ",
        "Prospectos designam, de início, ",
        "Se a própria desterritorialização relativa se projeta sobre ",
        "Mesmo o sujeito transcendental nos revela que ",
        "Este é um problema que remete tanto à Epistemologia platônica, quanto à Dialética hegeliana, tendo em vista que ",
        "O dualismo inegável de numerosos pontos evidencia o quanto ",
        "Essa busca de invariantes supõe um pressuposto existencial, assim como ",
        "As experiências acumuladas demonstram que ",
        "Se, para Sócrates, o homem não era mais que sua alma, podemos sustentar que ",
        "Ora, essa teoria é constituída como uma antropologia: ",
        "A instituição política, a rigor, atende a uma segunda função visando ",
        "Por fim, na sequência dessa espécie de introdução, ",
        "Desta maneira, o conflito da psique inconsciente, corrobora ",
        "Tendo em vista a extrema limitação dos meios empregados (como Husserl advertiu), ",
        "É lícito um filósofo restringir suas investigações ao mundo fenomênico, mas ",
        "Em primeiro lugar, ",
        "Levando em consideração as consequências da 'gramaticalidade' chomskyana, ",
        "Acima de tudo, ",
        "Numa série de artigos publicados entre 1843 e 1844, M.Hess sustenta que ",
        "Finalmente, por trás dessa questão do sujeito e da realidade ",
        "Contra esta teoria, que admite a realidade empírica do tempo,  ",
        "Porém, mais do que uma estética, ",
        "Contudo, a crítica contundente de Deleuze/Guatarri - dupla implacável - nos mostra que ",
        "Uma possível abordagem freudiana explicitaria que ",
        "De qualquer maneira, a análise de Foucault é definitiva: ",
        "É por isso que Baudrillard e Deleuze - em sua melhor forma - concordaram que ",
        "O filósofo francês Ricoeur, defende que ",
        "Baseado na tradição aristotélica, ",
        "Como Sartre diria, ",
        "A proposta de Heidegger para solucionar ",
        "O espírito dionisíaco da música e poesia nos ensinou que ",
        "A ruptura definitiva com Kant é consumada quando ",
        "O infinito virtual é possível no mundo, mas ",
        "De maneira sucinta, a interioridade do Ser social, eminentemente enquanto Ser, prova que ",
        "Bergson mostrou que os sistemas mecanicistas, ainda em voga, provocam ",
        "O imperativo da criação, o ímpeto do sistema, que realiza ",
        "Boécio, 'o último romano', nos mostra que ",
        "Wittgenstein - o primeiro - redigiu sua obra seminal se baseando no pressuposto de que ",
        "O primeiro Wittgenstein, ao contrário do segundo Wittgenstein, provou que ",
        "O segundo Wittgenstein (é importante não confundir com o primeiro Wittgenstein) nos mostrou que ",
        "O que caracteriza o relativismo, com efeito, é quando "
    ];

    var f2 = [
        "a infinita diversidade da realidade única ",
        "a complexidade dos estudos efetuados ",
        "a estrutura atual da ideação semântica ",
        "o novo modelo estruturalista aqui preconizado ",
        "a indeterminação contínua de distintas formas de fenômeno ",
        "a consolidação das estruturas psico-lógicas ",
        "o conceito de diáthesis e os princípios fundamentais de rhytmos e arrythmiston ",
        "o início da atividade geral de formação de conceitos ",
        "o desafiador cenário globalizado ",
        "o Übermensch de Nietzsche, ou seja, o Super-Homem, ",
        "a expansão dos mercados mundiais ",
        "a hegemonia do ambiente político ",
        "o fenômeno da Internet ",
        "o aumento do diálogo entre os diferentes setores filosóficos ",
        "a crescente influência da mídia ",
        "a necessidade de renovação conceitual ",
        "o não-ser que não é nada ",
        "o uno-múltiplo, repouso-movimento, finito indeterminado, ",
        "a instauração do modo aporético do Uno ",
        "a canalizaçao do Ser do Ente ",
        "a relevância do indivíduo singular na sociedade conflitante ",
        "o surgimento do comércio virtual ",
        "a revolução dos costumes ",
        "o acompanhamento das preferências de consumo ",
        "o comprometimento entre as ontologias ",
        "a determinação clara de objetivos ",
        "uma adoção de metodologias descentralizadoras ",
        "a valorização de fatores subjetivos ",
        "a percepção das dificuldades ",
        "o entendimento das metas propostas ",
        "o julgamento imparcial das quesões éticas ",
        "a coerência das idéias contratualistas ",
        "a origem de um sistema de coordenadas espaço-temporais singularmente compostas ",
        "a forma de uma transcendência imanente ou primordial",
        "o personagem conceitual imanente ao caos ",
        "o tríptico movimento de pensamento ",
        "o su-jeito de que fala Kant ",
        "a revolução copernicana, entendida como ruptura, ",
        "um juízo reflexionante do sujeito transcendental ",
        "a relevância da terceira antinomia da Antitética da Razão ",
        "o advento do Utilitarismo radical ",
        "a influência de elementos de ordem sociológica ",
        "o aspecto monádico da virtualização da realidade social ",
        "o axioma praedicatum inest subjectu ",
        "a relevância do formalismo lógico das instâncias predicativas ",
        "o monismo confuso característico de algumas vertentes contemporâneas ",
        "a consequência da interpretação substitucional dos quantificadores ",
        "a redutibilidade da aritmética à lógica ",
        "um forte compromisso ontológico com a teoria dos conjuntos ",
        "a teoria de Strawson, no final das contas, ",
        "o cálculo proposicional não-quantificado ",
        "a prossentença composta de invariantes lógicos ",
        "a decisão resoluta (Entscholossenheit) ",
        "o Dasein, tornado manifesto, ",
        "a literalidade do texto, imanente ao autor, ",
        "o comportamento dialético dos processos considerados ",
        "a incompletude necessária de um sistema suficientemente abrangente ",
        "a abordagem de Zeit und Sein ",
        "o eidos platônico e a energeia (ato, utilidade) aristotélica ",
        "a univocidade da substância imanente ",
        "o objeto engendrado a priori ",
        "a elucidação dos pontos relacionais ",
        "a água talesiana reterritorializada ",
        "a bipolaridade do valor proposicional ",
        "a forma geral da proposição significativa ",
        "o mundo supra-celeste como modelo eterno ",
        "a Aporia como obstáculo cognitivo ",
        "a inversão do modelo hybris-nêmesis ",
        "a sustentabilidade do Cogito refutada ",
        "o sentido escatológico do mito de Fedro ",
        "a relevância atual da caverna platônica ",
        "um reaprofundamento das bases estéticas da vida intencional ",
        "a intencionalidade do sujeito volitivo ",
        "as três modalidades canônicas subjetivas ",
        "a enumeração exaustiva dos atos de linguagem não ",
        "o princípio de cooperação de Grice ",
        "o uso metafórico da linguagem, a respeito do significante e significado, ",
        "o silogismo hipotético, sob a perspectiva kantiana dos juízos infinitos, ",
        "a prática do bem-viver ",
        "o Apeiron de Anaximandro como uma infinidade ",
        "o Cosmos submetivo aos poderes do puro-devir ",
        "o domínio lógico destas questões, certamente relevantes, ",
        "o nominalismo enquanto princípio teórico ",
        "a expressão aparentemente plausível a priori ",
        "a hegemonia das categorias aristotélicas, durante todo o período medieval, ",
        "a refutação deste ponto de vista relativista ",
        "a criação de um sistema hilemórfico ",
        "o comprometimento da forma, tanto quanto da matéria, ",
        "a determinação do futuro status quo, a saber, uma condição de submissão ?  estruturas de poder, ",
        "a ética antropomórfica da famigerada escola francesa ",
        "a consolidação das afecções no espírito ",
        "a universalidade eidética do puro-devir ",
        "a Vontade de Potência inerente ao ser humano, como Nietzsche destacou, ",
        "o sofrimento e tédio presentes em toda forma de vida, como Schopenhauer mostrou, ",
        "o Cristianismo entendido como degradação, na perspectiva universal do polêmico anticristo nietzscheano, não ",
        "o juízo analítico e o sintético a priori ",
        "o a priori histórico de uma experiência possível ",
        "a inter-independência da objetivação e subjetivação ",
        "o sujeito constituinte envolvido não ",
        "o ceticismo sistemático ",
        "a hegemonia das estruturas do poder repressivo ",
        "a mistificação e virtualização das massas ",
        "o entendimento dos universais antropológicos ",
        "a disfunção do mecanismo inconsciente ",
        "o desenvolvimento da consciência coletiva virtualizada ",
        "o mundo líquido em que vivemos ",
        "o surgimento de impulsos psicossociais individualizantes ",
        "a teoria das pulsões ",
        "a teoria do utilitarismo ",
        "a teoria da irredutibilidade ",
        "a eventual refutação da teoria quântica não ",
        "o objeto metapsicológico da razão ",
        "o modo de satisfação libidinal ",
        "o modo de satisfação libidinal sucessivo (oral, anal, fálico) ",
        "o acompanhamento do estágio pré-genital ",
        "o constante retorno do recalcado ",
        "a relação do sujeito com o objeto(recalcado) ",
        "a inacessibilidade dos processos mentais inconscientes ",
        "a implausibilidade da tábula rasa ",
        "o fenômeno da compulsão da repetição ",
        "a limitação dos poderes do narcisismo ",
        "uma mutação pós-jungiana ",
        "a escolha do objeto narcísico ",
        "a feminilidade como conceito analítico não ",
        "a pré-história pré-edipiana da menina ",
        "a teoria de Fliess ",
        "o complexo de castração, decorrente do Édipo feminino, ",
        "a constituição ígnea do substrato físico ",
        "a alteridade do rio heraclítico ",
        "o princípio de Heisenberg não ",
        "o princípio da extensionalidade ",
        "o princípio leibnizano da identidade dos indiscerníveis e indiscernibilidade dos idênticos ",
        "a desaceleração no caos ou no limiar de suspensão do infinito ",
        "a geração de sistemas de coordenadas heterogêneas irredutíveis ",
        "a referência capaz de atualizar o virtual ",
        "o véu de Maya, assim como a Vontade de Schopenhauer, ",
        "o plano de imanência pré-filosófico ",
        "o indivíduo em seu estado de natureza ",
        "o homem entendido como animal social ",
        "o conceito platônico de pólis ideal ",
        "a impossibilidade da possessão da verdade última "

    ];

    var f3 = [
        "nos obriga à análise ",
        "cumpre um papel essencial na formulação ",
        "exige a precisão e a definição ",
        "auxilia a preparação e a composição ",
        "garante a contribuição de um grupo importante na determinação ",
        "assume importantes posições no estabelecimento ",
        "facilita a criação ",
        "obstaculiza a apreciação da importância ",
        "não oferece uma interessante oportunidade para verificação ",
        "acarreta um processo de reformulação e modernização ",
        "pode nos levar a considerar a reestruturação ",
        "representa uma abertura para a melhoria ",
        "ainda não demonstrou convincentemente como vai participar na mudança ",
        "talvez venha a ressaltar a relatividade ",
        "prepara-nos para enfrentar situações atípicas decorrentes ",
        "maximiza as possibilidades por conta ",
        "desafia a capacidade de equalização ",
        "agrega valor ao estabelecimento ",
        "é uma das consequências ",
        "promove a alavancagem ",
        "não pode mais se dissociar ",
        "possibilita uma melhor visão global ",
        "estimula a padronização ",
        "aponta para a melhoria ",
        "faz parte de um processo de agenciamento ",
        "não causa impacto indireto na reavaliação ",
        "apresenta tendências no sentido de aprovar a manutenção ",
        "estende o alcance e a importância ",
        "deve passar por modificações independentemente ",
        "afeta positivamente a correta previsão ",
        "nos obriga a inferir a invalidez ",
        "não parece corresponder a uma análise distributiva ",
        "define já o plano do espaço lógico ",
        "efetua a conexão habitual ",
        "parece compendiar nossas conclusões experimentais a respeito ",
        "implica que a condição necessária e suficiente ",
        "nos arrasta ao labirinto de sofismas obscuros ",
        "nos leva ao caminho impenetrável ",
        "obstaculiza a admissão de uma ontologia ",
        "demonstra a irrefutabilidade das vantagens ",
        "emprega uma noção de pressuposição ",
        "limita as atividades ",
        "vem corroborar as expectativas ",
        "tem que apresentar uma homogenidade em relação aos extremos ",
        "é condição necessária ",
        "é condição suficiente ",
        "é condição necessária e suficiente ",
        "constitui uma propriedade inalienável ",
        "impossibilita a adoção de medidas reabilitadoras ",
        "possibilita uma interpretação objetiva ",
        "não resulta em uma interiorização imanente ",
        "implica em uma interpretação subjetivista ",
        "é consequência de uma abordagem dogmática a respeito ",
        "é um subconjunto ",
        "verifica a validade ",
        "tem como componentes elementos indiscerníveis ",
        "reabilita a condição inicial ",
        "faz retroceder aos princípios ",
        "representa a expressão imediata ",
        "representa a essência ",
        "deve mostrar que é possível efetuar a intersubjetivação ",
        "permite um conhecimento geral de todo ser, sensível ou não sensível, ",
        "possibilita o ato de intenção consciente ",
        "corresponde à intuição das essências fenomenológicas ",
        "permite conceber uma ciência ",
        "não depreende-se de uma lógica do juízo, mas ",
        "se apresenta como experiência metapsicológica, devido à impermeabilização ",
        "designa o impulso psíquico cuja fonte está no corpo e cujo objetivo é a satisfação ",
        "não sistematiza essa relação, de tal modo que a pulsão funciona funciona como significado ",
        "não sistematiza a estrutura ",
        "institui o Complexo de Édipo, ordenando o sujeito com seu desejo e o interdito, em função ",
        "é insuficiente para determinar as implicações ",
        "deve tratar sistematicamente ",
        "apreende a globalidade ",
        "reduz a importância ",
        "deverá confirmar as consequências decorrentes ",
        "resultou no abandono ",
        "pressupõe a admissão da existência a priori ",
        "compromete ontologicamente a teoria à existência ",
        "unificou os a priori sensíveis e intelectuais numa determinação recíproca ",
        "marca a autonomia do pensamento em relação ao fluxo ",
        "traz à tona uma construção transcendentalmente possível ",
        "recorre à experiência efetiva ",
        "estabelece o chamado princípio da subsidência em que demonstra o abaixamento gradual do fundo paralelamente à sedimentação ",
        "consistiria primeiramente em não pôr o acontecimento sob a autoridade de uma nova origem pura ",
        "consistiria primeiramente na autoridade ",
        "consistiria na origem epistemológica ",
        "permitiria a desconstrução ",
        "reduziria a importância ",
        "demonstraria a incompletude ",
        "justificaria a existência ",
        "justificaria a adoção ",
        "criaria um conflito no interior ",
        "potencializa a influência "

    ];

    var f4 = [
        "das condições epistemológicas e cognitivas exigidas.",
        "da fundamentação metafísica das representações.",
        "do sistema de conhecimento geral.",
        "das posturas dos filósofos divergentes com relação às atribuições conceituais.",
        "das novas teorias propostas.",
        "das direções preferenciais no sentido do progresso filosófico.",
        "do sistema de formação de quadros que corresponde às necessidades lógico-estruturais.",
        "dos paradigmas filosóficos.",
        "dos relacionamentos verticais entre as hierarquias conceituais.",
        "do processo de comunicação como um todo.",
        "das ciências discursivas.",
        "das relações entre o conteúdo proposicional e o figurado.",
        "das múltiplas direções do ponto de transcendência do sentido enunciativo.",
        "de universos de Contemplação, espelhados na arte minimalista e no expressionismo abstrato, absconditum.",
        "de todos os recursos funcionais envolvidos.",
        "da corrente inovadora da qual fazemos parte.",
        "das considerações acima? Nada se pode dizer, pois sobre o que não se pode falar, deve-se calar.",
        "do fluxo de informações.",
        "dos elementos envolvidos de maneira conclusiva? Nada se pode dizer a respeito.",
        "das diversas correntes de pensamento.",
        "das regras de conduta normativas.",
        "da conjuntura histórico-social.",
        "do retorno esperado a longo prazo.",
        "do investimento em reciclagem ideológica.",
        "de um remanejamento dos quadros conceituais.",
        "da coisa-em-si, entendida como substância retrocedente.",
        "das coisas e o melhor dos mundos possíveis.",
        "da sensibilia dos não-sentidos.",
        "dos sinais peirceanos percebidos pelo sujeito imerso nos fenômenos sociais.",
        "da doxa, da opinião e da razão pura do espírito transcendente.",
        "do homem verdadeiramente virtuoso.",
        "de conhecimentos empíricos provindos das afecções.",
        "dos prospectos condicionalizantes e necessários a todo juízo empírico.",
        "das três instâncias de oposição centrais.",
        "da determinação do Ser enquanto Ser.",
        "da afirmação que o Ser é e o Não ser não é.",
        "da esfera do virtual, a saber, do pensamento em potência.",
        "de um mundo povoado por objetos intencionais e transcendentes, interiores ao imanente infinito.",
        "das retroações, proliferações, conexões e fractalizações do território desterritorializado.",
        "dos modos de análise convencionais.",
        "de alternativas às soluções ortodoxas.",
        "do gênio grego fundado na poesia homérica.",
        "da turbulência do acaso-caos lançado sobre o universo infinito que envolve o mundo extra-mental.",
        "das convicções empiristas. ",
        "de uma metafísica da presença? Cabe ao leitor julgar.",
        "do movimento in loco da desterritorialização indiscernível.",
        "do Deus transcendente a toda sensação e intuição cognitiva.",
        "dos conceitos de propriedade e cidadania.",
        "dos princípios da ética normativa deontológica.",
        "dos argumentos pró-dêiticos de uma visão subjetivista da ética teleológica.",
        "do antiplatonismo fichteano resultante dos movimentos revolucionários de então.",
        "da humanização do sujeito e da animalização do homem.",
        "das ilusões transcendentais presentes na obra de Condillac.",
        "da substância aristotélica fundida com o solipsismo cartesiano em função de uma perspectiva dialético-social.",
        "do fundo comum da humanidade.",
        "do conjunto de todos os conjuntos que não se contêm a si próprios como membro.",
        "do ponto de vista da história da filosofia continental.",
        "da dissimetria dos dois tipos de polissemia epistêmica.",
        "da cartografia dessa rede urbana de ligações subterrâneas.",
        "do exercício do poder opressor sobre a parcela defasada do proletariado.",
        "das vivências da subjetividade vertical e defasada pós-moderna.",
        "da incompatibilidade do próprio pensamento de Hegel e Foucault.",
        "do realismo ingênuo, isto é, da crença equivocada na confiabilidade dos dados sensoriais transmitidos pela realidade fenomenal.",
        "da transposição do Outro em detrimento de uma unidade social revolucionária.",
        "do tempo e do espaço entendido como a priori sintético.",
        "do dualismo ontológico das filosofias pré-hegelianas? Deixemos a questão em aberto.",
        "do levantamento das variáveis envolvidas.",
        "da substancialidade e causalidade entendidos como certezas fundamentais.",
        "da lógica da aparência, psicologia racional, cosmologia racional e, por fim, da teologia racional.",
        "da lógica polivalente aplicada às pesquisas, em particular, a Fuzzy Logic.",
        "da doutrina do esquematismo trancendental aplicada aos dias atuais.",
        "da dissociação entre o político e o religioso.",
        "dos meios de comunicação, The Media, o fator condicionante da interdependência virtual.",
        "da experimentação sem experimentação real, preconizada na pós-modernidade.",
        "da pintura monocromática do pintor pós-moderno.",
        "dos conhecimentos a priori.",
        "da linguagem privada. ",
        "da hipótese de que existem infinitos objetos.",
        "dos paradoxos de Zenão, amparados em uma proposta logicista.",
        "das figuras sociais quanto sujeitos submetidos às estruturas de poder.",
        "dos valores morais decorrentes de uma tradição normativa.",
        "do liberalismo extremo, vulgo neoliberalismo avançado, imanente nos procedimentos atuais.",
        "da velocidade infinita do spin das partículas.",
        "da materialização do ser, em objetos visíveis, e da imaterialização do Não-ser, em não-objetos.",
        "do observador de Einstein ou de Heinsenberg.",
        "do demônio de Laplace.",
        "da aparição não-cromática do som em um continuum infinito.",
        "das condições de suas incógnitas.",
        "das definições conceituais da matéria.",
        "dos conceitos nominalistas.",
        "da definição espinosista de substância.",
        "do aparelho repressivo, coercitivo, do sistema.",
        "dos métodos utilizados na busca da verdade.",
        "da velha terra grega fraturada.",
        "do paradoxo endo-referencial, apontado por Russel, na teoria dos conjuntos de Cantor.",
        "do direito romano.",
        "da condição de verdade de proposições elementares.",
        "dos limites da ação do Estado.",
        "da interpretação de fatos socio-linguisticos.",
        "da teologia positiva empregada em movimentos negativos.",
        "das alternâncias entre pensamentos sábios e não-sábios.",
        "da natureza não-filosófica dos conceitos.",
        "da fórmula da ressonância racionalista.",
        "dos testes de falseabilidade das teorias científicas.",
        "do prazer e da dor."

    ];

    var final = '';
    for (var i = 0; i <= numf; i++) {
        final = final + f1[aleatorio(f1)] + f2[aleatorio(f2)] + f3[aleatorio(f3)] + f4[aleatorio(f4)];
    }
    return final;
}

function aleatorio(array) {
    return Math.floor(Math.random() * array.length);
}

function escolheAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

function geraMensagemGratidao() {
    const expressoesGratidao = [
        "Gratidão transforma o que temos em suficiente.",
        "Agradeço pelas pequenas alegrias que tornam a vida especial.",
        "A gratidão é a memória do coração.",
        "Cultive um coração grato, e a felicidade florescerá.",
        "Agradeço pelos momentos simples que fazem toda diferença.",
        "A gratidão é a chave que abre as portas da abundância.",
        "A cada respiração, agradeço pela dádiva da vida.",
        "A gratidão é a luz que ilumina os dias mais escuros.",
        "Agradeço pelos obstáculos, pois me tornaram mais forte.",
        "A gratidão multiplica alegrias e diminui preocupações."
    ];

    const motivosGratidao = [
        "pelas pessoas incríveis que fazem parte da minha vida.",
        "pela oportunidade de aprender e crescer a cada dia.",
        "pelas experiências que moldam minha jornada.",
        "pela saúde que me permite viver plenamente.",
        "pelas amizades que são verdadeiros presentes.",
        "pelos desafios que me tornam mais resiliente.",
        "pela beleza encontrada nos momentos simples.",
        "pelos sorrisos que iluminam meu caminho.",
        "pela generosidade que encontro ao meu redor.",
        "pelas lições aprendidas nas adversidades."
    ];

    return `${escolheAleatorio(expressoesGratidao)} Agradeço ${escolheAleatorio(motivosGratidao)}.`;
}

function geraMensagemAniversario() {
    const desejosAniversario = [
        "Feliz aniversário! Que este seja o melhor ano da sua vida!",
        "Parabéns pelo seu dia! Que seja repleto de alegrias e realizações.",
        "Que cada momento deste dia especial seja cheio de felicidade.",
        "Feliz aniversário! Que a jornada que se inicia seja incrível e cheia de conquistas.",
        "Hoje celebramos você! Que este ano traga sucesso, saúde e amor.",
        "Feliz aniversário! Que cada vela no seu bolo represente um desejo realizado.",
        "Parabéns! Que o novo ano de vida seja repleto de sorrisos e momentos inesquecíveis.",
        "Hoje é o seu dia! Que seja uma jornada cheia de surpresas boas e alegrias.",
        "Feliz aniversário! Que as bênçãos se multipliquem e os sonhos se realizem.",
        "Parabéns pelo seu dia! Que cada novo amanhecer traga motivos para sorrir.",
    ];

    const sentimentosAniversario = [
        "Que a felicidade te acompanhe hoje e sempre.",
        "Neste dia especial, desejo amor, paz e realizações.",
        "Que cada instante seja marcado por gratidão e alegria.",
        "Que os próximos capítulos da sua vida sejam os melhores.",
        "Feliz aniversário! Que a jornada seja tão incrível quanto você.",
        "Que este novo ano de vida seja uma história de sucesso e crescimento.",
        "Desejo saúde, prosperidade e muitas conquistas no seu caminho.",
        "Parabéns! Que o universo conspire a seu favor nesta nova fase.",
        "Que a luz do seu sorriso ilumine cada dia que se inicia.",
        "Feliz aniversário! Que o amor esteja presente em cada abraço recebido.",
    ];

    return `${escolheAleatorio(desejosAniversario)} ${escolheAleatorio(sentimentosAniversario)}`;
}

function geraMensagemPascoa() {
    const desejosPascoa = [
        "Feliz Páscoa! Que este seja um momento de renovação e esperança.",
        "Nesta Páscoa, que a alegria da ressurreição se faça presente em sua vida.",
        "Que a luz da Páscoa ilumine seus dias com amor e paz.",
        "Desejo a você e sua família uma Páscoa repleta de bênçãos e alegrias.",
        "Feliz Páscoa! Que cada momento seja marcado por generosidade e compaixão.",
        "Que a Páscoa traga consigo novas oportunidades e realizações.",
        "Neste tempo de renascimento, que sua fé seja fortalecida e seu coração transbordante de gratidão.",
        "Desejo que a Páscoa seja um símbolo de esperança e amor em sua vida.",
        "Feliz Páscoa! Que os dias vindouros sejam cheios de harmonia e serenidade.",
        "Que a ressurreição de Cristo inspire um recomeço de paz e fraternidade em seu coração.",
    ];

    const sentimentosPascoa = [
        "Que a união familiar seja a essência desta Páscoa.",
        "Nesta data especial, celebre a vida e compartilhe amor.",
        "Desejo que a alegria da Páscoa se multiplique em gestos de solidariedade.",
        "Que o coelhinho da Páscoa traga consigo muitas surpresas e felicidade.",
        "Que o espírito de renovação se manifeste em cada detalhe.",
        "Que a Páscoa seja um tempo de reflexão e renascimento interior.",
        "Neste período de celebração, cultive o perdão e a compaixão.",
        "Desejo que a Páscoa seja um momento de partilha e alegria contagiante.",
        "Que a paz e o amor prevaleçam em todos os corações.",
        "Que a esperança renovada nesta Páscoa se estenda por todo o ano.",
    ];

    return `${escolheAleatorio(desejosPascoa)} ${escolheAleatorio(sentimentosPascoa)}. Feliz Páscoa!`;
}

function geraMensagemAnoNovo() {
    const desejosAnoNovo = [
        "Feliz Ano Novo! Que este seja um ano de prosperidade e alegrias sem fim.",
        "Que o ano que se inicia traga consigo novas oportunidades e realizações.",
        "Desejo que cada dia deste novo ano seja repleto de conquistas e felicidade.",
        "Que o Ano Novo traga consigo paz, saúde, amor e muitas bênçãos.",
        "Feliz Ano Novo! Que os sonhos se tornem realidade e os desafios se transformem em aprendizado.",
        "Que o próximo ano seja uma página em branco pronta para ser preenchida com momentos memoráveis.",
        "Que a chegada do novo ano renove as esperanças e traga consigo muitas realizações.",
        "Desejo um ano novo cheio de paz, amor, saúde e sucesso para você e seus entes queridos.",
        "Que cada dia do próximo ano seja uma oportunidade para fazer valer a pena.",
        "Feliz Ano Novo! Que a felicidade seja constante e os sorrisos se multipliquem.",
    ];

    const sentimentosAnoNovo = [
        "Que a alegria seja sua companheira constante ao longo dos meses.",
        "Neste Ano Novo, que a positividade guie cada passo da sua jornada.",
        "Desejo que a luz do novo ano ilumine os caminhos da sua vida.",
        "Que as realizações superem as expectativas e os momentos felizes sejam incontáveis.",
        "Que a esperança seja a força que impulsiona seus sonhos para o futuro.",
        "Feliz Ano Novo! Que cada dia seja uma dádiva e cada desafio uma oportunidade de crescimento.",
        "Que a fé guie seus passos e o amor seja a essência de cada momento.",
        "Desejo que o Ano Novo traga consigo sorrisos sinceros e abraços calorosos.",
        "Que a serenidade envolva seus dias e a gratidão preencha seu coração.",
        "Que o novo ano seja um capítulo emocionante na história da sua vida.",
    ];

    return `${escolheAleatorio(desejosAnoNovo)} ${escolheAleatorio(sentimentosAnoNovo)}`;
}

function geraMensagemNatal() {
    const desejosNatal = [
        "Que a magia desta época encha seu coração de alegria.",
        "Neste Natal, que a paz e o amor estejam presentes em todos os lares.",
        "Que a luz do Natal ilumine seu caminho e traga felicidade sem medida.",
        "Desejo a você e sua família um Natal repleto de harmonia e união.",
        "Que cada momento seja marcado por sorrisos e gratidão.",
        "Neste Natal, que a esperança seja a estrela que guia seus sonhos.",
        "Que a magia natalina renove as energias e traga boas vibrações.",
        "Desejo que seu Natal seja tão especial quanto as pessoas que você ama.",
        "Que o espírito natalino aqueça seus dias com amor e generosidade.",
        "Que a fé e a esperança se fortaleçam neste Natal e ao longo do novo ano.",
    ];

    const sentimentosNatal = [
        "Que a troca de presentes seja apenas uma expressão de carinho mútuo.",
        "Neste Natal, valorize cada momento ao lado daqueles que ama.",
        "Desejo que o Natal traga consigo lembranças inesquecíveis e momentos felizes.",
        "Que a magia desta data especial se estenda por todos os dias do próximo ano.",
        "Feliz Natal! Que o espírito de solidariedade esteja presente em cada gesto.",
        "Natal é tempo de reflexão e gratidão pelos presentes da vida.",
        "Que a ceia de Natal seja farta e o coração transbordante de alegria.",
        "Neste Natal, celebre o amor e cultive a paz em seu coração.",
        "Desejo que a magia do Natal contagie a todos com esperança e amor.",
        "Feliz Natal! Que a felicidade se multiplique entre amigos e familiares.",
    ];

    return `${escolheAleatorio(desejosNatal)} ${escolheAleatorio(sentimentosNatal)}. Feliz Natal!`;
}

function geraFraseMotivacional() {
    const introducoes = [
        "Com determinação e perseverança,",
        "Em cada novo amanhecer,",
        "Diante dos desafios,",
        "Ao enfrentar as adversidades,",
        "Com coragem e fé,",
        "No caminho para o sucesso,",
        "Em meio às dificuldades,",
        "Com otimismo e positividade,",
        "Ao buscar seus sonhos,",
        "Diariamente, ao acordar,",
        "Em cada passo dado,",
        "No silêncio da autodisciplina,",
        "Na busca incessante pela excelência,",
        "Nos momentos de reflexão,",
        "Ao contemplar o horizonte,",
        "Na construção do seu legado,",
        "No pulsar do seu coração,",
        "Ao enfrentar o desconhecido,",
        "Na sincronia do tempo e esforço,",
        "Ao celebrar pequenas vitórias,"
        // Adicione mais frases conforme necessário
    ];

    const mensagens = [
        "você é capaz de conquistar o impossível.",
        "o potencial para o sucesso é ilimitado.",
        "cada obstáculo é uma oportunidade de crescimento.",
        "a força interior se torna a chave da superação.",
        "a jornada se torna uma oportunidade de aprendizado.",
        "cada passo é uma vitória em direção aos seus objetivos.",
        "a resiliência se transforma em sua maior aliada.",
        "o poder da mente é a ferramenta para transformar realidades.",
        "a jornada se torna tão valiosa quanto a conquista final.",
        "você escreve um novo capítulo de sua história.",
        "a determinação é a ponte entre metas e realizações.",
        "o foco no presente é a chave para o futuro desejado.",
        "a autenticidade é a força que impulsiona o sucesso duradouro.",
        "a persistência cria a consistência necessária para a vitória.",
        "o otimismo é a luz que ilumina o caminho em meio à escuridão.",
        "a gratidão transforma desafios em oportunidades de crescimento.",
        "o autoconhecimento é o alicerce para uma vida plena.",
        "a humildade é a virtude que permite a evolução contínua.",
        "a paixão é a chama que queima incansavelmente pelo propósito.",
        "a paciência é a aliada que suaviza as curvas do caminho.",
        // Adicione mais frases conforme necessário
    ];

    const conclusoes = [
        "Acredite em si mesmo e siga em frente!",
        "Você é mais forte do que imagina. Continue!",
        "Nunca subestime a força que há dentro de você.",
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "Cada dia é uma nova oportunidade para ser melhor.",
        "Seja a inspiração que você procura nos outros.",
        "Seja grato pelo que tem e mantenha-se positivo.",
        "A persistência é o caminho do êxito.",
        "Lembre-se: seu potencial é infinito.",
        "Você está mais perto do que imagina. Continue avançando.",
        "A vitória pertence ao mais perseverante.",
        "O seu único limite é você mesmo.",
        "Acredite na sua capacidade de transformar sonhos em realidade.",
        "A jornada é tão importante quanto o destino final.",
        "Cada desafio é uma oportunidade disfarçada.",
        "O sucesso é a realização constante do seu potencial.",
        "A verdadeira força está na resiliência do espírito.",
        "A felicidade está na jornada, não no destino.",
        "Cada escolha que você faz molda o seu futuro.",
        "O poder está na ação. Continue avançando."
        // Adicione mais frases conforme necessário
    ];

    return `${escolheAleatorio(introducoes)} ${escolheAleatorio(mensagens)} ${escolheAleatorio(conclusoes)}`;
}

function geraMensagemAmor() {
    const declaracoesAmor = [
        "Meu amor por você é eterno,",
        "Você é a razão do meu sorriso,",
        "Cada dia ao seu lado é um presente,",
        "Nosso amor é a fonte da minha felicidade,",
        "Você é a minha pessoa favorita,",
        "Meu coração é seu, para sempre,",
        "Com você, cada momento é mágico,",
        "Seu amor ilumina todos os meus dias,",
        "Juntos, construímos uma história incrível,",
        "Você é a parte mais importante da minha vida,"
    ];

    const promessasAmor = [
        "e prometo te amar incondicionalmente.",
        "e prometo estar ao seu lado em todas as situações.",
        "e prometo fazer você sorrir todos os dias.",
        "e prometo cuidar do seu coração com carinho.",
        "e prometo ser seu porto seguro.",
        "e prometo construir um futuro maravilhoso juntos.",
        "e prometo respeitar e valorizar nosso amor.",
        "e prometo ser o seu maior apoiador.",
        "e prometo surpreender você sempre que possível.",
        "e prometo ser fiel ao nosso amor."
    ];

    const elogiosAmor = [
        "Seu sorriso ilumina minha vida,",
        "Seus olhos são a coisa mais linda que já vi,",
        "Sua presença faz meu coração bater mais forte,",
        "Você é a inspiração dos meus melhores sonhos,",
        "A maneira como você me entende é única,",
        "Cada detalhe em você é perfeito aos meus olhos,",
        "Você é a razão pela qual a vida é tão bonita,",
        "Seu abraço é o meu lugar favorito,",
        "Amo cada imperfeição que torna você especial,",
        "Com você, cada dia é uma aventura incrível,"
    ];

    const complementosAmor = [
        "e meu amor por você é como",
        "e nossa história de amor é como",
        "e com você, sinto que posso",
        "e em nosso mundo de amor, somos como",
        "e sinto uma conexão profunda, como",
        "e você e eu, juntos, somos como",
        "e em nosso amor, encontramos",
        "e nossa paixão é como",
        "e nosso relacionamento é como",
        "e com você, o amor é como"
    ];

    const analogiasAmor = [
        "um poema cheio de emoção.",
        "uma dança suave e encantadora.",
        "um livro com páginas inesquecíveis.",
        "um jardim florido em constante crescimento.",
        "uma melodia harmoniosa e envolvente.",
        "um quadro que conta uma história única.",
        "um filme romântico cheio de momentos especiais.",
        "um farol que guia meu coração.",
        "um destino incrível que encontramos juntos.",
        "um tesouro que descobrimos um no outro."
    ];

    return `${escolheAleatorio(declaracoesAmor)} ${escolheAleatorio(promessasAmor)} ${escolheAleatorio(elogiosAmor)} ${escolheAleatorio(complementosAmor)} ${escolheAleatorio(analogiasAmor)}. Te amo!`;
}

function geraMensagemAmizade() {
    const expressoesAmizade = [
        "A verdadeira amizade é um tesouro, e",
        "Amigos são como estrelas que iluminam nossa vida, e",
        "Agradeço por ter um amigo como você, e",
        "Amizade é a chave para a felicidade, e",
        "Com um amigo ao lado, qualquer jornada se torna especial, e",
        "A amizade é a essência da vida, e",
        "Amigos verdadeiros são como diamantes preciosos, e",
        "A alegria compartilhada é uma alegria duplicada, e",
        "Amizade é o vínculo que une corações distantes, e",
        "Amigos são como anjos que nos guiam na jornada da vida, e"
    ];

    const sentimentosAmizade = [
        "a amizade torna os dias mais brilhantes.",
        "com um amigo ao lado, não há desafio impossível.",
        "a cumplicidade dos amigos é um presente valioso.",
        "amigos são a família que escolhemos.",
        "a amizade é a base de todas as boas relações.",
        "amigos são como pilares que sustentam nossa vida.",
        "a verdadeira amizade supera qualquer distância.",
        "a amizade é um laço que o tempo não desfaz.",
        "com amigos, cada momento se torna memorável."
    ];

    const conselhosAmizade = [
        "Valorize seus amigos como tesouros preciosos, e",
        "A sinceridade é a base de uma amizade verdadeira, e",
        "Em tempos difíceis, os amigos são luz no caminho, e",
        "A amizade é construída com pequenos gestos de cuidado, e",
        "Seja o amigo que você gostaria de ter ao seu lado, e",
        "Celebre as diferenças, elas enriquecem a amizade, e",
        "A confiança é a cola que mantém a amizade unida, e",
        "Ouvir é um dos maiores presentes que podemos oferecer aos amigos, e",
        "Compartilhe risadas, são o melhor remédio para a alma, e",
        "Na jornada da amizade, a compreensão é o guia, e"
    ];

    const momentosAmizade = [
        "cada risada compartilhada é um capítulo da nossa história.",
        "os melhores momentos são aqueles vividos com amigos.",
        "a amizade transforma momentos simples em lembranças eternas.",
        "juntos, criamos histórias que serão contadas para sempre.",
        "agradeço por cada aventura que vivemos juntos.",
        "amigos são testemunhas dos nossos sucessos e apoio nos fracassos.",
        "cada encontro é uma celebração da nossa amizade.",
        "na jornada da vida, os amigos são as melhores companhias.",
        "a amizade é o tempero que torna a vida mais saborosa."
    ];

    return `${escolheAleatorio(expressoesAmizade)} ${escolheAleatorio(sentimentosAmizade)} ${escolheAleatorio(conselhosAmizade)} ${escolheAleatorio(momentosAmizade)}`;
}

function geraMensagemBoaTarde() {
    const saudacoes = [
        "Boa tarde!",
        "Desejo uma tarde maravilhosa!",
        "Que sua tarde seja repleta de boas energias!",
        "Tenha uma tarde incrível!",
        "Boa tarde, com muita positividade!",
        "Que esta tarde seja abençoada!",
        "Desfrute de uma tarde leve e tranquila!",
        "Desejo uma tarde cheia de realizações!",
        "Que a paz esteja presente em cada momento desta tarde!",
        "Que sua tarde seja tão especial quanto você!"
    ];

    const desejos = [
        "e que cada momento seja aproveitado ao máximo.",
        "e que a alegria contagie todos ao seu redor.",
        "e que a produtividade guie suas atividades.",
        "e que a criatividade floresça nesta tarde.",
        "e que os desafios se transformem em oportunidades.",
        "e que a serenidade acompanhe cada decisão.",
        "e que a harmonia esteja presente em cada tarefa.",
        "e que a determinação conduza seus projetos.",
        "e que a gratidão preencha seu coração.",
        "e que o sucesso seja a marca desta tarde!"
    ];

    const complementos1 = [
        "Tenha uma tarde repleta de",
        "Desfrute de",
        "Receba",
        "Explore",
        "Abrace",
        "Sinta",
        "Desfrute",
        "Aproveite",
        "Viva",
        "Contemple",
        "Envolva-se com"
    ];

    const complementos2 = [
        "momentos especiais",
        "boas conversas",
        "o melhor que a tarde oferece",
        "o extraordinário",
        "a beleza ao seu redor",
        "cada instante",
        "a jornada que se desenha à sua frente",
        "o presente que é o hoje",
        "a magia dos pequenos detalhes",
        "cada oportunidade que surgir",
        "o esplendor desta tarde"
    ];

    return `${escolheAleatorio(saudacoes)} ${escolheAleatorio(desejos)} ${escolheAleatorio(complementos1)} ${escolheAleatorio(complementos2)}.`;
}

function geraMensagemBoaNoite() {
    const saudacoes = [
        "Boa noite!",
        "Desejo uma excelente noite!",
        "Que sua noite seja tranquila e revigorante!",
        "Aproveite o descanso merecido!",
        "Boa noite, com muita serenidade!",
        "Que os sonhos sejam doces!",
        "Tenha uma noite repleta de paz!",
        "Desejo um descanso reparador!",
        "Que a calma guie suas horas de sono!",
        "Durma bem e recarregue as energias!"
    ];

    const desejos = [
        "Que cada momento de descanso seja revigorante.",
        "Que os pensamentos positivos embalem seus sonhos.",
        "Que a tranquilidade esteja presente em cada respiração.",
        "Que a serenidade afaste qualquer inquietude.",
        "Que a paz interior seja seu refúgio nesta noite.",
        "Que a beleza da lua inspire tranquilidade e serenidade.",
        "Que os anjos cuidem do seu sono e protejam seus sonhos.",
        "Que a escuridão da noite seja preenchida por pensamentos leves.",
        "Que a gratidão pelo dia vivido se transforme em bem-estar noturno.",
        "Que o silêncio da noite traga calma ao seu coração."
    ];

    const complementos1 = [
        "Tenha uma noite repleta de",
        "Desfrute de",
        "Receba",
        "Explore",
        "Abrace",
        "Sinta",
        "Desfrute",
        "Aproveite",
        "Viva",
        "Contemple",
        "Despeça-se com"
    ];

    const complementos2 = [
        "sonhos realizadores",
        "tranquilidade e serenidade",
        "momentos de relaxamento",
        "pensamentos positivos",
        "descanso reparador",
        "paz interior",
        "beleza da noite",
        "boas energias",
        "conforto e aconchego",
        "gratidão pelo dia",
        "felicidade noturna"
    ];

    return `${escolheAleatorio(saudacoes)} ${escolheAleatorio(desejos)} ${escolheAleatorio(complementos1)} ${escolheAleatorio(complementos2)}.`;
}

function geraMensagemBomDia() {
    const saudacoes = [
        "Bom dia!",
        "Desejo um excelente dia!",
        "Que seu dia seja maravilhoso!",
        "Comece o dia com energia positiva!",
        "Bom dia, com muita alegria!",
        "Que a luz do dia ilumine seu caminho!",
        "Aproveite cada momento deste novo dia!",
        "Desejo um amanhecer cheio de paz!",
        "Que as boas vibrações acompanhem seu dia!",
        "Tenha um dia repleto de realizações!",
        "Que a felicidade esteja presente desde o nascer do sol!",
        "Bom dia! Que a jornada de hoje seja incrível!",
        "Que cada raio de sol traga consigo boas energias!",
        "Comece o dia com gratidão no coração!",
        "Desejo que a luz do amanhecer ilumine seus pensamentos positivos.",
        "Bom dia! Que cada desafio seja uma oportunidade de crescimento!",
        "Que o dia de hoje seja melhor do que todos os anteriores!",
        "Que o sorriso esteja presente em cada momento do seu dia!",
        "Bom dia! Que as bênçãos se multipliquem!",
        "Que a alegria do amanhecer contagie todo o seu ser!",
        "Desejo que o dia seja cheio de surpresas agradáveis!",
        "Que a paz interior guie seus passos hoje e sempre!",
        "Bom dia! Que o otimismo seja sua maior força!",
        "Que cada novo amanhecer traga consigo novas oportunidades!",
        "Que a beleza da manhã inspire seus melhores sentimentos!",
        "Desejo que cada raio de sol transmita boas energias!",
        "Bom dia! Que o sucesso seja a marca registrada do seu dia!"
    ];

    const desejos = [
        "e que cada instante seja especial.",
        "e que as dificuldades se transformem em aprendizado.",
        "e que a positividade esteja presente em todas as situações.",
        "e que a jornada seja leve e cheia de conquistas.",
        "e que a felicidade seja sua companheira constante.",
        "e que as bênçãos do dia se multipliquem.",
        "e que o sucesso esteja presente em cada passo.",
        "e que o amor guie seus pensamentos e ações.",
        "e que a gratidão preencha seu coração.",
        "e que a esperança renove suas energias.",
        "e que cada desafio seja uma oportunidade de crescimento pessoal.",
        "e que a determinação seja a chave para superar qualquer obstáculo.",
        "e que o amor próprio seja a base para um dia incrível.",
        "e que a paz interior seja sua maior fortaleza.",
        "e que a harmonia esteja presente em todas as áreas da sua vida.",
        "e que a alegria de viver seja a força motriz do seu dia.",
        "e que a sabedoria guie suas escolhas e decisões.",
        "e que o sorriso seja seu cartão de visitas hoje.",
        "e que a generosidade seja uma constante em seu caminho.",
        "e que a prosperidade faça morada em sua jornada.",
        "e que a serenidade permita enfrentar os desafios com calma e equilíbrio.",
        "e que a fé seja a luz que ilumina seu caminho.",
        "e que a gratidão transforme cada momento em uma dádiva.",
        "e que a compaixão esteja presente em todas as suas interações.",
        "e que a confiança em si mesmo seja a base do seu sucesso.",
        "e que a bondade seja um traço marcante do seu dia.",
        "e que a alegria contagie todos ao seu redor.",
        "e que a abundância se manifeste em todas as áreas da sua vida."
    ];

    const complementos1 = [
        "Tenha um dia cheio de",
        "Desfrute de",
        "Receba",
        "Explore",
        "Abrace",
        "Sinta",
        "Desfrute",
        "Aproveite",
        "Viva",
        "Contemple",
        "Desperte para"
    ];

    const complementos2 = [
        "momentos incríveis",
        "o melhor que a vida oferece",
        "o poder do seu potencial",
        "o extraordinário",
        "a beleza ao seu redor",
        "cada instante",
        "a jornada que se desenha à sua frente",
        "o presente que é o hoje",
        "a magia dos pequenos detalhes",
        "cada oportunidade que surgir",
        "o esplendor do novo dia"
    ];

    return `${escolheAleatorio(saudacoes)} ${escolheAleatorio(desejos)} ${escolheAleatorio(complementos1)} ${escolheAleatorio(complementos2)}!`;
}


function DarkFont(a) {
    for (var i = 0; i < 100; i++) {
        a = a.replace("á", "a");
        a = a.replace("ã", "a");
        a = a.replace("à", "a");
        a = a.replace("Á", "A");
        a = a.replace("Ã", "A");
        a = a.replace("À", "A");
        a = a.replace("ç", "c");
        a = a.replace("Ç", "C");
        a = a.replace("é", "e");
        a = a.replace("è", "e");
        a = a.replace("ë", "e");
        a = a.replace("É", "E");
        a = a.replace("È", "E");
        a = a.replace("Ë", "E");
        a = a.replace("Í", "I");
        a = a.replace("Ì", "I");
        a = a.replace("Î", "I");
        a = a.replace("í", "i");
        a = a.replace("ì", "i");
        a = a.replace("î", "i");
        a = a.replace("ó", "o");
        a = a.replace("õ", "o");
        a = a.replace("ò", "o");
        a = a.replace("Ó", "O");
        a = a.replace("Õ", "O");
        a = a.replace("Ò", "I");
        a = a.replace("Ú", "U");
        a = a.replace("Ü", "U");
        a = a.replace("Ù", "U");
        a = a.replace("ú", "u");
        a = a.replace("ü", "u");
        a = a.replace("ù", "u");
        a = a.replace("ê", "e");
        a = a.replace("ô", "o");
        a = a.replace("â", "a");

        a = a.replace("Â", "A");
        a = a.replace("Ê", "E");
        a = a.replace("Ô", "O");





        a = a.replace("A", "&#120172;");
        a = a.replace("B", "&#120173;");
        a = a.replace("C", "&#120174;");
        a = a.replace("D", "&#120175;");
        a = a.replace("E", "&#120176;");
        a = a.replace("F", "&#120177;");
        a = a.replace("G", "&#120178;");
        a = a.replace("H", "&#120179;");
        a = a.replace("I", "&#120180;");
        a = a.replace("J", "&#120181;");
        a = a.replace("K", "&#120182;");
        a = a.replace("L", "&#120183;");
        a = a.replace("M", "&#120184;");
        a = a.replace("N", "&#120185;");
        a = a.replace("O", "&#120186;");
        a = a.replace("P", "&#120187;");
        a = a.replace("Q", "&#120188;");
        a = a.replace("R", "&#120189;");
        a = a.replace("S", "&#120190;");
        a = a.replace("T", "&#120191;");
        a = a.replace("U", "&#120192;");
        a = a.replace("V", "&#120193;");
        a = a.replace("W", "&#120194;");
        a = a.replace("X", "&#120195;");
        a = a.replace("Y", "&#120196;");
        a = a.replace("Z", "&#120197;");




        a = a.replace("a", "&#120198;");
        a = a.replace("b", "&#120199;");
        a = a.replace("c", "&#120200;");
        a = a.replace("d", "&#120201;");
        a = a.replace("e", "&#120202;");
        a = a.replace("f", "&#120203;");
        a = a.replace("g", "&#120204;");
        a = a.replace("h", "&#120205;");
        a = a.replace("i", "&#120206;");
        a = a.replace("j", "&#120207;");
        a = a.replace("k", "&#120208;");
        a = a.replace("l", "&#120209;");
        a = a.replace("m", "&#120210;");
        a = a.replace("n", "&#120211;");
        a = a.replace("o", "&#120212;");
        a = a.replace("p", "&#120213;");
        a = a.replace("q", "&#120214;");
        a = a.replace("r", "&#120215;");
        a = a.replace("s", "&#120216;");
        a = a.replace("t", "&#120217;");
        a = a.replace("u", "&#120218;");
        a = a.replace("v", "&#120219;");
        a = a.replace("w", "&#120220;");
        a = a.replace("x", "&#120221;");
        a = a.replace("y", "&#120222;");
        a = a.replace("z", "&#120223;");

    }
    return a;
}

function MiniFont(a) {
    a = a.toUpperCase();
    for (var i = 0; i < 100; i++) {
        a = a.replace("á", "a");
        a = a.replace("ã", "a");
        a = a.replace("à", "a");
        a = a.replace("Á", "A");
        a = a.replace("Ã", "A");
        a = a.replace("À", "A");
        a = a.replace("ç", "c");
        a = a.replace("Ç", "C");
        a = a.replace("é", "e");
        a = a.replace("è", "e");
        a = a.replace("ë", "e");
        a = a.replace("É", "E");
        a = a.replace("È", "E");
        a = a.replace("Ë", "E");
        a = a.replace("Í", "I");
        a = a.replace("Ì", "I");
        a = a.replace("Î", "I");
        a = a.replace("í", "i");
        a = a.replace("ì", "i");
        a = a.replace("î", "i");
        a = a.replace("ó", "o");
        a = a.replace("õ", "o");
        a = a.replace("ò", "o");
        a = a.replace("Ó", "O");
        a = a.replace("Õ", "O");
        a = a.replace("Ò", "I");
        a = a.replace("Ú", "U");
        a = a.replace("Ü", "U");
        a = a.replace("Ù", "U");
        a = a.replace("ú", "u");
        a = a.replace("ü", "u");
        a = a.replace("ù", "u");
        a = a.replace("ê", "e");
        a = a.replace("ô", "o");
        a = a.replace("â", "a");

        a = a.replace("Â", "A");
        a = a.replace("Ê", "E");
        a = a.replace("Ô", "O");





        a = a.replace("A", "&#7491;");
        a = a.replace("B", "&#7495;");
        a = a.replace("C", "&#7580;");
        a = a.replace("D", "&#7496;");
        a = a.replace("E", "&#7497;");
        a = a.replace("F", "&#7584;");
        a = a.replace("G", "&#7501;");
        a = a.replace("H", "&#688;");
        a = a.replace("I", "&#8305;");
        a = a.replace("J", "&#690;");
        a = a.replace("K", "&#7503;");
        a = a.replace("L", "&#737;");
        a = a.replace("M", "&#7504;");
        a = a.replace("N", "&#8319;");
        a = a.replace("O", "&#7506;");
        a = a.replace("P", "&#7510;");
        a = a.replace("Q", "&#740;");
        a = a.replace("R", "&#691;");
        a = a.replace("S", "&#738;");
        a = a.replace("T", "&#7511;");
        a = a.replace("U", "&#7512;");
        a = a.replace("V", "&#7515;");
        a = a.replace("W", "&#695;");
        a = a.replace("X", "&#739;");
        a = a.replace("Y", "&#696;");
        a = a.replace("Z", "&#7611;");


    }
    return a;
}

function gerarSenha(num = 20) {
    var _0xD7 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$&!?[]='
    var _0x9B = 0x1
    for (let _0x2C = 0x0; _0x2C < num; _0x2C++) {
        _0x9B += _0xD7[Math.floor(Math.random() *
            _0xD7.length)]
    }
    return 'Claro-nomeUsuario-, aqui esta uma senha forte:<br><b>' + _0x9B.toString(0x10) + '</b>'
}

function addLembrete(lembrete) {

    const re = /\(([^)]+)\)/;
    lembrete = re.exec(lembrete)[1];

    //lembrete = lembrete.replace('adicionar lembrete', '')

    if (localStorage.getItem('lembretes')) {
        var montando = '<li>' + lembrete + '</li>'
        localStorage.setItem('lembretes', localStorage.getItem('lembretes') + montando)
        return 'Tudo certo-nomeUsuario-, adicionei na sua listade lembretes';
    }
    else {
        var montando = '<ul><li>' + lembrete + '</li>'
        localStorage.setItem('lembretes', montando)
        return 'Tudo certo-nomeUsuario-, adicionei na sua lista de lembretes';
    }
}

function exibirLembrete() {
    if (localStorage.getItem('lembretes')) {
        return 'Entendi-nomeUsuario-, aqui estão seus lembretes:<br>' + localStorage.getItem('lembretes');
    }
    else {
        return 'Desculpe-nomeUsuario-, mas não encontrei nenhum lembrete no momento';
    }
}
function apagarLembrete() {
    localStorage.removeItem('lembretes');
    return 'Pronto-nomeUsuario-, apaguei todos seus lembretes';
}



function GerarNickname() {
    var nome = [
        "StarGazer",
        "ShadowHunter",
        "MoonWalker",
        "BlazeRider",
        "IronWolf",
        "CrystalPhoenix",
        "ThunderStrike",
        "MysticMage",
        "SilverFalcon",
        "NebulaKnight",
        "FireDancer",
        "StormBringer",
        "GoldenDragon",
        "NightShade",
        "LunarLion",
        "AquaBlade",
        "CrimsonHawk",
        "SolarFlare",
        "FrostTiger",
        "ElectricEagle",
        "DarkRaven",
        "WildSpirit",
        "StormRider",
        "SilentShadow",
        "CobaltKnight",
        "BlazingArrow",
        "PhantomWarrior",
        "EmeraldWarden",
        "MidnightWanderer",
        "RadiantFox"
    ]
    var claro_aquiEsta = [
        "Certo-nomeUsuario-, aqui esta uma ideia de nickname:",
        "Otimo-nomeUsuario-, aqui esta uma ideia de nickname:",
        "Ok-nomeUsuario-, que tal esse:",
        "Ok-nomeUsuario-, talvez voce goste de ",
    ]
    var indexnome = Math.floor(Math.random() * nome.length);
    var indexclaro_aquiEsta = Math.floor(Math.random() * claro_aquiEsta.length);
    return claro_aquiEsta[indexclaro_aquiEsta] + ' <b><i>' + nome[indexnome] + '</i></b>';
}
//--------------------------------------------

function QuerGerarNomeCidade(p) {

    let criar = [
        "crie",
        "invente",
        "gere"
    ]
    let local = [
        "cidade",
        "bairro",
        "pais",
        "local",
    ]
    let tem = false
    criar.forEach(c => {
        local.forEach(l => {
            //console.log(c + ' ' + l)
            if (p.toLowerCase().includes(c) && p.toLowerCase().includes(l)) {
                tem = true;
            }
        });
    });
    return tem;
}

function criarNomeCidade() {
    var nome = [
        "Avalon",
        "Rivertown",
        "Silvervale",
        "Oakwood",
        "Harmony Springs",
        "Havenbrook",
        "Pinecrest",
        "Azure Hills",
        "Evergreen City",
        "Meadowview",
        "Stonebridge",
        "Windsor Falls",
        "Willow Creek",
        "Echo Bay",
        "Golden Ridge",
        "Crystal Lake",
        "Sunnydale",
        "Whispering Pines",
        "Fairview",
        "Maplewood",
        "Wildwood",
        "Clearwater",
        "Springfield",
        "Greenwood",
        "Peachtree City",
        "Cedar Hollow",
        "Blue Harbor",
        "Moonlight Bay", "Emerald Isle", "Rosewood"
    ]
    var claro_aquiEsta = [
        "Certo-nomeUsuario-, aqui esta uma ideia de nome:",
        "Otimo-nomeUsuario-, aqui esta uma ideia de nome:",
        "Ok-nomeUsuario-, que tal esse:",
        "Ok-nomeUsuario-, talvez voce goste de ",
    ]
    var indexnome = Math.floor(Math.random() * nome.length);
    var indexclaro_aquiEsta = Math.floor(Math.random() * claro_aquiEsta.length);
    return claro_aquiEsta[indexclaro_aquiEsta] + ' <b><i>' + nome[indexnome] + '</i></b>';
}








function QuerGerarNomePersonagem(p) {

    let criar = [
        "crie",
        "invente",
        "gere"
    ]
    let local = [
        "pessoa",
        "personagem",
        "humano",
    ]
    let tem = false
    criar.forEach(c => {
        local.forEach(l => {
            //console.log(c + ' ' + l)
            if (p.toLowerCase().includes(c) && p.toLowerCase().includes(l)) {
                tem = true;
            }
        });
    });
    return tem;
}

function criarNomePersonagem(p) {
    if (p.toLowerCase().includes('personage') || p.toLowerCase().includes('jogo')) {
        var nome = [
            "Shadowblade",
            "Stormbringer",
            "Emberheart",
            "Ironfist",
            "Frostwind",
            "Sunfire",
            "Moonshadow",
            "Darkwood",
            "Starfall",
            "Thunderclaw",
            "Nightshade",
            "Stormforge",
            "Silverlight",
            "Blackthorn",
            "Swiftblade",
            "Shadowbane",
            "Bloodmoon",
            "Wintercrest",
            "Fireheart",
            "Frostbeard",
            "Duskmire",
            "Windchaser",
            "Darkmoon",
            "Emberstorm",
            "Dawnblade",
            "Skywatcher",
            "Ironclad",
            "Stormcaller",
            "Nightstalker",
            "Shadowweaver",
        ]
        var claro_aquiEsta = [


            "Aurora",
            "Draven",
            "Lyra",
            "Viktor",
            "Seraphina",
            "Kael",
            "Elara",
            "Thorn",
            "Serenity",
            "Rex",
            "Aria",
            "Gideon",
            "Luna",
            "Ragnar",
            "Elysia",
            "Faelan",
            "Nova",
            "Valen",
            "Kira",
            "Xander",
            "Elowen",
            "Zephyr",
            "Sylvan",
            "Isolde",
            "Ezra",
            "Athena",
            "Darius",
            "Aurora",
            "Eldric",
            "Nyx"
        ]
    }
    else {
        var nome = [

            "Silva",
            "Santos",
            "Oliveira",
            "Souza",
            "Pereira",
            "Rodrigues",
            "Almeida",
            "Lima",
            "Ferreira",
            "Costa",
            "Gomes",
            "Martins",
            "Ribeiro",
            "Carvalho",
            "Melo",
            "Barbosa",
            "Araújo",
            "Cardoso",
            "Nunes",
            "Borges"
        ]
        var claro_aquiEsta = [

            "Ana",
            "Bruno",
            "Carla",
            "Daniel",
            "Eduarda",
            "Fernando",
            "Gabriela",
            "Hugo",
            "Isabela",
            "João",
            "Lucas",
            "Mariana",
            "Nathan",
            "Olivia",
            "Pedro",
            "Renata",
            "Samuel",
            "Tatiana"
        ]
    }

    var indexnome = Math.floor(Math.random() * nome.length);
    var indexclaro_aquiEsta = Math.floor(Math.random() * claro_aquiEsta.length);
    return 'Certo-nomeUsuario-, aqui esta uma ideia de nome: <b><i>' + claro_aquiEsta[indexclaro_aquiEsta] + ' ' + nome[indexnome] + '</i></b>';
}


function DisseOI(p) {

    p = processarPergunta(p);

    let ois = [
        "oi",
        "ola",
        "hello",
        "oii",
        "hey",
        "tudo bem",
        "td bem",
        "bom dia",
        "boa tarde",
        "boa noite",
    ]
    let tem = false
    ois.forEach(c => {
        if (p.includes(c)) {
            tem = true;
        }
    });
    return tem;
}

function Oque_Sou_Capaz_De_Fazer(p) {

    p = processarPergunta(p);

    let criar = [
        "pode",
        "consegue",
        "capaz",
        "capas",
        "sabe",
    ]
    let local = [
        "fazer",
        "realizar",
        "responde",
        "executa",
    ]

    let tem = false
    criar.forEach(c => {
        local.forEach(l => {
            //console.log(c + ' ' + l)
            if (p.toLowerCase().includes(c) && p.toLowerCase().includes(l)) {
                tem = true;
            }
        });
    });
    return tem;
}


//---------gerarImagens--------
function QuerGerarImagens(p) {

    p = processarPergunta(p);

    let criar = [
        "desenhe",
        "crie",
        "gere",
        "gera",
    ]
    let local = [
        "foto",
        "imagem",
        "imagen",
        "img",
    ]

    let tem = false
    criar.forEach(c => {
        local.forEach(l => {
            //console.log(c + ' ' + l)
            if (p.toLowerCase().includes(c) && p.toLowerCase().includes(l)) {
                tem = true;
            }
        });
    });
    return tem;
}


function gerarImagem(p) {
    p = processarPergunta(p);
    if (p.toLowerCase().includes('aleatori')) 
    {
        var fotolink="";
        fetch('https://picsum.photos/200/200')
        .then(response =>{
            
			
			setTimeout(()=>{
				fotolink=response.url;
			if (fotolink.toLowerCase().includes('http')) {
            return 'Aqui esta: <br><img src=\"'+fotolink+'" alt=\"\" style=\"width:50%\" srcset=\"\">'
        }
        else{
            return 'Desculpe-nomeUsuario-, mas não consegui gerar a imagem no momento&#128533;'
        }
		},2000)
		
        })
        
        
    }
    else
    {
        let msgs = [
            "Lamento-nomeUsuario-, mas não consigo gerar imagens sobre um tema específico, porém, posso criar uma imagem aleatória",
            "Infelizmente-nomeUsuario-, não consigo gerar imagens sobre um tema específico, porém, posso criar uma imagem aleatória",
            
        ]
        var indexnome = Math.floor(Math.random() * msgs.length);
        return msgs[indexnome];
    }
}

function textoEntreParentese(t){
    const re = /\(([^)]+)\)/;
    t = re.exec(t)[1];
    return t;
}

function joaat(s) {
    s = s.toLowerCase()
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h += s.charCodeAt(i);
        h += (h << 10);
        h ^= (h >> 6);
    }
    h += (h << 3);
    h ^= (h >> 11);
    h += (h << 15);
    h = h >>> 0
    return 'Certo-nomeUsuario-, o hash de <b>'+s+'</b> é <b>0x' + h.toString(16).toUpperCase()+'</b>';
}


