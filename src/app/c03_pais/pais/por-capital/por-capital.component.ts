import { Component, OnInit } from '@angular/core';
import { IPais } from '../IPais';
import { PaisService } from '../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private serPais:PaisService) { }

  ngOnInit(): void {
  }

   //  Palabra buscar
   txBuscar:string="sp"
   // Por si existe algún Error
   swError:boolean=false
   // Arreglo de Resultados
   paises:IPais[]=[]
 
   // Método Buscar, accionado desde el componente input
   buscarEmit(stBuscar:any){
   console.log("Método BuscarEmit, Por Capital") 
   // Guardamos lo recibido en nuestra variable local
   this.txBuscar = stBuscar
   // Marcamos que no hay error
   this.swError=false
   this.serPais.buscarCapital(this.txBuscar)
   .subscribe({
     next: (paises) => {  // nextHandler
        console.log("next",paises)
        this.swError=false
         // Guardmos la respuesta en el arreglo paises
         // El cual se desplegará en pantalla
         this.paises=paises
       },     
     complete: () => { console.log("complete") }, // completeHandler
     error: (error) => { console.log("Error")
                   console.info(error)
                   this.swError=true
                   // Limpiamos el arreglo
                   this.paises=[]
    },    // errorHandler 
    });   
   }
   // Método sugerencia, accionado desde el componente input
   sugerencia(stBuscar:any){
   console.log("Método sugerencia, Por Capital") 
   }

   

}
