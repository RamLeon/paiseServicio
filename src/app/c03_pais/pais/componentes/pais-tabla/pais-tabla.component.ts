import { Component, Input, OnInit } from '@angular/core';
import { IPais } from '../../IPais';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // campo de entrada del Arreglo Paises 
   @Input() paises_entrada:IPais[]=[]

}
