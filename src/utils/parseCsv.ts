import Papa from "papaparse";

export const parseCsv = <T>(input: string) =>
  Papa.parse<T>(input, {
    header: true,
    skipEmptyLines: true,
    transform: (value) => {
      const casted = Number(value);
      return Number.isNaN(casted) ? value : casted;
    },
  });
