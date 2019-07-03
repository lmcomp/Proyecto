function empezarP(){
    tempo1();
    tempo2();
    tempo3();
    tempo4();
}

function empezarComunicacion(){
    tempo5();
    tempo6();
    tempo7();
}

function empezarVideojuegos(){
    tempo8();
    tempo9();
    tempo10();
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
        document.getElementById("carrusel").src = "IMG/universidad1.jpg";
    }else if (cont == 2){
        document.getElementById("carrusel").src = "IMG/universidad2.jpg";
    }else if (cont == 3){
        document.getElementById("carrusel").src = "IMG/universidad3.jpg";
    }else if (cont == 4){
        document.getElementById("carrusel").src = "IMG/universidad4.jpg";
    }else if (cont == 5){
        document.getElementById("carrusel").src = "IMG/universidad5.jpg";
    }else if (cont == 6){
        document.getElementById("carrusel").src = "IMG/universidad6.jpg";
    }else if (cont == 7){
        document.getElementById("carrusel").src = "IMG/universidad7.jpg";
    }
}

var cont1 = 0;
function tempo1(){
    if (cont1 == 5){
        cont1 = 1;
    }
    
    public1();
    setTimeout(tempo1, 3000);
    cont1++;
}

function public1(){
     if (cont1 == 1){
        document.getElementById("imgLenovo").src = "IMG/lenovo.jpg";
    }else if (cont1 == 2){
        document.getElementById("imgLenovo").src = "IMG/lenovo2.jpg";
    }else if (cont1 == 3){
        document.getElementById("imgLenovo").src = "IMG/lenovo4.jpg";
    }else if (cont1 == 4){
        document.getElementById("imgLenovo").src = "IMG/lenovo5.jpg";
    }
}

var cont2 = 0;
function tempo2(){
    if (cont2 == 4){
        cont2 = 1;
    }
    
    public2();
    setTimeout(tempo2, 3000);
    cont2++;
}

function public2(){
    if (cont2 == 1){
        document.getElementById("imgHP").src = "IMG/hp2.jpg";
    }else if (cont2 == 2){
        document.getElementById("imgHP").src = "IMG/hp3.jpg";
    }else if (cont2 == 3){
        document.getElementById("imgHP").src = "IMG/hp5.jpg";
    }
}

var cont3 = 0;
function tempo3(){
    if (cont3 == 4){
        cont3 = 1;
    }
    
    public3();
    setTimeout(tempo3, 3000);
    cont3++;
}

function public3(){
    if (cont3 == 1){
        document.getElementById("imgMsi").src = "IMG/msi.jpg";
    }else if (cont3 == 2){
        document.getElementById("imgMsi").src = "IMG/msi3.jpg";
    }else if (cont3 == 3){
        document.getElementById("imgMsi").src = "IMG/msi5.jpg";
    }
}

var cont4 = 0;
function tempo4(){
    if (cont4 == 7){
        cont4 = 1;
    }
    
    public4();
    setTimeout(tempo4, 2000);
    cont4++;
}

function public4(){
    if (cont4 == 1){
        document.getElementById("imgP").src = "IMG/comunicacion.jpg";
    }else if (cont4 == 2){
        document.getElementById("imgP").src = "IMG/videojuegosPc2.jpg";
    }else if (cont4 == 3){
        document.getElementById("imgP").src = "IMG/walkiTalki2.jpg";
    }else if (cont4 == 4){
        document.getElementById("imgP").src = "IMG/comunicacion1.jpg";
    }else if (cont4 == 5){
        document.getElementById("imgP").src = "IMG/videojuegosPc3.jpg";
    }else if (cont4 == 6){
        document.getElementById("imgP").src = "IMG/walkiTalki.jpg";
    }
}

var cont5 = 0;
function tempo5(){
    if (cont5 == 5){
        cont5 = 1;
    }
    
    public5();
    setTimeout(tempo5, 3000);
    cont5++;
}

function public5(){
    if (cont5 == 1){
        document.getElementById("imgTelefono").src = "IMG/comunicacion.jpg";
    }else if (cont5 == 2){
        document.getElementById("imgTelefono").src = "IMG/comunicacion1.jpg";
    }else if (cont5 == 3){
        document.getElementById("imgTelefono").src = "IMG/comunicacion2.jpg";
    }else if (cont5 == 4){
        document.getElementById("imgTelefono").src = "IMG/comunicacion3.jpg";
    }
}

var cont6 = 0;
function tempo6(){
    if (cont6 == 5){
        cont6 = 1;
    }
    
    public6();
    setTimeout(tempo6, 3000);
    cont6++;
}

function public6(){
    if (cont6 == 1){
        document.getElementById("imgWalkiTalki").src = "IMG/walkiTalki.jpg";
    }else if (cont6 == 2){
        document.getElementById("imgWalkiTalki").src = "IMG/walkiTalki1.jpg";
    }else if (cont6 == 3){
        document.getElementById("imgWalkiTalki").src = "IMG/walkiTalki2.jpg";
    }else if (cont6 == 4){
        document.getElementById("imgWalkiTalki").src = "IMG/walkiTalki3.jpg";
    }
}

var cont7 = 0;
function tempo7(){
    if (cont7 == 5){
        cont7 = 1;
    }
    
    public7();
    setTimeout(tempo7, 3000);
    cont7++;
}

function public7(){
    if (cont7 == 1){
        document.getElementById("imgHuawei").src = "IMG/huawei.jpg";
    }else if (cont7 == 2){
        document.getElementById("imgHuawei").src = "IMG/huawei1.jpg";
    }else if (cont7 == 3){
        document.getElementById("imgHuawei").src = "IMG/huawei3.jpg";
    }else if (cont7 == 4){
        document.getElementById("imgHuawei").src = "IMG/huawei4.jpg";
    }
}

var cont8 = 0;
function tempo8(){
    if (cont8 == 5){
        cont8 = 1;
    }
    
    public8();
    setTimeout(tempo8, 3000);
    cont8++;
}

function public8(){
    if (cont8 == 1){
        document.getElementById("imgPlay").src = "IMG/videojuegos.jpg";
    }else if (cont8 == 2){
        document.getElementById("imgPlay").src = "IMG/videojuegos1.jpg";
    }else if (cont8 == 3){
        document.getElementById("imgPlay").src = "IMG/videojuegos4.jpg";
    }else if (cont8 == 4){
        document.getElementById("imgPlay").src = "IMG/videojuegos3.png";
    }
}

var cont9 = 0;
function tempo9(){
    if (cont9 == 5){
        cont9 = 1;
    }
    
    public9();
    setTimeout(tempo9, 3000);
    cont9++;
}

function public9(){
    if (cont9 == 1){
        document.getElementById("imgPc").src = "IMG/videojuegosPc.jpg";
    }else if (cont9 == 2){
        document.getElementById("imgPc").src = "IMG/videojuegosPc1.jpg";
    }else if (cont9 == 3){
        document.getElementById("imgPc").src = "IMG/videojuegosPc2.jpg";
    }else if (cont9 == 4){
        document.getElementById("imgPc").src = "IMG/videojuegosPc3.jpg";
    }
}

var cont10 = 0;
function tempo10(){
    if (cont10 == 5){
        cont10 = 1;
    }
    
    public10();
    setTimeout(tempo10, 3000);
    cont10++;
}

function public10(){
    if (cont10 == 1){
        document.getElementById("imgSwitch").src = "IMG/videojuegosSwitch.jpeg";
    }else if (cont10 == 2){
        document.getElementById("imgSwitch").src = "IMG/videojuegosSwitch1.jpeg";
    }else if (cont10 == 3){
        document.getElementById("imgSwitch").src = "IMG/videojuegosSwitch2.jpeg";
    }else if (cont10 == 4){
        document.getElementById("imgSwitch").src = "IMG/videojuegosSwitch3.jpeg";
    }
}

var cont11 = 0;
function tempo11(){
    if (cont11 == 5){
        cont11 = 1;
    }
    
    public11();
    setTimeout(tempo11, 3000);
    cont11++;
}

function public11(){
    if (cont11 == 1){
        document.getElementById("carruselInstalaciones").src = "IMG/instalaciones.jpg";
    }else if (cont11 == 2){
        document.getElementById("carruselInstalaciones").src = "IMG/instalaciones2.jpg";
    }else if (cont11 == 3){
        document.getElementById("carruselInstalaciones").src = "IMG/instalaciones3.jpg";
    }else if (cont11 == 4){
        document.getElementById("carruselInstalaciones").src = "IMG/instalaciones4.jpg";
    }
}

var cont12 = 0;
function tempo12(){
    if (cont12 == 6){
        cont12 = 1;
    }
    
    public12();
    setTimeout(tempo12, 3000);
    cont12++;
}

function public12(){
    if (cont12 == 1){
        document.getElementById("imgDiseño").src = "IMG/diseño.png";
    }else if (cont12 == 3){
        document.getElementById("imgDiseño").src = "IMG/diseño1.jpg";
    }else if (cont12 == 4){
        document.getElementById("imgDiseño").src = "IMG/diseño3.jpg";
    }else if (cont12 == 5){
        document.getElementById("imgDiseño").src = "IMG/diseño4.png";
    }
}

function validarForm(){
    if (document.form.nombre.value == ""){
        alert("El nombre es obligatorio!!");
        return false;
    }
    
    if (document.form.mail.value == ""){
        alert("El correo es obligatorio!!");
        return false;
    }
    
    if (document.form.telefono.value == ""){
        alert("El teléfono es obligatorio!!");
        return false;
    }
    
    if (document.form.consultoria.checked == false  && document.form.desarrollo.checked == false && document.form.pedidos.checked == false && document.form.otros.checked == false){
        alert("Debe seleccionar un asunto")
        return false;
    }
    
    alert("Su pedido llegará en 20 horas");
    return true;
}

function validarFormCompra(){
    if (document.form1.nombre1.value == ""){
        alert("El nombre es obligatorio!!");
        return false;
    }else if (document.form1.mail1.value == ""){
        alert("El correo es obligatorio!!");
        return false;
    }else if (document.form1.telefono1.value == ""){
        alert("El teléfono es obligatorio!!");
        return false;
    }
    
    if (document.form1.inform.checked == false && document.form1.comunica.checked == false && document.form1.video.checked == false){
        alert("El tipo es obligatorio!!");
        return false;
    }
    
    alert("Recibirá un correo nuestro con un catálogo para que seleccione lo que desea comprar.");
    return true;
}