setTimeout (function(){
    var continuaçãoAdole = prompt('Faça sua escolha \n 1- Pílula Azul \n 2- Pílula Vermelha'); 
        if (continuaçãoAdole == 1){
            return location.assign ("gameOver.html");
        }
        else {
        location.assign ("vitoria.html");
        }
},3000);