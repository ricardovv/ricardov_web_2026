// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// FONDOS ALEATORIOS 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Cada vez que se carga la pagina, se ejecuta funcion especificada.
window.onload = fondo;
var nom = document.getElementById("nombre"); //escoge elemento donde cagara imagen. 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Lista de las rutas precargar
const imagenesParaPrecargar = [
"imgbg01.jpg", "imgbg02.jpg", "imgbg03.jpg, imgbg04.jpg", "imgbg05.jpg", 
                            "imgbg06.jpg", "imgbg07.jpg", "imgbg08.jpg, imgbg09.jpg", "imgbg10.jpg", 
                            "imgbg11.jpg", "imgbg12.jpg", "imgbg13.jpg, imgbg14.jpg", "imgbg15.jpg", 
                            "imgbg16.jpg", "imgbg17.jpg", "imgbg18.jpg, imgbg19.jpg"
                        ];


function preloadImages(imageArray) {
    imageArray.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

// precarga al cargar la página
window.addEventListener('load', () => {
    preloadImages(imagenesParaPrecargar);
});




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//Funcion para cargar imagenes. 
function fondo(){   
	
   var divbg = document.getElementById("caja"); //escoge elemento donde cagara imagen. 
   var imgarray = new Array("imgbg01.jpg", "imgbg02.jpg", "imgbg03.jpg, imgbg04.jpg", "imgbg05.jpg", 
                            "imgbg06.jpg", "imgbg07.jpg", "imgbg08.jpg, imgbg09.jpg", "imgbg10.jpg", 
                            "imgbg11.jpg", "imgbg12.jpg", "imgbg13.jpg, imgbg14.jpg", "imgbg15.jpg", 
                            "imgbg16.jpg", "imgbg17.jpg", "imgbg18.jpg, imgbg19.jpg", "imgbg20.jpg" 
   ); // lista de elementos en la carpeta 
    var imgElegida = Math.floor(Math.random()* imgarray.length); //valor aleatorio entre 0 y largo de lista de imagenes. 

    divbg.style.background="url(img_2026/"+imgarray[imgElegida]+")"; //coloca imagen escogida como bg del elemento.  
    divbg.style.backgroundSize="cover";  //para que se vea completa en la caja correspondiente. 

    //nom.innerHTML = imgElegida, imgarray[imgElegida];

} 

 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
