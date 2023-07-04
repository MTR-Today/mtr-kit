import { StopCode } from './stop.js'

export enum LineCode {
  TML = 'TML',
  EAL = 'EAL',
  TWL = 'TWL',
  TCL = 'TCL',
  TKL = 'TKL',
  AEL = 'AEL',
  KTL = 'KTL',
  DRL = 'DRL',
  ISL = 'ISL',
  SIL = 'SIL',
}

type NonEmptyArray<T> = [T, ...T[]]

export type LineStop = {
  code: StopCode
  up: {
    platforms: number | NonEmptyArray<number>
    nextStop: StopCode | NonEmptyArray<StopCode> | null
  }
  down: {
    platforms: number | NonEmptyArray<number>
    nextStop: StopCode | NonEmptyArray<StopCode> | null
  }
}

export type Line = {
  code: LineCode
  nameEn: string
  nameZh: string
  color: string
  stops: LineStop[]
}

export const TML: Line = {
  code: LineCode.TML,
  nameEn: 'Tuen Ma Line',
  nameZh: '屯碼綫',
  color: '#9a3b26',
  stops: [
    // up
    {
      code: StopCode.TUM,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.SIH },
    },
    {
      code: StopCode.SIH,
      up: { platforms: 1, nextStop: StopCode.TUM },
      down: { platforms: 2, nextStop: StopCode.TIS },
    },
    {
      code: StopCode.TIS,
      up: { platforms: 1, nextStop: StopCode.SIH },
      down: { platforms: 2, nextStop: StopCode.LOP },
    },
    {
      code: StopCode.LOP,
      up: { platforms: 1, nextStop: StopCode.TIS },
      down: { platforms: 2, nextStop: StopCode.YUL },
    },
    {
      code: StopCode.YUL,
      up: { platforms: 1, nextStop: StopCode.LOP },
      down: { platforms: 2, nextStop: StopCode.KSR },
    },
    {
      code: StopCode.KSR,
      up: { platforms: 1, nextStop: StopCode.YUL },
      down: { platforms: 2, nextStop: StopCode.TWW },
    },
    {
      code: StopCode.TWW,
      up: { platforms: 1, nextStop: StopCode.KSR },
      down: { platforms: 2, nextStop: StopCode.MEF },
    },
    {
      code: StopCode.MEF,
      up: { platforms: 1, nextStop: StopCode.TWW },
      down: { platforms: 2, nextStop: StopCode.NAC },
    },
    {
      code: StopCode.NAC,
      up: { platforms: 1, nextStop: StopCode.MEF },
      down: { platforms: 2, nextStop: StopCode.AUS },
    },
    {
      code: StopCode.AUS,
      up: { platforms: 1, nextStop: StopCode.NAC },
      down: { platforms: 2, nextStop: StopCode.ETS },
    },
    {
      code: StopCode.ETS,
      up: { platforms: 1, nextStop: StopCode.AUS },
      down: { platforms: 2, nextStop: StopCode.HUH },
    },
    {
      code: StopCode.HUH,
      up: { platforms: 3, nextStop: StopCode.ETS },
      down: { platforms: 2, nextStop: StopCode.HOM },
    },
    {
      code: StopCode.HOM,
      up: { platforms: 3, nextStop: StopCode.HUH },
      down: { platforms: 4, nextStop: StopCode.TKW },
    },
    {
      code: StopCode.TKW,
      up: { platforms: 1, nextStop: StopCode.HOM },
      down: { platforms: 2, nextStop: StopCode.SUW },
    },
    {
      code: StopCode.SUW,
      up: { platforms: 1, nextStop: StopCode.TKW },
      down: { platforms: 2, nextStop: StopCode.KAT },
    },
    {
      code: StopCode.KAT,
      up: { platforms: 1, nextStop: StopCode.SUW },
      down: { platforms: 2, nextStop: StopCode.DIH },
    },
    {
      code: StopCode.DIH,
      up: { platforms: 3, nextStop: StopCode.KAT },
      down: { platforms: 4, nextStop: StopCode.HIK },
    },
    {
      code: StopCode.HIK,
      up: { platforms: 1, nextStop: StopCode.DIH },
      down: { platforms: 2, nextStop: StopCode.TAW },
    },
    {
      code: StopCode.TAW,
      up: { platforms: 1, nextStop: StopCode.HIK },
      down: { platforms: 2, nextStop: StopCode.CKT },
    },
    {
      code: StopCode.CKT,
      up: { platforms: 1, nextStop: StopCode.TAW },
      down: { platforms: 2, nextStop: StopCode.STW },
    },
    {
      code: StopCode.STW,
      up: { platforms: 1, nextStop: StopCode.CKT },
      down: { platforms: 2, nextStop: StopCode.CIO },
    },
    {
      code: StopCode.CIO,
      up: { platforms: 1, nextStop: StopCode.STW },
      down: { platforms: 2, nextStop: StopCode.SHM },
    },
    {
      code: StopCode.SHM,
      up: { platforms: 1, nextStop: StopCode.CIO },
      down: { platforms: 2, nextStop: StopCode.TSH },
    },
    {
      code: StopCode.TSH,
      up: { platforms: 1, nextStop: StopCode.SHM },
      down: { platforms: 2, nextStop: StopCode.HEO },
    },
    {
      code: StopCode.HEO,
      up: { platforms: 1, nextStop: StopCode.TSH },
      down: { platforms: 2, nextStop: StopCode.MOS },
    },
    {
      code: StopCode.MOS,
      up: { platforms: 1, nextStop: StopCode.HEO },
      down: { platforms: 2, nextStop: StopCode.WKS },
    },
    {
      code: StopCode.WKS,
      up: { platforms: [1, 2], nextStop: StopCode.MOS },
      down: { platforms: [1, 2], nextStop: null },
    },
    // down
  ],
}

export const EAL: Line = {
  code: LineCode.EAL,
  nameEn: 'East Rail Line',
  nameZh: '東鐵線',
  color: '#53b7e8',
  stops: [
    // up
    {
      code: StopCode.LMC,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.SHS },
    },
    {
      code: StopCode.LOW,
      up: { platforms: [2, 3], nextStop: null },
      down: { platforms: [1, 4], nextStop: StopCode.SHS },
    },
    {
      code: StopCode.SHS,
      up: { platforms: 1, nextStop: StopCode.LOW },
      down: { platforms: 2, nextStop: StopCode.FAN },
    },
    {
      code: StopCode.FAN,
      up: { platforms: 1, nextStop: StopCode.SHS },
      down: { platforms: 2, nextStop: StopCode.TWO },
    },
    {
      code: StopCode.TWO,
      up: { platforms: 1, nextStop: StopCode.FAN },
      down: { platforms: 2, nextStop: StopCode.TAP },
    },
    {
      code: StopCode.TAP,
      up: { platforms: [1, 2], nextStop: StopCode.TWO },
      down: { platforms: [3, 4], nextStop: StopCode.UNI },
    },
    {
      code: StopCode.UNI,
      up: { platforms: 1, nextStop: StopCode.TAP },
      down: { platforms: 2, nextStop: [StopCode.FOT, StopCode.RAC] },
    },
    {
      code: StopCode.RAC,
      up: { platforms: [1, 2], nextStop: StopCode.UNI },
      down: { platforms: [1, 2], nextStop: StopCode.SHT },
    },
    {
      code: StopCode.FOT,
      up: { platforms: [1, 2], nextStop: StopCode.UNI },
      down: { platforms: [3, 4], nextStop: StopCode.SHT },
    },
    {
      code: StopCode.SHT,
      up: { platforms: [1, 2], nextStop: [StopCode.FOT, StopCode.RAC] },
      down: { platforms: [3, 4], nextStop: StopCode.TAW },
    },
    {
      code: StopCode.TAW,
      up: { platforms: 1, nextStop: StopCode.SHT },
      down: { platforms: 2, nextStop: StopCode.KOT },
    },
    {
      code: StopCode.KOT,
      up: { platforms: 1, nextStop: StopCode.TAW },
      down: { platforms: 2, nextStop: StopCode.MKK },
    },
    {
      code: StopCode.MKK,
      up: { platforms: [1, 2], nextStop: StopCode.KOT },
      down: { platforms: 3, nextStop: StopCode.HUH },
    },
    {
      code: StopCode.HUH,
      up: { platforms: 1, nextStop: StopCode.MKK },
      down: { platforms: 4, nextStop: StopCode.EXC },
    },
    {
      code: StopCode.EXC,
      up: { platforms: 1, nextStop: StopCode.HUH },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      code: StopCode.ADM,
      up: { platforms: 7, nextStop: StopCode.EXC },
      down: { platforms: 8, nextStop: null },
    },
    // down
  ],
}

export const TWL: Line = {
  code: LineCode.TWL,
  nameEn: 'Tsuen Wan Line',
  nameZh: '荃灣綫',
  color: '#E2231A',
  stops: [
    // up
    {
      code: StopCode.TSW,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 2, nextStop: StopCode.TWH },
    },
    {
      code: StopCode.TWH,
      up: { platforms: 1, nextStop: StopCode.TSW },
      down: { platforms: 2, nextStop: StopCode.KWH },
    },
    {
      code: StopCode.KWH,
      up: { platforms: 1, nextStop: StopCode.TWH },
      down: { platforms: 2, nextStop: StopCode.KWF },
    },
    {
      code: StopCode.KWF,
      up: { platforms: 1, nextStop: StopCode.KWH },
      down: { platforms: 2, nextStop: StopCode.LAK },
    },
    {
      code: StopCode.LAK,
      up: { platforms: 1, nextStop: StopCode.KWF },
      down: { platforms: 2, nextStop: StopCode.MEF },
    },
    {
      code: StopCode.MEF,
      up: { platforms: 1, nextStop: StopCode.LAK },
      down: { platforms: 2, nextStop: StopCode.LCK },
    },
    {
      code: StopCode.LCK,
      up: { platforms: 1, nextStop: StopCode.MEF },
      down: { platforms: 2, nextStop: StopCode.CSW },
    },
    {
      code: StopCode.CSW,
      up: { platforms: 1, nextStop: StopCode.LCK },
      down: { platforms: 2, nextStop: StopCode.SSP },
    },
    {
      code: StopCode.SSP,
      up: { platforms: 1, nextStop: StopCode.CSW },
      down: { platforms: 2, nextStop: StopCode.PRE },
    },
    {
      code: StopCode.PRE,
      up: { platforms: 1, nextStop: StopCode.SSP },
      down: { platforms: 4, nextStop: StopCode.MOK },
    },
    {
      code: StopCode.MOK,
      up: { platforms: 1, nextStop: StopCode.PRE },
      down: { platforms: 2, nextStop: StopCode.YMT },
    },
    {
      code: StopCode.YMT,
      up: { platforms: 1, nextStop: StopCode.MOK },
      down: { platforms: 2, nextStop: StopCode.JOR },
    },
    {
      code: StopCode.JOR,
      up: { platforms: 1, nextStop: StopCode.YMT },
      down: { platforms: 2, nextStop: StopCode.TST },
    },
    {
      code: StopCode.TST,
      up: { platforms: 1, nextStop: StopCode.JOR },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      code: StopCode.ADM,
      up: { platforms: 1, nextStop: StopCode.TST },
      down: { platforms: 4, nextStop: StopCode.CEN },
    },
    {
      code: StopCode.CEN,
      up: { platforms: [1, 2], nextStop: StopCode.ADM },
      down: { platforms: [1, 2], nextStop: null },
    },
    // down
  ],
}

export const TCL: Line = {
  code: LineCode.TCL,
  nameEn: 'Tung Chung Line',
  nameZh: '東涌綫',
  color: '#fe7f1d',
  stops: [
    // up
    {
      code: StopCode.TUC,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.SUN },
    },
    {
      code: StopCode.SUN,
      up: { platforms: 1, nextStop: StopCode.TUC },
      down: { platforms: 2, nextStop: StopCode.TSY },
    },
    {
      code: StopCode.TSY,
      up: { platforms: 3, nextStop: StopCode.SUN },
      down: { platforms: 4, nextStop: StopCode.LAK },
    },
    {
      code: StopCode.LAK,
      up: { platforms: 3, nextStop: StopCode.TSY },
      down: { platforms: 4, nextStop: StopCode.NAC },
    },
    {
      code: StopCode.NAC,
      up: { platforms: 3, nextStop: StopCode.LAK },
      down: { platforms: 4, nextStop: StopCode.OLY },
    },
    {
      code: StopCode.OLY,
      up: { platforms: 1, nextStop: StopCode.NAC },
      down: { platforms: 2, nextStop: StopCode.KOW },
    },
    {
      code: StopCode.KOW,
      up: { platforms: 3, nextStop: StopCode.OLY },
      down: { platforms: 4, nextStop: StopCode.HOK },
    },
    {
      code: StopCode.HOK,
      up: { platforms: [3, 4], nextStop: StopCode.KOW },
      down: { platforms: [3, 4], nextStop: null },
    },
    // down
  ],
}

export const TKL: Line = {
  code: LineCode.TKL,
  nameEn: 'Tseung Kwan O Line',
  nameZh: '將軍澳綫',
  color: '#6b208b',
  stops: [
    // up
    {
      code: StopCode.LHP,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.TKO },
    },
    {
      code: StopCode.POA,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 1, nextStop: StopCode.HAH },
    },
    {
      code: StopCode.HAH,
      up: { platforms: 1, nextStop: StopCode.POA },
      down: { platforms: 2, nextStop: StopCode.TKO },
    },
    {
      code: StopCode.TKO,
      up: { platforms: 1, nextStop: StopCode.HAH },
      down: { platforms: 2, nextStop: StopCode.TIK },
    },
    {
      code: StopCode.TIK,
      up: { platforms: 3, nextStop: StopCode.TKO },
      down: { platforms: 4, nextStop: StopCode.YAT },
    },
    {
      code: StopCode.YAT,
      up: { platforms: 3, nextStop: StopCode.TIK },
      down: { platforms: 4, nextStop: StopCode.QUB },
    },
    {
      code: StopCode.QUB,
      up: { platforms: 3, nextStop: StopCode.YAT },
      down: { platforms: 4, nextStop: StopCode.NOP },
    },
    {
      code: StopCode.NOP,
      up: { platforms: 3, nextStop: StopCode.QUB },
      down: { platforms: 4, nextStop: null },
    },
    // down
  ],
}

export const AEL: Line = {
  code: LineCode.AEL,
  nameEn: 'Airport Express',
  nameZh: '機場快綫',
  color: '#1c7670',
  stops: [
    // up
    {
      code: StopCode.AWE,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 1, nextStop: StopCode.AIR },
    },
    {
      code: StopCode.AIR,
      up: { platforms: 1, nextStop: StopCode.AWE },
      down: { platforms: 2, nextStop: StopCode.TSY },
    },
    {
      code: StopCode.TSY,
      up: { platforms: 1, nextStop: StopCode.AIR },
      down: { platforms: 2, nextStop: StopCode.KOW },
    },
    {
      code: StopCode.KOW,
      up: { platforms: 1, nextStop: StopCode.TSY },
      down: { platforms: 2, nextStop: StopCode.HOK },
    },
    {
      code: StopCode.HOK,
      up: { platforms: 1, nextStop: StopCode.KOW },
      down: { platforms: 1, nextStop: null },
    },
    // down
  ],
}

export const KTL: Line = {
  code: LineCode.KTL,
  nameEn: 'Kwun Tong Line',
  nameZh: '觀塘綫',
  color: '#1a9431',
  stops: [
    // up
    {
      code: StopCode.TIK,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 2, nextStop: StopCode.YAT },
    },
    {
      code: StopCode.YAT,
      up: { platforms: 1, nextStop: StopCode.TIK },
      down: { platforms: 2, nextStop: StopCode.LAT },
    },
    {
      code: StopCode.LAT,
      up: { platforms: 1, nextStop: StopCode.YAT },
      down: { platforms: 2, nextStop: StopCode.KWT },
    },
    {
      code: StopCode.KWT,
      up: { platforms: 1, nextStop: StopCode.LAT },
      down: { platforms: 2, nextStop: StopCode.NTK },
    },
    {
      code: StopCode.NTK,
      up: { platforms: 1, nextStop: StopCode.KWT },
      down: { platforms: 2, nextStop: StopCode.KOB },
    },
    {
      code: StopCode.KOB,
      up: { platforms: 1, nextStop: StopCode.NTK },
      down: { platforms: 2, nextStop: StopCode.CHH },
    },
    {
      code: StopCode.CHH,
      up: { platforms: [1, 2], nextStop: StopCode.KOB },
      down: { platforms: [3, 4], nextStop: StopCode.DIH },
    },
    {
      code: StopCode.DIH,
      up: { platforms: 1, nextStop: StopCode.CHH },
      down: { platforms: 2, nextStop: StopCode.WTS },
    },
    {
      code: StopCode.WTS,
      up: { platforms: 1, nextStop: StopCode.DIH },
      down: { platforms: 2, nextStop: StopCode.LOF },
    },
    {
      code: StopCode.LOF,
      up: { platforms: 1, nextStop: StopCode.WTS },
      down: { platforms: 2, nextStop: StopCode.KOT },
    },
    {
      code: StopCode.KOT,
      up: { platforms: 1, nextStop: StopCode.LOF },
      down: { platforms: 2, nextStop: StopCode.SKM },
    },
    {
      code: StopCode.SKM,
      up: { platforms: 1, nextStop: StopCode.KOT },
      down: { platforms: 2, nextStop: StopCode.PRE },
    },
    {
      code: StopCode.PRE,
      up: { platforms: 3, nextStop: StopCode.SKM },
      down: { platforms: 2, nextStop: StopCode.MOK },
    },
    {
      code: StopCode.MOK,
      up: { platforms: 3, nextStop: StopCode.PRE },
      down: { platforms: 4, nextStop: StopCode.YMT },
    },
    {
      code: StopCode.YMT,
      up: { platforms: 1, nextStop: StopCode.MOK },
      down: { platforms: 2, nextStop: StopCode.HOM },
    },
    {
      code: StopCode.HOM,
      up: { platforms: 1, nextStop: StopCode.YMT },
      down: { platforms: 2, nextStop: StopCode.WHA },
    },
    {
      code: StopCode.WHA,
      up: { platforms: 1, nextStop: StopCode.HOM },
      down: { platforms: 1, nextStop: null },
    },
    // down
  ],
}

export const DRL: Line = {
  code: LineCode.DRL,
  nameEn: 'Disneyland Resort Line',
  nameZh: '迪士尼綫',
  color: '#f550a6',
  stops: [
    // up
    {
      code: StopCode.SUN,
      up: { platforms: 3, nextStop: null },
      down: { platforms: 3, nextStop: StopCode.DIS },
    },
    {
      code: StopCode.DIS,
      up: { platforms: 1, nextStop: StopCode.SUN },
      down: { platforms: 1, nextStop: null },
    },
    // down
  ],
}

export const ISL: Line = {
  code: LineCode.ISL,
  nameEn: 'Island Line',
  nameZh: '港島綫',
  color: '#0860a8',
  stops: [
    // up
    {
      code: StopCode.CHW,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.HFC },
    },
    {
      code: StopCode.HFC,
      up: { platforms: 1, nextStop: StopCode.CHW },
      down: { platforms: 2, nextStop: StopCode.SKW },
    },
    {
      code: StopCode.SKW,
      up: { platforms: 1, nextStop: StopCode.HFC },
      down: { platforms: 2, nextStop: StopCode.SWH },
    },
    {
      code: StopCode.SWH,
      up: { platforms: 1, nextStop: StopCode.SKW },
      down: { platforms: 2, nextStop: StopCode.TAK },
    },
    {
      code: StopCode.TAK,
      up: { platforms: 1, nextStop: StopCode.SWH },
      down: { platforms: 2, nextStop: StopCode.QUB },
    },
    {
      code: StopCode.QUB,
      up: { platforms: 1, nextStop: StopCode.TAK },
      down: { platforms: 2, nextStop: StopCode.NOP },
    },
    {
      code: StopCode.NOP,
      up: { platforms: 1, nextStop: StopCode.QUB },
      down: { platforms: 2, nextStop: StopCode.FOH },
    },
    {
      code: StopCode.FOH,
      up: { platforms: 1, nextStop: StopCode.NOP },
      down: { platforms: 2, nextStop: StopCode.TIH },
    },
    {
      code: StopCode.TIH,
      up: { platforms: 1, nextStop: StopCode.FOH },
      down: { platforms: 2, nextStop: StopCode.CAB },
    },
    {
      code: StopCode.CAB,
      up: { platforms: 1, nextStop: StopCode.TIH },
      down: { platforms: 2, nextStop: StopCode.WAC },
    },
    {
      code: StopCode.WAC,
      up: { platforms: 1, nextStop: StopCode.CAB },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      code: StopCode.ADM,
      up: { platforms: 3, nextStop: StopCode.WAC },
      down: { platforms: 2, nextStop: StopCode.CEN },
    },
    {
      code: StopCode.CEN,
      up: { platforms: 3, nextStop: StopCode.ADM },
      down: { platforms: 4, nextStop: StopCode.SHW },
    },
    {
      code: StopCode.SHW,
      up: { platforms: 1, nextStop: StopCode.CEN },
      down: { platforms: 2, nextStop: StopCode.SYP },
    },
    {
      code: StopCode.SYP,
      up: { platforms: 1, nextStop: StopCode.SHW },
      down: { platforms: 2, nextStop: StopCode.HKU },
    },
    {
      code: StopCode.HKU,
      up: { platforms: 1, nextStop: StopCode.SYP },
      down: { platforms: 2, nextStop: StopCode.KET },
    },
    {
      code: StopCode.KET,
      up: { platforms: 1, nextStop: StopCode.HKU },
      down: { platforms: 2, nextStop: null },
    },
    // down
  ],
}

export const SIL: Line = {
  code: LineCode.SIL,
  nameEn: 'South Island Line',
  nameZh: '南港島綫',
  color: '#b5bd00',
  stops: [
    // up
    {
      code: StopCode.SOH,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.LET },
    },
    {
      code: StopCode.LET,
      up: { platforms: 1, nextStop: StopCode.SOH },
      down: { platforms: 2, nextStop: StopCode.WCH },
    },
    {
      code: StopCode.WCH,
      up: { platforms: 1, nextStop: StopCode.LET },
      down: { platforms: 2, nextStop: StopCode.OCP },
    },
    {
      code: StopCode.OCP,
      up: { platforms: 1, nextStop: StopCode.WCH },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      code: StopCode.ADM,
      up: { platforms: 1, nextStop: StopCode.OCP },
      down: { platforms: [5, 6], nextStop: null },
    },
    // down
  ],
}

export const lineMap: { [key in LineCode]: Line } = {
  TML,
  EAL,
  TWL,
  TCL,
  TKL,
  AEL,
  KTL,
  DRL,
  ISL,
  SIL,
}

export const lines = Object.values(lineMap)
