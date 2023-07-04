import { LineCode } from './lineCode.js'
import { StopCode } from './stopCode.js'

type NonEmptyArray<T> = [T, ...T[]]

export type LineStop = {
  stop: StopCode
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
  line: LineCode
  nameEn: string
  nameZh: string
  color: string
  stops: LineStop[]
}

export const TML: Line = {
  line: LineCode.TML,
  nameEn: 'Tuen Ma Line',
  nameZh: '屯碼綫',
  color: '#9a3b26',
  stops: [
    // up
    {
      stop: StopCode.TUM,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.SIH },
    },
    {
      stop: StopCode.SIH,
      up: { platforms: 1, nextStop: StopCode.TUM },
      down: { platforms: 2, nextStop: StopCode.TIS },
    },
    {
      stop: StopCode.TIS,
      up: { platforms: 1, nextStop: StopCode.SIH },
      down: { platforms: 2, nextStop: StopCode.LOP },
    },
    {
      stop: StopCode.LOP,
      up: { platforms: 1, nextStop: StopCode.TIS },
      down: { platforms: 2, nextStop: StopCode.YUL },
    },
    {
      stop: StopCode.YUL,
      up: { platforms: 1, nextStop: StopCode.LOP },
      down: { platforms: 2, nextStop: StopCode.KSR },
    },
    {
      stop: StopCode.KSR,
      up: { platforms: 1, nextStop: StopCode.YUL },
      down: { platforms: 2, nextStop: StopCode.TWW },
    },
    {
      stop: StopCode.TWW,
      up: { platforms: 1, nextStop: StopCode.KSR },
      down: { platforms: 2, nextStop: StopCode.MEF },
    },
    {
      stop: StopCode.MEF,
      up: { platforms: 1, nextStop: StopCode.TWW },
      down: { platforms: 2, nextStop: StopCode.NAC },
    },
    {
      stop: StopCode.NAC,
      up: { platforms: 1, nextStop: StopCode.MEF },
      down: { platforms: 2, nextStop: StopCode.AUS },
    },
    {
      stop: StopCode.AUS,
      up: { platforms: 1, nextStop: StopCode.NAC },
      down: { platforms: 2, nextStop: StopCode.ETS },
    },
    {
      stop: StopCode.ETS,
      up: { platforms: 1, nextStop: StopCode.AUS },
      down: { platforms: 2, nextStop: StopCode.HUH },
    },
    {
      stop: StopCode.HUH,
      up: { platforms: 3, nextStop: StopCode.ETS },
      down: { platforms: 2, nextStop: StopCode.HOM },
    },
    {
      stop: StopCode.HOM,
      up: { platforms: 3, nextStop: StopCode.HUH },
      down: { platforms: 4, nextStop: StopCode.TKW },
    },
    {
      stop: StopCode.TKW,
      up: { platforms: 1, nextStop: StopCode.HOM },
      down: { platforms: 2, nextStop: StopCode.SUW },
    },
    {
      stop: StopCode.SUW,
      up: { platforms: 1, nextStop: StopCode.TKW },
      down: { platforms: 2, nextStop: StopCode.KAT },
    },
    {
      stop: StopCode.KAT,
      up: { platforms: 1, nextStop: StopCode.SUW },
      down: { platforms: 2, nextStop: StopCode.DIH },
    },
    {
      stop: StopCode.DIH,
      up: { platforms: 3, nextStop: StopCode.KAT },
      down: { platforms: 4, nextStop: StopCode.HIK },
    },
    {
      stop: StopCode.HIK,
      up: { platforms: 1, nextStop: StopCode.DIH },
      down: { platforms: 2, nextStop: StopCode.TAW },
    },
    {
      stop: StopCode.TAW,
      up: { platforms: 1, nextStop: StopCode.HIK },
      down: { platforms: 2, nextStop: StopCode.CKT },
    },
    {
      stop: StopCode.CKT,
      up: { platforms: 1, nextStop: StopCode.TAW },
      down: { platforms: 2, nextStop: StopCode.STW },
    },
    {
      stop: StopCode.STW,
      up: { platforms: 1, nextStop: StopCode.CKT },
      down: { platforms: 2, nextStop: StopCode.CIO },
    },
    {
      stop: StopCode.CIO,
      up: { platforms: 1, nextStop: StopCode.STW },
      down: { platforms: 2, nextStop: StopCode.SHM },
    },
    {
      stop: StopCode.SHM,
      up: { platforms: 1, nextStop: StopCode.CIO },
      down: { platforms: 2, nextStop: StopCode.TSH },
    },
    {
      stop: StopCode.TSH,
      up: { platforms: 1, nextStop: StopCode.SHM },
      down: { platforms: 2, nextStop: StopCode.HEO },
    },
    {
      stop: StopCode.HEO,
      up: { platforms: 1, nextStop: StopCode.TSH },
      down: { platforms: 2, nextStop: StopCode.MOS },
    },
    {
      stop: StopCode.MOS,
      up: { platforms: 1, nextStop: StopCode.HEO },
      down: { platforms: 2, nextStop: StopCode.WKS },
    },
    {
      stop: StopCode.WKS,
      up: { platforms: [1, 2], nextStop: StopCode.MOS },
      down: { platforms: [1, 2], nextStop: null },
    },
    // down
  ],
}

export const EAL: Line = {
  line: LineCode.EAL,
  nameEn: 'East Rail Line',
  nameZh: '東鐵線',
  color: '#53b7e8',
  stops: [
    // up
    {
      stop: StopCode.LMC,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.SHS },
    },
    {
      stop: StopCode.LOW,
      up: { platforms: [2, 3], nextStop: null },
      down: { platforms: [1, 4], nextStop: StopCode.SHS },
    },
    {
      stop: StopCode.SHS,
      up: { platforms: 1, nextStop: StopCode.LOW },
      down: { platforms: 2, nextStop: StopCode.FAN },
    },
    {
      stop: StopCode.FAN,
      up: { platforms: 1, nextStop: StopCode.SHS },
      down: { platforms: 2, nextStop: StopCode.TWO },
    },
    {
      stop: StopCode.TWO,
      up: { platforms: 1, nextStop: StopCode.FAN },
      down: { platforms: 2, nextStop: StopCode.TAP },
    },
    {
      stop: StopCode.TAP,
      up: { platforms: [1, 2], nextStop: StopCode.TWO },
      down: { platforms: [3, 4], nextStop: StopCode.UNI },
    },
    {
      stop: StopCode.UNI,
      up: { platforms: 1, nextStop: StopCode.TAP },
      down: { platforms: 2, nextStop: [StopCode.FOT, StopCode.RAC] },
    },
    {
      stop: StopCode.RAC,
      up: { platforms: [1, 2], nextStop: StopCode.UNI },
      down: { platforms: [1, 2], nextStop: StopCode.SHT },
    },
    {
      stop: StopCode.FOT,
      up: { platforms: [1, 2], nextStop: StopCode.UNI },
      down: { platforms: [3, 4], nextStop: StopCode.SHT },
    },
    {
      stop: StopCode.SHT,
      up: { platforms: [1, 2], nextStop: [StopCode.FOT, StopCode.RAC] },
      down: { platforms: [3, 4], nextStop: StopCode.TAW },
    },
    {
      stop: StopCode.TAW,
      up: { platforms: 1, nextStop: StopCode.SHT },
      down: { platforms: 2, nextStop: StopCode.KOT },
    },
    {
      stop: StopCode.KOT,
      up: { platforms: 1, nextStop: StopCode.TAW },
      down: { platforms: 2, nextStop: StopCode.MKK },
    },
    {
      stop: StopCode.MKK,
      up: { platforms: [1, 2], nextStop: StopCode.KOT },
      down: { platforms: 3, nextStop: StopCode.HUH },
    },
    {
      stop: StopCode.HUH,
      up: { platforms: 1, nextStop: StopCode.MKK },
      down: { platforms: 4, nextStop: StopCode.EXC },
    },
    {
      stop: StopCode.EXC,
      up: { platforms: 1, nextStop: StopCode.HUH },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: 7, nextStop: StopCode.EXC },
      down: { platforms: 8, nextStop: null },
    },
    // down
  ],
}

export const TWL: Line = {
  line: LineCode.TWL,
  nameEn: 'Tsuen Wan Line',
  nameZh: '荃灣綫',
  color: '#E2231A',
  stops: [
    // up
    {
      stop: StopCode.TSW,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 2, nextStop: StopCode.TWH },
    },
    {
      stop: StopCode.TWH,
      up: { platforms: 1, nextStop: StopCode.TSW },
      down: { platforms: 2, nextStop: StopCode.KWH },
    },
    {
      stop: StopCode.KWH,
      up: { platforms: 1, nextStop: StopCode.TWH },
      down: { platforms: 2, nextStop: StopCode.KWF },
    },
    {
      stop: StopCode.KWF,
      up: { platforms: 1, nextStop: StopCode.KWH },
      down: { platforms: 2, nextStop: StopCode.LAK },
    },
    {
      stop: StopCode.LAK,
      up: { platforms: 1, nextStop: StopCode.KWF },
      down: { platforms: 2, nextStop: StopCode.MEF },
    },
    {
      stop: StopCode.MEF,
      up: { platforms: 1, nextStop: StopCode.LAK },
      down: { platforms: 2, nextStop: StopCode.LCK },
    },
    {
      stop: StopCode.LCK,
      up: { platforms: 1, nextStop: StopCode.MEF },
      down: { platforms: 2, nextStop: StopCode.CSW },
    },
    {
      stop: StopCode.CSW,
      up: { platforms: 1, nextStop: StopCode.LCK },
      down: { platforms: 2, nextStop: StopCode.SSP },
    },
    {
      stop: StopCode.SSP,
      up: { platforms: 1, nextStop: StopCode.CSW },
      down: { platforms: 2, nextStop: StopCode.PRE },
    },
    {
      stop: StopCode.PRE,
      up: { platforms: 1, nextStop: StopCode.SSP },
      down: { platforms: 4, nextStop: StopCode.MOK },
    },
    {
      stop: StopCode.MOK,
      up: { platforms: 1, nextStop: StopCode.PRE },
      down: { platforms: 2, nextStop: StopCode.YMT },
    },
    {
      stop: StopCode.YMT,
      up: { platforms: 1, nextStop: StopCode.MOK },
      down: { platforms: 2, nextStop: StopCode.JOR },
    },
    {
      stop: StopCode.JOR,
      up: { platforms: 1, nextStop: StopCode.YMT },
      down: { platforms: 2, nextStop: StopCode.TST },
    },
    {
      stop: StopCode.TST,
      up: { platforms: 1, nextStop: StopCode.JOR },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: 1, nextStop: StopCode.TST },
      down: { platforms: 4, nextStop: StopCode.CEN },
    },
    {
      stop: StopCode.CEN,
      up: { platforms: [1, 2], nextStop: StopCode.ADM },
      down: { platforms: [1, 2], nextStop: null },
    },
    // down
  ],
}

export const TCL: Line = {
  line: LineCode.TCL,
  nameEn: 'Tung Chung Line',
  nameZh: '東涌綫',
  color: '#fe7f1d',
  stops: [
    // up
    {
      stop: StopCode.TUC,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.SUN },
    },
    {
      stop: StopCode.SUN,
      up: { platforms: 1, nextStop: StopCode.TUC },
      down: { platforms: 2, nextStop: StopCode.TSY },
    },
    {
      stop: StopCode.TSY,
      up: { platforms: 3, nextStop: StopCode.SUN },
      down: { platforms: 4, nextStop: StopCode.LAK },
    },
    {
      stop: StopCode.LAK,
      up: { platforms: 3, nextStop: StopCode.TSY },
      down: { platforms: 4, nextStop: StopCode.NAC },
    },
    {
      stop: StopCode.NAC,
      up: { platforms: 3, nextStop: StopCode.LAK },
      down: { platforms: 4, nextStop: StopCode.OLY },
    },
    {
      stop: StopCode.OLY,
      up: { platforms: 1, nextStop: StopCode.NAC },
      down: { platforms: 2, nextStop: StopCode.KOW },
    },
    {
      stop: StopCode.KOW,
      up: { platforms: 3, nextStop: StopCode.OLY },
      down: { platforms: 4, nextStop: StopCode.HOK },
    },
    {
      stop: StopCode.HOK,
      up: { platforms: [3, 4], nextStop: StopCode.KOW },
      down: { platforms: [3, 4], nextStop: null },
    },
    // down
  ],
}

export const TKL: Line = {
  line: LineCode.TKL,
  nameEn: 'Tseung Kwan O Line',
  nameZh: '將軍澳綫',
  color: '#6b208b',
  stops: [
    // up
    {
      stop: StopCode.LHP,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.TKO },
    },
    {
      stop: StopCode.POA,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 1, nextStop: StopCode.HAH },
    },
    {
      stop: StopCode.HAH,
      up: { platforms: 1, nextStop: StopCode.POA },
      down: { platforms: 2, nextStop: StopCode.TKO },
    },
    {
      stop: StopCode.TKO,
      up: { platforms: 1, nextStop: StopCode.HAH },
      down: { platforms: 2, nextStop: StopCode.TIK },
    },
    {
      stop: StopCode.TIK,
      up: { platforms: 3, nextStop: StopCode.TKO },
      down: { platforms: 4, nextStop: StopCode.YAT },
    },
    {
      stop: StopCode.YAT,
      up: { platforms: 3, nextStop: StopCode.TIK },
      down: { platforms: 4, nextStop: StopCode.QUB },
    },
    {
      stop: StopCode.QUB,
      up: { platforms: 3, nextStop: StopCode.YAT },
      down: { platforms: 4, nextStop: StopCode.NOP },
    },
    {
      stop: StopCode.NOP,
      up: { platforms: 3, nextStop: StopCode.QUB },
      down: { platforms: 4, nextStop: null },
    },
    // down
  ],
}

export const AEL: Line = {
  line: LineCode.AEL,
  nameEn: 'Airport Express',
  nameZh: '機場快綫',
  color: '#1c7670',
  stops: [
    // up
    {
      stop: StopCode.AWE,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 1, nextStop: StopCode.AIR },
    },
    {
      stop: StopCode.AIR,
      up: { platforms: 1, nextStop: StopCode.AWE },
      down: { platforms: 2, nextStop: StopCode.TSY },
    },
    {
      stop: StopCode.TSY,
      up: { platforms: 1, nextStop: StopCode.AIR },
      down: { platforms: 2, nextStop: StopCode.KOW },
    },
    {
      stop: StopCode.KOW,
      up: { platforms: 1, nextStop: StopCode.TSY },
      down: { platforms: 2, nextStop: StopCode.HOK },
    },
    {
      stop: StopCode.HOK,
      up: { platforms: 1, nextStop: StopCode.KOW },
      down: { platforms: 1, nextStop: null },
    },
    // down
  ],
}

export const KTL: Line = {
  line: LineCode.KTL,
  nameEn: 'Kwun Tong Line',
  nameZh: '觀塘綫',
  color: '#1a9431',
  stops: [
    // up
    {
      stop: StopCode.TIK,
      up: { platforms: 1, nextStop: null },
      down: { platforms: 2, nextStop: StopCode.YAT },
    },
    {
      stop: StopCode.YAT,
      up: { platforms: 1, nextStop: StopCode.TIK },
      down: { platforms: 2, nextStop: StopCode.LAT },
    },
    {
      stop: StopCode.LAT,
      up: { platforms: 1, nextStop: StopCode.YAT },
      down: { platforms: 2, nextStop: StopCode.KWT },
    },
    {
      stop: StopCode.KWT,
      up: { platforms: 1, nextStop: StopCode.LAT },
      down: { platforms: 2, nextStop: StopCode.NTK },
    },
    {
      stop: StopCode.NTK,
      up: { platforms: 1, nextStop: StopCode.KWT },
      down: { platforms: 2, nextStop: StopCode.KOB },
    },
    {
      stop: StopCode.KOB,
      up: { platforms: 1, nextStop: StopCode.NTK },
      down: { platforms: 2, nextStop: StopCode.CHH },
    },
    {
      stop: StopCode.CHH,
      up: { platforms: [1, 2], nextStop: StopCode.KOB },
      down: { platforms: [3, 4], nextStop: StopCode.DIH },
    },
    {
      stop: StopCode.DIH,
      up: { platforms: 1, nextStop: StopCode.CHH },
      down: { platforms: 2, nextStop: StopCode.WTS },
    },
    {
      stop: StopCode.WTS,
      up: { platforms: 1, nextStop: StopCode.DIH },
      down: { platforms: 2, nextStop: StopCode.LOF },
    },
    {
      stop: StopCode.LOF,
      up: { platforms: 1, nextStop: StopCode.WTS },
      down: { platforms: 2, nextStop: StopCode.KOT },
    },
    {
      stop: StopCode.KOT,
      up: { platforms: 1, nextStop: StopCode.LOF },
      down: { platforms: 2, nextStop: StopCode.SKM },
    },
    {
      stop: StopCode.SKM,
      up: { platforms: 1, nextStop: StopCode.KOT },
      down: { platforms: 2, nextStop: StopCode.PRE },
    },
    {
      stop: StopCode.PRE,
      up: { platforms: 3, nextStop: StopCode.SKM },
      down: { platforms: 2, nextStop: StopCode.MOK },
    },
    {
      stop: StopCode.MOK,
      up: { platforms: 3, nextStop: StopCode.PRE },
      down: { platforms: 4, nextStop: StopCode.YMT },
    },
    {
      stop: StopCode.YMT,
      up: { platforms: 1, nextStop: StopCode.MOK },
      down: { platforms: 2, nextStop: StopCode.HOM },
    },
    {
      stop: StopCode.HOM,
      up: { platforms: 1, nextStop: StopCode.YMT },
      down: { platforms: 2, nextStop: StopCode.WHA },
    },
    {
      stop: StopCode.WHA,
      up: { platforms: 1, nextStop: StopCode.HOM },
      down: { platforms: 1, nextStop: null },
    },
    // down
  ],
}

export const DRL: Line = {
  line: LineCode.DRL,
  nameEn: 'Disneyland Resort Line',
  nameZh: '迪士尼綫',
  color: '#f550a6',
  stops: [
    // up
    {
      stop: StopCode.SUN,
      up: { platforms: 3, nextStop: null },
      down: { platforms: 3, nextStop: StopCode.DIS },
    },
    {
      stop: StopCode.DIS,
      up: { platforms: 1, nextStop: StopCode.SUN },
      down: { platforms: 1, nextStop: null },
    },
    // down
  ],
}

export const ISL: Line = {
  line: LineCode.ISL,
  nameEn: 'Island Line',
  nameZh: '港島綫',
  color: '#0860a8',
  stops: [
    // up
    {
      stop: StopCode.CHW,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.HFC },
    },
    {
      stop: StopCode.HFC,
      up: { platforms: 1, nextStop: StopCode.CHW },
      down: { platforms: 2, nextStop: StopCode.SKW },
    },
    {
      stop: StopCode.SKW,
      up: { platforms: 1, nextStop: StopCode.HFC },
      down: { platforms: 2, nextStop: StopCode.SWH },
    },
    {
      stop: StopCode.SWH,
      up: { platforms: 1, nextStop: StopCode.SKW },
      down: { platforms: 2, nextStop: StopCode.TAK },
    },
    {
      stop: StopCode.TAK,
      up: { platforms: 1, nextStop: StopCode.SWH },
      down: { platforms: 2, nextStop: StopCode.QUB },
    },
    {
      stop: StopCode.QUB,
      up: { platforms: 1, nextStop: StopCode.TAK },
      down: { platforms: 2, nextStop: StopCode.NOP },
    },
    {
      stop: StopCode.NOP,
      up: { platforms: 1, nextStop: StopCode.QUB },
      down: { platforms: 2, nextStop: StopCode.FOH },
    },
    {
      stop: StopCode.FOH,
      up: { platforms: 1, nextStop: StopCode.NOP },
      down: { platforms: 2, nextStop: StopCode.TIH },
    },
    {
      stop: StopCode.TIH,
      up: { platforms: 1, nextStop: StopCode.FOH },
      down: { platforms: 2, nextStop: StopCode.CAB },
    },
    {
      stop: StopCode.CAB,
      up: { platforms: 1, nextStop: StopCode.TIH },
      down: { platforms: 2, nextStop: StopCode.WAC },
    },
    {
      stop: StopCode.WAC,
      up: { platforms: 1, nextStop: StopCode.CAB },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: 3, nextStop: StopCode.WAC },
      down: { platforms: 2, nextStop: StopCode.CEN },
    },
    {
      stop: StopCode.CEN,
      up: { platforms: 3, nextStop: StopCode.ADM },
      down: { platforms: 4, nextStop: StopCode.SHW },
    },
    {
      stop: StopCode.SHW,
      up: { platforms: 1, nextStop: StopCode.CEN },
      down: { platforms: 2, nextStop: StopCode.SYP },
    },
    {
      stop: StopCode.SYP,
      up: { platforms: 1, nextStop: StopCode.SHW },
      down: { platforms: 2, nextStop: StopCode.HKU },
    },
    {
      stop: StopCode.HKU,
      up: { platforms: 1, nextStop: StopCode.SYP },
      down: { platforms: 2, nextStop: StopCode.KET },
    },
    {
      stop: StopCode.KET,
      up: { platforms: 1, nextStop: StopCode.HKU },
      down: { platforms: 2, nextStop: null },
    },
    // down
  ],
}

export const SIL: Line = {
  line: LineCode.SIL,
  nameEn: 'South Island Line',
  nameZh: '南港島綫',
  color: '#b5bd00',
  stops: [
    // up
    {
      stop: StopCode.SOH,
      up: { platforms: [1, 2], nextStop: null },
      down: { platforms: [1, 2], nextStop: StopCode.LET },
    },
    {
      stop: StopCode.LET,
      up: { platforms: 1, nextStop: StopCode.SOH },
      down: { platforms: 2, nextStop: StopCode.WCH },
    },
    {
      stop: StopCode.WCH,
      up: { platforms: 1, nextStop: StopCode.LET },
      down: { platforms: 2, nextStop: StopCode.OCP },
    },
    {
      stop: StopCode.OCP,
      up: { platforms: 1, nextStop: StopCode.WCH },
      down: { platforms: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
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
