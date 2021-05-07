import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as ListaResultadosInmueblesActions from './lista-resultados-inmuebles.actions';
import * as ListaResultadosInmueblesFeature from './lista-resultados-inmuebles.reducer';
import * as ListaResultadosInmueblesSelectors from './lista-resultados-inmuebles.selectors';

@Injectable()
export class ListaResultadosInmueblesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(ListaResultadosInmueblesSelectors.getListaResultadosInmueblesLoaded)
  );
  allListaResultadosInmuebles$ = this.store.pipe(
    select(ListaResultadosInmueblesSelectors.getAllListaResultadosInmuebles)
  );
  selectedListaResultadosInmuebles$ = this.store.pipe(
    select(ListaResultadosInmueblesSelectors.getSelected)
  );

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ListaResultadosInmueblesActions.init());
  }
}
