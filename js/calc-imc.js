var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++) {

var paciente = pacientes[i]

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc")

var pesoValido = true
var alturaValido = true

if(!pesoValido){
    tdImc.textContent = "Peso invalido"
    paciente.classList.add("paciente-invalido")
    pesoValido = false
}

if(!alturaValido){
    tdImc.textContent = "Altura invalido"
    paciente.classList.add("paciente-invalido")
    alturaValido = false
}

if (pesoValido === true && alturaValido === true) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
}
}

function calculaImc(peso, altura){
    var imc = 0

    imc = peso / (altura * altura);

    return imc.toFixed(2)
}

function validaPeso(peso){

    if (peso >= 0 && peso < 500) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true
    } else {
        return false
    }
}






