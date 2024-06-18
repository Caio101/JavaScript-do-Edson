const adicao = document.getElementById("adicao");
const subtracao = document.getElementById("subtracao");
const divisao = document.getElementById("divisao");
const multiplicacao = document.getElementById("multiplicacao");

adicao.addEventListener("click", function(){
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);
    let solucao = Numero1 + Numero2;
    document.getElementById("solucao").textContent = `${solucao}`;
});

subtracao.addEventListener("click", function(){
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);
    let solucao = Numero1 - Numero2;
    document.getElementById("solucao").textContent = `${solucao}`;
});

divisao.addEventListener("click", function(){
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);
    let solucao = Numero1 / Numero2;
    document.getElementById("solucao").textContent = `${solucao}`;
});

multiplicacao.addEventListener("click", function(){
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);
    let solucao = Numero1 * Numero2;
    document.getElementById("solucao").textContent = `${solucao}`;
});
