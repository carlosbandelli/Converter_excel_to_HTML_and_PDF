const fs = require("fs") // File-system 

fs.readFile("./carlos.bandelli",{encoding: 'utf-8'},(erro, dados) => { // encoding significa que estou falando pro node que esse arquivo que estou querendo ler no formato textual

    if(erro){
        console.log("Ocorreu uma falha durante a leitura do arquivo")
    }else{
        console.log(dados);
    }

})



