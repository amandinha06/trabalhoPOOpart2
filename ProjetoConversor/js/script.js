class Moeda{
    real;
    dolar;
    euro;
    libra;
    realDolar;
    realEuro;
    realLibra;

    constructor() {
        this.dolar = 4.74;
        this.euro = 5.25;
        this.libra = 6.23;
        this.realDolar = 0.21;
        this.realEuro = 0.19;
        this.realLibra = 0.16;
    }

    converterRealDolar(){
        this.real = document.getElementById("realDolar").value;
        
        const valorEmDolar = parseFloat(this.real) / this.dolar;

        document.getElementById("resultadoRealDolar").innerText = valorEmDolar.toFixed(2);
    }

    converterRealEuro() {
        this.real = document.getElementById("realEuro").value;

        const valorEmEuro = parseFloat(this.real) / this.euro;

        document.getElementById("resultadoRealEuro").innerText = valorEmEuro.toFixed(2);
    }

    converterRealLibra(){
        this.real = document.getElementById("realLibra").value;

        const valorEmLibra = parseFloat(this.real) / this.libra;

        document.getElementById("resultadoRealLibra").innerText = valorEmLibra.toFixed(2);
    }

    converterDolarReal(){
        this.dolar = document.getElementById("dolarReal").value; 

        const valorEmReal = parseFloat(this.dolar) / this.realDolar; 

        document.getElementById("resultadoDolarReal").innerText = valorEmReal.toFixed(2);
    }

    converterEuroReal(){
        this.euro = document.getElementById("euroReal").value;

        const valorEmReal = parseFloat(this.euro) / this.realEuro;

        document.getElementById("resultadoEuroReal").innerText = valorEmReal.toFixed(2);
    }

    converterLibraReal(){
        this.libra = document.getElementById("libraReal").value;

        const valorEmReal = parseFloat(this.libra) / this.realLibra;

        document.getElementById("resultadoLibraReal").innerText = valorEmReal.toFixed(2);
    }

}

const conversao = new Moeda();