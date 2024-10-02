let input_text = document.querySelector(".input_text");
let encriptar_button = document.querySelector("#encriptar_button");

let infoIngresada

    input_text.addEventListener('input', async e => { //Cada vez que ingrese un nuevo dato se actualiza.
        infoIngresada = (e.target.value); 
    })

encriptar_button.addEventListener('click', async()=> {
    alert(JSON.stringify({message: infoIngresada}))
    let peticion = await fetch(`${location.origin}/encript/v1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message: infoIngresada}) });

    let res = await peticion.json();
})
