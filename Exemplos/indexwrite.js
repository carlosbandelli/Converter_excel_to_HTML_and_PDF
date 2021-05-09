const fs = require("fs")
            //aqui voce coloca o arquivo que quer escrever  e no segundo parametro o voce quer sobre escrever no arquivo
fs.writeFile("./carlos.bandelli1", "Olá, eu sou o carlos bandelli", (err) => { //callback de erro, serve só pra mostrar de aconteceu algum err
    if(err){
        console.log("Ocorreu uma falha durante a leitura do arquivo")
    }
})