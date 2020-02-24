var valorEntrada = document.getElementById('horaEntrada').value
var valorSaida = document.getElementById('horaSaida').value

function calcularValor(){
    var valorEntrada = (document.getElementById('horaEntrada').value)
    var valorSaida = document.getElementById('horaSaida').value
    var valorEntradaSemPonto = valorEntrada.split(':')
    var valorSaidaSemPonto = valorSaida.split(':')
    var valorEntradaVerificar = valorEntradaSemPonto[0];
    var valorSaidaVerificar = valorSaidaSemPonto[0];

    if(valorEntradaVerificar < 12 && valorSaidaVerificar >= 1){
       var aux;
       var naux;
       var resultado;
       aux = valorEntradaVerificar - 12;
       naux = aux * -1;
       
       valorSaidaVerificar = parseInt(valorSaidaVerificar)
       naux = parseInt(naux)

       resultado = naux+valorSaidaVerificar
       alert(resultado)
       
    } else if (valorEntradaVerificar >= 12){
        var novaAux;

        valorSaidaVerificar = parseInt(valorSaidaVerificar)
        valorEntradaVerificar = parseInt(valorEntradaVerificar)

        novaAux = valorEntradaVerificar + valorSaidaVerificar
        novaAux = novaAux - valorEntradaVerificar 
        
        alert(novaAux)
    }
        
    
    
    
    
}
