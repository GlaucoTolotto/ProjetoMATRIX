function fase1() {
    var pergunta1 = prompt("Pergunta 1");
    if (pergunta1 == 2){
        return fase2()
    }
    else {
        location.assign ("gameOver.html");
    }
}

function fase2() {
    var pergunta2 = prompt("pergunta 2")
    if (pergunta2 == 2){
        return fase3();
    }
    else {
        location.assign ("gameOver.html");
    }
}

function fase3() {
    var pergunta3 = prompt("Pergunta 3")
    if (pergunta3 == 2){
        return location.assign()
    }
    else {
        location.assign ("gameOver.html");
    }
}