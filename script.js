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
    ];
    let indice = Math.floor(Math.random() * frases.length);
    let fraseAleatoria = frases[indice];
    document.getElementById('frase').innerText = fraseAleatoria;
});