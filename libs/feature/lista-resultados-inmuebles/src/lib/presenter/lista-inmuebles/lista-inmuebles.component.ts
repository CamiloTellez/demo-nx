import { Component, Input, OnInit } from '@angular/core';
import { InmuebleEntity } from '@demo-nx/feature/lista-resultados-inmuebles';

@Component({
  selector: 'lista-inmuebles',
  templateUrl: './lista-inmuebles.component.html',
  styleUrls: ['./lista-inmuebles.component.scss']
})
export class ListaInmueblesComponent implements OnInit {
@Input() listaInmuebles:InmuebleEntity[];

  constructor() { }

  ngOnInit(): void {
  }

}
