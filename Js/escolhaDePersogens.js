
function start(){
    var escolhaPersonagem = prompt ('Escolha seu personagem: \n 1- Adolescente baixando filme pirata \n 2- Estagiario fã da teoria da conspiração \n 3- Hacker');
    if (escolhaPersonagem == 1){
        return adolescente()
    }
    else if (escolhaPersonagem == 2){
        return estagiario()
    }
    else if (escolhaPersonagem == 3){
        return hacker()
    }
    else {
        alert ('Personagem escolhido não existe')
    }
}

