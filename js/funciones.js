let elementosAcordeon = document.getElementsByClassName("acordeon");

for(let i = 0; i < elementosAcordeon.length; i++){

    elementosAcordeon[i].addEventListener("click", function(){
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;

        if(panel.style.display == "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block"
        }
    });
}
//---------------------------------------------------

function cambiaFondo(x){
    console.log(x.value);

    var body = document.getElementById("body");
    body.style.backgroundColor = x.value;
    localStorage.setItem('color', x.value);
}
//------------------------------------------
const mostrarColor = () =>{
    const color = localStorage.getItem("color");
    
    if (color) {
        var body = document.getElementById("body");
        body.style.backgroundColor = color;
    }
}
