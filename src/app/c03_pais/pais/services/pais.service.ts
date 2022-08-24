import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPais } from '../IPais';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  // Variable para la url
  private apiUrl :string='http://api.countrylayer.com/v2/'
  // Variable para la Api Key
  private apiKey:string="kiekejeoio8383733ujeij3u3u3"
  // Retorna los parámetros que enviaremos al sitio real
  // Esto solo funciona cuando funciona contra el sitio real
  get httpParams () {
    return new HttpParams().set( 'fields'
                  , 'name;capital;alpha2Code;flag;population' 
              //, 'name;capital' 
                  ).set("access_key",this.apiKey);
  }



 // Método que consulta al back-end por los paises
  buscarPais(stBusco:string):Observable<IPais[]>{
    // Crea la URl
    let stUrl = `${this.apiUrl}name/${stBusco}`
    // Modificamos la url solo para realizar pruebas locales
    stUrl=`http://localhost:3001/${stBusco}`
      // Visitamos la url, y eviamos los parámetros
      return this.http.get<IPais[]>(stUrl, { params: this.httpParams })
  }

   // Método que consulta al back-end por los paises
   buscarCapital(stBusco:string):Observable<IPais[]>{
    // Crea la URl
    let stUrl = `${this.apiUrl}capital/${stBusco}`
    // Modificamos la url solo para realizar pruebas locales
    stUrl=`http://localhost:3002/${stBusco}`
    // Visitamos la url, y eviamos los parámetros
    return this.http.get<IPais[]>(stUrl, { params: this.httpParams })
}

 // Método que consulta al back-end por los paises
 buscarRegion(stBusco:string):Observable<IPais[]>{
  // Crea la URl
  let stUrl = `${this.apiUrl}region/${stBusco}`
  // Modificamos la url solo para realizar pruebas locales
  stUrl=`http://localhost:3003/${stBusco}`
    // Visitamos la url, y eviamos los parámetros
    return this.http.get<IPais[]>(stUrl, { params: this.httpParams })
}  

 // Método que consulta al back-end para un Pais
    // Ojo que cambia, ya no retorna un arreglo
    buscarPaisCodigo(stBusco:string):Observable<IPais>{
      // Crea la URl
      let stUrl = `${this.apiUrl}region/${stBusco}`
      // Modificamos la url solo para realizar pruebas locales
      stUrl=`http://localhost:3004/${stBusco}`
        // Visitamos la url, y eviamos los parámetros
        return this.http.get<IPais>(stUrl, { params: this.httpParams })
    }    
  
}
