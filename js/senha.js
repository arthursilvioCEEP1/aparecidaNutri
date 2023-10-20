var buttonLogin = document.querySelector("button")
var senha = document.querySelector("#senha")
var usuario = document.querySelector("#usuario")

buttonLogin.addEventListener("click", function(event) {
    event.preventDefault()

    if (usuario.value === "admin" && senha.value === "admin"){
        window.location.href = "sistema.html"
    }else{
        window.alert("Usuário ou senha incorreto")
    }
    
})

