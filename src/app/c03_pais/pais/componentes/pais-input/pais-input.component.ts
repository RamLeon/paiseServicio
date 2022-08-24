import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  txBuscar:string=""
  // placeHolderVar, recibido como parámetro desde el padre
  @Input() placeHolderVar:string = ""
  //Método que se ejecutará cuando presione Enter
  buscar(){
    console.log("PInput==,Buscar Submit")
    // Emite un evento al padre enviando el contenido de txBuscar
    this.onEnter.emit(this.txBuscar)
  }
  // Método que se ejecuta cada vez que se presiona una tecla
  teclaPresionada(tecla:any){
    const valor = tecla.target.value
    console.log("PInput==,teclaPresionada ",valor)
  }

   //Envio un evento al padre con emitter  
   @Output() onEnter: EventEmitter < string > = new EventEmitter()

}
