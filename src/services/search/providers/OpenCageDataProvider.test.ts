import axios from 'axios';
import { getPlaces } from './OpenCageDataProvider.ts';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OpenCageDataProvider', () => {
  test('an empty query string', async () => {
    mockedAxios.get.mockResolvedValue({ data: { total_results: 0 } });
    const result = await getPlaces('');
    expect(result.results).toEqual([]);
  });

  test('an invalid non-json response', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Service Unavailable.'));
    await expect(getPlaces('Chamonix')).rejects.toThrow('Service Unavailable');
  });
});
