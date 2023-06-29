import { parse } from 'csv-parse/sync'

export const parseCsv = (input: string) =>
  parse(input, {
    columns: true,
    cast: value => {
      const casted = Number(value)
      return isNaN(casted) ? value : casted
    },
    trim: true,
  })
