import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Jugador } from './../_Interface/jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

  @Input('jugador')
  //jugador: string = 'Sergio';
  jugador: Jugador;

  @Input()
  equipo: string = 'Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  desactivarJugador() {
    this.jugador.estado = false;
    this.estado.emit(false);
  }

}
