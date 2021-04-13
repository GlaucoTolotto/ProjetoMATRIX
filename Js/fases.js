function fase1() {
    var pergunta1 = prompt('Se, durante uma corrida de carros, você deixa o segundo colocado pra trás, qual é a sua colocação após a ultrapassagem? \n 1-Primeiro \n 2-Segundo \n 3-Terceiro');
    alert ('RESPOSTA: Se você ultrapassa o segundo colocado, assume o lugar dele, ficando em segundo!')
    if (pergunta1 == 2){
        return fase2()
    }
    else {
        location.assign ("gameOver.html");
    }
}

function fase2() {
    var pergunta2 = prompt('Uma família resolveu passear de carro. Nele entraram 1 avô, 2 pais, 2 filhos e 1 neto. Qual o número mínimo de pessoas dentro do veículo, afinal?\n 1- 3 pessoas \n 2- 5 pessoas \n 3- 1 pessoa')
    alert ('RESPOSTA: Se a borboleta vive cinco dias, ela terá morrido antes de uma semana (afinal, uma semana tem sete dias). No entanto, se considerarmos seu tempo de vida, sabemos que, em cinco dias, ela voou 20 metros, pois 5 x 4 = 20')
    if (pergunta2 == 1){
        return fase3();
    }
    else {
        location.assign ("gameOver.html");
    }
}

function fase3() {
    var pergunta3 = prompt('Se uma borboleta vive cinco dias e a cada dia ela voa quatro metros, quantos metros ela terá percorrido em uma semana?\n 1- 30 metros \n 2- 60 metros \n 3- 20 metros')
    alert ('RESPOSTA: Um dos homens é "avô" (1) do neto (2) e pai do "pai" (3). O pai, por sua vez é filho do avô e pai do filho. Logo, há um mínimo de três pessoas no carro.')
    if (pergunta3 == 3){
        return location.assign("ultimafase.html")
    }
    else {
        location.assign ("gameOver.html");
    }
}