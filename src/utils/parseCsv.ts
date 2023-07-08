import Papa from 'papaparse'

export const parseCsv = <T>(input: string) =>
  Papa.parse<T>(input, {
    header: true,
    transform: value => {
      const casted = Number(value)
      return isNaN(casted) ? value : casted
    },
  })
