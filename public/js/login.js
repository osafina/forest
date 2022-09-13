
    let formulario = document.querySelector('#login');
    let mail = document.getElementById('email');
    let pass =document.getElementById('pass');

     console.log(formulario)


    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let errores = {};
        if(mail.value.length<1){
            alert('este campo debe estar completo');
        }
        if(pass.value.length<1){
            alert( 'este campo debe estar completo');
        };
        }
    )
