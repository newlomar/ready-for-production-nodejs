import { getPlaces } from './OpenCageDataProvider.ts';

describe('OpenCageDataProvider', () => {
  const mockFetch = jest.spyOn(global, 'fetch');

  beforeEach(() => {
    mockFetch.mockClear();
  });

  test('an empty query string', async () => {
    const result = await getPlaces('');
    expect(result.results).toEqual([]);
  });

  test('an invalid non-json response', async () => {
    await expect(getPlaces('Chamonix')).rejects.toThrow('Service Unavailable');
  });
});
