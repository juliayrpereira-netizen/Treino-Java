function hoppy(){

    let altura = Number(prompt("informe sua altura"))
if(altura >= 1.70)
    {
    alert("Voce passou!!!")
}

else{
    alert("Voce não tem altura o suficiente")
}

}

function produto(){
    
    let estoque = Number(prompt("INFORME A QUANTIDADE DE PRODUTO"))


if ( estoque >= 5){
    alert("Ok")
}
else{
    alert("Estoque baixo!")
}
}

//VALOR 756

function valor(){
    
    let taxa = Number(prompt("Informe o valor:"))


if ( taxa <= 5){
    alert("isento")
}
else{
    alert("Taxa de 10%")
}
}




//NOTA
function nota(){
    
    let estudo = Number(prompt("Se sua nota for maior que 5, será aprovado!"))


if ( estudo >= 5){
    alert("PASSOU!!!")
}
else{
    alert("Sua nota está baixa!")
}
}

//CORES

function cores(){

    let cor = Number(prompt(" informe a cor"))
    let corDois = Number(prompt(" informe a cor"))

    if(cor == corDois){
        alert("Verdadeiro")
    }

    else{
        alert("Falso")
    }
    
}


