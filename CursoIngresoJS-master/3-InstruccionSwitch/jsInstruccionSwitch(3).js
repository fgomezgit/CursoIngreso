function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
    switch(mesDelAño) 
    {
        default:
            alert("Este mes tiene 30 días o más.");
            break;

        case "Febrero":
            alert("Este mes no tiene más de 29 días.");
            break;
    }
        
}//FIN DE LA FUNCIÓN