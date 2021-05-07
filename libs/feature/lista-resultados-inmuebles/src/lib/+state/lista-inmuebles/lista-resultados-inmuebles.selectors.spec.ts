import { ListaResultadosInmueblesEntity } from './lista-resultados-inmuebles.models';
import {
  State,
  listaResultadosInmueblesAdapter,
  initialState,
} from './lista-resultados-inmuebles.reducer';
import * as ListaResultadosInmueblesSelectors from './lista-resultados-inmuebles.selectors';

describe('ListaResultadosInmuebles Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getListaResultadosInmueblesId = (it) => it['id'];
  const createListaResultadosInmueblesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ListaResultadosInmueblesEntity);

  let state;

  beforeEach(() => {
    state = {
      listaResultadosInmuebles: listaResultadosInmueblesAdapter.setAll(
        [
          createListaResultadosInmueblesEntity('PRODUCT-AAA'),
          createListaResultadosInmueblesEntity('PRODUCT-BBB'),
          createListaResultadosInmueblesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ListaResultadosInmuebles Selectors', () => {
    it('getAllListaResultadosInmuebles() should return the list of ListaResultadosInmuebles', () => {
      const results = ListaResultadosInmueblesSelectors.getAllListaResultadosInmuebles(
        state
      );
      const selId = getListaResultadosInmueblesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ListaResultadosInmueblesSelectors.getSelected(state);
      const selId = getListaResultadosInmueblesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getListaResultadosInmueblesLoaded() should return the current 'loaded' status", () => {
      const result = ListaResultadosInmueblesSelectors.getListaResultadosInmueblesLoaded(
        state
      );

      expect(result).toBe(true);
    });

    it("getListaResultadosInmueblesError() should return the current 'error' state", () => {
      const result = ListaResultadosInmueblesSelectors.getListaResultadosInmueblesError(
        state
      );

      expect(result).toBe(ERROR_MSG);
    });
  });
});
