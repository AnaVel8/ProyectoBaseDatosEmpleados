import { Injectable, inject } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";
@Injectable()

export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

    setEmpleados(misEmpleados:Empleado[]){
      this.empleados=misEmpleados;
    }

 obtenerEmpleados(){
  return this.dataService.cargarEmpleados();
 }
 


    empleados:Empleado[]=[]
       /* new Empleado("Lalo","Cruz","Gerente",2800),
        new Empleado("Gerad","Cruz","Director",2500),
        new Empleado("Ana","Velasco","SubDirector",2400),
        new Empleado("Nicol","Pascual","Actriz",2800)
      ];*/

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar"+ "\n"
        + empleado.nombre + "\n" + "Salario: " + empleado.salario)
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);

      }
    
      encontrarEmpleado(indice:number){
           let empleado:Empleado=this.empleados[indice];
           return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
        this.dataService.actualizarEmpleado(indice,empleado);

      }

      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        if(this.empleados!=null)
        this.dataService.guardarEmpleados(this.empleados);
      }
}