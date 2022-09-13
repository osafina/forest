let formulario = document.querySelector('#register');
    let mail = document.getElementById('email');
    let pass =document.getElementById('pass');
    let pass2 =document.getElementById('pass2');
    let nameU =document.getElementById('nameU');
    let name =document.getElementById('name');


    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let errores = {};
        if(mail.value.length<1){
            alert('este campo debe estar completo');
        }
        if(pass.value.length<1){
            alert('este campo debe estar completo ');
        }
        if(pass!=pass2){
            alert('las contraseñas no coinciden')

        }
        if (nameU.value.length<1){
        alert('este campo debe estar completo ');
        }
    }

    )
