import type { Stop } from "../../main.js";
import { parseCsv } from "../../utils/parseCsv.js";
import { openDataApi } from "./apiClient.js";

export type MtrFare = {
  SRC_STATION_NAME: Stop["nameEn"];
  SRC_STATION_ID: number;
  DEST_STATION_NAME: Stop["nameEn"];
  DEST_STATION_ID: number;
  OCT_ADT_FARE: number; // Octopus Card + Adult
  OCT_STD_FARE: number; // Octopus Card + Student
  OCT_JOYYOU_SIXTY_FARE: number; // Octopus Card + JoyYou Card(60-64)
  OCT_CON_CHILD_FARE: number; // Octopus Card + Child
  OCT_CON_ELDERLY_FARE: number; // Octopus Card + Elderly(65 up)
  OCT_CON_PWD_FARE: number; // Persons-with-Disabilities

  SINGLE_ADT_FARE: number; // Single ticket + Adult
  SINGLE_CON_CHILD_FARE: number; // Single ticket + Child
  SINGLE_CON_ELDERLY_FARE: number; // Single ticket + Elderly
};

const listMtrFares = async (): Promise<MtrFare[]> => {
  const csv = await openDataApi.url("/data/mtr_lines_fares.csv").get().text();
  return parseCsv<MtrFare>(csv).data;
};

export type AirportExpressFare = {
  ST_FROM: Stop["nameEn"];
  ST_FROM_ID: number;
  ST_TO: Stop["nameEn"];
  ST_TO_ID: number;
  OCT_ADT_FARE: number; // Octopus Card + Adult
  OCT_CHD_FARE: number; // Octopus Card + Child
  SINGLE_ADT_FARE: number; // Single ticket + Adult
  SINGLE_CHD_FARE: number; // Single ticket + Child
};

const listAirportExpressFares = async (): Promise<AirportExpressFare[]> => {
  const csv = await openDataApi
    .url("/data/airport_express_fares.csv")
    .get()
    .text();

  return parseCsv<AirportExpressFare>(csv).data;
};

export const fareApi = { listMtrFares, listAirportExpressFares };
