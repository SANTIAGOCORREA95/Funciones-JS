
function obtenerNombre(codigoNave){

    let nombrePiloto=codigoNave.split(":");
    
    return(`el nombre del piloto es :${nombrePiloto[0]}`);

}
console.log(obtenerNombre("ARQ255:Darth Vader"));
let nombre=obtenerNombre("ARQ256:Luke Skywalker");
console.log(nombre);