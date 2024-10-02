module.exports = class encriptText{
    async encriptText(texto){
        try{


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




    async desencriptTextFunc(texto){
        try{
            console.log("hola mundoooooooooooooooooooooo")

            let listaTexto = texto.split('');
            let contraEncriptadaLista = [];
            for( let i = 0; i < listaTexto.length; i-=-1 ){
                console.log(listaTexto[i], listaTexto[i+1], listaTexto[i+2],listaTexto[i+3],listaTexto[i+4])
                if(listaTexto[i] === "e" && listaTexto[i+1] === "n" && listaTexto[i+2] === "t" && listaTexto[i+3] === "e" && listaTexto[i+4] === "r" ){
                    contraEncriptadaLista.push("e")
                    i = i+4
                } else if(listaTexto[i] === "i" && listaTexto[i+1] === "m" && listaTexto[i+2] === "e" && listaTexto[i+3] === "s"){
                    contraEncriptadaLista.push("i")
                    i = i+3
                } else if(listaTexto[i] === "a" && listaTexto[i+1] === "i"){
                    contraEncriptadaLista.push("a")
                    i = i+1
                } else if(listaTexto[i] === "o" && listaTexto[i+1] === "b" && listaTexto[i+2] === "e" && listaTexto[i+3] === "r"){
                    contraEncriptadaLista.push("o")
                    i = i+3
                }  else if(listaTexto[i] === "u" && listaTexto[i+1] === "f" && listaTexto[i+2] === "a" && listaTexto[i+3] === "t"){
                    contraEncriptadaLista.push("u")
                    i = i+3
                }
                 else{
                    contraEncriptadaLista.push(listaTexto[i])
                }
            };
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            console.log(contraEncriptadaLista.join(''))

            return {status: 201, message: "Contraseña Desencriptada Exitosamente", data: contraEncriptadaLista.join('')}
        }catch(err){
            throw new Error(JSON.stringify({status: 500, message: "Error al Desencriptar", err: err}));
        }
    }
}