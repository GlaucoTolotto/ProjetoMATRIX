function adolescente(){
    alert ('Persogem escolhido foi o Adolescente baixando filme pirata');
    document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <link rel="stylesheet" href="css/apresentaçãoAdolescente.css">
    <script src="./Js/fase1.js"></script>
    
    </head>
    <body>
        <div class="caixaDeConteudo">
            <div class="textoDoPersogem">
            <h1>Adolescente baixando filme pirata</h1>
                <p>Seu personagem estava calmamente baixando filmes para poder ver com sua Web namorada a garota mais linda da internet, segundo fotos, pois ela sempre se recusa a ligar a câmera, e sempre tem uma desculpa para não se encontrar com o nosso herói.</p>
                <p>Mas de repente se viu dentro de um jogo estranho, que jamais virá em toda sua vida, o que não é muito tempo, pois estamos falando de um adolescente. Agora ele faz parte do jogo como um personagem.</p>
            </div>
            <img src="./imagens/Adolescente.jpg">
        <div>
    </body>
    </html>`);

    setTimeout (function(){
    var continuaçãoAdole = prompt('Agora que você já conhece o seu personagem, vamos começar as fases, as fases serão apenas 3 perguntas, perguntas que te desafiarão, está preparado? \n 1- Sim \n 2- Não'); 
        if (continuaçãoAdole == 1){
            return location.assign ("todasAsFases.html");
        }
        else {
        location.assign ("gameOver.html");
        }
},5000);


}

