import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ListaResultadosInmueblesActions from './lista-resultados-inmuebles.actions';
import { InmuebleEntity } from './lista-resultados-inmuebles.models';

export const LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY =
  'listaResultadosInmuebles';

export interface State extends EntityState<InmuebleEntity> {
  selectedId?: string | number; // which ListaResultadosInmuebles record has been selected
  loaded: boolean; // has the ListaResultadosInmuebles list been loaded
  error?: string | null; // last known error (if any)
}

export interface ListaResultadosInmueblesPartialState {
  readonly [LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY]: State;
}

export const listaResultadosInmueblesAdapter: EntityAdapter<InmuebleEntity> = createEntityAdapter<InmuebleEntity>();

export const initialState: State = listaResultadosInmueblesAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const listaResultadosInmueblesReducer = createReducer(
  initialState,
  on(ListaResultadosInmueblesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ListaResultadosInmueblesActions.loadListaResultadosInmueblesSuccess,
    (state, { listaResultadosInmuebles }) =>
      listaResultadosInmueblesAdapter.setAll(listaResultadosInmuebles, {
        ...state,
        loaded: true,
      })
  ),
  on(
    ListaResultadosInmueblesActions.loadListaResultadosInmueblesFailure,
    (state, { error }) => ({ ...state, error })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return listaResultadosInmueblesReducer(state, action);
}
