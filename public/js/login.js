
    let formulario = document.querySelector('#login');
    let mail = document.getElementById('email');
    let pass =document.getElementById('pass');

     


    formulario.addEventListener('submit',function(e){
       
        
        let errores = 0;
        if(mail.value.length<1){
            alert('este campo debe estar completo');
            errores=1;
        }
        if(pass.value.length<1){
            alert( 'este campo debe estar completo');
            errores = 1;
        }

        if (errores==0){
            formulario.submit();
        } else {
            e.preventDefault();
        }
        
        }
    )
