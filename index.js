const encriptar = document.querySelector('.button-encriptar');
const desencriptar = document.querySelector('.button-desencriptar');
const textoEncriptar = document.querySelector('.texto-encriptar');
const mensaje_Encriptado = document.querySelector('.mensaje-encriptado');
const imagen = document.querySelector('.imagen-encriptado');
const mensajeSin = document.querySelector('.mensaje-sinTexto');
const copiar = document.querySelector('.button-copiar');
const box = document.querySelector('.encriptador');


function enrciptarTexto(text, encriptador){
    let split_text = text.toLowerCase().split(" ");

    if (encriptador === true){
        for(i=0; i in split_text; i++){
            split_text[i] = split_text[i].replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai")
            .replace(/u/g, "ufat");
        }
    }
    else{
        for(i=0; i in split_text; i++){
            split_text[i] = split_text[i].replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ai/g, "a")
            .replace(/ufat/g, "u");
        }
    }
    
    return split_text.toString().replace(/,/g, " ");
    
}

function estilosResultado(){
    if (window.innerWidth >= 375 && window.innerWidth < 768){
        box.style.height = 'auto';
        mensaje_Encriptado.style.height = 'auto'

    }
    else if(window.innerWidth >= 768 && window.innerWidth < 1440){
        box.style.height = 'auto';
        mensaje_Encriptado.style.height = 'auto'
    
    }
    else if(window.innerWidth > 1440){
        box.style.height = '910px';
        mensaje_Encriptado.style.height = '781px';
    
    }
    mensajeSin.style.display = 'none';
    copiar.style.opacity = '1';
    imagen.style.display = 'none';
}



encriptar.addEventListener("click", function(){
    estilosResultado();
    mensaje_Encriptado.value =  enrciptarTexto(textoEncriptar.value, true);
})
desencriptar.addEventListener("click", function(){
    estilosResultado();
    mensaje_Encriptado.value = enrciptarTexto(textoEncriptar.value, false);
})

copiar.addEventListener('click',  function(){
    navigator.clipboard.writeText(mensaje_Encriptado.value);
})