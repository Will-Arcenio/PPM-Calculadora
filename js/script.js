function calcular() {
    // Pega valor dos números e da operção
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let op = parseFloat(document.getElementById('operacao').value);
    let re = 0;

    // Valida se realmente são valores numéricos
    if (isNaN(n1)) {
        return alert('Digite um número válido para o primeiro valor.');
    }
    if (isNaN(n2)) {
        return alert('Digite um número válido para o segundo valor.');
    }

    // Valida operação
    if (isNaN(op)) {
        return alert('Operação inválida');
    }

    switch (parseFloat(op)) {
        case 1:
            re = (n1 + n2);
            break;
        case 2:
            re = n1 - n2;
            break;
        case 3:
            re = n1 * n2;
            break;
        case 4:
            if (n2 === 0) {
                return alert('O divisor não pode ser zero (0).');
            }
            re = n1 / n2;
            break;
        default:
            alert('Operação inválida');
    }

    document.getElementById('resultado').innerHTML = re.toFixed(2);
}


function limpar() {
    let n1 = document.getElementById('numero1').value = '';
    let n2 = document.getElementById('numero2').value = '';
    let op = document.getElementById('operacao').value = 0;
    document.getElementById('resultado').innerHTML = '0.00'
}