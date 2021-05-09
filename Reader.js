// Sempre que criar um arquivo de classe colocar a primeira letra em maiusculo
const fs = require("fs")
const util = require("util") // com essa função podemos trabalahr com o conseito de Async e Await no readFile



class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepath){ // o parametro do Read é onde vamos colocar o caminho do arquivo  
        try{
            return await this.reader(filepath,"utf8")
        }catch(err){
            return undefined
        }
        
              
       //desse modo abaixo não pode trabalhar com o conceito de ASYNC e Await
        // fs.readFile(filepath,"utf8", (err, data) =>{ // colocamos o parametro do read , como queremos ler
        //     if(err){
        //         console.log(err) // no if tem o parametro do erro que mostrarr no console logo, se der errado
        //     }else{
        //         console.log(data) // se der certo ele mostra o ques escrito
        //     }
            
        }
}


module.exports = Reader