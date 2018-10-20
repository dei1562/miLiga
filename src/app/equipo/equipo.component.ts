import { Component, OnInit } from '@angular/core';
import { Jugador } from './../_Interface/jugador';
//import * as JUGADORES from './../../assets/data/jugadores.json';
import { JugadoresService } from './../jugadores.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {


  step = 0;
  nombre:string = 'Felinos';
  estatus:boolean = false;
  error : any;
  //jugador: String="Carlos";

  presupuesto = 18000000;
  actualizado = new Date();
  aficionados = 15000320;
  efectividad = 0.8732;

  buscador: string = '';

  jugadores:Jugador[];
  
  jugador:Jugador = {
    nombre: "Carlos",
    edad: 35,
    apodo: "felino",
    foto: "image.jpg",
    posicion: "Delantero",
    estado: false
  }

  constructor(private jugadoresService: JugadoresService, private spinner : NgxSpinnerService) { }

  ngOnInit() {
    this.nombre = 'Piratas';

  //  let arrJugadores = JUGADORES as any;
   this.jugadores = [];
   this.showjugadores();
  }

  agregarJugador (){
    let jugador = 'Sergio';
    jugador = 'Ivan';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(jugador: Jugador, i: number, event) {
    jugador.estado = event;
    this.step = i;
  }

  mostrarDatos (i: number) {
    this.step = i;
  }

  activarJugador (jugador: Jugador) {
    jugador.estado = true;
  }

  showjugadores(){
    this.spinner.show();
    this.jugadores = [];

    this.jugadoresService.getJugadores()
    .subscribe(
      (data: Jugador) => {
        let tmpData = {...data};

        for(let value in tmpData){
          this.jugadores.push(tmpData[value]);
        }

        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.error = error
      }
    );

  }

}
