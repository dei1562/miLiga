import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { RouterModule, Routes } from '@angular/router' ;
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

//Angular Material Modules
import{
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FiltroPorLetraPipe } from './_pipes/filtro-por-letra.pipe';

const appRoutes: Routes = [
  { path: 'equipo', component: EquipoComponent},
  { path: 'juego', component: JuegoComponent},
  { path: '', redirectTo: '/equipo', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    EquipoComponent,
    JugadoresComponent,
    FiltroPorLetraPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
