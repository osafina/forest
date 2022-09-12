window.addEventListener('load',function(){
    let formulario = document.querySelector('form.login');
    
    let btnsubmit = querySelector('#btnRegister');
    let inputmail = querySelector('#email');
    let contraseña = querySelector('#pass');

    formulario.addEventListener('click',function(e){
        e.preventDefault();
        let errores = {};
        if(inputmail.value.length<1){
            errores.email='este campo debe estar completo'
        }
        if(contraseña.value.length<1){
            errores.password = 'este campo debe estar completo'
        };
        }
    )})