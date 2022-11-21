function Calculo()
{
    const valorInicial = 50;
    const mm1L = 1000;

    var altura = parseFloat(document.getElementById("altura"). value);
    var largura = parseFloat(document.getElementById("largura"). value);
    var comprimento = parseFloat(document.getElementById("comprimento"). value);

    var litros = parseInt(altura * largura * comprimento / mm1L);

    var potencia = Math.ceil(litros / valorInicial);
    var aquecedor = parseInt(valorInicial * potencia);

    var volume = Math.ceil(litros * 6 / valorInicial);
    var bomba = parseInt(valorInicial * volume)

    document.getElementById("altura"). value = "";
    document.getElementById("largura"). value = "";
    document.getElementById("comprimento"). value = "";

    if (litros > 0){
        document.getElementById("res1").innerHTML = "O volume do seu aquario é igual a: " + litros + "L";
        document.getElementById("res2").innerHTML = "A potencia do seu aquecedor deve ser: " + aquecedor + "W";
        document.getElementById("res3").innerHTML = "A bomba do seu aquario filtrará: " + bomba + "l/h";
    }
}
