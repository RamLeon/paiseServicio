import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagePaisComponent } from './page-pais/page-pais.component';
import { SidebarPaisComponent } from './shared/sidebar-pais/sidebar-pais.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { PaisTablaComponent } from './componentes/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './componentes/pais-input/pais-input.component';
import { AppRoutingPaisModule } from 'src/app/pais.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PagePaisComponent,
    SidebarPaisComponent,
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingPaisModule,
    FormsModule,
    HttpClientModule,

  ],
  exports: [PagePaisComponent,]
})
export class PaisModule { }
