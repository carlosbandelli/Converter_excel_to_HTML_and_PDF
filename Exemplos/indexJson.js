const fs = require("fs")

function modificarUsuario(nome,curso,categoria){

        //coloquei o arquivo que quero ler, encoding quero ler em texto
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados) =>{
        if(erro){
            console.log("um erro aconteceu!")
        }else{
            var conteudo = JSON.parse(dados) //converte o texto em um objeto javascript
            
            conteudo.nome = nome , // nessa parte fazemos a alteração no arquivo que estamos lendo
            conteudo.curso = curso ,
            conteudo.categoria = categoria

            //coloco o arquivo que quero escrever, stringify serve para converter o json em texto
            fs.writeFile("./usurario.json", JSON.stringify(conteudo), (erro) => {
                if(erro){
                    console.log("um erro aconteceu durante a escrita!")
                }
            })        
        }
    })
}

modificarUsuario("João José", "PHP do jeito certo", "PHP")