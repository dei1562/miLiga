import { Component, OnInit } from '@angular/core';
import { Juego } from './../_interfaces/juego';

import * as JUEGOS from './../../assets/data/juegos.json';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  juegos:Juego[];

  constructor() { }

  ngOnInit() {
    this.juegos = (JUEGOS as any).data;
  }

}
