document.addEventListener('DOMContentLoaded', () => {
    const numerosAnterioresInput = document.getElementById('numeros-anteriores');
    const sortearButton = document.getElementById('sortear');
    const listaSorteados = document.getElementById('lista-sorteados');
    const debugInfo = document.getElementById('debug-info');

    sortearButton.addEventListener('click', () => {
        const numerosAnterioresStr = numerosAnterioresInput.value;
        const numerosAnteriores = numerosAnterioresStr.split(',').map(Number).filter(num => !isNaN(num));

        // Limpa a lista anterior
        listaSorteados.innerHTML = "";
        debugInfo.innerHTML = "";

        if (numerosAnteriores.length !== 15) {
            debugInfo.textContent = `ERRO: Por favor, insira exatamente 15 números nos campos de números anteriores.`;
            return;
        }

        // 1. Geração dos 25 números iniciais
        const todosNumeros = Array.from({ length: 25 }, (_, i) => i + 1);

        // 2. Separação dos números restantes dos 25 (exclui os 15 do dia anterior)
        const numerosRestantes = todosNumeros.filter(num => !numerosAnteriores.includes(num));

        // 3. Seleciona 6 números aleatórios dos 10 restantes
        const numerosSelecionadosRestantes = [];
        const totalRestantes = 6;

        while (numerosSelecionadosRestantes.length < totalRestantes && numerosRestantes.length > 0) {
            const randomIndex = Math.floor(Math.random() * numerosRestantes.length);
            numerosSelecionadosRestantes.push(numerosRestantes.splice(randomIndex, 1)[0]);
        }

        // 4. Junta os 15 números anteriores com os 6 selecionados
        const todosOsNumerosParaSorteio = [...numerosAnteriores, ...numerosSelecionadosRestantes];


        // 5. Sorteio final de 15 números (7 pares e 8 ímpares)
        const numerosPares = todosOsNumerosParaSorteio.filter(num => num % 2 === 0);
        const numerosImpares = todosOsNumerosParaSorteio.filter(num => num % 2 !== 0);
        const numerosSorteados = [];

        while (numerosSorteados.length < 15) {
            if (numerosSorteados.filter(num => num % 2 === 0).length < 7 && numerosPares.length > 0) {
                const randomIndexPar = Math.floor(Math.random() * numerosPares.length);
                numerosSorteados.push(numerosPares.splice(randomIndexPar, 1)[0]);
            } else if (numerosSorteados.filter(num => num % 2 !== 0).length < 8 && numerosImpares.length > 0) {
                const randomIndexImpar = Math.floor(Math.random() * numerosImpares.length);
                numerosSorteados.push(numerosImpares.splice(randomIndexImpar, 1)[0]);
            }
        }

        // 6. Ordena os números sorteados em ordem crescente
        numerosSorteados.sort((a, b) => a - b);

        // Exibe os números sorteados na tela
        numerosSorteados.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            listaSorteados.appendChild(li);
        });

        // debug
        debugInfo.textContent = `
           Números Anteriores: ${numerosAnteriores.join(', ')}
           \nNúmeros Restantes (após remover anteriores): ${numerosRestantes.join(', ')}
           \nNúmeros Selecionados Restantes: ${numerosSelecionadosRestantes.join(', ')}
           \nTodos os números para sorteio: ${todosOsNumerosParaSorteio.join(', ')}
           \nNúmeros sorteados: ${numerosSorteados.join(', ')}`
    });
});