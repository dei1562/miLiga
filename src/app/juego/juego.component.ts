import { Component, OnInit } from '@angular/core';
import { Juego } from './../_Interface/juego';
import { JuegosService } from './../juegos.service';
import { EquiposService } from './../equipos.service';
import { NgxSpinnerService } from 'ngx-spinner';

import * as JUEGOS from './../../assets/data/juegos.json';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  juegos:Juego[];
  error : any;

  actualizado = new Date();
  buscador: string = '';

  constructor(private juegosService: JuegosService, private equiposService: EquiposService, private spinner : NgxSpinnerService) { }

  ngOnInit() {
    // this.juegos = (JUEGOS as any).data;
    this.showjuego();
  }

  showjuego(){
    this.spinner.show();
    this.juegos = [];

    this.juegosService.getJugadores()
    .subscribe(
      (data: Juego) => {
        let tmpData = {...data};

        for(let value in tmpData){

          let objJuego = tmpData[value];         

          this.getNombreEquipo(objJuego);

          this.juegos.push(objJuego);
        }
      // console.log(this.jugadores);
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.error = error
      }
    );
  }

  getNombreEquipo(objEquipo) {

    this.equiposService.getEquipos()
          .subscribe(
            (data) => {
              let tmpData = {...data};

              for(let value in tmpData){
                
                if(tmpData[value].id  == objEquipo.local) {
                  objEquipo.nombre_local = tmpData[value].nombre;
                }

                if(tmpData[value].id  == objEquipo.visitante) {
                  objEquipo.nombre_visitante = tmpData[value].nombre;
                }

              }
            }
          );
  }
}
