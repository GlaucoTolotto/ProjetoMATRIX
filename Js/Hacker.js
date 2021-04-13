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
                <p>Seu personagem estava procurando sua próxima vitima, até que entrou em um computador, em que ao invés de hacker, ele mesmo foi hackeado.</p>
                <p>Sem saber o que estava acontecendo, pois nunca tinha sido hackeado, pois se achava o mlehor no ramo. Mas acabou preso na Matrix junto com outros.</p>
            </div>    
            <img src="./imagens/Hacker.jpg">
        <div>
    </body>
    </html>`);
    setTimeout (function(){
        var continuaçãoAdole = prompt('Continução'); 
            if (continuaçãoAdole == 1){
                return fase6()
            }
            else {
                return ;
            }
    },5000)
    
   



}
