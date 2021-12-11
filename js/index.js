//VARIABLES ----CAMPOS SELECT HTML
const city = document.querySelector('#city');
const min = document.querySelector('#min-price');
const max = document.querySelector('#max-price');
const beach = document.querySelector('#beach');
const rating = document.querySelector('#rating');
// --------------ELEMENTOS----------------------------
const hoteles = document.querySelectorAll('.hotel');
const price = document.querySelectorAll('.price');
const ratingText = document.querySelectorAll('.rate-text');
const ubicacion = document.querySelectorAll('.hotel-location h3');
const playa = document.querySelectorAll('.service-img-beach');


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
   
      if(ids.includes(id))  {
         hotel.classList.add('put');
      } else {
         hotel.classList.remove('put');
      }
   })
   

};
 


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
 


