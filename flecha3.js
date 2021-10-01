let temperaturas=[75,90,50,45,15]

let calcularPromedioTemperatura = (...temperaturas) => {

    let temperaturaMaxima=Math.max(...temperaturas);

    let temperaturaMinima=Math.min(...temperaturas);

    let promedio=(temperaturaMaxima+temperaturaMinima)/2;

    return(promedio);

}

console.log(`La temperatura promedio fue de: ${calcularPromedioTemperatura(...temperaturas)}°C`)