function escrever(texto){
    return document.write("<br>"+ texto);
}

alert('Boas vinda, voce foi desafiado a descobrir um numero:');
    var palpite = parseInt(prompt('Escolha um numero entre 1 e 10:'));
    while(isNaN(palpite) || palpite <= 0 || palpite > 10){
        alert('Por favor digite um numero inteiro e que satisfaça a condição inicial [1,10]');
        var palpite = parseInt(prompt('Escolha um numero entre 0 e 10:'));
    }

    var numeroSecreto = Math.floor(Math.random()*10 + 1);
    var soma = 0;
    var contador = 1;
    soma += palpite
    while(palpite != numeroSecreto){
        if(palpite < numeroSecreto){
            palpite = parseInt(prompt('É maior, escolha outro:'));
            while(isNaN(palpite) || palpite <= 0 || palpite > 10){
                alert('Por favor digite um numerointeiro e que satisfaça a condição inicial [1,10]');
                palpite = parseInt(prompt('É maior, escolha outro:'));
            }
            soma += palpite
            contador ++
            
        }else{
            palpite = parseInt(prompt('É menor, escolha outro:'));
            while(isNaN(palpite) || palpite <= 0 || palpite > 10){
                alert('Por favor digite um numerointeiro e que satisfaça a condição inicial [1,10]');
                palpite = parseInt(prompt('É menor, escolha outro:'));
            }
            soma +=palpite
            contador ++
        }

    }
    escrever('')
    escrever('')
    escrever(`Parabens voce acertou - o numero secreto foi: ${numeroSecreto}`);
    escrever(`Voce utilizou ${contador} palpites. A soma dos seus palpites é ${soma}`);
