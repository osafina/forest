
let formulario = document.querySelector('#login');
let mail = document.getElementById('email');
let pass = document.getElementById('pass');




formulario.addEventListener('submit', function (e) {


    let errores = 0;
    let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
    if(!reEmail.test(mail.value)){
        alert('El email es inválido...');
        errores=1;
    }
    if (mail.value.length < 1) {
        alert('este campo debe estar completo');
        errores = 1;
    }
    if (pass.value.length < 1) {
        alert('este campo debe estar completo');
        errores = 1;
    }

    if (errores == 0) {
        formulario.submit();
    } else {
        e.preventDefault();
    }

}
)
