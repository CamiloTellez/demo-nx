import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY,
  State,
  ListaResultadosInmueblesPartialState,
  listaResultadosInmueblesAdapter,
} from './lista-resultados-inmuebles.reducer';

// Lookup the 'ListaResultadosInmuebles' feature state managed by NgRx
export const getListaResultadosInmueblesState = createFeatureSelector<
  ListaResultadosInmueblesPartialState,
  State
>(LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY);

const {
  selectAll,
  selectEntities,
} = listaResultadosInmueblesAdapter.getSelectors();

export const getListaResultadosInmueblesLoaded = createSelector(
  getListaResultadosInmueblesState,
  (state: State) => state.loaded
);

export const getListaResultadosInmueblesError = createSelector(
  getListaResultadosInmueblesState,
  (state: State) => state.error
);

export const getAllListaResultadosInmuebles = createSelector(
  getListaResultadosInmueblesState,
  (state: State) => selectAll(state)
);

export const getListaResultadosInmueblesEntities = createSelector(
  getListaResultadosInmueblesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getListaResultadosInmueblesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getListaResultadosInmueblesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
