class Processor{
    static Process(data){                          //resumindo cada linha em uma string diferente
        var a = data.split("\r\n") // sempre que quiser separar as linhas em partes voce vai usar um metodo chamado SPLIT dentro dos parametros, voce coloca com base em qual caracter voce quer dividir sua string, usamos um caracter invisivel \(barra invertida)n e \n isso vai diviar a string por linha
        var rows = []                                       

        a.forEach(row => {
            var arr = row.split(",") // como eu sei que cada elemento desse array é uma string, e vou dividir ela por ,
            rows.push(arr) //pegar a variavel rows push é um metodo que adiciona algum dado dentro de um array
        })

        console.log(rows)
    }
}

module.exports = Processor