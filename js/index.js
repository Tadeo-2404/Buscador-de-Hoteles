//VARIABLES
const city = document.querySelector('#city');
const min = document.querySelector('#min-price');
const max = document.querySelector('#max-price');
const beach = document.querySelector('#beach');
const rating = document.querySelector('#rating');
// -----------------------------------------------
const hoteles = document.querySelectorAll('.hotel');
const price = document.querySelectorAll('.price');
const ratingText = document.querySelectorAll('.rate-text');
const ubicacion = document.querySelectorAll('.hotel-location h3');
const playa = document.querySelectorAll('.service-img-beach');
let pp;

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
    console.log(ids)
    hoteles.forEach(hotel => {
      let id = hotel.dataset.id;
      console.log(id)
  
      if(ids.includes(id)){
         alert('si')
      }
  })
   };
 



 function filtrarLocation(hotel) {
    if(datos.location) {
       return hotel.location === datos.location;
    }
    return hotelesJava;
 }

 function filtrarRating(hotel) {
    if(datos.rating) {
       return hotel.rating === datos.rating;
    }
    return hotelesJava;
 }

 function filtrarBeach(hotel) {
    if(datos.beach) {
       return hotel.beach === datos.beach;
    }
    return hotelesJava;
 }

 function filtrarMin(hotel) {
    if(datos.min) {
       return hotel.price >= parseInt(datos.min);
    }
    return hotelesJava;
 }

 function filtrarMax(hotel) {
    if(datos.max) {
       return hotel.price <= parseInt(datos.max);
    }
    return hotelesJava;
 }
 


