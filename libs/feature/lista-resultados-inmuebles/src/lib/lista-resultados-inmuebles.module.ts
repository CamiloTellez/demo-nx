import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromListaResultadosInmuebles from './+state/lista-inmuebles/lista-resultados-inmuebles.reducer';
import { ListaResultadosInmueblesEffects } from './+state/lista-inmuebles/lista-resultados-inmuebles.effects';
import { ListaResultadosInmueblesFacade } from './+state/lista-inmuebles/lista-resultados-inmuebles.facade';
import { RouterModule } from '@angular/router';

import * as fromContainer from './container';
import * as fromPresenter from './presenter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: fromContainer.BusquedaInmueblesComponent,       
      },
    ]),
    StoreModule.forFeature(
      fromListaResultadosInmuebles.LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY,
      fromListaResultadosInmuebles.reducer
    ),
    EffectsModule.forFeature([ListaResultadosInmueblesEffects]),
  ],
  declarations: [...fromContainer.components, ...fromPresenter.components],
  providers: [ListaResultadosInmueblesFacade],
})
export class ListaResultadosInmueblesModule {}
