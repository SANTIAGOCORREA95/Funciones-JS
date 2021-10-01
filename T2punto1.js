function matricularPadawan (nombre,planeta,edad,estatura,clasificarPadawan){

    let padawan = {
        nombre:nombre,
        planeta:planeta,
        edad:edad,
        estatura:estatura
    }
    clasificarPadawan(padawan.edad)
}

matricularPadawan("Luke skywalker","tatooine",21,176,function(edad){

    if(edad<=15){

        let notificacion=("Asignar a manejo de la fuerza")
        console.log(notificacion)

    }else{

        let notificacion=("Asignar a manejo del sable de luz")
        console.log(notificacion)
    }
})