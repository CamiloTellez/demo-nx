import { Component, OnInit } from '@angular/core';
import { InmuebleEntity, ListaResultadosInmueblesFacade } from '@demo-nx/feature/lista-resultados-inmuebles';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-nx-busqueda-inmuebles',
  templateUrl: './busqueda-inmuebles.component.html',
  styleUrls: ['./busqueda-inmuebles.component.scss']
})
export class BusquedaInmueblesComponent implements OnInit {
  listaInmuebles$:Observable<InmuebleEntity[]>;
  constructor(private listaResultadosInmueblesFacade:ListaResultadosInmueblesFacade) {
    listaResultadosInmueblesFacade.init();
   }

  ngOnInit(): void {
    this.listaInmuebles$=this.listaResultadosInmueblesFacade.allListaResultadosInmuebles$;
  }

}
