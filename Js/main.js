window.onload = function() {  
    var btnMenu = document.querySelector('.btnMenu') 
    if (btnMenu) { 
        btnMenu.addEventListener('click', () => { 
            var menuItems = document.querySelector('.menuItems') 
            menuItems.classList.toggle('show')
        }) 
    } 
}



/* Desde aqui comienza Desafío: Crear un algoritmo utilizando un ciclo */

let ingreseNumero = parseInt(prompt('Ingrese el primer numero para multiplicar' ));


if ( ingreseNumero ==0 ) {
    alert('El numero ingresado debe ser mayor a 0');
}

if ( ingreseNumero >0 ) {

 for ( let i = 1; i <=10; i++) {
    let resultado = ingreseNumero * i;
    console.log(resultado);
    alert(ingreseNumero + 'x' + i + '=' + resultado)} 
}

