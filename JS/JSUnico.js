function empezarP(){
    tempo1();
    tempo2();
    tempo3();
}

function empezarI(){
    tempo();
}

var cont=0;
function tempo(){
    if (cont == 7){
        cont = 1;
    }
    
    public();
    setTimeout(tempo, 3000);
    cont++;
}

function confirmar(){
    var mensaje;
    var opcion = confirm("¿Desea comprar el producto?");
    
    if (opcion == true) {
        window.open("Compra.html");
	} else {
	    alert("Siga mirando...");
	}
}

function public(){
    if (cont == 1){
        document.getElementById("carrusel").src = "../IMG/universidad1.jpg";
    }else if (cont == 2){
        document.getElementById("carrusel").src = "../IMG/universidad2.jpg"
    }else if (cont == 3){
        document.getElementById("carrusel").src = "../IMG/universidad3.jpg"
    }else if (cont == 4){
        document.getElementById("carrusel").src = "../IMG/universidad4.jpg"
    }else if (cont == 5){
        document.getElementById("carrusel").src = "../IMG/universidad5.jpg"
    }else if (cont == 6){
        document.getElementById("carrusel").src = "../IMG/universidad6.jpg"
    }else if (cont == 7){
        document.getElementById("carrusel").src = "../IMG/universidad7.jpg"
    }
}

var cont1 = 0;
function tempo1(){
    if (cont1 == 5){
        cont1 = 1;
    }
    
    public1();
    setTimeout(tempo1, 4000);
    cont1++;
}

function public1(){
     if (cont1 == 1){
        document.getElementById("imgLenovo").src = "../IMG/lenovo.jpg"
    }else if (cont1 == 2){
        document.getElementById("imgLenovo").src = "../IMG/lenovo2.jpg"
    }else if (cont1 == 3){
        document.getElementById("imgLenovo").src = "../IMG/lenovo4.jpg"
    }else if (cont1 == 4){
        document.getElementById("imgLenovo").src = "../IMG/lenovo5.jpg"
    }
}

var cont2 = 0;
function tempo2(){
    if (cont2 == 4){
        cont2 = 1;
    }
    
    public2();
    setTimeout(tempo2, 4000);
    cont2++;
}

function public2(){
    if (cont2 == 1){
        document.getElementById("imgHP").src = "../IMG/hp2.jpg"
    }else if (cont2 == 2){
        document.getElementById("imgHP").src = "../IMG/hp3.jpg"
    }else if (cont2 == 3){
        document.getElementById("imgHP").src = "../IMG/hp5.jpg"
    }
}

var cont3 = 0;
function tempo3(){
    if (cont3 == 4){
        cont3 == 1;
    }
    
    public3();
    setTimeout(tempo3, 4000);
    cont3++;
}

function public3(){
    if (cont3 == 1){
        document.getElementById("imgMsi").src = "../IMG/msi.jpg"
    }else if (cont3 == 2){
        document.getElementById("imgMsi").src = "../IMG/msi3.jpg"
    }else if (cont3 == 3){
        document.getElementById("imgMsi").src = "../IMG/msi5.jpg"
    }
}