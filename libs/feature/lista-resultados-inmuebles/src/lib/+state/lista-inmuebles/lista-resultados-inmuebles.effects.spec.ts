import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ListaResultadosInmueblesEffects } from './lista-resultados-inmuebles.effects';
import * as ListaResultadosInmueblesActions from './lista-resultados-inmuebles.actions';

describe('ListaResultadosInmueblesEffects', () => {
  let actions: Observable<any>;
  let effects: ListaResultadosInmueblesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ListaResultadosInmueblesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ListaResultadosInmueblesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ListaResultadosInmueblesActions.init() });

      const expected = hot('-a-|', {
        a: ListaResultadosInmueblesActions.loadListaResultadosInmueblesSuccess({
          listaResultadosInmuebles: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
