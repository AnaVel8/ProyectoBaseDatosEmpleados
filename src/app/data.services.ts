import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{
    
    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleados(){

        const token=this.loginService.getIdToken();
        //https://angularprueba-7e751-default-rtdb.firebaseio.com/


        return this.httpClient.get('https://angularprueba-7e751-default-rtdb.firebaseio.com/datos.json?auth='+ token);
    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://angularprueba-7e751-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se han guardado los empleados" + response),
            error=>console.log("Error: "+ error)
        );
    }


    actualizarEmpleado(indice:number, empleado:Empleado){
       let url='https://angularprueba-7e751-default-rtdb.firebaseio.com/datos/' + indice + '.json';

       this.httpClient.put(url,empleado).subscribe(
        response=>console.log("Se han guardado los cambios" + response),
        error=>console.log("Error: "+ error));
    }



    eliminarEmpleado(indice:number){
        let url='https://angularprueba-7e751-default-rtdb.firebaseio.com/datos/' + indice + '.json';
 
        this.httpClient.delete(url).subscribe(
         response=>console.log("Se elimino el registro" + response),
         error=>console.log("Error: "+ error));
     }
}