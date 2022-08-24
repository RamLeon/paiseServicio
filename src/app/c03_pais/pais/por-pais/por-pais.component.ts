import { Component, OnInit } from '@angular/core';
import { IPais } from '../IPais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private serPais:PaisService) { }

  ngOnInit(): void {
  }

  // Variable que se utilizará para desplegar la palabra seleccionada
  txBuscar:string="sp"
  // Check para indicar si hay error
  swError:boolean=false
  // Si es true se activa el bloque de ayuda en el html
  mostrarSugerencias: boolean = false;
  // Arreglo de paises sugeridos
  paisesSugeridos   : any[] = [];
  //  Resultados de Paises
  paises:IPais[]=[]

  // Método que se ejecutará cuando 
  // presionen enter en el componente input
  buscarEmit(stBuscar:any){
	console.log("Método Buscar, Por País")
  // Guardamos lo recibido en nuestra variable local
  this.txBuscar = stBuscar
  // Marcamos que no hay error
  this.swError=false
  this.serPais.buscarPais(this.txBuscar)
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
  // Método que se ejecutará cuando se 
  // produsca  onDebounce en el componente input
  sugerencia(stBuscar:any){
	console.log("Método Sugerencia, Por País") 
  }
  // Método que se ejecutará cuando den click
  // en una de la lista sugerida
  buscarSugerido(stBuscar:any){
  	console.log("Método Buscar Sugerido, Por País") 
  }

}
