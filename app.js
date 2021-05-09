var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var leitor = new Reader();

async function main(){ // preciso criar uma função e essa função tem que ser Async
    var dados = await leitor.Read("./users.csv")// dentro de ssa função async posso pegar o resultado da variavel e usar await e dentro dessa variavel aparece o conteudo que esta em user

    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    console.log(usuarios.usuarios)

}

main()