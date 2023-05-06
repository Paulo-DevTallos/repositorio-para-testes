function Main () {
    const testeDeExibição = {
        processando: (value) => console.log(value)
    }

    console.log(testeDeExibição.processando('Ola'))
};

Main();

console.log('commit1')
console.log('commit2')

const meuConsole = (msg, cls) => console.log(msg);
meuConsole('Feature de teste 2', console)
