
// Iniciar o cronômetro quando a página é carregada
window.onload = function () {
    alert('Saudações! Obrigado por visitar a página.');  
  //cronometro = setInterval(atualizarCronometro, 1000); // Atualiza a cada segundo (1000 milissegundos)
};


let tempoInicial1 = 0;
let cronometro1;

function atualizarCronometro1() {
    tempoInicial1++;
    document.getElementById('tempo').innerText = `Tempo de Navegação: ${tempoInicial1} segundo${tempoInicial1 !== 1 ? 's' : ''}`;
}

window.onload = function () {
    cronometro = setInterval(atualizarCronometro1, 1000);
};

window.onbeforeunload = function () {
    clearInterval(cronometro1);
};




