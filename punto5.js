
function calcularSalario(numeroVentas,costoComision,salarioBase){

    return salarioBase+(numeroVentas*costoComision)-salarioBase+(numeroVentas*costoComision)*0.05
}

console.log(calcularSalario(21,1500000,3500000));