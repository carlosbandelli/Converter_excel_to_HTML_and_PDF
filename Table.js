class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift(); //shift é uma função do array que sempre remove o primeiro elemento
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length
    }

    get ColumnCount(){
        return this.header.length
    }

}

module.exports = Table