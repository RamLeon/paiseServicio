import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePaisComponent } from './c03_pais/pais/page-pais/page-pais.component';
import { PorCapitalComponent } from './c03_pais/pais/por-capital/por-capital.component';
import { PorPaisComponent } from './c03_pais/pais/por-pais/por-pais.component';
import { PorRegionComponent } from './c03_pais/pais/por-region/por-region.component';
import { VerPaisComponent } from './c03_pais/pais/ver-pais/ver-pais.component';



// Creamos una variables con las diferentes posibilidades
const misRoutesHijas:Routes=[ 
          { path:'',
            // observe que sale dos veces
            // probar sin ==> component
            // component:PagePaisComponent, 
            children:[
              //{path:''     , component:PagesPaisComponent},
              {path:'pais-pais'     , component:PorPaisComponent},
              {path:'pais-region'   , component:PorRegionComponent},
              {path:'pais-capital'  , component:PorCapitalComponent},
              //{path:'ver-pais/:id' , component:VerPaisComponent},
              // no ocupar guion(-)
              {path:'ver-pais/:countryId' , component:VerPaisComponent},
                            ]
          }
];

// Creamos el ´module
@NgModule({
  // Utilizamos la variable declarada con anterioridad
  imports:[RouterModule.forRoot(misRoutesHijas)],
  exports:[RouterModule],

})
export class AppRoutingPaisModule { }