import { Component, OnInit } from '@angular/core';
import { IPais } from '../IPais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  constructor(private serPais:PaisService) { }

  ngOnInit(): void {
  }

    //Arreglo de Paises
    paises:IPais[]=[]
    // Guarda la class,
    regActiva:string=''
    // Arreglo de Regiones
    regiones:string[]=['africa','americas','asia','europe','oceania'] 
  

     // Región Seleccionada
  activarRegion(region:string){
    console.log("Método activar Region, Por Region") 
    if(region === this.regActiva) return
    this.regActiva=region
    this.serPais.buscarRegion(region)
    .subscribe({
      next:paises=>{
            console.log("Paises Region", paises)
            this.paises=paises
                }
    })
  }

  // Método que se encargará de definir la class
  regActivaCss(stRegion:string){
    console.log("Método regActivaCss Region, Por Region") 
    return (stRegion===this.regActiva)? 'btn btn-primary':'btn btn-outline-primary'
  }

}
