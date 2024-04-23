// Web Frontend Development II - Week 01, Learning Activity - Create calculator
let calculator = {
    read() {
        this.a = parseInt(prompt("First Value:"));
        this.b = parseInt(prompt("Second Value:"));
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    subt() {
        return this.a - this.b;
    },
    div() {
        return this.a / this.b;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.subt() );
alert( calculator.div() );