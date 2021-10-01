let obtenerNombre = codigoNave => {

    let nombrePiloto=codigoNave.split(":");
    
    return(`el nombre del piloto es :${nombrePiloto}`);

}
console.log(obtenerNombre("ARQ255:Darth Vader"));
let nombre=obtenerNombre("ARQ256:Luke Skywalker");
console.log(nombre);