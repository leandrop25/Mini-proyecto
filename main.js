var imagenes = ["https://concepto.de/wp-content/uploads/2018/08/software-de-sistema-1-e1534948748523.jpg","https://sites.google.com/site/sistemas2503/_/rsrc/1472865211946/videos-informatica/diferencias-y-semejanzas-entre-los-sistemas-informaticos-y-los-sistemas-de-informacion/sistemas.jpg","https://www.isotools.org/wp-content/uploads/2019/02/Sistemas-Integrados-de-Gesti%C3%B3n.jpg","https://concepto.de/wp-content/uploads/2018/08/software-de-sistema-1-e1534948748523.jpg"],
cont = 0;

function carrousel(contenedor){
  contenedor.addEventListener("click", e => {
    let atras = contenedor.querySelector('.atras'),
    adelante = contenedor.querySelector('.adelante'),
    img = contenedor.querySelector('img'),
    tgt = e.target;

    if(tgt == atras){
      if(cont > 0){
        img.src = imagenes[cont-1];
        cont--;
      }else{
        img.src - imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }

    }else if(tgt == adelante){
      if(cont < imagenes.length - 1){
        img.src = imagenes[cont + 1];
        cont++;
      }else{
        img.src - imagenes[0];
        cont = 0;
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector('.contenedor');
  carrousel(contenedor);
});