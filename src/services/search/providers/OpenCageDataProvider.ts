import dotenv from "dotenv";

dotenv.config();

export const getPlaces = async (query: string) => {
  const key = process.env.OPEN_CAGE_DATA_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}key=${key}`
  const response = await (await fetch(url)).json();

  return JSON.parse(response);
}