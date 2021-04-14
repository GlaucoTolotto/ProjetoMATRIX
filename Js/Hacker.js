function hacker(){
    alert ('Seu personagem escolhido foi o Hacker!');
    document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./css/reset.css">
        <link rel="stylesheet" href="./css/apresentaçãoHacker.css">
    </head>
    <body>
        <div class="caixaDeConteudo">
            <div class="textoDoPersogem">
                <h1>Hacker</h1>
                <p>Seu personagem estava procurando sua próxima vitima, até que entrou em um computador, em que ao invés de hackear aquele computador, ele mesmo foi hackeado.</p>
                <p>Sem saber o que estava acontecendo, pois nunca tinha sido hackeado, pois se achava o melhor no ramo. Mas acabou preso na Matrix junto com outros.</p>
            </div>    
            <img src="./imagens/Hacker.jpg">
        <div>
    </body>
    </html>`);
    setTimeout (function(){
        var continuaçãoAdole = prompt('Agora que você ja conhece o seu personagem, vamos começar as fases, as fases serão apenas 3 perguntas, perguntas que te desafiarão, está preparado? \n 1- Sim \n 2- Não'); 
            if (continuaçãoAdole == 1){
                return location.assign ("todasAsFases.html");
            }
            else {
            location.assign ("gameOver.html");
            }
    },5000);
    
    
   



}
