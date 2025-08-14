import axios from "axios";
import { getPlaces } from "./OpenCageDataProvider.js";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OpenCageDataProvider', () => {
  test('an empty query string', async () => {
    mockedAxios.get.mockResolvedValue({ data: { features: [] } });
    const result = await getPlaces('Rio de Janeiro');
    expect(result).toEqual({ features: [] })
  });

  test('an invalid non-json response', () => {
    mockedAxios.get.mockRejectedValue(new Error('Service Unavailable.'));
    await expect(getPlaces('Chamonix')).rejects.toThrow('Service Unavailable')
  })
})