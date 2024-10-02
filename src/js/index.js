let input_text = document.querySelector(".input_text");
let encriptar_button = document.querySelector("#encriptar_button");
let desencriptar_button = document.querySelector("#desencriptar_button");
let section_derecha = document.querySelector("#section_derecha");


let infoIngresada

    input_text.addEventListener('input', async e => { //Cada vez que ingrese un nuevo dato se actualiza.
        infoIngresada = (e.target.value); 
    })




encriptar_button.addEventListener('click', async()=> {
    if(infoIngresada != ''){
    let peticion = await fetch(`${location.origin}/encript/v1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message: infoIngresada}) });

    let res = await peticion.json();
    
    section_derecha.className = "Yes_text"
    section_derecha.innerHTML = /*html*/`<p id="texto_modificado">${res.data}</p><button class="copy_button">Copiar</button>`;
    Copiar_texto()
}else{
    section_derecha.className = "No_text"
    section_derecha.innerHTML = /*html*/`
        <img src="../storage/img/Muñeco.png">
        <h3>Ningún mensaje fue encontrado</h3>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    `;
}
})



desencriptar_button.addEventListener('click', async()=> {
    if(infoIngresada != ''){
    let peticion2 = await fetch(`${location.origin}/desencript/v1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message: infoIngresada}) });

    let res2 = await peticion2.json();
    
    section_derecha.className = "Yes_text"
    section_derecha.innerHTML = /*html*/`<p id="texto_modificado">${res2.data}</p><button class="copy_button">Copiar</button>`;
    Copiar_texto()
}else{
    section_derecha.className = "No_text"
    section_derecha.innerHTML = /*html*/`
        <img src="../storage/img/Muñeco.png">
        <h3>Ningún mensaje fue encontrado</h3>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    `;
}
})


const Copiar_texto = () => {
    let copy_button = document.querySelector(".copy_button");

    copy_button.addEventListener('click', function() {
                    let texto = document.getElementById('texto_modificado');
            
                    alert(`Texto copiado: ${texto.innerHTML}`);

                });
}