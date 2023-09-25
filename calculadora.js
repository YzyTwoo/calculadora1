const division=require("./division.js")
const multiplicacion=require("./Multiplicacion.js")
const resta=require("./resta.js")
const potencia=require("./potencia.js")
const suma=require("./sumando.js")
const {leer}=require("./app.js")
const {guardar}=require("./app.js")

let num1=+process.argv[2]
let num2=+process.argv[3]
let cb=process.argv[4]

if(process.argv[2]=="historial"){
    console.log(leer());
}else{
    function calculadora(num1,num2,cb) {
        let operacion1=" ";
            switch (process.argv[4]) {
                case "suma": 
                cb=suma
                operacion1="suma"
                    break;
                case "resta": 
                cb=resta
                operacion1="resta"
                    break;
                case "multiplicacion": 
                cb=multiplicacion
                operacion1="multiplicacion"
                    break;
                case "division": 
                cb=division
                operacion1="division"
                    break;
                case "potencia": 
                cb=potencia
                operacion1="potencia"
                    break;
            }
            let resultado1 = cb(num1,num2)
            let objeto={
                operacion:operacion1,
                resultado:resultado1
            }
            return objeto
    }
    
    let variableLeer=leer()
    
    let variableCalcular=calculadora(num1,num2,cb)
    
    variableLeer.push(variableCalcular)
    
    guardar(variableLeer)
}







