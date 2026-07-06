function calcularOperacion(operacion) {
    const num1 = document.getElementById("numero1");
    const num2 = document.getElementById("numero2");
    const resultado = document.getElementById("res");
    if (num1.value.trim() == "" || num1.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor ingresa ambos números.",
        });
        return;
    }
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b :'Error: División por cero';
    let res;
    switch (operacion) {
        case "suma":
            res = sumar(a, b);
            break;
        case "resta":
            res = restar(a, b);
            break;
        case "multiplicacion":
            res = multiplicar(a, b);
            break;
        case "division":
            res = dividir(a, b);
            if (b === 0) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No se puede dividir entre cero.",
                });
                return;
            }
            break;
    }
    resultado.value = res;
}