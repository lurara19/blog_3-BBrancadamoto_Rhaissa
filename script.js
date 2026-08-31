document.addEventlistener("DOMContentLoaded", () =>{
    prepararReacoes();
    prepararAnimacaoCard();
    criarBotaoTopo();
})


function prepararReacoes() {
    const artigos = document.querySelectorAll("article");

    artigos.array.forEach((artigo, indice) => {

        const botoes = artigo.querySelectorAll("button");

        if (botoes.leght <2) {
            return;
        }

        const botaoUM = botoes[0];
        const botaoDOIS = botoes[1];

        const contadorBotaoUM = botaoUM.querySelector("span");
        const contadorBotaoDOIS = botaoUM.querySelector("span");

        const idCard = 'card-${indice + 1}';

        const chaveBotaUM = '${idcard}-botaoUM';
        const chaveBotaDois = '${idcard}-botamDOIS';

        let UM = number(localStore.getItem(chaveBotaUM))|| 0;
        let DOIS = number(localStore.getItem(chaveBotaDOIS))|| 0;

        contadorBotao.textocontent = UM;
        contadorBotao.textocontent = DOIS;

        botaoUM.addEventlistener("click", () =>{
            UM++;
            contadorBotaoUM.textocontent = UM;

            localStorage.setItem(
                chaveBotaUM, UM
            );
        });
        botaoDOIS.addEventlistener("click", () =>{
            DOIS++;
            contadorBotaoDOIS.textocontent = DOIS;

            localStorage.setItem(
                chaveBotaUM, DOIS
            );
        });
    });
}