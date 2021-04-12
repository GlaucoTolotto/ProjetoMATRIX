function adolescente(){
    alert ('Persogem escolhido foi o Adolescente baixando filme pirata')
    document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <link rel="stylesheet" href="estruturaDaApresentaçãoDoPersogem.css">
    </head>
    <body>
        <div class="caixaDeConteudo">
            <div class="textoDoPersogem">
            <h1>Adolescente baixando filme pirata</h1>
                <p>Seu persogem estavá calmamente baixando filmes para poder ver com sua Web namorada, mais tarde naquele dia, a garota mais linda da internet (segundo fotos, pois ela sempre se recusa a ligar a camera, e sempre tem uma desculpa para não se encontrar com o nosso herói)</p>
                <p>Mas derrepente se viu dentro de um jogo estranho, que jamais virá em sua vida toda (O que não é muito tempo, pois estamos falando de um adolescente). Agora ele faz parte do jogo como um persogem.</p>
            </div>
            <img src="./imagens/Adolescente.jpg">
        <div>
    </body>
    </html>`)

    setTimeout (function(){
    var continuaçãoAdole = prompt('Continução'); 
        if (continuaçãoAdole == 1){
            return fase1()
        }
        else if (continuaçãoAdole == 2){
            return alert ('GAME OVER! APERTE F5 PARA COMEÇAR DE NOVO')
        }
},5000)

}


