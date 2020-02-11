

/// CONTENIDO DE PRODUCTOS PLANTAS

var plant1 = {
  "img": "img/Crassula-Umbella.png",
  "title": "Crasullas",
  "description": "Las Crasulas son de las Clases de Suculentas tipo arboles con los diseños más Asombrosos.",
  "price": "10.000 COP / unidad"
};

var plant2 = {
  "img": "img/Aloe-Vera.jpg",
  "title": "Áloe Veras",
  "description": "También llamadas “Sábila”, son una de las Variedades de Suculentas más utilizadas en el mundo.",
  "price": "15.000 COP / unidad"
};

var plant3 = {
  "img": "img/Planta-estomago.png",
  "title": "Gatos",
  "description":"Las Gasterias son de los Tipos de Crasas mas Raras que existen. Son muy buscadas por coleccionistas.",
  "price": "25.000 COP / unidad"
};

var plant4 = {
  "img": "img/Suculentas-cebra-Haworthias.jpg",
  "title": "Hawortias",
  "description":"También conocidas como Planta Suculenta Cebra, son una de las Crasas más usadas en la decoración.",
  "price": "20.000 COP / unidad"
}; 

var plant5 = {
  "img": "img/rosas-suculentasEcheverias.jpg",
  "title": "Echeverias",
  "description":"Las Echeverias son consideradas las variedades más hermosas de todas las Plantas Crasas y Suculentas.",
  "price": "20.000 COP / unidad"
}; 

var plant6 = {
  "img": "img/Plantas-Lengua-de-tigreSansevieria.png",
  "title": "Sansevieria",
  "description":"Las Sansevieria son consideradas Plantas Purificadoras de Aire por Excelencia. Muy usadas en Interiores.",
  "price": "30.000 COP / unidad"
}; 

var plants = [plant1,plant2,plant3,plant4,plant5,plant6];

var content = '';
for (var i = 0; i < plants.length; i++){
  content += '<div class="col-4 col-xs-12">'
                  + '<img src="' + plants[i].img + '" class="plants img-fluid">'+'<br>'
                  + '<h4>' + plants[i].title + '</h4>'
                  +'<p>'+plants[i].description+'</p>'+'<br>'
                  + "</div>";
}

document.getElementById('plants').innerHTML = '<div = class="container">' + '<div class="row">' +content + '</div>'+ '</div>'; 

//

//CONTENIDO SEMILLAS




//CONTENIDO HERRAMIENTAS

