let sables=[23,56,-21,98,75,-120,-60]

let buscar = sables => {
    let contador=0;

    for(let i = 0;i<sables.length;i++){
        
        if(sables[i]<0){
            contador++
        }
    }
    console.log(contador);
}
buscar(sables)