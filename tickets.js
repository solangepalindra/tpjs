function resumenFuncion() {

    let nom =  document.getElementById("nombre").value;
     let ape=  document.getElementById('apellido').value; 
   let corr= document.getElementById('correo').value;
   let cantida =  document.getElementById("cantidaticket").value;
    let cate = document.getElementById("categoria");
    let categorias = cate.options[cate.selectedIndex].text;
    let valor=0;
    let numero= parseInt(cantida);
    
    if ( isNaN(numero) || numero <= 0 ||  nom==''|| ape==''|| corr=='' ){
     // document.getElementById("cantidaticket").innerHTML=0;
     alert("EN CANTIDAD INGRESE SOLO NUMEROS ENTEROS MAYORES A CERO , TODOS LOS CAMPOS SON OBLIGATORIOS");
     
    }else{
        switch (categorias) {
               case "Estudiante":
                    valor= parseInt(cantida)*200*0.2;
                    document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                    break;
              case "Trainee":
                   valor = parseInt(cantida)*200*0.5; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             case "Junior":
                   valor = parseInt(cantida)*200*0.85; 
                   document.getElementById("ptotal").innerHTML="Total a Pagar: $"+valor;
                   break;
             default:
                   break;
        }/* fin del switch */
   }/* fin del else */
}/* fin funcion */

function borraResumen() {
      document.getElementById("ptotal").innerHTML="Total a Pagar: $";      
      
}  