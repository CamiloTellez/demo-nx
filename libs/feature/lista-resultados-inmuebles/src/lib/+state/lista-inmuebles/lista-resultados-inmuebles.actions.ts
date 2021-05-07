import { createAction, props } from '@ngrx/store';
import { InmuebleEntity } from './lista-resultados-inmuebles.models';

export const init = createAction('[ListaResultadosInmuebles Page] Init');

export const loadListaResultadosInmueblesSuccess = createAction(
  '[ListaResultadosInmuebles/API] Load ListaResultadosInmuebles Success',
  props<{ listaResultadosInmuebles: InmuebleEntity[] }>()
);

export const loadListaResultadosInmueblesFailure = createAction(
  '[ListaResultadosInmuebles/API] Load ListaResultadosInmuebles Failure',
  props<{ error: any }>()
);
