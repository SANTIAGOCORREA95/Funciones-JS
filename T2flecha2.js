let robarPlano = (id,despegarNave) => {

    if(id>0 && id<=10){
        let mensaje="nos robamos el plano "+id;
        console.log(mensaje);
        despegarNave(true);
    }else{
        let mensaje="nos robamos un plano fake";
        console.log(mensaje);
        despegarNave(false);
    }
}

robarPlano(6,bandera => bandera ? console.log("despegando...") : console.log("quedate ahi..."));