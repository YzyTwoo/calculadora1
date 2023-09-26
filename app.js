const fs =require("fs")

function leer (){
    const leerArchivo=fs.readFileSync("registros.json","utf-8")
    const objetoLeer=JSON.parse(leerArchivo)
    return objetoLeer
}
//console.log(leer());

function guardar(parametro){
    const objetoJson=JSON.stringify(parametro)
    fs.writeFileSync("registros.json",objetoJson)
}

module.exports={leer,guardar}