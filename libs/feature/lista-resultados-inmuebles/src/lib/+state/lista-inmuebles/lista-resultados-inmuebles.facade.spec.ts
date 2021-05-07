import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ListaResultadosInmueblesEntity } from './lista-resultados-inmuebles.models';
import { ListaResultadosInmueblesEffects } from './lista-resultados-inmuebles.effects';
import { ListaResultadosInmueblesFacade } from './lista-resultados-inmuebles.facade';

import * as ListaResultadosInmueblesSelectors from './lista-resultados-inmuebles.selectors';
import * as ListaResultadosInmueblesActions from './lista-resultados-inmuebles.actions';
import {
  LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './lista-resultados-inmuebles.reducer';

interface TestSchema {
  listaResultadosInmuebles: State;
}

describe('ListaResultadosInmueblesFacade', () => {
  let facade: ListaResultadosInmueblesFacade;
  let store: Store<TestSchema>;
  const createListaResultadosInmueblesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ListaResultadosInmueblesEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            LISTA_RESULTADOS_INMUEBLES_FEATURE_KEY,
            reducer
          ),
          EffectsModule.forFeature([ListaResultadosInmueblesEffects]),
        ],
        providers: [ListaResultadosInmueblesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ListaResultadosInmueblesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allListaResultadosInmuebles$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allListaResultadosInmuebles$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadListaResultadosInmueblesSuccess` to manually update list
     */
    it('allListaResultadosInmuebles$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allListaResultadosInmuebles$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          ListaResultadosInmueblesActions.loadListaResultadosInmueblesSuccess({
            listaResultadosInmuebles: [
              createListaResultadosInmueblesEntity('AAA'),
              createListaResultadosInmueblesEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allListaResultadosInmuebles$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
