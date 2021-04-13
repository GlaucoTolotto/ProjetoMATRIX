function estagiario(){
    alert ('O Personagem escolhido foi o Estagiario fã de teoria da conspiração')
    document.write (`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta chaset="UTF-8">
        <link rel="stylesheet" href="./css/reset.css">
        <link rel="stylesheet" href="./css/apresentaçãoEstagiario.css">
    </head>
    <body>
        <div class="caixaDeConteudo">
            <div class="textoDoPersogem">
                <h1>Estágiario Fã de Teoria Da Conspiração</h1>
                <p>Este personagem estava fazendo as suas e pesquisas e conspirações. Quando do nada um amigo, manda um link para ele, sobre um assunto que ele mais gosta.</p>
                <p>Quando clicou se viu preso na Matrix, sendo obrigado a jogar um jogo feito pelo governo, só pra manter eles presos, em loop.</p>
            </div>    
            <img src="./imagens/Estagiario.jpg">
        <div>
    </body>
    </html>`)
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