document.addEventListener('DOMContentLoaded',() => {
    const frases = [
        'Imagine uma nova história para sua vida e acredite nela.',
        'Você não está sozinho.',
        'Cada vida importa.',
        'Tudo passa e essa dor também vai passar.',
        'Não desista do amor, da vida.',
        'Depois da tempestade vem a calmaria.',
        'Eu estou aqui para o que você precisar.',
        'Desabafar é uma forma de limpar a alma.',
        'Você NÃO é uma nota baixa, uma crítica, seus erros.',
        'O diálogo cura. Tenta falar!',
        'Peça ajuda. VOCÊ É IMPORTANTE! CUIDE DE SI MESMO(A)!',
        'NÃO SEJA REFÉM DO QUE PENSAM E FALAM SOBRE VOCÊ!',
        'NÃO deixe seus medos falarem por você!',
        'Tá tudo bem em NÃO estar bem!',
        'Essa tempestade vai passar!',
        'VOCÊ CONSEGUE!',
        'VOCÊ faz a diferença na vida de alguém!',
        'Aprenda a escutar!',
        'Se dê conta do quanto você é importante! VIVA!',
        'Se dê conta do quanto você é abençoado(a)!',
        'Acender a luz do próximo NÃO apaga a sua!',
        'NÃO pare até se orgulhar de você!',
        'SORRIA, você está fazendo o melhor que pode!',
        'Faça, faça, faça até dar certo!',
        'Impossível é uma palavra que serve só de enfeite no dicionário.',
        'Você é beleza, luz e força.',
        'Dias nublados guardam o sol atrás deles.',
        'É tão bonita a força que você emana.',
        'Essa mensagem tem um único objetivo: te ver sorrindo.',
        'Se precisar, peça ajuda!',
        'Tem uma força dentro de você que é capaz de sempre te surpreender!',
        'Tenha coragem para se tornar aquilo que sonha.'
        'Há, na mente de Deus, um plano que abraça cada criatura de todos os seus imensos domínios; e esse plano é um propósito eterno de oportunidades sem fronteiras, de progresso ilimitado e vida eterna... A meta da eternidade está adiante!... e uma vitória certa irá coroar os esforços de qualquer ser humano, nessa corrida de fé e confiança.'  
'Faça sempre o seu melhor!'  
'Comece onde você está, use o que você tem e faça o que você pode.'  
'E acredite que o melhor possa ser feito!'  
'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'  
'Não espere, ponha em prática!'  
'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.'  
'Mesmo que pareça difícil, não pare!'  
'Não importa que você vá devagar, contanto que você não pare.'  
'Só trabalhando é possível trilhar o caminho!'  
'A inspiração existe, porém temos que encontrá-la trabalhando.'  
'Tenha coragem!'  
'Coragem é saber o que não temer.'  
'Descubra quem você realmente é…'  
'Conhecer a si mesmo é o começo de toda sabedoria.'  
'E se aceite!'  
'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.'  
'Não espere que as respostas caiam do céu!'  
'Acredite em milagres, mas não dependa deles.'  
'Aprenda a lidar com as situações do melhor jeito!'  
'Não é a carga que o derruba, mas a maneira como você a carrega.'  
'Veja sempre o que há de positivo nas coisas!'  
'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.'  
'Não seja vítima das dificuldades, tente ultrapassá-las!'  
'A vida é 10% o que acontece a você e 90% como você reage a isso.'  
'Nunca perca a esperança!'  
'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.'  
'Você não precisa de muito para construir um mundo melhor!'  
'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.'  
'Nunca esqueça que a sua felicidade não depende de mais ninguém!'  
'A felicidade não é algo pronto. Ela é feita das suas próprias ações.'  
'Desistir à primeira é para os fracos, tente sempre mais uma vez!'  
'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.'  
'Enxergue outros pontos de vista, e tenha sempre presente o objetivo final!'  
'Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.'  
'Se motive com as conquistas pessoais e não em bater os outros.'  
'Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.'  
'Busque inspiração nas pequenas coisas e gestos.'  
'Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!'  
'A receita para o sucesso está no equilíbrio!'  
'As conquistas dependem de 50% de inspiração, criatividade e sonhos, e 50% de disciplina, trabalho árduo e determinação. São duas pernas que devem caminhar juntas.'  
'Sempre há tempo para mudar!'  
'Cada segundo é tempo para mudar tudo para sempre.'  
'Não se esqueça de cuidar de você mesmo!'  
'Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.'  
'A força está em você!'  
'Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer.'  
'Respire fundo e encontre sua paz interior!'  
'A paz vem de dentro de você mesmo. Não a procure à sua volta.'  
'Pense bem: o que é defeito e o que é uma parte importante de você?'  
'Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.'  
'Cada dia tem seu lugar e sua função!'  
'Aprenda com o ontem. Viva o hoje. tenha esperança para o amanhã.'  
'Para boas recompensas, não há atalhos!'  
'Não há atalhos para nenhum destino onde se vale a pena chegar.'  
'Tenha segurança de si e do seu potencial!'  
'Não se deixe intimidar pela opinião dos outros. Só a mediocridade é segura, por isso corra seus riscos e faça o que deseja.'  
'A imaginação e a inspiração são fundamentais na nossa constante mutação!'  
'Não extinga sua inspiração e sua imaginação; não se torne o escravo do seu modelo.'  
'No lugar de sentir inveja, fique feliz pelos outros!'  
'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.'  
'E novos dias sempre chegam, mesmo sem serem chamados!'  
'A primavera chegará, mesmo que ninguém mais saiba seu nome, nem acredite no calendário, nem possua jardim para recebê-la.'  
'Ser simples é uma boa qualidade!'  
'A simplicidade é o último grau de sofisticação.'  
'Diga a verdade e poupe justificativas do porquê mentir!'  
'A mentira nunca vive o suficiente para envelhecer.'  
'Os dias tristes ajudam a apreciarmos os bons!'  
'De que me adianta temer o que já aconteceu? O tempo do medo já aconteceu, agora, começa o tempo da esperança.'  
'Às vezes, voltar ao antigo local nos faz perceber o quanto estamos diferentes!'  
'Não há nada como regressar a um lugar que está igual para descobrir o quanto a gente mudou.'  
'Existe um longo alfabeto até chegar no "realizar"!'  
'Sonhar é verbo: é seguir, é pensar, inspirar e fazer força, insistir, é lutar, transpirar. São mil verbos que vem antes do verbo realizar.'  
'Quem é sábio reconhece que não sabe tudo!'  
'Sábio é aquele que conhece os limites da própria ignorância.'  
'Quando vemos que o esforço foi a melhor parte do caminho!'  
'Um dia, quando olhares para trás, verás que os dias mais belos foram aqueles em que lutaste.'  
'Sinta e veja as coisas boas que estão diante de você!'  
'Maravilhas nunca faltaram ao mundo; o que sempre falta é a capacidade de senti-las e admirá-las.'  
'Contar com outras pessoas é muito importante!'  
'Qualquer pessoa de sucesso sabe que é uma peça importante, mas sabe que não conseguirá nada sozinho.'  
'Persista, recomece e insista!'  
'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.'  
'Tenha coragem!'  
'A vida se contrai e se expande proporcionalmente à coragem do indivíduo.'  
'Se você está lutando, o seu objetivo está cada vez mais próximo!'  
'Se a montanha que você está subindo parece cada vez mais imponente é sinal que você está mais próximo ao topo.'  
'Olhe para dentro antes de tomar qualquer atitude.'  
'Só é lutador quem sabe lutar consigo mesmo.'
    ];
    let indice = Math.floor(Math.random() * frases.length);
    let fraseAleatoria = frases[indice];
    document.getElementById('frase').innerText = fraseAleatoria;
});
