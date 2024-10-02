module.exports = class encriptText{
    async encriptText(texto){
        try{
            console.log(texto)

            let listaTexto = texto.split('');
            let contraEncriptadaLista = [];
            for( let i = 0; i < listaTexto.length; i-=-1 ){
                if(listaTexto[i] === "e"){
                    contraEncriptadaLista.push("enter")
                } else if(listaTexto[i] === "i"){
                    contraEncriptadaLista.push("imes")
                } else if(listaTexto[i] === "a"){
                    contraEncriptadaLista.push("ai")
                } else if(listaTexto[i] === "o"){
                    contraEncriptadaLista.push("ober")
                }  else if(listaTexto[i] === "u"){
                    contraEncriptadaLista.push("ufat")
                }
                 else{
                    contraEncriptadaLista.push(listaTexto[i])
                }
            };

            return {status: 201, message: "Contraseña Encriptada Exitosamente", data: contraEncriptadaLista.join('')}
        }catch(err){
            throw new Error(JSON.stringify({status: 500, message: "Error al encriptar", err: err}));
        }
    }


}