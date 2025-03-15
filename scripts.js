// 1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let otroNombre= document.getElementById('gen-1')
otroNombre.textContent = 'Generasión 1 Pokimon';
console.log(otroNombre);

//2Cambia el color de fondo de la primera generación de Pokimon.
    document.querySelector('.infocard-list.infocard-list-pkmn-lg').addEventListener('mouseover', function(){
        this.style.backgroundColor = 'yellow';

    });

    //3. Imprime por consola la URL de la página.
let url = 'file:///C:/Users/midif/OneDrive/Escritorio/tareas/fundamentos-de-programacion-kata-bichomon/index.html'
console.log('Este es el url de la pagina de bichomon en mi pc' + url);
    
    //4. Imprime por consola el dominio de la página.
    //No tiene dominio porque esta en un archivo local.


    //5. Imprime todos los nodos de imagen.
    let listaNodosImg = document.querySelectorAll('img');
    console.log(listaNodosImg);
    //6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
 function miFuncion(){
document.querySelectorAll('img').forEach(function(imagen) {
        imagen.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
        });
    };
    
    window.onload = function() {
        miFuncion();
    };
    //*Premium:*
    
    //7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

    document.querySelectorAll('.infocard-lg-data.text-muted .itype.flying').forEach(function(span) {
        span.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'green';
        });
    });
    