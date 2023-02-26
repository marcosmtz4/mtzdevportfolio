// Elabora un portafolio (Web Site) que contenga informacion sobre ti, tus habilidades y conocimientos
// Las herramientas manejadas, informacion de contacto y un reloj en la pantalla principal.
// Este portafolio debe estar Disponible en GitHub Pages.

// En index coloca:
//     - Menu / nav
//     - Reloj
//     - Nombre y Apellido
//     - Estudiante de Desarrollo Web / (Medico, Ingeniero Civil).
//     - Biografia (al menos 10 lineas).
//     - Footer

// En contacto coloca:
//     - Menu / nav
//     - Nombre y Apellido
//     - Formulario / Anclas de redes (GitHub, Whatsapp, Instagram, Telegram, Correo, etc...)
//         El boton de Enviar del Formulario debe tener un evento que cambie el color de fondo 
//         y el innerText diciendo "Enviado! ✅"
//     - Footer

// En trabajos coloca:
//     - Menu / nav
//     - Nombre y Apellido
//     - Lenguajes Conocidos
//     - Herramientas manejadas
//     - Trabajos Realizados (Img y Ancla);
//     - Footer


//     Pueden utilizar CSS, SASS, Tailwind, 
    
    
//     Opcional: 
//     Libreria de animacion al hacer Scroll: https://michalsnik.github.io/aos/


// Tiempo de entrega: 27/02/2023
function Reloj() {
    const hora = new Date();
    let horas = hora.getHours();
    let minutos = hora.getMinutes();
    minutos = tiempo(minutos);
    document.getElementById('reloj').innerHTML =  horas + ":" + minutos;
    setTimeout(Reloj, 1000);
    }
    
    function tiempo(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }

Reloj()

function cambiarcolor() {
    document.getElementById("enviado").style.backgroundColor = "green";
    document.getElementById("enviado").innerHTML = "Enviado! ✅";
}