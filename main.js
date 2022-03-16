$("#btn").click(function(e){
    e.preventDefault();
    var numeral = $('#numero').val();
    $("#number").html(obtenerFactores(numeral));
    console.log(obtenerFactores(numeral))
  })
// function getRandom() {
//     let start = document.getElementsByClassName('start')[0].value;
//     let end = document.getElementsByClassName('end')[0].value;
//     // document.getElementsByClassName('number')[0].innerHTML = 'The random number is: ' + getRandomBetween(parseInt(start), parseInt(end));
// }


// function getRandomBetween(start, end) {
//     return Math.floor(Math.random() * (end - start + 1)) + start;
// }

function obtenerFactores(numero) {

    // if (!Number.isInteger(numero)) {
    //     throw alert('El argumento debe ser un número entero.');
    // }

    // if (numero <= 0) {
    //     throw alert('El argumento debe ser un número entero positivo.');
    // }

    let factores = [];
    
    for (let i = 1; i <= Math.floor(Math.sqrt(numero)); ++i) {
        if (numero % i == 0) {
            factores.push(i);

            if (numero / i !== i) {
                factores.push(numero / i);
            }
        }
    }

    factores.sort((a, b) => a - b);

    return factores;
}


  