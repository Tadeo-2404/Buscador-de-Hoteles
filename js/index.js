//VARIABLES ----CAMPOS SELECT HTML
const city = document.querySelector('#city');
const min = document.querySelector('#min-price');
const max = document.querySelector('#max-price');
const beach = document.querySelector('#beach');
const rating = document.querySelector('#rating');
// --------------ELEMENTOS----------------------------
const hoteles = document.querySelectorAll('.hotel');
const numberContainer = document.querySelector('.number-container');
const result2 = document.querySelector('.paragraph');

const datos = {
    name: '',
    location: '',
    beach: '',
    min: '',
    max: '',
    rating: ''
}

//EVENTOS
city.addEventListener('change', (e) => {
    datos.location = e.target.value;
    filtrar();
});

min.addEventListener('change', (e) => {
    datos.min = e.target.value;
    filtrar();
});

max.addEventListener('change', (e) => {
    datos.max = e.target.value;
    filtrar();
});

beach.addEventListener('change', (e) => {
    datos.beach = e.target.value;
    filtrar();
});

rating.addEventListener('change', (e) => {
    datos.rating = e.target.value;
    filtrar();
});



//FUNCIONES
function filtrar() {
    const resultado = hotelesJava.filter(filtrarLocation).filter(filtrarRating).filter(filtrarBeach).filter(filtrarMin).filter(filtrarMax);
 
    let ids = resultado.map( (item) => item.id);
    hoteles.forEach(hotel => {
      let id = parseInt(hotel.dataset.id);
   
      if(!ids.includes(id))  {
         hotel.classList.add('quit');
      } else {
         hotel.classList.remove('quit');
      }
   });

      
   //SI NO HAY RESULTADO
   if(resultado.length === 0) {
      result2.classList.add('display');
   } else {
      result2.classList.remove('display');
   }


   //AÑADIR CANTIDAD DE RESULTADOS
   const long = resultado.length;
   const text = document.createElement('p');
   text.textContent = `${long} results match with your searching`;
   text.classList.add('number-container-class')
   
   //SI EL DIV YA TIENE HIJOS LOS REMPLAZA
  if(numberContainer.childElementCount <= 0) {
     numberContainer.appendChild(text);
   } else {
     numberContainer.firstChild.replaceWith(text) 
   }
};

function limpiar() {
   
}
 
//FILTRA LA UBICACION
 function filtrarLocation(hotel) {
    if(datos.location) {
       return hotel.location === datos.location;
    }
    return hotelesJava;
 }

 //FILTRA EL RATING
 function filtrarRating(hotel) {
    if(datos.rating) {
       return hotel.rating === datos.rating;
    }
    return hotelesJava;
 }

 //FILTRA SI TIENE PLAYA
 function filtrarBeach(hotel) {
    if(datos.beach) {
       return hotel.beach === datos.beach;
    }
    return hotelesJava;
 }

 //FILTRA EL PRECIO MINIMO
 function filtrarMin(hotel) {
    if(datos.min) {
       return hotel.price >= parseInt(datos.min);
    }
    return hotelesJava;
 }

 //FILTRA EL PRECIO MAXIMO
 function filtrarMax(hotel) {
    if(datos.max) {
       return hotel.price <= parseInt(datos.max);
    }
    return hotelesJava;
 }
 

//EFECTO TYPING
var aText = new Array(
   "Search the best Hotels in the best Cities",
   );
   var iSpeed = 100; // time delay of print out
   var iIndex = 0; // start printing array at this posision
   var iArrLength = aText[0].length; // the length of the text array
   var iScrollAt = 20; // start scrolling up at this many lines
    
   var iTextPos = 0; // initialise text position
   var sContents = ''; // initialise contents variable
   var iRow; // initialise current row
    
   function typewriter()
   {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
     sContents += aText[iRow++] + '<br/>';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
     iTextPos = 0;
     iIndex++;
     if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
     }
    } else {
     setTimeout("typewriter()", iSpeed);
    }
   }
   typewriter();