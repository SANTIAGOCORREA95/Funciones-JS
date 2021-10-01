function robarPlano(id,despegarNave){

    if(id>0 && id<=10){
        let mensaje="nos robamos el plano "+id;
        despegarNave(mensaje,true);
    }else{
        let mensaje="nos robamos un plano fake";
        despegarNave(mensaje,false);
    }
}

robarPlano(15,function(mensaje,bandera){
    
    console.log(mensaje);
    if(bandera){
        console.log("despegando...")
    }else{
        console.log("quedate ahi...")
    }  
})