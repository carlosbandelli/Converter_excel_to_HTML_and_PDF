class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift(); //shift é uma função do array que sempre remove o primeiro elemento
        this.rows = arr;
    }

}

module.exports = Table