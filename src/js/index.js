let input_text = document.querySelector(".input_text");
let encriptar_button = document.querySelector("#encriptar_button");
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
    section_derecha.innerHTML = /*html*/`<p>${res.data}</p>`;
}else {
    section_derecha.className = "No_text"
    section_derecha.innerHTML = /*html*/`
        <img src="../storage/img/Muñeco.png">
        <h3>Ningún mensaje fue encontrado</h3>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    `;
}
})

 